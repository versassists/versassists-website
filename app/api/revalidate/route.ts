import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

const WEBHOOK_SECRET = process.env.SANITY_WEBHOOK_SECRET;

/**
 * Sanity webhook handler — revalidates Next.js cache tags
 * when documents are created, updated, or deleted.
 *
 * Configure in Sanity → API → Webhooks:
 *   URL:    https://your-domain.com/api/revalidate
 *   Secret: (matches SANITY_WEBHOOK_SECRET env var)
 *   Filter: _type in ["siteSettings","blogPost","author","service","faqItem","testimonial","teamMember","value","stat","pricingPlan","boostPack","customProject"]
 */
export async function POST(req: NextRequest) {
  try {
    if (!WEBHOOK_SECRET) {
      return NextResponse.json(
        { message: "Missing SANITY_WEBHOOK_SECRET env var" },
        { status: 500 }
      );
    }

    const { isValidSignature, body } = await parseBody<{
      _type: string;
      slug?: { current?: string };
    }>(req, WEBHOOK_SECRET);

    if (!isValidSignature) {
      return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
    }

    if (!body?._type) {
      return NextResponse.json({ message: "Bad request" }, { status: 400 });
    }

    const tags: string[] = [body._type];

    // For blog posts and services, also revalidate the specific slug tag
    if (body.slug?.current) {
      tags.push(`${body._type}:${body.slug.current}`);
    }

    // Revalidate all matched tags
    for (const tag of tags) {
      revalidateTag(tag, "default");
    }

    return NextResponse.json({
      revalidated: true,
      type: body._type,
      tags,
      now: Date.now(),
    });
  } catch (err: any) {
    console.error("[revalidate]", err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
