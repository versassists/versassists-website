import { buildOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "About VersAssist — Our Mission, Team & Story";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return buildOgImage({
    headline: "About",
    headlineAccent: "VersAssist",
    subtitle:
      "Founded by Dr. Jeff Bullock & Michael Olaiya — AI-powered virtual assistance for small businesses.",
  });
}
