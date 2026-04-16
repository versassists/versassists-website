import { buildOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "VersAssist Pricing — Flexible Virtual Assistant Plans";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return buildOgImage({
    headline: "Flexible",
    headlineAccent: "Pricing",
    subtitle:
      "Prepaid hours that never expire. No lock-in contracts. AI-enhanced virtual assistants.",
  });
}
