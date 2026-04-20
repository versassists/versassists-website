import type { SchemaTypeDefinition } from "sanity";
import { siteSettings } from "./siteSettings";
import { blogPost } from "./blogPost";
import { author } from "./author";
import { service } from "./service";
import { faqItem } from "./faqItem";
import { testimonial } from "./testimonial";
import { teamMember } from "./teamMember";
import { value } from "./value";
import { stat } from "./stat";
import pricingPlan from "./pricingPlan";
import boostPack from "./boostPack";
import customProject from "./customProject";

// Schemas registered so far:
//   Phase 2: siteSettings
//   Phase 3: blogPost, author
//   Phase 4: service
//   Phase 5: faqItem, testimonial, teamMember, value, stat
//   Phase 6: pricingPlan, boostPack, customProject

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettings,
  blogPost,
  author,
  service,
  faqItem,
  testimonial,
  teamMember,
  value,
  stat,
  pricingPlan,
  boostPack,
  customProject,
];
