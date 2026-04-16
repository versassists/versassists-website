import { buildOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "VersAssist Services — AI-Powered Virtual Assistant Services";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return buildOgImage({
    headline: "Our",
    headlineAccent: "Services",
    subtitle:
      "Email management, social media, graphic design, web development, AI consulting, and more.",
  });
}
