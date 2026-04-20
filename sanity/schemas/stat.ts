import { defineType, defineField } from "sanity";

export const stat = defineType({
  name: "stat",
  title: "Stat",
  type: "document",
  fields: [
    defineField({
      name: "value",
      title: "Number",
      description: "The numeric value shown in the counter (e.g. 50, 10000).",
      type: "number",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "suffix",
      title: "Suffix",
      description: "Appears after the number (e.g. \"+\", \"%\", \"k\").",
      type: "string",
    }),
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "order",
      title: "Sort Order",
      type: "number",
      initialValue: 100,
    }),
  ],
  preview: {
    select: { title: "label", subtitle: "value" },
    prepare: ({ title, subtitle }) => ({
      title: String(title ?? ""),
      subtitle: subtitle !== undefined ? `Value: ${subtitle}` : undefined,
    }),
  },
  orderings: [
    {
      title: "Sort Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
