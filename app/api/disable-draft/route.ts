import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

/**
 * Disables Next.js draft mode and redirects back to the page.
 *
 * Usage: /api/disable-draft?slug=/blog/my-post
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug") || "/";

  const draft = await draftMode();
  draft.disable();
  redirect(slug);
}
