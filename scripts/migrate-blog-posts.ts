/**
 * One-off migration: creates author + blogPost docs in Sanity from
 * lib/blog-posts.ts. Featured images are downloaded from the Wix CDN
 * and re-uploaded to Sanity's asset store so content isn't dependent
 * on Wix being reachable.
 *
 * Run with:
 *   npx tsx scripts/migrate-blog-posts.ts
 *
 * Safe to re-run — uses createOrReplace with stable document IDs.
 */
import { config as loadEnv } from "dotenv";
loadEnv({ path: ".env.local" });

import { createClient } from "@sanity/client";
import { htmlToBlocks } from "@sanity/block-tools";
import { JSDOM } from "jsdom";
import { Schema } from "@sanity/schema";
import { blogPosts } from "../lib/blog-posts";

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
  apiVersion: "2025-01-01",
  token,
  useCdn: false,
});

// Minimal schema matching the `body` field in blogPost — used by block-tools.
const blockContentSchema = Schema.compile({
  name: "default",
  types: [
    {
      name: "blogPost",
      type: "document",
      fields: [
        {
          name: "body",
          type: "array",
          of: [
            {
              type: "block",
              styles: [
                { title: "Normal", value: "normal" },
                { title: "H2", value: "h2" },
                { title: "H3", value: "h3" },
                { title: "H4", value: "h4" },
                { title: "Quote", value: "blockquote" },
              ],
              lists: [
                { title: "Bullet", value: "bullet" },
                { title: "Numbered", value: "number" },
              ],
              marks: {
                decorators: [
                  { title: "Strong", value: "strong" },
                  { title: "Emphasis", value: "em" },
                ],
                annotations: [
                  {
                    name: "link",
                    type: "object",
                    fields: [{ name: "href", type: "url" }],
                  },
                ],
              },
            },
            { type: "image" },
          ],
        },
      ],
    },
  ],
});

const blockContentType = blockContentSchema
  .get("blogPost")
  .fields.find((f: { name: string }) => f.name === "body").type;

// Slugify helper for stable author IDs.
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Convert "Mar 20, 2025" to ISO string.
function parseDate(dateStr: string): string {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) {
    console.warn(`Could not parse date "${dateStr}" — using now`);
    return new Date().toISOString();
  }
  return d.toISOString();
}

// Upload an image URL to Sanity's asset store. Returns the asset reference.
async function uploadImage(url: string, label: string): Promise<string | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`  ✗ Failed to fetch image for ${label}: HTTP ${res.status}`);
      return null;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    const contentType = res.headers.get("content-type") || "image/jpeg";
    const ext = contentType.split("/")[1]?.split(";")[0] || "jpg";
    const filename = `${slugify(label)}.${ext}`;
    const asset = await client.assets.upload("image", buffer, {
      filename,
      contentType,
    });
    return asset._id;
  } catch (err) {
    console.warn(`  ✗ Error uploading image for ${label}:`, (err as Error).message);
    return null;
  }
}

// Convert HTML string to Portable Text blocks.
function convertHtml(html: string): unknown[] {
  // block-tools expects DOM/Document; provide via jsdom
  const blocks = htmlToBlocks(html, blockContentType, {
    parseHtml: (h: string) => new JSDOM(h).window.document,
  });
  // Strip inline style-only strong marks that Wix embedded (keeps JSON clean).
  return blocks;
}

async function migrate() {
  console.log(`[migrate-blog-posts] Writing to ${projectId}/${dataset}`);
  console.log(`[migrate-blog-posts] Processing ${blogPosts.length} posts\n`);

  // Deduplicate authors.
  const authorNames = Array.from(new Set(blogPosts.map((p) => p.author)));
  const authorIdByName: Record<string, string> = {};

  for (const name of authorNames) {
    const id = `author-${slugify(name)}`;
    authorIdByName[name] = id;
    console.log(`• Author: ${name} (${id})`);
    await client.createOrReplace({
      _id: id,
      _type: "author",
      name,
      slug: { _type: "slug", current: slugify(name) },
    });
  }
  console.log("");

  // Migrate each post.
  for (const [i, post] of blogPosts.entries()) {
    const label = `[${i + 1}/${blogPosts.length}] ${post.title.slice(0, 60)}`;
    console.log(label);

    // 1. Upload featured image.
    let imageAssetId: string | null = null;
    if (post.image) {
      imageAssetId = await uploadImage(post.image, post.slug);
      if (imageAssetId) console.log(`  ✓ Image uploaded`);
    }

    // 2. Convert HTML body to Portable Text.
    const body = convertHtml(post.content);
    console.log(`  ✓ Converted to ${body.length} portable text blocks`);

    // 3. Create/replace blog post doc.
    const doc = {
      _id: `blogPost-${post.slug}`,
      _type: "blogPost",
      title: post.title,
      slug: { _type: "slug", current: post.slug },
      author: { _type: "reference", _ref: authorIdByName[post.author] },
      category: post.category,
      excerpt: post.excerpt.slice(0, 300),
      readTime: post.readTime,
      publishedAt: parseDate(post.date),
      featuredImage: imageAssetId
        ? {
            _type: "image",
            asset: { _type: "reference", _ref: imageAssetId },
            alt: post.title,
          }
        : undefined,
      body,
    };

    await client.createOrReplace(doc);
    console.log(`  ✓ Saved as ${doc._id}\n`);
  }

  console.log("[migrate-blog-posts] ✓ Done");
}

migrate().catch((err) => {
  console.error("[migrate-blog-posts] FAILED:", err);
  process.exit(1);
});
