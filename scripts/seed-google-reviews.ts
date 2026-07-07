/**
 * Replace the `testimonial` documents in Sanity with our curated 5-star
 * Google Business Profile reviews. Source of truth mirrors lib/constants.ts.
 * Run with: npx tsx scripts/seed-google-reviews.ts
 */
import { config as loadEnv } from "dotenv";
loadEnv({ path: ".env.local" });

import { createClient } from "@sanity/client";
import { testimonials } from "../lib/constants";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  token: process.env.SANITY_API_WRITE_TOKEN!,
  useCdn: false,
});

function slug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

async function main() {
  const existing = await client.fetch<{ _id: string; name: string }[]>(
    `*[_type == "testimonial"]{ _id, name }`
  );
  console.log(`Found ${existing.length} existing testimonial(s):`, existing.map((e) => e.name).join(", ") || "(none)");

  const tx = client.transaction();

  // Remove the current testimonials (drafts included) so only the Google set remains.
  for (const doc of existing) {
    tx.delete(doc._id);
    tx.delete(`drafts.${doc._id}`);
  }

  // Create the curated Google reviews in order.
  testimonials.forEach((t, i) => {
    tx.createOrReplace({
      _id: `testimonial-google-${slug(t.name)}`,
      _type: "testimonial",
      quote: t.quote,
      name: t.name,
      title: t.title,
      company: t.company || undefined,
      order: i + 1,
    });
  });

  await tx.commit();
  console.log(`Done. Replaced with ${testimonials.length} Google reviews:`);
  testimonials.forEach((t, i) => console.log(`  ${i + 1}. ${t.name} — ${t.title}`));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
