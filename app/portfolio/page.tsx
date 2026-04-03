import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { caseStudies } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "See how VersAssist has helped businesses grow with AI-powered virtual assistance. Real case studies, real results.",
};

const caseStudyImages: Record<string, string> = {
  "About Life and Marriage":
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
  "PRISM AI Consultants":
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
  "Carter & Olay Foundation":
    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#16213e] pt-40 pb-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80"
          alt="Business analytics and results dashboard"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-[#1a1a2e]/70 to-[#16213e]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary-light mb-5 text-center">Portfolio</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight text-center max-w-4xl">
            Real Results for{" "}
            <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">Real Businesses</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl leading-relaxed text-center">
            We measure success by your results. Explore how we&apos;ve helped businesses transform and grow.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-32 lg:py-40 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-5 text-center">Case Studies</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 text-center max-w-3xl">Featured Projects</h2>
          <p className="text-gray-500 max-w-xl mb-20 text-lg text-center">
            Deep dives into how we&apos;ve helped our clients achieve measurable results.
          </p>

          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10">
            {caseStudies.map((study) => (
              <div key={study.client} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm text-left hover:shadow-xl hover:shadow-primary/[0.05] hover:-translate-y-1 transition-all duration-300">
                {/* Thumbnail Image */}
                <div className="relative w-full h-48">
                  <Image
                    src={caseStudyImages[study.client] || study.image}
                    alt={study.client}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#16213e] p-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium mb-2">
                    {study.industry}
                  </span>
                  <h3 className="text-xl font-bold text-white">{study.client}</h3>
                </div>
                <div className="p-10">
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
      <section className="py-32 lg:py-40 bg-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-5 text-center">Industries</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 text-center max-w-3xl">We Work Across Industries</h2>
          <p className="text-gray-500 max-w-xl mb-20 text-lg text-center">
            Our AI-enhanced assistants adapt to the unique needs of your industry.
          </p>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
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
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
          alt="Modern workspace"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/92 via-[#1a1a2e]/90 to-[#16213e]/92" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8 text-center max-w-3xl">See What We Can Do for You</h2>
          <p className="text-gray-300 max-w-lg mb-12 text-lg leading-relaxed text-center">
            Every business is unique. Let&apos;s discuss how VersAssist can drive results for yours.
          </p>
          <a href="https://calendly.com/versassist/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-primary text-white font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary-dark transition-all">
            Book a Discovery Call <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  );
}
