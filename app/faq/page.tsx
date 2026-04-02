import type { Metadata } from "next";
import Link from "next/link";
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
      <section className="bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#16213e] pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary-light mb-4 text-center">FAQ</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight text-center max-w-4xl">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed text-center">
            Everything you need to know about VersAssist. Can&apos;t find the answer? Reach out to our team.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 lg:py-36 bg-gray-50">
        <div className="max-w-2xl mx-auto px-6 flex flex-col items-center">
          <div className="w-full">
            {categories.map((category) => {
              const items = faqItems.filter((item) => item.category === category);
              return (
                <div key={category} className="mb-14 last:mb-0">
                  <h2 className="text-xl font-bold text-gray-900 mb-5 text-center">{category}</h2>
                  <div className="space-y-4">
                    {items.map((item, i) => (
                      <details
                        key={i}
                        className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-28 lg:py-36 bg-white">
        <div className="max-w-2xl mx-auto px-6 flex flex-col items-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-5 text-center max-w-3xl">Still Have Questions?</h2>
          <p className="text-gray-500 mb-10 leading-relaxed text-center">
            We&apos;re here to help. Book a free discovery call or send us an email.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary-dark transition-all">
              Book a Discovery Call <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="mailto:info@versassists.com" className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-gray-300 text-gray-700 font-semibold hover:border-primary hover:text-primary transition-all">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
