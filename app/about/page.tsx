import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Lightbulb,
  Award,
  Handshake,
  Eye,
  Rocket,
  Target,
  Users,
  Sparkles,
} from "lucide-react";
import { getTeam, getValues } from "@/sanity/lib/fetchMarketing";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, founderSchemas } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "About VersAssist: AI-Powered Virtual Assistant Company",
  description:
    "Meet VersAssist — founded by Dr. Jeff Bullock and Michael Olaiya to deliver AI-powered virtual assistants to small businesses. Expert-led. No lock-in.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About VersAssist | AI-Powered Virtual Assistant Company",
    description:
      "Founded by Dr. Jeff Bullock and Michael Olaiya. AI-enhanced virtual assistants for small businesses.",
    url: "https://www.versassists.com/about",
  },
};

const valueIcons = [Lightbulb, Award, Handshake, Eye];

export default async function AboutPage() {
  const team = await getTeam();
  const values = await getValues();
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
          ]),
          ...founderSchemas,
        ]}
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#16213e] pt-40 pb-32">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-accent/8 rounded-full blur-[100px]" />
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.08] border border-white/[0.12] text-sm text-white/80 backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            Our Story
          </div>
          <p className="text-sm font-semibold tracking-wider uppercase text-primary-light mb-5 text-center">About VersAssist</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight text-center max-w-4xl">
            Built to Empower{" "}
            <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
              Your Growth
            </span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl leading-relaxed text-center">
            We saw a gap in the market&mdash;small businesses needed flexible,
            AI-powered support that traditional VA companies couldn&apos;t provide.
            So we built VersAssist.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="text-center lg:text-left">
              <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-5">Our Mission</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
                Empowering Businesses Through AI-Driven Partnership
              </h2>
              <p className="text-gray-500 leading-relaxed text-lg mb-6">
                VersAssist was founded to provide a dynamic range of customizable
                virtual assistance services, rooted in a partnership-focused
                approach. We don&apos;t just complete tasks&mdash;we integrate seamlessly
                with your operations, understand your goals, and leverage AI to
                drive measurable growth.
              </p>
              <p className="text-gray-500 leading-relaxed text-lg mb-10">
                Our commitment to excellence, innovation, and client success
                drives everything we do. In today&apos;s fast-paced digital
                landscape, we alleviate business challenges with advanced AI
                technology&mdash;giving entrepreneurs the freedom to focus on what
                matters most.
              </p>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { icon: Rocket, label: "Founded with Purpose" },
                  { icon: Target, label: "Results-Driven" },
                  { icon: Users, label: "Partnership Model" },
                  { icon: Lightbulb, label: "AI Innovation" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 hover:bg-primary/[0.06] rounded-xl transition-colors duration-200">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/[0.08] to-accent/[0.06] flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                alt="Team collaborating on strategy"
                fill
                sizes="(min-width:1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-5 text-center">Our Story</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-center max-w-3xl">How VersAssist Began</h2>

          <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden shadow-lg mb-16">
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80"
              alt="Startup team meeting"
              fill
              sizes="(min-width:768px) 720px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="w-full text-gray-500 leading-relaxed text-lg space-y-8 text-left sm:text-center">
            <p>
              Dr. Jeff Bullock and Michael Olaiya saw a recurring problem across
              small businesses and startups: entrepreneurs were spending 60&ndash;70% of
              their time on administrative tasks&mdash;<Link href="/services/email-management-virtual-assistant" className="text-primary hover:underline">email</Link>, <Link href="/services/calendar-scheduling-virtual-assistant" className="text-primary hover:underline">scheduling</Link>, <Link href="/services/social-media-virtual-assistant" className="text-primary hover:underline">social
              media</Link>, <Link href="/services/customer-support-virtual-assistant" className="text-primary hover:underline">customer inquiries</Link>&mdash;instead of growing their business.
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
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-5 text-center">Leadership</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 text-center max-w-3xl">
            Meet the Team
          </h2>
          <p className="text-gray-500 max-w-xl mb-20 text-lg leading-relaxed text-center">
            Experienced leaders driving innovation in virtual assistance.
          </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member) => (
              <div
                key={member._id}
                className="group overflow-hidden relative bg-gray-50 rounded-2xl p-10 text-center border border-gray-100 hover:shadow-xl hover:shadow-primary/[0.05] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                {member.imageUrl && (
                  <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-8 shadow-lg shadow-primary/20 ring-2 ring-primary/20">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-5">{member.role}</p>
                <p className="text-gray-500 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-5 text-center">Our Values</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 text-center max-w-3xl">What We Stand For</h2>
          <p className="text-gray-500 max-w-xl mb-20 text-lg leading-relaxed text-center">
            These core values guide every decision we make.
          </p>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => {
              const Icon = valueIcons[i];
              return (
                <div key={value._id} className="bg-white rounded-2xl p-9 text-center border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 group">
                  <div className="mx-auto w-14 h-14 rounded-xl bg-gradient-to-br from-primary/[0.08] to-accent/[0.06] group-hover:from-primary/[0.15] group-hover:to-accent/[0.1] transition-colors flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-3">{value.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-8 text-center max-w-2xl">Join the VersAssist Family</h2>
          <p className="text-gray-300 max-w-lg mb-12 text-lg leading-relaxed text-center">
            Discover how our AI-powered team can transform your business operations.
          </p>
          <a href="https://calendly.com/versassist/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-primary text-white font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary-dark transition-all">
            Book a Discovery Call <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  );
}
