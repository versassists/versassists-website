import type { StructureResolver } from "sanity/structure";
import {
  Cog,
  Rss,
  User,
  Briefcase,
  HelpCircle,
  Quote,
  Users,
  Heart,
  BarChart3,
  DollarSign,
  Zap,
  Layers,
} from "lucide-react";

/**
 * Custom sidebar structure for the Studio.
 * Site Settings is shown as a singleton (no list, opens straight into the document).
 * All other collections use explicit list items so the sidebar stays organized
 * and each type gets a sensible default ordering.
 */
const HANDLED_TYPES = [
  "siteSettings",
  "blogPost",
  "author",
  "service",
  "faqItem",
  "testimonial",
  "teamMember",
  "value",
  "stat",
  "pricingPlan",
  "boostPack",
  "customProject",
];

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .icon(Cog)
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
      S.divider(),

      // ── Blog ──────────────────────────────────────────
      S.listItem()
        .title("Blog Posts")
        .icon(Rss)
        .schemaType("blogPost")
        .child(S.documentTypeList("blogPost").title("Blog Posts")),
      S.listItem()
        .title("Authors")
        .icon(User)
        .schemaType("author")
        .child(S.documentTypeList("author").title("Authors")),
      S.divider(),

      // ── Services ──────────────────────────────────────
      S.listItem()
        .title("Services")
        .icon(Briefcase)
        .schemaType("service")
        .child(
          S.documentTypeList("service")
            .title("Services")
            .defaultOrdering([{ field: "order", direction: "asc" }])
        ),
      S.divider(),

      // ── Marketing & About ────────────────────────────
      S.listItem()
        .title("FAQs")
        .icon(HelpCircle)
        .schemaType("faqItem")
        .child(
          S.documentTypeList("faqItem")
            .title("FAQs")
            .defaultOrdering([{ field: "order", direction: "asc" }])
        ),
      S.listItem()
        .title("Testimonials")
        .icon(Quote)
        .schemaType("testimonial")
        .child(
          S.documentTypeList("testimonial")
            .title("Testimonials")
            .defaultOrdering([{ field: "order", direction: "asc" }])
        ),
      S.listItem()
        .title("Team")
        .icon(Users)
        .schemaType("teamMember")
        .child(
          S.documentTypeList("teamMember")
            .title("Team Members")
            .defaultOrdering([{ field: "order", direction: "asc" }])
        ),
      S.listItem()
        .title("Values")
        .icon(Heart)
        .schemaType("value")
        .child(
          S.documentTypeList("value")
            .title("Values")
            .defaultOrdering([{ field: "order", direction: "asc" }])
        ),
      S.listItem()
        .title("Stats")
        .icon(BarChart3)
        .schemaType("stat")
        .child(
          S.documentTypeList("stat")
            .title("Stats")
            .defaultOrdering([{ field: "order", direction: "asc" }])
        ),
      S.divider(),

      // ── Pricing ──────────────────────────────────────────
      S.listItem()
        .title("Pricing Plans")
        .icon(DollarSign)
        .schemaType("pricingPlan")
        .child(
          S.documentTypeList("pricingPlan")
            .title("Pricing Plans")
            .defaultOrdering([{ field: "order", direction: "asc" }])
        ),
      S.listItem()
        .title("Boost Packs")
        .icon(Zap)
        .schemaType("boostPack")
        .child(
          S.documentTypeList("boostPack")
            .title("Boost Packs")
            .defaultOrdering([{ field: "order", direction: "asc" }])
        ),
      S.listItem()
        .title("Custom Projects")
        .icon(Layers)
        .schemaType("customProject")
        .child(
          S.documentTypeList("customProject")
            .title("Custom Projects")
            .defaultOrdering([{ field: "order", direction: "asc" }])
        ),
      S.divider(),

      // Safety net: any future schemas added but not yet in this sidebar.
      ...S.documentTypeListItems().filter(
        (item) => !HANDLED_TYPES.includes(item.getId() || "")
      ),
    ]);
