import { draftMode } from "next/headers";
import { client, previewClient } from "./client";

/**
 * Returns the preview-aware Sanity client when Next.js draft mode is active,
 * otherwise returns the default published-only client.
 *
 * Call this inside Server Components or Server Actions only.
 */
export async function getClient() {
  const { isEnabled } = await draftMode();
  return isEnabled ? previewClient : client;
}
