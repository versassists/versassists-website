import { blogPosts } from "@/lib/blog-posts";
import { buildOgImage, ogSize } from "@/lib/og-image";

export const alt = "VersAssist Blog Post";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  const headline = post?.title ?? "Blog Post";
  // Truncate long titles for the image
  const truncated =
    headline.length > 60 ? headline.slice(0, 57) + "..." : headline;

  return buildOgImage({
    headline: truncated,
    subtitle: post
      ? `By ${post.author} · ${post.category}`
      : "VersAssist Blog",
  });
}
