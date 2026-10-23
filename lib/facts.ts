/**
 * Shared public numbers.
 *
 * Every public number on the PRISM / VersAssist sites comes from one feed:
 * https://builds.drjeffbullock.com/facts.json (rebuilt daily at 6:20am ET by
 * build_facts.py, checked at 6:35am ET by check_facts.py).
 *
 * The fetch runs on the server, so the real value is in the HTML and renders
 * with JavaScript off. It revalidates hourly. If the feed cannot be read, the
 * homepage falls back to `stats` in lib/constants.ts, and check_facts.py
 * alerts on any drift between that fallback and the feed.
 */

export const FACTS_URL = "https://builds.drjeffbullock.com/facts.json";

export interface Fact {
  value: number;
  display: string;
  source?: string;
  checked_at?: string | null;
  stale?: boolean;
}

export type Facts = Record<string, Fact>;

export async function getFacts(): Promise<Facts | null> {
  try {
    const res = await fetch(FACTS_URL, {
      next: { revalidate: 3600, tags: ["facts"] },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = (await res.json()) as { facts?: Facts };
    return data.facts ?? null;
  } catch (err) {
    console.error("[getFacts] Falling back to lib/constants stats:", err);
    return null;
  }
}

/** "15,000+" -> { value: 15000, suffix: "+" }. Returns null if unparseable. */
export function parseDisplay(display: string): { value: number; suffix: string } | null {
  const m = display.trim().match(/^([\d,]+)\s*(\D*)$/);
  if (!m) return null;
  const value = Number(m[1].replace(/,/g, ""));
  if (!Number.isFinite(value)) return null;
  return { value, suffix: m[2] };
}

/**
 * Homepage stat label -> facts.json key. A stat whose label is listed here
 * always shows the feed's display value, whatever the CMS says.
 */
export const STAT_FACT_KEYS: Record<string, string> = {
  "Clients Served": "vs_clients",
  "Hours Delivered": "vs_hours",
};

/** Stats with no data source. Never shown, even if they exist in the CMS. */
export const DROPPED_STAT_LABELS = ["Client Satisfaction"];
