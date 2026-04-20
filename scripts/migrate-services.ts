/**
 * One-off migration: creates `service` docs in Sanity from lib/constants.ts.
 *
 * Run with:
 *   npx tsx scripts/migrate-services.ts
 *
 * Safe to re-run — uses createOrReplace with stable document IDs.
 */
import { config as loadEnv } from "dotenv";
loadEnv({ path: ".env.local" });

import { createClient } from "@sanity/client";
import { services } from "../lib/constants";
import type { LucideIcon } from "lucide-react";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01",
  token,
  useCdn: false,
});

/** Extract the Lucide component's display name (falls back to `name`). */
function iconName(icon: LucideIcon): string {
  const cand = (icon as unknown as { displayName?: string; name?: string });
  return cand.displayName || cand.name || "Sparkles";
}

async function run() {
  console.log(`Migrating ${services.length} services...`);

  for (let i = 0; i < services.length; i++) {
    const s = services[i];
    const docId = `service-${s.slug}`;
    const resolvedIcon = iconName(s.icon);

    const doc = {
      _id: docId,
      _type: "service",
      title: s.title,
      shortTitle: s.shortTitle,
      slug: { _type: "slug", current: s.slug },
      iconName: resolvedIcon,
      order: (i + 1) * 10, // 10, 20, 30… leaves room to re-order later
      description: s.description,
      features: s.features,
      heroHeadline: s.heroHeadline,
      heroSubheadline: s.heroSubheadline,
      longDescription: s.longDescription,
      benefits: s.benefits.map((b, idx) => ({
        _key: `b-${idx}`,
        _type: "benefit",
        title: b.title,
        desc: b.desc,
      })),
      idealFor: s.idealFor,
      seoTitle: s.seoTitle,
      seoDescription: s.seoDescription,
      keywords: s.keywords,
    };

    await client.createOrReplace(doc);
    console.log(`  ✓ ${s.slug}  (icon: ${resolvedIcon})`);
  }

  console.log("\nDone.");
}

run().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
