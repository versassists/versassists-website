import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { faqItems } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about VersAssist's AI-powered virtual assistance services, pricing, and more.",
};

export default function FAQPage() {
  const categories = [...new Set(faqItems.map((item) => item.category))];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#16213e] pt-40 pb-32">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary-light mb-5 text-center">FAQ</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight text-center max-w-4xl">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl leading-relaxed text-center">
            Everything you need to know about VersAssist. Can&apos;t find the answer? Reach out to our team.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 lg:py-40 bg-gray-50">
        <div className="max-w-2xl mx-auto px-6 flex flex-col items-center">
          <div className="w-full">
            {categories.map((category) => {
              const items = faqItems.filter((item) => item.category === category);
              return (
                <div key={category} className="mb-16 last:mb-0">
                  <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">{category}</h2>
                  <div className="space-y-5">
                    {items.map((item, i) => (
                      <details
                        key={i}
                        className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80" alt="Modern workspace" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/92 via-[#1a1a2e]/90 to-[#16213e]/92" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8 text-center max-w-3xl">Still Have Questions?</h2>
          <p className="text-gray-300 max-w-lg mb-12 text-lg sm:text-xl leading-relaxed text-center">
            We&apos;re here to help. Book a free discovery call or send us an email.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full bg-primary text-white font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary-dark transition-all">
              Book a Discovery Call <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="mailto:info@versassists.com" className="inline-flex items-center justify-center px-10 py-5 rounded-full border border-white/20 text-white font-semibold text-lg hover:border-primary hover:text-primary transition-all">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
