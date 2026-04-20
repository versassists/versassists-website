"use client";

/**
 * Sanity Studio configuration for VersAssist.
 * The Studio is embedded in the Next.js app at the /studio route.
 */
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemas";
import { structure } from "./sanity/structure";

export default defineConfig({
  name: "versassist-studio",
  title: "VersAssist CMS",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: {
    types: schemaTypes,
    // Hide "create new" for singleton types in the "New Document" menu.
    templates: (templates) =>
      templates.filter(({ schemaType }) => schemaType !== "siteSettings"),
  },
  document: {
    // Remove "Duplicate" and "Delete" actions on singleton docs.
    actions: (prev, { schemaType }) => {
      if (schemaType === "siteSettings") {
        return prev.filter(
          ({ action }) =>
            action !== "duplicate" && action !== "delete" && action !== "unpublish"
        );
      }
      return prev;
    },
  },
});
