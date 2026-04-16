import { buildOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "VersAssist Portfolio — Client Results & Case Studies";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return buildOgImage({
    headline: "Our Work in",
    headlineAccent: "Action",
    subtitle:
      "SEO wins, website revamps, social media designs, video editing — real results for real businesses.",
  });
}
