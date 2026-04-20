/**
 * Centralized GROQ queries used by the Next.js site to fetch content from Sanity.
 * Import from here so query strings stay consistent and easy to audit.
 */

export const siteSettingsQuery = /* groq */ `
  *[_type == "siteSettings"][0]{
    companyName,
    tagline,
    email,
    phone,
    address,
    website,
    calendlyUrl,
    newsletterFormId,
    "logoUrl": logo.asset->url,
    navLinks[]{ label, href, external },
    socialLinks[]{ label, href, icon }
  }
`;

export const blogPostListQuery = /* groq */ `
  *[_type == "blogPost"] | order(publishedAt desc) {
    "slug": slug.current,
    title,
    excerpt,
    category,
    readTime,
    publishedAt,
    "imageUrl": featuredImage.asset->url,
    "author": author->{ name, "slug": slug.current }
  }
`;

export const blogPostSlugsQuery = /* groq */ `
  *[_type == "blogPost" && defined(slug.current)].slug.current
`;

export const blogPostBySlugQuery = /* groq */ `
  *[_type == "blogPost" && slug.current == $slug][0]{
    "slug": slug.current,
    title,
    excerpt,
    category,
    readTime,
    publishedAt,
    body,
    "imageUrl": featuredImage.asset->url,
    "imageAlt": featuredImage.alt,
    "author": author->{ name, role, bio, "slug": slug.current, "avatarUrl": avatar.asset->url }
  }
`;

export const serviceListQuery = /* groq */ `
  *[_type == "service"] | order(order asc) {
    "slug": slug.current,
    title,
    shortTitle,
    iconName,
    description,
    features
  }
`;

export const serviceSlugsQuery = /* groq */ `
  *[_type == "service" && defined(slug.current)].slug.current
`;

export const serviceBySlugQuery = /* groq */ `
  *[_type == "service" && slug.current == $slug][0]{
    "slug": slug.current,
    title,
    shortTitle,
    iconName,
    description,
    features,
    heroHeadline,
    heroSubheadline,
    longDescription,
    benefits,
    idealFor,
    seoTitle,
    seoDescription,
    keywords
  }
`;

export const faqListQuery = /* groq */ `
  *[_type == "faqItem"] | order(order asc) {
    _id,
    question,
    answer,
    category,
    relatedServiceLabel,
    relatedServiceHref
  }
`;

export const testimonialListQuery = /* groq */ `
  *[_type == "testimonial"] | order(order asc) {
    _id,
    quote,
    name,
    title,
    company,
    "imageUrl": photo.asset->url
  }
`;

export const teamListQuery = /* groq */ `
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    bio,
    "imageUrl": photo.asset->url
  }
`;

export const valueListQuery = /* groq */ `
  *[_type == "value"] | order(order asc) {
    _id,
    title,
    description
  }
`;

export const statListQuery = /* groq */ `
  *[_type == "stat"] | order(order asc) {
    _id,
    value,
    suffix,
    label
  }
`;

// ─── Pricing Queries ─────────────────────────────────────────────────
export const pricingPlanListQuery = /* groq */ `
  *[_type == "pricingPlan"] | order(order asc) {
    _id,
    name,
    tagline,
    price,
    period,
    features,
    highlighted,
    cta
  }
`;

export const boostPackListQuery = /* groq */ `
  *[_type == "boostPack"] | order(order asc) {
    _id,
    name,
    price,
    description
  }
`;

export const customProjectListQuery = /* groq */ `
  *[_type == "customProject"] | order(order asc) {
    _id,
    name,
    description,
    price
  }
`;
