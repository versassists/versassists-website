import { createClient } from "@sanity/client";
import { htmlToBlocks } from "@sanity/block-tools";
import { JSDOM } from "jsdom";
import { Schema } from "@sanity/schema";
import type { GeneratedPost } from "./types";

// Minimal schema matching the body field in blogPost (same as migrate-blog-posts.ts)
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

function convertHtml(html: string): unknown[] {
  return htmlToBlocks(html, blockContentType, {
    parseHtml: (h: string) => new JSDOM(h).window.document,
  });
}

const AUTHOR_ID = "author-saleem-raja";

export async function publishPost(
  post: GeneratedPost,
  imageAssetId: string | null,
  client: ReturnType<typeof createClient>
): Promise<string> {
  console.log("  [publish] Converting HTML to Portable Text...");
  const body = convertHtml(post.htmlBody);
  console.log(`  [publish] Converted to ${body.length} blocks`);

  // Date-based ID: idempotent, safe to re-run same day
  const today = new Date().toISOString().slice(0, 10);
  const docId = `blogPost-auto-${today}`;

  const doc = {
    _id: docId,
    _type: "blogPost" as const,
    title: post.title,
    slug: { _type: "slug", current: post.slug },
    author: { _type: "reference", _ref: AUTHOR_ID },
    category: post.category,
    excerpt: post.excerpt,
    readTime: post.readTime,
    publishedAt: new Date().toISOString(),
    body,
    ...(imageAssetId && {
      featuredImage: {
        _type: "image",
        asset: { _type: "reference", _ref: imageAssetId },
        alt: post.title,
      },
    }),
  };

  await client.createOrReplace(doc);
  console.log(`  [publish] Saved as ${docId}`);
  return docId;
}
