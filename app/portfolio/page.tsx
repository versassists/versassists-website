import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { caseStudies } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "See how VersAssist has helped businesses grow with AI-powered virtual assistance. Real case studies, real results.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#16213e] pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary-light mb-4 text-center">Portfolio</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight text-center max-w-4xl">
            Real Results for{" "}
            <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">Real Businesses</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed text-center">
            We measure success by your results. Explore how we&apos;ve helped businesses transform and grow.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-28 lg:py-36 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-4 text-center">Case Studies</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5 text-center max-w-3xl">Featured Projects</h2>
          <p className="text-gray-500 max-w-xl mb-20 text-lg text-center">
            Deep dives into how we&apos;ve helped our clients achieve measurable results.
          </p>

          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <div key={study.client} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm text-left hover:shadow-xl hover:shadow-primary/[0.05] hover:-translate-y-1 transition-all duration-300">
                <div className="bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#16213e] p-7">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium mb-2">
                    {study.industry}
                  </span>
                  <h3 className="text-xl font-bold text-white">{study.client}</h3>
                </div>
                <div className="p-7">
                  <div className="mb-5">
                    <p className="text-xs font-semibold tracking-wider uppercase text-gray-400 mb-1.5">Challenge</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{study.challenge}</p>
                  </div>
                  <div className="mb-5">
                    <p className="text-xs font-semibold tracking-wider uppercase text-gray-400 mb-1.5">Solution</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p>
                  </div>
                  <div className="mb-5">
                    <p className="text-xs font-semibold tracking-wider uppercase text-gray-400 mb-1.5">Results</p>
                    <ul className="space-y-2">
                      {study.results.map((result, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-gray-100 pt-5">
                    <p className="text-gray-500 text-sm italic leading-relaxed">&ldquo;{study.testimonial}&rdquo;</p>
                    <p className="text-sm font-semibold text-gray-900 mt-2">&mdash; {study.client}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-28 lg:py-36 bg-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-4 text-center">Industries</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5 text-center max-w-3xl">We Work Across Industries</h2>
          <p className="text-gray-500 max-w-xl mb-20 text-lg text-center">
            Our AI-enhanced assistants adapt to the unique needs of your industry.
          </p>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              "Education & Coaching", "Technology", "Non-Profit", "E-Commerce",
              "Real Estate", "Healthcare", "Consulting", "Finance",
              "Legal", "Creative Services", "SaaS", "Retail",
            ].map((industry) => (
              <div key={industry} className="py-4 px-5 rounded-xl bg-gray-50 border border-gray-100 text-sm font-medium text-gray-700 hover:border-primary/20 hover:bg-primary/[0.03] transition-all">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-36 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative rounded-3xl bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#16213e] px-8 py-16 sm:px-16 sm:py-20 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-accent/15 rounded-full blur-[80px]" />
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 text-center max-w-3xl">See What We Can Do for You</h2>
              <p className="text-gray-400 max-w-lg mb-10 text-lg leading-relaxed text-center">
                Every business is unique. Let&apos;s discuss how VersAssist can drive results for yours.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary-dark transition-all">
                Book a Discovery Call <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
