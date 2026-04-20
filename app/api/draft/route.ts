import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

/**
 * Enables Next.js draft mode so all fetchers switch to the preview client.
 *
 * Usage:
 *   /api/draft?secret=<SANITY_PREVIEW_SECRET>&slug=/blog/my-post
 *
 * The Sanity Studio "Open Preview" button can link here.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug") || "/";

  // Validate the secret to prevent unauthorized draft access.
  if (secret !== process.env.SANITY_PREVIEW_SECRET) {
    return new Response("Invalid secret", { status: 401 });
  }

  const draft = await draftMode();
  draft.enable();
  redirect(slug);
}
