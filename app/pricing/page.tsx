import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, CheckCircle, Clock, Shield, FileText, Sparkles, ChevronDown } from "lucide-react";
import { pricingPlans, faqItems } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Affordable virtual assistance pricing for small businesses and startups. Flexible plans, hours never expire, no lock-in contracts.",
};

export default function PricingPage() {
  const pricingFAQ = faqItems.filter((item) => item.category === "Pricing");

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#16213e] pt-40 pb-32">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary-light mb-5 text-center">Pricing</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight text-center max-w-4xl">
            Simple, Transparent{" "}
            <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">Pricing</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl leading-relaxed text-center">
            Pick a plan or hop on a 15-minute call and we&apos;ll recommend the fastest path to results.
          </p>
        </div>
      </section>

      {/* Benefits Strip */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "Hours Never Expire", desc: "Use them whenever you need" },
              { icon: Shield, title: "No Lock-In", desc: "Cancel anytime, zero penalties" },
              { icon: FileText, title: "Detailed Billing", desc: "Know exactly what you pay for" },
              { icon: Sparkles, title: "AI-Enhanced", desc: "More value per hour" },
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
      <section className="py-32 lg:py-40 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-10 lg:p-12 text-center ${
                  plan.highlighted
                    ? "bg-gray-900 text-white border-2 border-primary shadow-2xl shadow-primary/20 md:scale-105"
                    : "bg-white text-gray-900 border border-gray-200 shadow-sm"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.highlighted ? "text-gray-400" : "text-gray-500"}`}>
                  {plan.tagline}
                </p>
                <div className="text-3xl font-extrabold mb-1">{plan.price}</div>
                <p className={`text-sm mb-8 ${plan.highlighted ? "text-gray-400" : "text-gray-500"}`}>
                  {plan.period}
                </p>
                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <Check className={`w-4.5 h-4.5 shrink-0 mt-0.5 ${plan.highlighted ? "text-primary-light" : "text-primary"}`} />
                      <span className={plan.highlighted ? "text-gray-300" : "text-gray-600"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://calendly.com/versassist/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block py-3.5 rounded-full font-semibold text-sm transition-all text-center ${
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

          <p className="text-center text-gray-500 mt-12">
            Not sure which plan is right?{" "}
            <a href="https://calendly.com/versassist/30min" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
              Book a free discovery call
            </a>
          </p>
        </div>
      </section>

      {/* Setup Fee */}
      <section className="py-32 lg:py-40 bg-white">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 text-center max-w-3xl">
            One-Time Setup Fee&mdash;$299.99
          </h2>
          <p className="text-gray-500 leading-relaxed mb-20 max-w-xl text-center">
            Every engagement starts with onboarding that covers everything you need to hit the ground running:
          </p>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 text-left max-w-lg">
            {[
              "Custom workflow design for your business",
              "AI tool setup & integration",
              "Team onboarding & training",
              "Communication channel setup",
              "Initial strategy session",
              "First-week quality assurance",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-32 lg:py-40 bg-gray-50">
        <div className="max-w-2xl mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-5 text-center">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-20 text-center max-w-3xl">Pricing Questions</h2>

          <div className="w-full space-y-5 text-left">
            {pricingFAQ.map((item, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="flex items-center justify-between p-7 cursor-pointer font-semibold text-gray-900 text-[0.95rem] select-none">
                  {item.question}
                  <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 ml-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-7 pb-7 text-gray-600 text-sm leading-relaxed -mt-1">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80" alt="Modern workspace" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/92 via-[#1a1a2e]/90 to-[#16213e]/92" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8 text-center max-w-3xl">Let&apos;s Find Your Perfect Plan</h2>
          <p className="text-gray-300 max-w-lg mb-12 text-lg sm:text-xl leading-relaxed text-center">
            Book a free 15-minute call and we&apos;ll recommend the best plan for your business.
          </p>
          <a href="https://calendly.com/versassist/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-primary text-white font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary-dark transition-all">
            Book a Discovery Call <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  );
}
