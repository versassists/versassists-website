import { defineCliConfig } from "sanity/cli";

/**
 * Project ID and dataset are read from .env.local.
 * Duplicated here so the Sanity CLI (`npx sanity`) knows which project to target.
 */
export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  },
});
