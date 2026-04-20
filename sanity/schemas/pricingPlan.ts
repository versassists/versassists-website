import { defineField, defineType } from "sanity";

export default defineType({
  name: "pricingPlan",
  title: "Pricing Plan",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Plan Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Short description of the plan",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
      description: 'e.g., "$750"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "period",
      title: "Period",
      type: "string",
      description: 'e.g., "50 hrs / $15 per hour"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "highlighted",
      title: "Highlight this plan",
      type: "boolean",
      description: "Mark as 'Most Popular' and apply special styling",
      initialValue: false,
    }),
    defineField({
      name: "cta",
      title: "CTA Button Text",
      type: "string",
      description: "Button text (e.g., 'Book Now')",
      initialValue: "Book Now",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Display order (10, 20, 30...)",
      validation: (Rule) => Rule.required().min(0),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "price",
      highlighted: "highlighted",
    },
    prepare({ title, subtitle, highlighted }) {
      return {
        title: highlighted ? `⭐ ${title}` : title,
        subtitle,
      };
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
