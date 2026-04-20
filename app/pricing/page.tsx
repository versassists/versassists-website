import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  CheckCircle,
  Clock,
  Shield,
  Sparkles,
  ChevronDown,
  Zap,
  Users,
  Target,
  Megaphone,
  Settings,
  Video,
  BookOpen,
  Globe,
  MessageSquare,
  Rocket,
  Layers,
  Monitor,
  PenTool,
  Film,
} from "lucide-react";
import { getPricingPlans, getBoostPacks, getCustomProjects } from "@/sanity/lib/fetchPricing";
import { getFaqList } from "@/sanity/lib/fetchMarketing";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, pricingSchemas } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Virtual Assistant Pricing: Flexible Plans, No Lock-In",
  description:
    "Transparent virtual assistant pricing for small businesses. Flexible hourly plans, hours never expire, no contracts, no lock-in. See plans and book a call.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Virtual Assistant Pricing | VersAssist",
    description:
      "Flexible virtual assistant pricing. Hours never expire. No lock-in contracts.",
    url: "https://www.versassists.com/pricing",
  },
};

export default async function PricingPage() {
  const [pricingPlans, boostPacks, customProjects, faqItems] = await Promise.all([
    getPricingPlans(),
    getBoostPacks(),
    getCustomProjects(),
    getFaqList(),
  ]);
  const pricingFAQ = faqItems.filter((item) => item.category === "Pricing");

  const includedServices = [
    {
      icon: Megaphone,
      title: "Marketing & Content",
      items: [
        "Social posts (reels, carousels, captions, hashtags)",
        "Repurposing content into emails, newsletters, blogs",
        "Canva graphics, sales assets, infographics, comic strips",
      ],
      link: "/services/social-media-virtual-assistant",
    },
    {
      icon: Settings,
      title: "Operations & Admin",
      items: [
        "Calendar and inbox management",
        "CRM setup and lead follow-up flows",
        "Booking and appointment flow",
      ],
      link: "/services/email-management-virtual-assistant",
    },
    {
      icon: Video,
      title: "Video & Audio",
      items: [
        "Promo reels (for books, brands, courses)",
        "Audiograms and podcast uploads",
        "Video shorts with captions and branding",
      ],
      link: "/services/content-writing-virtual-assistant",
    },
    {
      icon: BookOpen,
      title: "Publishing Support",
      items: [
        "Book formatting (interior + cover)",
        "Uploads to KDP or audiobook platforms",
        "Author bio creation, back cover copy",
      ],
      link: "/services/content-writing-virtual-assistant",
    },
    {
      icon: Globe,
      title: "Web & Funnel Execution",
      items: [
        "Wix, Notion, or Squarespace pages",
        "Funnel builds and lead forms",
        "Mobile optimization and integrations",
      ],
      link: "/services/website-development-virtual-assistant",
    },
    {
      icon: MessageSquare,
      title: "Spanish-Speaking VAs Available",
      items: [
        "Full bilingual support across all services",
      ],
      link: "/services",
    },
  ];

  const projectIcons = [Monitor, Layers, Film, PenTool];

  const steps = [
    { num: "1", text: "Choose your prepaid plan" },
    { num: "2", text: "Tell us your top priority" },
    { num: "3", text: "We assign the right VA and begin work" },
    { num: "4", text: "You stay the visionary — we ship the execution" },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Pricing", href: "/pricing" },
          ]),
          ...pricingSchemas,
        ]}
      />
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#16213e] pt-40 pb-32 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.08] border border-white/[0.12] text-sm text-white/80 backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            Flexible, Prepaid Virtual Assistance
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight text-center max-w-4xl">
            Your Outsourced{" "}
            <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">Implementation Team</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl leading-relaxed text-center mb-4">
            VersAssist is your flexible, AI-powered labor engine built to help entrepreneurs, clinicians, and content creators execute quickly.
          </p>
          <p className="text-gray-400 text-base max-w-2xl leading-relaxed text-center mb-10">
            We do the work — from social content to course builds to AI prototypes — handled by a trained virtual team you prepay and draw from as needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a href="#plans" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary-dark transition-all">
              See Plans <ArrowRight className="w-5 h-5" />
            </a>
            <a href="https://calendly.com/versassist/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-lg hover:bg-white/[0.06] backdrop-blur-sm transition-all">
              Talk to Us
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Strip */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "Hours Never Expire", desc: "Use them whenever you need" },
              { icon: Shield, title: "No Lock-In", desc: "Cancel anytime, zero penalties" },
              { icon: Sparkles, title: "AI-Enhanced", desc: "More value per hour" },
              { icon: Zap, title: "Re-Up Anytime", desc: "More hours = lower rate" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 text-center sm:text-left">
                <div className="w-9 h-9 rounded-lg bg-primary/[0.08] flex items-center justify-center shrink-0">
                  <item.icon className="w-4.5 h-4.5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="plans" className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-3">Plans</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-14 text-center">
            Choose Your Plan
          </h2>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-start">
            {pricingPlans.map((plan) => (
              <div
                key={plan._id}
                className={`group relative rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-gray-900 to-gray-950 text-white border-2 border-primary shadow-2xl shadow-primary/20 lg:scale-105"
                    : "bg-white text-gray-900 border border-gray-200 shadow-sm hover:shadow-xl hover:border-primary/30"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-primary-dark text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className={`text-xs mb-5 min-h-[2.5rem] ${plan.highlighted ? "text-gray-400" : "text-gray-500"}`}>
                  {plan.tagline}
                </p>
                <div className={`text-4xl font-extrabold mb-1 ${plan.highlighted ? "bg-gradient-to-r from-primary-light to-white bg-clip-text text-transparent" : ""}`}>
                  {plan.price}
                </div>
                <p className={`text-xs mb-6 ${plan.highlighted ? "text-gray-400" : "text-gray-500"}`}>
                  {plan.period}
                </p>
                <div className={`w-full h-px mb-6 ${plan.highlighted ? "bg-white/10" : "bg-gray-100"}`} />
                <ul className="space-y-2.5 mb-8 text-left">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-xs">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlighted ? "text-primary-light" : "text-primary"}`} />
                      <span className={plan.highlighted ? "text-gray-300" : "text-gray-600"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://calendly.com/versassist/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block py-3 rounded-full font-semibold text-sm transition-all text-center ${
                    plan.highlighted
                      ? "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/25"
                      : "bg-gray-900 text-white hover:bg-gray-800 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-10 text-sm">
            You can re-up at any time, and the more hours you purchase, the lower your rate.
          </p>
        </div>
      </section>

      {/* Boost Packs */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-3">Add-Ons</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 text-center">
            Boost Packs
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-lg">
            Need more capacity? Add a Boost Pack to your existing plan anytime.
          </p>
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6">
            {boostPacks.map((pack, i) => {
              const icons = [Rocket, Zap, Layers];
              const PackIcon = icons[i];
              return (
                <div key={pack._id} className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 text-center hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-12 h-12 rounded-xl bg-primary/[0.08] flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/[0.12] transition-colors">
                    <PackIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{pack.name}</h3>
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent mb-3">{pack.price}</div>
                  <p className="text-gray-500 text-sm">{pack.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-3">Services</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 text-center">
            What&apos;s Included in Your Prepaid Hours
          </h2>
          <p className="text-gray-500 max-w-2xl text-center mb-14">
            You start by prepaying for hours. No setup fees. No expiration. No minimums. You tell us what you need — and we deploy the right VA with the right skillset.
          </p>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedServices.map((service) => (
              <div key={service.title} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/[0.08] to-accent/[0.06] flex items-center justify-center mb-5 group-hover:from-primary/[0.15] group-hover:to-accent/[0.1] transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-gray-900 mb-4 text-lg">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-primary hover:underline"
                >
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <CheckCircle className="w-5 h-5 text-primary shrink-0" />
            <p className="text-gray-600 text-sm">
              Everything above is drawn from your hour bank. Most clients see results within their first 20 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Custom Projects */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#16213e]" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary-light mb-3">Custom Builds</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 text-center">
            Custom Project Builds
          </h2>
          <p className="text-gray-400 max-w-xl text-center mb-14">
            Some deliverables need specialized planning. We price these as flat projects, then maintain and iterate using your hours.
          </p>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
            {customProjects.map((project, i) => {
              const ProjectIcon = projectIcons[i];
              return (
                <div key={project._id} className="group flex items-center gap-5 bg-white/[0.06] backdrop-blur-sm rounded-2xl p-6 border border-white/[0.1] hover:bg-white/[0.1] hover:border-primary/40 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                    <ProjectIcon className="w-6 h-6 text-primary-light" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-white text-sm">{project.name}</h3>
                    <p className="text-gray-400 text-xs">{project.description}</p>
                  </div>
                  <div className="text-xl font-extrabold text-primary-light whitespace-nowrap">{project.price}</div>
                </div>
              );
            })}
          </div>

          <a
            href="https://calendly.com/versassist/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary-dark transition-all"
          >
            Scope a Project <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-3">Process</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 text-center">
            How It Works
          </h2>
          <p className="text-gray-500 text-center mb-16">Four simple steps to start shipping.</p>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connector line (desktop only) */}
            <div className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

            {steps.map((step) => (
              <div key={step.num} className="relative flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center text-xl font-bold mb-5 shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow relative z-10">
                  {step.num}
                </div>
                <p className="text-gray-700 font-semibold text-sm leading-relaxed max-w-[180px]">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 px-8 py-5 rounded-2xl bg-gradient-to-r from-primary/[0.06] to-accent/[0.04] border border-primary/10">
            <p className="text-gray-600 text-sm font-medium text-center">
              Hours don&apos;t expire. There&apos;s no lock-in. Just outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included Bottom */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-14 text-center">
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Personalized Setup",
                desc: "We tailor our setup process to fit your unique requirements, ensuring that our services integrate seamlessly into your operations.",
                gradient: "from-blue-500/10 to-primary/10",
              },
              {
                icon: Target,
                title: "Flexible Support",
                desc: "From administrative tasks to specialized projects, our team is equipped to handle a variety of needs with professionalism and efficiency.",
                gradient: "from-primary/10 to-accent/10",
              },
              {
                icon: Shield,
                title: "Transparent Billing",
                desc: "No hidden fees or surprises. You pay for the hours of service you use, with detailed billing to keep you informed every step of the way.",
                gradient: "from-accent/10 to-blue-500/10",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 border border-gray-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-5`}>
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      {pricingFAQ.length > 0 && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-2xl mx-auto px-6 flex flex-col items-center">
            <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-5 text-center">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-14 text-center">Pricing Questions</h2>

            <div className="w-full space-y-4 text-left">
              {pricingFAQ.map((item, i) => (
                <details
                  key={item._id}
                  className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:border-primary/30 transition-colors"
                  {...(i === 0 ? { open: true } : {})}
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-900 text-[0.95rem] select-none">
                    {item.question}
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 ml-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed -mt-1">{item.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80" alt="Modern workspace" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/92 via-[#1a1a2e]/90 to-[#16213e]/92" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 text-center">
            Ready to Plug In Your Execution Team?
          </h2>
          <p className="text-gray-300 max-w-lg mb-10 text-lg leading-relaxed text-center">
            Pick a plan, or hop on a 15-minute call and we&apos;ll recommend the fastest path to results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a href="https://calendly.com/versassist/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-primary text-white font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary-dark transition-all">
              Book a Quick Call <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#plans" className="inline-flex items-center gap-2 px-10 py-5 rounded-full border border-white/20 text-white font-semibold text-lg hover:bg-white/[0.06] backdrop-blur-sm transition-all">
              Buy Hours Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
