/**
 * Fetchers for Pricing Plans, Boost Packs, and Custom Projects.
 * Each has a hardcoded fallback via `@/lib/constants` so the site never
 * breaks if the Sanity fetch fails.
 */
import { getClient } from "./getClient";
import {
  pricingPlanListQuery,
  boostPackListQuery,
  customProjectListQuery,
} from "./queries";
import {
  pricingPlans as fallbackPlans,
  boostPacks as fallbackBoosts,
  customProjects as fallbackProjects,
} from "@/lib/constants";

// ─── Types ───────────────────────────────────────────────────────────
export interface PricingPlan {
  _id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export interface BoostPack {
  _id: string;
  name: string;
  price: string;
  description: string;
}

export interface CustomProject {
  _id: string;
  name: string;
  description: string;
  price: string;
}

// ─── Pricing Plans ───────────────────────────────────────────────────
export async function getPricingPlans(): Promise<PricingPlan[]> {
  try {
    const client = await getClient();
    const result = await client.fetch<PricingPlan[]>(
      pricingPlanListQuery,
      {},
      { next: { revalidate: 60, tags: ["pricingPlan"] } }
    );
    if (result && result.length > 0) return result;
  } catch (err) {
    console.error("[getPricingPlans] Falling back:", err);
  }
  return fallbackPlans.map((p, i) => ({
    _id: `fallback-plan-${i}`,
    name: p.name,
    tagline: p.tagline,
    price: p.price,
    period: p.period,
    features: p.features,
    highlighted: p.highlighted,
    cta: p.cta,
  }));
}

// ─── Boost Packs ─────────────────────────────────────────────────────
export async function getBoostPacks(): Promise<BoostPack[]> {
  try {
    const client = await getClient();
    const result = await client.fetch<BoostPack[]>(
      boostPackListQuery,
      {},
      { next: { revalidate: 60, tags: ["boostPack"] } }
    );
    if (result && result.length > 0) return result;
  } catch (err) {
    console.error("[getBoostPacks] Falling back:", err);
  }
  return fallbackBoosts.map((b, i) => ({
    _id: `fallback-boost-${i}`,
    name: b.name,
    price: b.price,
    description: b.description,
  }));
}

// ─── Custom Projects ─────────────────────────────────────────────────
export async function getCustomProjects(): Promise<CustomProject[]> {
  try {
    const client = await getClient();
    const result = await client.fetch<CustomProject[]>(
      customProjectListQuery,
      {},
      { next: { revalidate: 60, tags: ["customProject"] } }
    );
    if (result && result.length > 0) return result;
  } catch (err) {
    console.error("[getCustomProjects] Falling back:", err);
  }
  return fallbackProjects.map((c, i) => ({
    _id: `fallback-project-${i}`,
    name: c.name,
    description: c.description,
    price: c.price,
  }));
}
