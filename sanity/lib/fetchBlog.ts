import { client } from "./client";
import { getClient } from "./getClient";
import {
  blogPostBySlugQuery,
  blogPostListQuery,
  blogPostSlugsQuery,
} from "./queries";
import { blogPosts as fallbackPosts, type BlogPost as FallbackPost } from "@/lib/blog-posts";

export interface BlogListItem {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  imageUrl?: string;
  author?: { name: string; slug?: string };
}

export interface BlogPostDetail extends BlogListItem {
  body?: unknown[];
  imageAlt?: string;
  author?: {
    name: string;
    slug?: string;
    role?: string;
    bio?: string;
    avatarUrl?: string;
  };
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

function fallbackList(): BlogListItem[] {
  return fallbackPosts.map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    readTime: p.readTime,
    publishedAt: new Date(p.date).toISOString(),
    imageUrl: p.image,
    author: { name: p.author },
  }));
}

function fallbackDetail(slug: string): BlogPostDetail | null {
  const p = fallbackPosts.find((x) => x.slug === slug);
  if (!p) return null;
  return {
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    readTime: p.readTime,
    publishedAt: new Date(p.date).toISOString(),
    imageUrl: p.image,
    author: { name: p.author },
    // body stays undefined so the UI can fall back to rendering raw HTML.
  };
}

export async function getBlogList(): Promise<BlogListItem[]> {
  try {
    const client = await getClient();
    const result = await client.fetch<BlogListItem[]>(
      blogPostListQuery,
      {},
      { next: { revalidate: 60, tags: ["blogPost"] } }
    );
    if (result && result.length > 0) return result;
  } catch (err) {
    console.error("[getBlogList] Falling back:", err);
  }
  return fallbackList();
}

export async function getBlogSlugs(): Promise<string[]> {
  try {
    const result = await client.fetch<string[]>(
      blogPostSlugsQuery,
      {},
      { next: { revalidate: 60, tags: ["blogPost"] } }
    );
    if (result && result.length > 0) return result;
  } catch (err) {
    console.error("[getBlogSlugs] Falling back:", err);
  }
  return fallbackPosts.map((p) => p.slug);
}

export async function getBlogPost(slug: string): Promise<BlogPostDetail | null> {
  try {
    const client = await getClient();
    const result = await client.fetch<BlogPostDetail | null>(
      blogPostBySlugQuery,
      { slug },
      { next: { revalidate: 60, tags: [`blogPost:${slug}`, "blogPost"] } }
    );
    if (result) return result;
  } catch (err) {
    console.error(`[getBlogPost:${slug}] Falling back:`, err);
  }
  return fallbackDetail(slug);
}

// Helper so UI components can show a human-readable date without knowing about ISO strings.
export function formatBlogDate(iso: string): string {
  return formatDate(iso);
}

export function fallbackHtmlForSlug(slug: string): string | undefined {
  const p = fallbackPosts.find((x) => x.slug === slug);
  return p?.content;
}

export type { FallbackPost };
