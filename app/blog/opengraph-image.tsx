import { buildOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "VersAssist Blog — AI, Productivity & Growth for Small Business";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return buildOgImage({
    headline: "The VersAssist",
    headlineAccent: "Blog",
    subtitle:
      "Expert insights on virtual assistance, AI productivity, and growth strategies for small businesses.",
  });
}
