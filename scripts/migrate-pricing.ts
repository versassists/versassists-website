/**
 * One-off migration: creates `pricingPlan`, `boostPack`, and `customProject`
 * docs in Sanity from lib/constants.ts.
 *
 * Run with:
 *   npx tsx scripts/migrate-pricing.ts
 *
 * Safe to re-run — uses createOrReplace with stable document IDs.
 */
import { config as loadEnv } from "dotenv";
loadEnv({ path: ".env.local" });

import { createClient } from "@sanity/client";
import {
  pricingPlans,
  boostPacks,
  customProjects,
} from "../lib/constants";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN"
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01",
  token,
  useCdn: false,
});

/** Create a stable slug fragment from any string. */
function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// ─── Migrations ──────────────────────────────────────────────────────
async function migratePricingPlans() {
  console.log(`\nMigrating ${pricingPlans.length} pricing plans...`);
  for (let i = 0; i < pricingPlans.length; i++) {
    const p = pricingPlans[i];
    const docId = `pricing-plan-${slugify(p.name)}`;
    await client.createOrReplace({
      _id: docId,
      _type: "pricingPlan",
      name: p.name,
      tagline: p.tagline,
      price: p.price,
      period: p.period,
      features: p.features,
      highlighted: p.highlighted,
      cta: p.cta,
      order: (i + 1) * 10,
    });
    console.log(`  ✓ ${p.name}${p.highlighted ? " (⭐ highlighted)" : ""}`);
  }
}

async function migrateBoostPacks() {
  console.log(`\nMigrating ${boostPacks.length} boost packs...`);
  for (let i = 0; i < boostPacks.length; i++) {
    const b = boostPacks[i];
    const docId = `boost-pack-${slugify(b.name)}`;
    await client.createOrReplace({
      _id: docId,
      _type: "boostPack",
      name: b.name,
      price: b.price,
      description: b.description,
      order: (i + 1) * 10,
    });
    console.log(`  ✓ ${b.name} (${b.price})`);
  }
}

async function migrateCustomProjects() {
  console.log(`\nMigrating ${customProjects.length} custom projects...`);
  for (let i = 0; i < customProjects.length; i++) {
    const c = customProjects[i];
    const docId = `custom-project-${slugify(c.name)}`;
    await client.createOrReplace({
      _id: docId,
      _type: "customProject",
      name: c.name,
      description: c.description,
      price: c.price,
      order: (i + 1) * 10,
    });
    console.log(`  ✓ ${c.name} (${c.price})`);
  }
}

async function run() {
  await migratePricingPlans();
  await migrateBoostPacks();
  await migrateCustomProjects();
  console.log("\nDone.");
}

run().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
