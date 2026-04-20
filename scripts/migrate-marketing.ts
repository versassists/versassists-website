/**
 * One-off migration: creates `faqItem`, `testimonial`, `teamMember`,
 * `value`, and `stat` docs in Sanity from lib/constants.ts.
 *
 * Team member photos are uploaded from /public/profile-pictures to Sanity.
 * Testimonial photos aren't rendered on the live site (initials are used),
 * so we skip them to avoid uploading non-existent files.
 *
 * Run with:
 *   npx tsx scripts/migrate-marketing.ts
 *
 * Safe to re-run — uses createOrReplace with stable document IDs.
 */
import { config as loadEnv } from "dotenv";
loadEnv({ path: ".env.local" });

import { createClient } from "@sanity/client";
import { readFileSync } from "fs";
import { join, basename } from "path";
import {
  faqItems,
  testimonials,
  team,
  values,
  stats,
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

const PUBLIC_DIR = join(process.cwd(), "public");

/** Create a stable slug fragment from any string. */
function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Upload a local public-folder image and return a Sanity image reference. */
async function uploadLocalImage(relativePath: string) {
  // Strip leading slash
  const rel = relativePath.replace(/^\/+/, "");
  const fullPath = join(PUBLIC_DIR, rel);
  const buffer = readFileSync(fullPath);
  const asset = await client.assets.upload("image", buffer, {
    filename: basename(rel),
  });
  return {
    _type: "image" as const,
    asset: { _type: "reference" as const, _ref: asset._id },
  };
}

// ─── Migrations ──────────────────────────────────────────────────────
async function migrateFaqs() {
  console.log(`\nMigrating ${faqItems.length} FAQ items...`);
  for (let i = 0; i < faqItems.length; i++) {
    const f = faqItems[i];
    const docId = `faq-${slugify(f.question).slice(0, 60)}`;
    await client.createOrReplace({
      _id: docId,
      _type: "faqItem",
      question: f.question,
      answer: f.answer,
      category: f.category,
      relatedServiceLabel: f.relatedService?.label,
      relatedServiceHref: f.relatedService?.href,
      order: (i + 1) * 10,
    });
    console.log(`  ✓ ${f.question.slice(0, 60)}`);
  }
}

async function migrateTestimonials() {
  console.log(`\nMigrating ${testimonials.length} testimonials...`);
  for (let i = 0; i < testimonials.length; i++) {
    const t = testimonials[i];
    const docId = `testimonial-${slugify(t.name)}`;
    await client.createOrReplace({
      _id: docId,
      _type: "testimonial",
      quote: t.quote,
      name: t.name,
      title: t.title,
      company: t.company || undefined,
      order: (i + 1) * 10,
      // photo intentionally omitted — live site renders initials
    });
    console.log(`  ✓ ${t.name}`);
  }
}

async function migrateTeam() {
  console.log(`\nMigrating ${team.length} team members...`);
  for (let i = 0; i < team.length; i++) {
    const m = team[i];
    const docId = `team-${slugify(m.name)}`;
    let photo;
    try {
      photo = await uploadLocalImage(m.image);
    } catch (err) {
      console.warn(`  ! Could not upload photo for ${m.name}:`, err);
    }
    await client.createOrReplace({
      _id: docId,
      _type: "teamMember",
      name: m.name,
      role: m.role,
      bio: m.bio,
      order: (i + 1) * 10,
      photo,
    });
    console.log(`  ✓ ${m.name}${photo ? " (with photo)" : ""}`);
  }
}

async function migrateValues() {
  console.log(`\nMigrating ${values.length} values...`);
  for (let i = 0; i < values.length; i++) {
    const v = values[i];
    const docId = `value-${slugify(v.title)}`;
    await client.createOrReplace({
      _id: docId,
      _type: "value",
      title: v.title,
      description: v.description,
      order: (i + 1) * 10,
    });
    console.log(`  ✓ ${v.title}`);
  }
}

async function migrateStats() {
  console.log(`\nMigrating ${stats.length} stats...`);
  for (let i = 0; i < stats.length; i++) {
    const s = stats[i];
    const docId = `stat-${slugify(s.label)}`;
    await client.createOrReplace({
      _id: docId,
      _type: "stat",
      value: s.value,
      suffix: s.suffix,
      label: s.label,
      order: (i + 1) * 10,
    });
    console.log(`  ✓ ${s.label} (${s.value}${s.suffix})`);
  }
}

async function run() {
  await migrateFaqs();
  await migrateTestimonials();
  await migrateTeam();
  await migrateValues();
  await migrateStats();
  console.log("\nDone.");
}

run().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
