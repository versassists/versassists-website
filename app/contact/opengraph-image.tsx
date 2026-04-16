import { buildOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Contact VersAssist — Book a Free Discovery Call";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return buildOgImage({
    headline: "Get in",
    headlineAccent: "Touch",
    subtitle:
      "Book a free 30-minute discovery call or fill out our intake form. Let's grow your business together.",
  });
}
