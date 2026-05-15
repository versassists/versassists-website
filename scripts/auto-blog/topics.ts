import { createClient } from "@sanity/client";
import { CATEGORIES, type Category } from "./types";

const EXISTING_POSTS_QUERY = `*[_type == "blogPost"]{
  title,
  category,
  "slug": slug.current,
  publishedAt
} | order(publishedAt desc)`;

export async function selectCategory(
  client: ReturnType<typeof createClient>
): Promise<Category> {
  const posts: { title: string; category: string; publishedAt: string }[] =
    await client.fetch(EXISTING_POSTS_QUERY);

  // Count posts per category from last 8 weeks
  const eightWeeksAgo = new Date(Date.now() - 8 * 7 * 24 * 60 * 60 * 1000);
  const recentCounts: Record<string, number> = {};
  for (const cat of CATEGORIES) recentCounts[cat] = 0;

  for (const p of posts) {
    if (
      new Date(p.publishedAt) > eightWeeksAgo &&
      recentCounts[p.category] !== undefined
    ) {
      recentCounts[p.category]++;
    }
  }

  // Pick category with fewest recent posts (ties broken randomly)
  const minCount = Math.min(...Object.values(recentCounts));
  const candidates = CATEGORIES.filter((c) => recentCounts[c] === minCount);
  return candidates[Math.floor(Math.random() * candidates.length)];
}

export async function getExistingTitles(
  client: ReturnType<typeof createClient>
): Promise<string[]> {
  const posts: { title: string }[] = await client.fetch(EXISTING_POSTS_QUERY);
  return posts.map((p) => p.title);
}

/** Pick the candidate title most dissimilar to existing titles (Jaccard distance). */
export function pickMostUnique(
  candidates: string[],
  existing: string[]
): string {
  if (candidates.length === 0) throw new Error("No title candidates");
  if (existing.length === 0) return candidates[0];

  function wordSet(s: string): Set<string> {
    return new Set(
      s
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .split(/\s+/)
        .filter(Boolean)
    );
  }

  function jaccardSimilarity(a: Set<string>, b: Set<string>): number {
    const intersection = new Set([...a].filter((x) => b.has(x)));
    const union = new Set([...a, ...b]);
    return union.size === 0 ? 0 : intersection.size / union.size;
  }

  const existingSets = existing.map(wordSet);

  let bestTitle = candidates[0];
  let bestMaxSim = 1;

  for (const candidate of candidates) {
    const candidateSet = wordSet(candidate);
    // Max similarity to any existing title
    const maxSim = Math.max(
      ...existingSets.map((es) => jaccardSimilarity(candidateSet, es))
    );
    if (maxSim < bestMaxSim) {
      bestMaxSim = maxSim;
      bestTitle = candidate;
    }
  }

  return bestTitle;
}
