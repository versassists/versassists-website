import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, X, CheckCircle, Sparkles } from "lucide-react";
import { services } from "@/lib/constants";
import JsonLd from "@/components/seo/JsonLd";
import { servicesSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Virtual Assistant Services: Email, Social, Design & AI",
  description:
    "AI-powered virtual assistant services: email, social media, graphic design, web development, customer support, content and AI consulting. Hire a VA today.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Virtual Assistant Services | VersAssist",
    description:
      "AI-powered virtual assistant services: email, social media, design, web dev, support, content & AI consulting.",
    url: "https://www.versassists.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          ...servicesSchema,
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
          ]),
        ]}
      />
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#16213e] pt-40 pb-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2000&q=80"
          alt="VersAssist virtual assistant team collaborating on client services"
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-[#1a1a2e]/70 to-[#16213e]/80" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.08] border border-white/[0.12] text-sm text-white/80 backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            Virtual Assistant Services
          </div>
          <p className="text-sm font-semibold tracking-wider uppercase text-primary-light mb-5 text-center">Our Services</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight text-center max-w-4xl">
            AI-Powered Virtual Assistant Services That{" "}
            <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
              Drive Results
            </span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl leading-relaxed text-center">
            Eight AI-enhanced virtual assistant services for small businesses and startups. From email management
            and social media to graphic design, web development, customer support, and AI consulting — our trained
            virtual team handles it all.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={`/services/${service.slug}`}
                  className="group relative overflow-hidden bg-white rounded-2xl p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary/[0.06] hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/[0.08] to-accent/[0.06] flex items-center justify-center mb-6 group-hover:from-primary group-hover:to-primary-dark group-hover:bg-gradient-to-br transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2.5 mb-6">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-5 text-center">Compare</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 text-center max-w-3xl">
            VersAssist vs. DIY vs. Full-Time Hire
          </h2>
          <p className="text-gray-500 max-w-xl mb-20 text-lg text-center">
            See how our AI-powered virtual assistants compare to doing it yourself or hiring a full-time employee.
          </p>

          <div className="w-full overflow-x-auto rounded-2xl border border-gray-200 shadow-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-5 text-gray-500 font-medium">Feature</th>
                  <th className="p-5 text-center">
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold">VersAssist</span>
                    <br />
                    <span className="text-gray-500 text-xs">AI-Powered VAs</span>
                  </th>
                  <th className="p-5 text-center">
                    <span className="font-bold text-gray-700">DIY</span>
                    <br />
                    <span className="text-gray-500 text-xs">Do It Yourself</span>
                  </th>
                  <th className="p-5 text-center">
                    <span className="font-bold text-gray-700">Full-Time</span>
                    <br />
                    <span className="text-gray-500 text-xs">In-House Hire</span>
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
                  <tr key={i} className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"} hover:bg-primary/[0.02] transition-colors`}>
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
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
          alt="Modern workspace"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/92 via-[#1a1a2e]/90 to-[#16213e]/92" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8 text-center max-w-3xl">Ready to Hire Your Virtual Assistant?</h2>
          <p className="text-gray-300 max-w-lg mb-12 text-lg leading-relaxed text-center">
            Book a free discovery call and we&apos;ll match you with the perfect AI-enhanced virtual assistant team for your small business.
          </p>
          <a href="https://calendly.com/versassist/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-primary text-white font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary-dark transition-all">
            Book a Discovery Call <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  );
}
