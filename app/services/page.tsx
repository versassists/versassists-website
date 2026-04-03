import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, X, CheckCircle } from "lucide-react";
import { services } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore VersAssist's AI-powered virtual assistance services: email management, social media, graphic design, website development, customer support, content creation, and AI consulting.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#16213e] pt-40 pb-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2000&q=80"
          alt="Team collaborating on digital services"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-[#1a1a2e]/70 to-[#16213e]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary-light mb-5 text-center">Our Services</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight text-center max-w-4xl">
            AI-Enhanced Services That{" "}
            <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
              Drive Results
            </span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl leading-relaxed text-center">
            From social content to course builds to AI prototypes&mdash;our trained virtual team handles it all.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 lg:py-40 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group bg-white rounded-2xl p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary/[0.06] hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/[0.08] flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2.5">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-32 lg:py-40 bg-white">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-5 text-center">Compare</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 text-center max-w-3xl">
            Why VersAssist Over Alternatives?
          </h2>
          <p className="text-gray-500 max-w-xl mb-20 text-lg text-center">
            See how AI-powered VAs compare to doing it yourself or hiring full-time.
          </p>

          <div className="w-full overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-5 text-gray-500 font-medium">Feature</th>
                  <th className="p-5 text-center">
                    <span className="text-primary font-bold">VersAssist</span>
                    <br />
                    <span className="text-gray-400 text-xs">AI-Powered VAs</span>
                  </th>
                  <th className="p-5 text-center">
                    <span className="font-bold text-gray-700">DIY</span>
                    <br />
                    <span className="text-gray-400 text-xs">Do It Yourself</span>
                  </th>
                  <th className="p-5 text-center">
                    <span className="font-bold text-gray-700">Full-Time</span>
                    <br />
                    <span className="text-gray-400 text-xs">In-House Hire</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Monthly Cost", va: "Flexible hourly", diy: "Your time", ft: "$3,000–6,000+" },
                  { feature: "AI-Enhanced Productivity", va: true, diy: false, ft: false },
                  { feature: "No Long-Term Contracts", va: true, diy: true, ft: false },
                  { feature: "Scale Up/Down Instantly", va: true, diy: false, ft: false },
                  { feature: "Multi-Skill Coverage", va: true, diy: false, ft: false },
                  { feature: "Hours Never Expire", va: true, diy: "N/A", ft: "N/A" },
                  { feature: "Dedicated Account Manager", va: true, diy: false, ft: false },
                  { feature: "Quality-Checked Deliverables", va: true, diy: "Varies", ft: "Varies" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="p-5 text-gray-700 font-medium text-left">{row.feature}</td>
                    {[row.va, row.diy, row.ft].map((val, j) => (
                      <td key={j} className="p-5 text-center">
                        {val === true ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : val === false ? (
                          <X className="w-5 h-5 text-red-400 mx-auto" />
                        ) : (
                          <span className="text-gray-500">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8 text-center max-w-3xl">Ready to Delegate and Grow?</h2>
          <p className="text-gray-300 max-w-lg mb-12 text-lg leading-relaxed text-center">
            Book a free discovery call and we&apos;ll match you with the perfect AI-enhanced virtual assistant team.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-primary text-white font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary-dark transition-all">
            Book a Discovery Call <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
