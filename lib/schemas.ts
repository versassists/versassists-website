/**
 * Centralized JSON-LD structured data builders.
 * Used to feed the <JsonLd /> component on each page.
 */

import { services, faqItems, companyInfo } from "./constants";
import { blogPosts, type BlogPost } from "./blog-posts";

const BASE_URL = "https://www.versassists.com";
const LOGO_URL = `${BASE_URL}/logos/versassist%20png%20logo.avif`;

// ─── Organization ────────────────────────────────────────────────────
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "VersAssist",
  alternateName: ["VersAssists", "VersAssist Virtual Assistants"],
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
    width: 400,
    height: 400,
  },
  image: LOGO_URL,
  description:
    "VersAssist provides AI-powered virtual assistant services for small businesses and startups. Email management, social media, graphic design, website development, and more.",
  email: companyInfo.email,
  founders: [
    {
      "@type": "Person",
      name: "Dr. Jeff Bullock",
      jobTitle: "Co-Founder",
    },
    {
      "@type": "Person",
      name: "Michael Olaiya",
      jobTitle: "Co-Founder",
    },
  ],
  sameAs: [
    "https://www.instagram.com/versassists/",
    "https://www.linkedin.com/company/versassist",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: companyInfo.email,
    availableLanguage: ["English", "Spanish"],
  },
};

// ─── WebSite with SearchAction ───────────────────────────────────────
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "VersAssist",
  description:
    "AI-Powered Virtual Assistance for Small Businesses and Startups",
  publisher: { "@id": `${BASE_URL}/#organization` },
  inLanguage: "en-US",
};

// ─── Professional Service (LocalBusiness-like for service businesses) ──
export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}/#professional-service`,
  name: "VersAssist",
  image: LOGO_URL,
  url: BASE_URL,
  priceRange: "$$",
  description:
    "AI-powered virtual assistant services for small businesses: email management, social media, graphic design, website development, customer support, and more.",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  serviceType: [
    "Virtual Assistant Services",
    "AI Virtual Assistant",
    "Email Management",
    "Social Media Management",
    "Graphic Design",
    "Website Development",
    "Customer Support",
    "Content Creation",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "50",
    bestRating: "5",
    worstRating: "1",
  },
};

// ─── Service schemas (one per service) ───────────────────────────────
export const servicesSchema = services.map((s) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: s.title,
  description: s.description,
  provider: { "@id": `${BASE_URL}/#organization` },
  areaServed: { "@type": "Country", name: "United States" },
  serviceType: "Virtual Assistant Service",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    url: `${BASE_URL}/services`,
  },
}));

// ─── FAQ page ────────────────────────────────────────────────────────
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

// ─── Breadcrumbs ─────────────────────────────────────────────────────
export function breadcrumbSchema(
  items: Array<{ name: string; href: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.href}`,
    })),
  };
}

// ─── BlogPosting ─────────────────────────────────────────────────────
export function blogPostingSchema(post: BlogPost) {
  const datePublished = new Date(post.date).toISOString();
  // Strip HTML for description fallback
  const plainExcerpt = post.excerpt.replace(/<[^>]*>/g, "").slice(0, 300);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${BASE_URL}/blog/${post.slug}#article`,
    headline: post.title,
    description: plainExcerpt,
    image: post.image,
    datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: { "@id": `${BASE_URL}/#organization` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: [
      post.category,
      "virtual assistant",
      "AI",
      "small business",
      "VersAssist",
    ].join(", "),
  };
}

// ─── Blog index (Blog schema) ────────────────────────────────────────
export const blogListSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${BASE_URL}/blog#blog`,
  name: "VersAssist Blog",
  description:
    "Expert insights on virtual assistance, AI productivity, and growth strategies for small businesses.",
  url: `${BASE_URL}/blog`,
  publisher: { "@id": `${BASE_URL}/#organization` },
  blogPost: blogPosts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    url: `${BASE_URL}/blog/${post.slug}`,
    datePublished: new Date(post.date).toISOString(),
    author: { "@type": "Person", name: post.author },
  })),
};
