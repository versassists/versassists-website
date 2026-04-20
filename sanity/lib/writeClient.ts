import { createClient } from "@sanity/client";
import { apiVersion, dataset, projectId, writeToken } from "../env";

/**
 * Used for migrations and any server-side mutations that require a token.
 * Never import this from client components.
 */
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token: writeToken,
  useCdn: false,
});
