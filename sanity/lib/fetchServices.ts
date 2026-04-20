import { client } from "./client";
import { getClient } from "./getClient";
import {
  serviceBySlugQuery,
  serviceListQuery,
  serviceSlugsQuery,
} from "./queries";
import { services as fallbackServices } from "@/lib/constants";

export interface ServiceListItem {
  slug: string;
  title: string;
  shortTitle: string;
  iconName: string;
  description: string;
  features: string[];
}

export interface ServiceDetail extends ServiceListItem {
  heroHeadline: string;
  heroSubheadline: string;
  longDescription: string[];
  benefits: { title: string; desc: string }[];
  idealFor: string[];
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
}

// Map the hardcoded Lucide component back to the string name used in Sanity.
// Lucide components carry a `displayName` that matches the export name (e.g. "Mail").
function iconNameFromComponent(icon: { displayName?: string; name?: string }): string {
  return icon.displayName || icon.name || "Sparkles";
}

function fallbackToListItem(s: (typeof fallbackServices)[number]): ServiceListItem {
  return {
    slug: s.slug,
    title: s.title,
    shortTitle: s.shortTitle,
    iconName: iconNameFromComponent(s.icon as unknown as { displayName?: string; name?: string }),
    description: s.description,
    features: s.features,
  };
}

function fallbackToDetail(s: (typeof fallbackServices)[number]): ServiceDetail {
  return {
    ...fallbackToListItem(s),
    heroHeadline: s.heroHeadline,
    heroSubheadline: s.heroSubheadline,
    longDescription: s.longDescription,
    benefits: s.benefits,
    idealFor: s.idealFor,
    seoTitle: s.seoTitle,
    seoDescription: s.seoDescription,
    keywords: s.keywords,
  };
}

export async function getServiceList(): Promise<ServiceListItem[]> {
  try {
    const client = await getClient();
    const result = await client.fetch<ServiceListItem[]>(
      serviceListQuery,
      {},
      { next: { revalidate: 60, tags: ["service"] } }
    );
    if (result && result.length > 0) return result;
  } catch (err) {
    console.error("[getServiceList] Falling back:", err);
  }
  return fallbackServices.map(fallbackToListItem);
}

export async function getServiceSlugs(): Promise<string[]> {
  try {
    const result = await client.fetch<string[]>(
      serviceSlugsQuery,
      {},
      { next: { revalidate: 60, tags: ["service"] } }
    );
    if (result && result.length > 0) return result;
  } catch (err) {
    console.error("[getServiceSlugs] Falling back:", err);
  }
  return fallbackServices.map((s) => s.slug);
}

export async function getService(slug: string): Promise<ServiceDetail | null> {
  try {
    const client = await getClient();
    const result = await client.fetch<ServiceDetail | null>(
      serviceBySlugQuery,
      { slug },
      { next: { revalidate: 60, tags: [`service:${slug}`, "service"] } }
    );
    if (result) return result;
  } catch (err) {
    console.error(`[getService:${slug}] Falling back:`, err);
  }
  const fb = fallbackServices.find((s) => s.slug === slug);
  return fb ? fallbackToDetail(fb) : null;
}
