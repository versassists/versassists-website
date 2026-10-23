/**
 * Fetchers for FAQ, Testimonials, Team Members, Values, and Stats.
 * Each has a hardcoded fallback via `@/lib/constants` so the site never
 * breaks if the Sanity fetch fails.
 */
import { getClient } from "./getClient";
import { getFacts, parseDisplay, STAT_FACT_KEYS, DROPPED_STAT_LABELS } from "@/lib/facts";
import {
  faqListQuery,
  testimonialListQuery,
  teamListQuery,
  valueListQuery,
  statListQuery,
} from "./queries";
import {
  faqItems as fallbackFaqs,
  testimonials as fallbackTestimonials,
  team as fallbackTeam,
  values as fallbackValues,
  stats as fallbackStats,
} from "@/lib/constants";

// ─── Types ───────────────────────────────────────────────────────────
export interface FaqItem {
  _id: string;
  question: string;
  answer: string;
  category: string;
  relatedServiceLabel?: string;
  relatedServiceHref?: string;
}

export interface Testimonial {
  _id: string;
  quote: string;
  name: string;
  title: string;
  company?: string;
  imageUrl?: string;
}

export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
}

export interface Value {
  _id: string;
  title: string;
  description: string;
}

export interface Stat {
  _id: string;
  value: number;
  suffix?: string;
  label: string;
  /** Exact text to show, e.g. "15,000+". Rendered in the HTML, so it works with no JavaScript. */
  display?: string;
}

// ─── FAQ ─────────────────────────────────────────────────────────────
export async function getFaqList(): Promise<FaqItem[]> {
  try {
    const client = await getClient();
    const result = await client.fetch<FaqItem[]>(
      faqListQuery,
      {},
      { next: { revalidate: 60, tags: ["faqItem"] } }
    );
    if (result && result.length > 0) return result;
  } catch (err) {
    console.error("[getFaqList] Falling back:", err);
  }
  return fallbackFaqs.map((f, i) => ({
    _id: `fallback-faq-${i}`,
    question: f.question,
    answer: f.answer,
    category: f.category,
    relatedServiceLabel: f.relatedService?.label,
    relatedServiceHref: f.relatedService?.href,
  }));
}

// ─── Testimonials ────────────────────────────────────────────────────
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const client = await getClient();
    const result = await client.fetch<Testimonial[]>(
      testimonialListQuery,
      {},
      { next: { revalidate: 60, tags: ["testimonial"] } }
    );
    if (result && result.length > 0) return result;
  } catch (err) {
    console.error("[getTestimonials] Falling back:", err);
  }
  return fallbackTestimonials.map((t, i) => ({
    _id: `fallback-testimonial-${i}`,
    quote: t.quote,
    name: t.name,
    title: t.title,
    company: t.company || undefined,
    imageUrl: t.image || undefined,
  }));
}

// ─── Team ────────────────────────────────────────────────────────────
export async function getTeam(): Promise<TeamMember[]> {
  try {
    const client = await getClient();
    const result = await client.fetch<TeamMember[]>(
      teamListQuery,
      {},
      { next: { revalidate: 60, tags: ["teamMember"] } }
    );
    if (result && result.length > 0) return result;
  } catch (err) {
    console.error("[getTeam] Falling back:", err);
  }
  return fallbackTeam.map((m, i) => ({
    _id: `fallback-team-${i}`,
    name: m.name,
    role: m.role,
    bio: m.bio,
    imageUrl: m.image,
  }));
}

// ─── Values ──────────────────────────────────────────────────────────
export async function getValues(): Promise<Value[]> {
  try {
    const client = await getClient();
    const result = await client.fetch<Value[]>(
      valueListQuery,
      {},
      { next: { revalidate: 60, tags: ["value"] } }
    );
    if (result && result.length > 0) return result;
  } catch (err) {
    console.error("[getValues] Falling back:", err);
  }
  return fallbackValues.map((v, i) => ({
    _id: `fallback-value-${i}`,
    title: v.title,
    description: v.description,
  }));
}

// ─── Stats ───────────────────────────────────────────────────────────
export async function getStats(): Promise<Stat[]> {
  let stats: Stat[] | null = null;
  try {
    const client = await getClient();
    const result = await client.fetch<Stat[]>(
      statListQuery,
      {},
      { next: { revalidate: 60, tags: ["stat"] } }
    );
    if (result && result.length > 0) stats = result;
  } catch (err) {
    console.error("[getStats] Falling back:", err);
  }
  if (!stats) {
    stats = fallbackStats.map((s, i) => ({
      _id: `fallback-stat-${i}`,
      value: s.value,
      suffix: s.suffix,
      label: s.label,
    }));
  }

  // Public numbers come from facts.json, never from typed-in CMS values.
  const facts = await getFacts();
  return stats
    .filter((s) => !DROPPED_STAT_LABELS.includes(s.label))
    .map((s) => {
      const key = STAT_FACT_KEYS[s.label];
      const fact = key ? facts?.[key] : undefined;
      const parsed = fact ? parseDisplay(fact.display) : null;
      if (fact && parsed) {
        return { ...s, value: parsed.value, suffix: parsed.suffix, display: fact.display };
      }
      if (key) {
        // Feed unreachable: use the lib/constants fallback for this label.
        const fb = fallbackStats.find((f) => f.label === s.label);
        if (fb) return { ...s, value: fb.value, suffix: fb.suffix };
      }
      return s;
    });
}
