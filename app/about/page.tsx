import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Lightbulb,
  Award,
  Handshake,
  Eye,
  Rocket,
  Target,
  Users,
} from "lucide-react";
import { team, values } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about VersAssist — founded by Dr. Jeff Bullock and Michael Olaiya to provide AI-powered virtual assistance for small businesses and startups.",
};

const valueIcons = [Lightbulb, Award, Handshake, Eye];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#16213e] pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary-light mb-4 text-center">About VersAssist</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight text-center max-w-4xl">
            Built to Empower{" "}
            <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
              Your Growth
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed text-center">
            We saw a gap in the market&mdash;small businesses needed flexible,
            AI-powered support that traditional VA companies couldn&apos;t provide.
            So we built VersAssist.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-28 lg:py-36 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-4">Our Mission</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
                Empowering Businesses Through AI-Driven Partnership
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                VersAssist was founded to provide a dynamic range of customizable
                virtual assistance services, rooted in a partnership-focused
                approach. We don&apos;t just complete tasks&mdash;we integrate seamlessly
                with your operations, understand your goals, and leverage AI to
                drive measurable growth.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Our commitment to excellence, innovation, and client success
                drives everything we do. In today&apos;s fast-paced digital
                landscape, we alleviate business challenges with advanced AI
                technology&mdash;giving entrepreneurs the freedom to focus on what
                matters most.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Rocket, label: "Founded with Purpose" },
                  { icon: Target, label: "Results-Driven" },
                  { icon: Users, label: "Partnership Model" },
                  { icon: Lightbulb, label: "AI Innovation" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/[0.08] flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border border-gray-100">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/20">
                    <span className="text-white font-bold text-3xl">V</span>
                  </div>
                  <p className="text-gray-400 text-sm">Company Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-28 lg:py-36 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-4 text-center">Our Story</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-20 text-center max-w-3xl">How VersAssist Began</h2>

          <div className="w-full text-gray-500 leading-relaxed space-y-6 text-left sm:text-center">
            <p>
              Dr. Jeff Bullock and Michael Olaiya saw a recurring problem across
              small businesses and startups: entrepreneurs were spending 60&ndash;70% of
              their time on administrative tasks&mdash;email, scheduling, social
              media, customer inquiries&mdash;instead of growing their business.
            </p>
            <p>
              Traditional virtual assistant companies offered generic support with
              limited scalability. The emerging wave of AI tools was transforming
              productivity, but most small businesses didn&apos;t have the time or
              expertise to implement them.
            </p>
            <p>
              VersAssist was born to bridge that gap. By training a team of
              skilled virtual assistants on cutting-edge AI tools and workflows,
              we created a service that delivers the productivity of an entire
              department&mdash;at a fraction of the cost.
            </p>
            <p>
              Today, VersAssist serves businesses across industries&mdash;from
              coaching and consulting to technology, non-profits, and
              e-commerce&mdash;helping them reclaim their time and accelerate growth.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-28 lg:py-36 bg-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-4 text-center">Leadership</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5 text-center max-w-3xl">
            Meet the Team
          </h2>
          <p className="text-gray-500 max-w-xl mb-20 text-lg text-center">
            Experienced leaders driving innovation in virtual assistance.
          </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 hover:shadow-xl hover:shadow-primary/[0.05] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
                  <span className="text-white font-bold text-2xl">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 lg:py-36 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-4 text-center">Our Values</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5 text-center max-w-3xl">What We Stand For</h2>
          <p className="text-gray-500 max-w-xl mb-20 text-lg text-center">
            These core values guide every decision we make.
          </p>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, i) => {
              const Icon = valueIcons[i];
              return (
                <div key={value.title} className="bg-white rounded-2xl p-7 text-center border border-gray-100 shadow-sm">
                  <div className="mx-auto w-12 h-12 rounded-xl bg-primary/[0.08] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-36 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative rounded-3xl bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#16213e] px-8 py-16 sm:px-16 sm:py-20 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-accent/15 rounded-full blur-[80px]" />
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 text-center max-w-3xl">Join the VersAssist Family</h2>
              <p className="text-gray-400 max-w-lg mb-10 text-lg leading-relaxed text-center">
                Discover how our AI-powered team can transform your business operations.
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
