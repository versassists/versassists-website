import { getClient } from "./getClient";
import { siteSettingsQuery } from "./queries";
import {
  navLinks as fallbackNavLinks,
  socialLinks as fallbackSocialLinks,
  companyInfo as fallbackCompanyInfo,
} from "@/lib/constants";

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  icon?: string;
}

export interface SiteSettings {
  companyName: string;
  tagline: string;
  email: string;
  phone?: string;
  address?: string;
  website: string;
  calendlyUrl: string;
  newsletterFormId: string;
  logoUrl?: string;
  navLinks: NavLink[];
  socialLinks: SocialLink[];
}

const fallbackSettings: SiteSettings = {
  companyName: fallbackCompanyInfo.name,
  tagline: fallbackCompanyInfo.tagline,
  email: fallbackCompanyInfo.email,
  phone: fallbackCompanyInfo.phone || undefined,
  address: fallbackCompanyInfo.address || undefined,
  website: fallbackCompanyInfo.website,
  calendlyUrl: "https://calendly.com/versassist/30min",
  newsletterFormId: "UAsq0V9twlD1DHJpUhQK",
  logoUrl: undefined,
  navLinks: fallbackNavLinks,
  socialLinks: fallbackSocialLinks,
};

/**
 * Ensures navLinks from constants that aren't in the CMS list are appended.
 * This keeps code-defined links (e.g. Social Media QA) present even when
 * the CMS manages the primary navigation list.
 */
function mergeNavLinks(cmsLinks: NavLink[]): NavLink[] {
  const cmsHrefs = new Set(cmsLinks.map((l) => l.href.replace(/\/$/, "")));
  const missing = fallbackNavLinks.filter(
    (l) => !cmsHrefs.has(l.href.replace(/\/$/, ""))
  );
  return [...cmsLinks, ...missing];
}

/**
 * Fetches Site Settings from Sanity with a fully hardcoded fallback.
 * Cached via Next.js fetch cache; revalidated every 60s and on-demand via webhook.
 */
export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const client = await getClient();
    const result = await client.fetch<Partial<SiteSettings> | null>(
      siteSettingsQuery,
      {},
      { next: { revalidate: 60, tags: ["siteSettings"] } }
    );

    if (!result) return fallbackSettings;

    const cmsNavLinks =
      result.navLinks && result.navLinks.length > 0
        ? result.navLinks
        : fallbackSettings.navLinks;

    // Merge with fallback so missing fields never crash the UI.
    return {
      ...fallbackSettings,
      ...result,
      navLinks: mergeNavLinks(cmsNavLinks),
      socialLinks:
        result.socialLinks && result.socialLinks.length > 0
          ? result.socialLinks
          : fallbackSettings.socialLinks,
    };
  } catch (err) {
    console.error("[getSiteSettings] Falling back to constants:", err);
    return fallbackSettings;
  }
}
