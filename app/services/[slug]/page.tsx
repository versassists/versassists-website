import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Target,
} from "lucide-react";
import {
  getService,
  getServiceList,
  getServiceSlugs,
} from "@/sanity/lib/fetchServices";
import { resolveIcon } from "@/lib/icon-map";
import { services as fallbackServices } from "@/lib/constants";
import JsonLd from "@/components/seo/JsonLd";
import { serviceLandingSchema, breadcrumbSchema } from "@/lib/schemas";

type Params = { slug: string };

export async function generateStaticParams() {
  const slugs = await getServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.seoTitle,
    description: service.seoDescription,
    keywords: service.keywords,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `https://www.versassists.com/services/${service.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: service.seoTitle,
      description: service.seoDescription,
    },
  };
}

export default async function ServiceLandingPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) notFound();

  const Icon = resolveIcon(service.iconName);
  const allServices = await getServiceList();
  const otherServices = allServices
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  // The JSON-LD builder expects the legacy Service shape (with a Lucide icon
  // component and required string fields). Use the hardcoded version when it
  // exists so structured data stays identical; fall back to a compatible shape.
  const legacyForSchema = fallbackServices.find((s) => s.slug === service.slug) ?? {
    icon: Icon,
    slug: service.slug,
    title: service.title,
    shortTitle: service.shortTitle,
    description: service.description,
    features: service.features,
    seoTitle: service.seoTitle ?? service.title,
    seoDescription: service.seoDescription ?? service.description,
    heroHeadline: service.heroHeadline,
    heroSubheadline: service.heroSubheadline,
    longDescription: service.longDescription,
    benefits: service.benefits,
    idealFor: service.idealFor,
    keywords: service.keywords ?? [],
  };

  return (
    <>
      <JsonLd
        data={[
          serviceLandingSchema(legacyForSchema),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: service.title, href: `/services/${service.slug}` },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#16213e] pt-36 pb-24">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>

          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.08] border border-white/[0.12] text-sm text-white/80 backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            AI-Powered Virtual Assistant
          </div>

          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6 shadow-lg shadow-primary/20">
            <Icon className="w-8 h-8 text-white" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto">
            {service.heroHeadline}
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            {service.heroSubheadline}
          </p>
          <a
            href="https://calendly.com/versassist/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary-dark transition-all"
          >
            Book a Discovery Call <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Long description */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-3 text-center">
            Overview
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-center">
            What You Get With a VersAssist {service.shortTitle}
          </h2>
          <div className="space-y-6">
            {service.longDescription.map((para, i) => (
              <p key={i} className="text-gray-600 text-lg leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-3 text-center">
            What&apos;s Included
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-14 text-center">
            {service.title} Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {service.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/[0.08] flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-3 text-center">
            Why It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-14 text-center">
            Benefits of a VersAssist {service.shortTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((b, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-5 shadow-md">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg leading-snug">
                  {b.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-3 text-center">
            Who It&apos;s For
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-14 text-center">
            Is a {service.shortTitle} Right for You?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {service.idealFor.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/[0.08] flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <p className="text-gray-700 leading-relaxed pt-1">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-3 text-center">
            More Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-14 text-center">
            Other Virtual Assistant Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((s) => {
              const OtherIcon = resolveIcon(s.iconName);
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary/[0.06] hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/[0.08] to-accent/[0.06] flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-primary-dark transition-colors">
                    <OtherIcon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                    {s.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
          alt="Modern office where virtual assistant services are delivered"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/92 via-[#1a1a2e]/90 to-[#16213e]/92" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 text-center max-w-2xl">
            Ready to Hire Your {service.shortTitle}?
          </h2>
          <p className="text-gray-300 max-w-lg mb-10 text-lg leading-relaxed text-center">
            Book a free 15-minute discovery call. We&apos;ll learn about your business and match you
            with the perfect AI-powered virtual assistant.
          </p>
          <a
            href="https://calendly.com/versassist/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary-dark transition-all"
          >
            Book a Discovery Call <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  );
}
