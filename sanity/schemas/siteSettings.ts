import { defineType, defineField } from "sanity";

/**
 * Singleton document type for site-wide settings.
 * Only one document of this type should ever exist.
 */
export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "companyName",
      title: "Company Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Short company tagline shown in hero sections and footer.",
    }),
    defineField({
      name: "email",
      title: "Contact Email",
      type: "string",
      validation: (Rule) =>
        Rule.regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
          name: "email",
          invert: false,
        }).error("Must be a valid email address"),
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "website",
      title: "Website URL",
      type: "url",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      description: "Primary logo used in the header and footer.",
      options: { hotspot: true },
    }),
    defineField({
      name: "calendlyUrl",
      title: "Calendly / Booking URL",
      type: "url",
      description: "Link used by all 'Book a Call' CTAs.",
    }),
    defineField({
      name: "newsletterFormId",
      title: "Newsletter Form ID",
      type: "string",
      description: "GHL form ID used in the footer newsletter signup.",
    }),
    defineField({
      name: "navLinks",
      title: "Navigation Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string", validation: (R) => R.required() },
            { name: "href", type: "string", validation: (R) => R.required() },
            {
              name: "external",
              type: "boolean",
              title: "Opens in new tab?",
              initialValue: false,
            },
          ],
          preview: {
            select: { title: "label", subtitle: "href" },
          },
        },
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string", validation: (R) => R.required() },
            { name: "href", type: "url", validation: (R) => R.required() },
            {
              name: "icon",
              type: "string",
              description: "Icon identifier: instagram | linkedin | facebook | twitter | youtube",
              options: {
                list: ["instagram", "linkedin", "facebook", "twitter", "youtube"],
              },
            },
          ],
          preview: {
            select: { title: "label", subtitle: "href" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
