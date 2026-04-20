/**
 * One-off migration: populates the siteSettings singleton in Sanity from
 * the hardcoded constants in lib/constants.ts.
 *
 * Run with:
 *   npx tsx scripts/migrate-site-settings.ts
 *
 * Safe to re-run — uses createOrReplace with a fixed document ID.
 */

// Load env vars (in case tsx doesn't pick up .env.local automatically)
import { config as loadEnv } from "dotenv";
loadEnv({ path: ".env.local" });

import { createClient } from "@sanity/client";
import {
  navLinks,
  socialLinks,
  companyInfo,
} from "../lib/constants";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN in .env.local"
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2025-01-01",
  token,
  useCdn: false,
});

async function migrate() {
  console.log(`[migrate-site-settings] Writing to ${projectId}/${dataset}`);

  const doc = {
    _id: "siteSettings",
    _type: "siteSettings",
    companyName: companyInfo.name,
    tagline: companyInfo.tagline,
    email: companyInfo.email,
    phone: companyInfo.phone || undefined,
    address: companyInfo.address || undefined,
    website: companyInfo.website,
    calendlyUrl: "https://calendly.com/versassist/30min",
    newsletterFormId: "UAsq0V9twlD1DHJpUhQK",
    navLinks: navLinks.map((link) => ({
      _key: link.href.replace(/[^a-zA-Z0-9]/g, "").slice(0, 20) || "link",
      label: link.label,
      href: link.href,
      external: link.href.startsWith("http"),
    })),
    socialLinks: socialLinks.map((link) => ({
      _key: (link.icon || link.label).slice(0, 20),
      label: link.label,
      href: link.href,
      icon: link.icon,
    })),
  };

  const result = await client.createOrReplace(doc);
  console.log("[migrate-site-settings] ✓ Wrote siteSettings:", result._id);
}

migrate().catch((err) => {
  console.error("[migrate-site-settings] FAILED:", err);
  process.exit(1);
});
