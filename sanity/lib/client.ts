import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn, writeToken } from "../env";

/** Published-only client — used by default in all server components. */
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: "published",
});

/**
 * Preview client — includes draft documents.
 * Only used when Next.js draft mode is enabled.
 * Requires the SANITY_API_WRITE_TOKEN (read token also works).
 */
export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: "previewDrafts",
  token: writeToken,
  stega: { enabled: false },
});
