/**
 * VersAssist Auto-Blog Bot
 *
 * Generates and publishes a weekly blog post using Google Gemini for content,
 * Imagen for featured images, and Sanity CMS for publishing.
 *
 * Run with:
 *   npx tsx scripts/auto-blog/index.ts
 */
import { config as loadEnv } from "dotenv";
loadEnv({ path: ".env.local" });

import { createClient } from "@sanity/client";
import { selectCategory, getExistingTitles, pickMostUnique } from "./topics";
import { generateTitleCandidates, generateContent } from "./content";
import { generateAndUploadImage } from "./image";
import { publishPost } from "./publish";

async function main() {
  const {
    NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET,
    SANITY_API_WRITE_TOKEN,
    GEMINI_API_KEY,
  } = process.env;

  if (!NEXT_PUBLIC_SANITY_PROJECT_ID || !SANITY_API_WRITE_TOKEN || !GEMINI_API_KEY) {
    console.error(
      "[auto-blog] Missing required env vars: NEXT_PUBLIC_SANITY_PROJECT_ID, SANITY_API_WRITE_TOKEN, GEMINI_API_KEY"
    );
    process.exit(1);
  }

  const client = createClient({
    projectId: NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: "2025-01-01",
    token: SANITY_API_WRITE_TOKEN,
    useCdn: false,
  });

  console.log("[auto-blog] Starting weekly blog generation...\n");

  // Step 1: Select category (rotation based on fewest recent posts)
  const category = await selectCategory(client);
  console.log(`[auto-blog] Category: ${category}`);

  // Step 2: Generate title candidates and pick the most unique
  const existingTitles = await getExistingTitles(client);
  console.log(`[auto-blog] Found ${existingTitles.length} existing posts`);

  const candidates = await generateTitleCandidates(category, existingTitles);
  console.log(`[auto-blog] Title candidates:`);
  candidates.forEach((t, i) => console.log(`  ${i + 1}. ${t}`));

  const title = pickMostUnique(candidates, existingTitles);
  console.log(`[auto-blog] Selected: "${title}"\n`);

  // Step 3: Generate full article content
  console.log("[auto-blog] Generating content with Gemini...");
  const post = await generateContent(category, title);
  console.log(`[auto-blog] Content generated (${post.readTime})\n`);

  // Step 4: Generate and upload featured image
  console.log("[auto-blog] Generating featured image with Imagen...");
  const imageAssetId = await generateAndUploadImage(
    post.imagePrompt,
    post.slug,
    client
  );
  console.log("");

  // Step 5: Publish to Sanity
  console.log("[auto-blog] Publishing to Sanity...");
  const docId = await publishPost(post, imageAssetId, client);

  // Summary
  console.log("\n[auto-blog] === SUMMARY ===");
  console.log(`  Title:    ${post.title}`);
  console.log(`  Category: ${post.category}`);
  console.log(`  Slug:     ${post.slug}`);
  console.log(`  Excerpt:  ${post.excerpt.slice(0, 80)}...`);
  console.log(`  Doc ID:   ${docId}`);
  console.log(`  Image:    ${imageAssetId ? "uploaded" : "skipped"}`);
  console.log("[auto-blog] Done!");
}

main().catch((err) => {
  console.error("[auto-blog] FAILED:", err);
  process.exit(1);
});
