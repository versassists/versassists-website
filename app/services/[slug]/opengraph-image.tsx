import { services } from "@/lib/constants";
import { buildOgImage, ogSize } from "@/lib/og-image";

export const alt = "VersAssist Service";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  return buildOgImage({
    headline: service?.title ?? "Our Service",
    headlineAccent: "Virtual Assistant",
    subtitle: service?.description ?? "AI-powered virtual assistant services for small businesses.",
  });
}
