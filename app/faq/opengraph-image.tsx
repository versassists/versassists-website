import { buildOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "VersAssist FAQ — Common Questions About Virtual Assistants";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return buildOgImage({
    headline: "Frequently Asked",
    headlineAccent: "Questions",
    subtitle:
      "Everything you need to know about VersAssist's virtual assistant services, pricing, and getting started.",
  });
}
