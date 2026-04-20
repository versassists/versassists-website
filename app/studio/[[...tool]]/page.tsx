/**
 * Sanity Studio embedded at /studio.
 * This is a server component that exports the Studio's metadata and viewport.
 * The actual Studio UI renders in a client component (Studio.tsx).
 */
import { Studio } from "./Studio";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <Studio />;
}
