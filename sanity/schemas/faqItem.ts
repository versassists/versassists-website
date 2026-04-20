import { defineType, defineField } from "sanity";

export const faqItem = defineType({
  name: "faqItem",
  title: "FAQ Item",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "string",
      validation: (R) => R.required().max(200),
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "text",
      rows: 5,
      validation: (R) => R.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["General", "Pricing", "Getting Started", "Services"],
      },
      initialValue: "General",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "relatedServiceLabel",
      title: "Related Link Label",
      type: "string",
      description: "Optional. Text for a link shown beneath the answer.",
      validation: (R) =>
        R.custom((val, ctx) => {
          const href = (ctx.document as any)?.relatedServiceHref;
          if (!val && href) return "Label is required when a URL is set";
          return true;
        }),
    }),
    defineField({
      name: "relatedServiceHref",
      title: "Related Link URL",
      type: "string",
      description: "Optional. Where the link points (e.g. /services).",
      validation: (R) =>
        R.custom((val, ctx) => {
          const label = (ctx.document as any)?.relatedServiceLabel;
          if (!val && label) return "URL is required when a label is set";
          return true;
        }),
    }),
    defineField({
      name: "order",
      title: "Sort Order",
      type: "number",
      initialValue: 100,
    }),
  ],
  preview: {
    select: {
      title: "question",
      subtitle: "category",
    },
  },
  orderings: [
    {
      title: "Sort Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
