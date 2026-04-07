import type { Metadata } from "next";
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
} from "lucide-react";
import { pricingPlans, boostPacks, customProjects, faqItems } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Affordable virtual assistance pricing for small businesses and startups. Flexible plans, hours never expire, no lock-in contracts.",
};

export default function PricingPage() {
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
    },
    {
      icon: Settings,
      title: "Operations & Admin",
      items: [
        "Calendar and inbox management",
        "CRM setup and lead follow-up flows",
        "Booking and appointment flow",
      ],
    },
    {
      icon: Video,
      title: "Video & Audio",
      items: [
        "Promo reels (for books, brands, courses)",
        "Audiograms and podcast uploads",
        "Video shorts with captions and branding",
      ],
    },
    {
      icon: BookOpen,
      title: "Publishing Support",
      items: [
        "Book formatting (interior + cover)",
        "Uploads to KDP or audiobook platforms",
        "Author bio creation, back cover copy",
      ],
    },
    {
      icon: Globe,
      title: "Web & Funnel Execution",
      items: [
        "Wix, Notion, or Squarespace pages",
        "Funnel builds and lead forms",
        "Mobile optimization and integrations",
      ],
    },
    {
      icon: MessageSquare,
      title: "Spanish-Speaking VAs Available",
      items: [
        "Full bilingual support across all services",
      ],
    },
  ];

  const steps = [
    { num: "1", text: "Choose your prepaid plan" },
    { num: "2", text: "Tell us your top priority" },
    { num: "3", text: "We assign the right VA and begin work" },
    { num: "4", text: "You stay the visionary — we ship the execution" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#16213e] pt-40 pb-32">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary-light mb-5 text-center">Pricing</p>
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
            <a href="#plans" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold text-lg shadow-lg shadow-primary/25 hover:bg-primary-dark transition-all">
              See Plans <ArrowRight className="w-5 h-5" />
            </a>
            <a href="https://calendly.com/versassist/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-lg hover:bg-white/[0.06] transition-all">
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
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-start">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 text-center ${
                  plan.highlighted
                    ? "bg-gray-900 text-white border-2 border-primary shadow-2xl shadow-primary/20 lg:scale-105"
                    : "bg-white text-gray-900 border border-gray-200 shadow-sm"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className={`text-xs mb-5 min-h-[2.5rem] ${plan.highlighted ? "text-gray-400" : "text-gray-500"}`}>
                  {plan.tagline}
                </p>
                <div className="text-3xl font-extrabold mb-1">{plan.price}</div>
                <p className={`text-xs mb-6 ${plan.highlighted ? "text-gray-400" : "text-gray-500"}`}>
                  {plan.period}
                </p>
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
                      : "bg-gray-900 text-white hover:bg-gray-800"
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
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-3">Add-Ons</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-10 text-center">
            Boost Packs
          </h2>
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6">
            {boostPacks.map((pack) => (
              <div key={pack.name} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{pack.name}</h3>
                <div className="text-2xl font-extrabold text-primary mb-3">{pack.price}</div>
                <p className="text-gray-500 text-sm">{pack.description}</p>
              </div>
            ))}
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

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {includedServices.map((service) => (
              <div key={service.title} className="bg-white rounded-2xl p-8 border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-primary/[0.08] flex items-center justify-center mb-4">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-10 text-sm max-w-xl">
            Everything listed above is drawn directly from your hour bank. You only pay for the hours used. Most clients start seeing results within their first 20 hours.
          </p>
        </div>
      </section>

      {/* Custom Projects */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-3">Custom Builds</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 text-center">
            Custom Project Builds
          </h2>
          <p className="text-gray-500 max-w-xl text-center mb-14">
            Some deliverables need specialized planning. We can price these as flat projects, then maintain and iterate using your hours.
          </p>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
            {customProjects.map((project) => (
              <div key={project.name} className="flex items-center justify-between bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div>
                  <h3 className="font-bold text-gray-900">{project.name}</h3>
                  <p className="text-gray-500 text-sm">{project.description}</p>
                </div>
                <div className="text-lg font-extrabold text-primary whitespace-nowrap ml-4">{project.price}</div>
              </div>
            ))}
          </div>

          <a
            href="https://calendly.com/versassist/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-all"
          >
            Scope a Project <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-3">Process</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 text-center">
            How It Works
          </h2>
          <p className="text-gray-500 text-center mb-14">Four simple steps to start shipping.</p>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                  {step.num}
                </div>
                <p className="text-gray-700 font-medium text-sm">{step.text}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-12 text-sm font-medium">
            Hours don&apos;t expire. There&apos;s no lock-in. Just outcomes.
          </p>
        </div>
      </section>

      {/* What's Included Bottom */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-12 text-center">
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Personalized Setup",
                desc: "We tailor our setup process to fit your unique requirements, ensuring that our services integrate seamlessly into your operations.",
              },
              {
                icon: Target,
                title: "Flexible Support",
                desc: "From administrative tasks to specialized projects, our team is equipped to handle a variety of needs with professionalism and efficiency.",
              },
              {
                icon: Shield,
                title: "Transparent Billing",
                desc: "No hidden fees or surprises. You pay for the hours of service you use, with detailed billing to keep you informed every step of the way.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/[0.08] flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      {pricingFAQ.length > 0 && (
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-2xl mx-auto px-6 flex flex-col items-center">
            <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-5 text-center">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-14 text-center">Pricing Questions</h2>

            <div className="w-full space-y-4 text-left">
              {pricingFAQ.map((item, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
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
        <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80" alt="Modern workspace" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/92 via-[#1a1a2e]/90 to-[#16213e]/92" />
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
            <a href="#plans" className="inline-flex items-center gap-2 px-10 py-5 rounded-full border border-white/20 text-white font-semibold text-lg hover:bg-white/[0.06] transition-all">
              Buy Hours Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
