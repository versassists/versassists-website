import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Clock,
  Shield,
  TrendingUp,
  Users,
  CheckCircle,
  Zap,
  Target,
  Star,
  ChevronDown,
  Quote,
} from "lucide-react";
import { getServiceList } from "@/sanity/lib/fetchServices";
import { getTestimonials, getStats, getFaqList } from "@/sanity/lib/fetchMarketing";
import { resolveIcon } from "@/lib/icon-map";
import StatCounter from "@/components/ui/StatCounter";
import VideoTestimonials from "@/components/ui/VideoTestimonials";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schemas";
import ScrollAnimationWrapper from "@/components/ui/ScrollAnimationWrapper";

export const metadata: Metadata = {
  title:
    "AI-Powered Virtual Assistants for Small Business | VersAssist",
  description:
    "Hire AI-powered virtual assistants for small business. Email, social, design, web dev, support and AI automation. Hours never expire. No lock-in.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AI-Powered Virtual Assistants for Small Business | VersAssist",
    description:
      "Hire AI-enhanced virtual assistants that work 3x faster. Hours never expire. No lock-in contracts.",
    url: "https://www.versassists.com",
  },
};

const clientLogos: {
  name: string;
  src: string;
  bg?: string;
  size?: "lg" | "xl";
  blend?: boolean;
}[] = [
  { name: "The Nursing Spot", src: "/logos/nursing%20spot.png", bg: "white" },
  { name: "Carter & Olay Foundation", src: "/logos/The%20Carter%20and%20Olay_Logo%20Horizontal%20TM.avif" },
  { name: "PRISM", src: "/logos/prism-logo.webp", bg: "dark", size: "lg" },
  { name: "PharmDToBe Guides", src: "/logos/444-300x265.png", size: "xl" },
  { name: "About Life & Marriage", src: "/logos/Logo-2-1-1.webp" },
  { name: "Edge Medical Writing", src: "/logos/edge-logo.png", bg: "white" },
  { name: "Lehigh Valley Dryer Vent Solutions", src: "/logos/dryer%20vent%20logo.png", bg: "white", size: "lg" },
  { name: "CavemanBrain", src: "/logos/Caveman-Logo.png" },
  { name: "Cara Law", src: "/logos/logo-Cara-Law-new-york-city.webp" },
  { name: "Allentown Medical Massage", src: "/logos/685c7474695f780b1a71285e_AMM%20Logo%20(horizontal,%20black)@4x.avif" },
  { name: "Quill & Co.", src: "/logos/Quill%20and%20Co.avif", bg: "white" },
  { name: "Jacinth Media Productions", src: "/logos/jmp-logo-new-625MsPAz.png", size: "lg" },
  { name: "WH Cornerstone Investments", src: "/logos/whc-logo-for-website.png" },
  { name: "CDC Pressure Washing", src: "/logos/cdc%20pressure%20wash.jpg", bg: "white", size: "xl" },
  { name: "Coach Nic", src: "/logos/Untitled.jpg", bg: "white", size: "lg" },
  { name: "MJ Cleaning Solutions", src: "/logos/Untitled-design-54-1920w.webp", blend: true },
  { name: "ALE Media", src: "/logos/ALEMedia%20Logo%20(Large%20Color).avif", size: "lg" },
  { name: "Watsvine Consulting", src: "/logos/qt=q_95.webp", bg: "dark" },
  { name: "Mind Over Plates", src: "/logos/mind%20over%20plates.avif", bg: "white" },
  { name: "Weaver Enterprises & Investments", src: "/logos/WEI.avif", bg: "dark", size: "lg" },
  { name: "Unlocking Luxury", src: "/logos/unlocking%20luxury.png", bg: "white" },
  { name: "MilMoves", src: "/logos/logs%20milmoves.png", bg: "white" },
];

export default async function Home() {
  const [services, testimonials, stats, faqItems] = await Promise.all([
    getServiceList(),
    getTestimonials(),
    getStats(),
    getFaqList(),
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }])} />

      {/* ══════════════════════════════════════════════════════════
          HERO — Cinematic dark section with gradient mesh orbs
      ══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
          alt="AI-powered virtual assistant team collaborating with small business client"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Rich dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070b18]/96 via-[#0a1028]/93 to-[#080c1a]/96" />

        {/* Animated gradient mesh orbs */}
        <div className="absolute top-[5%] right-[15%] w-[650px] h-[650px] bg-primary/12 rounded-full blur-[160px] animate-mesh-drift-1" />
        <div className="absolute bottom-[5%] left-[10%] w-[550px] h-[550px] bg-accent/10 rounded-full blur-[140px] animate-mesh-drift-2" />
        <div className="absolute top-[40%] left-[45%] -translate-x-1/2 w-[400px] h-[400px] bg-primary-light/6 rounded-full blur-[130px] animate-mesh-drift-3" />

        {/* Noise texture */}
        <div className="noise absolute inset-0" />

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 z-[1] opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating particles */}
        <div className="absolute top-[18%] left-[12%] w-1 h-1 rounded-full bg-primary/50 animate-float" />
        <div className="absolute top-[28%] right-[18%] w-1.5 h-1.5 rounded-full bg-accent/40 animate-float-delayed" />
        <div className="absolute bottom-[32%] left-[22%] w-1 h-1 rounded-full bg-white/15 animate-float-slow" />
        <div className="absolute top-[45%] right-[8%] w-2 h-2 rounded-full bg-primary-light/15 animate-float-delayed" />
        <div className="absolute bottom-[22%] right-[28%] w-1 h-1 rounded-full bg-accent/30 animate-float" />
        <div className="absolute top-[65%] left-[6%] w-1.5 h-1.5 rounded-full bg-white/10 animate-float-slow" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-32 flex flex-col items-center">
          {/* Decorative line */}
          <div
            className="w-16 h-px bg-gradient-to-r from-transparent via-primary-light/60 to-transparent mb-8"
            style={{ animation: "fadeIn 1s ease 0.1s both" }}
          />

          {/* Badge */}
          <div
            className="glass inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm text-white/60 tracking-wider"
            style={{ animation: "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both" }}
          >
            <Sparkles className="w-4 h-4 text-accent" />
            AI-Powered Virtual Assistant Services
          </div>

          {/* Heading */}
          <h1
            className="font-heading mt-10 text-center text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold text-white leading-[1.04] tracking-tight max-w-5xl"
            style={{ animation: "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both" }}
          >
            Stop Doing Everything.
            <br />
            <span className="gradient-text">
              Start Growing.
            </span>
          </h1>

          {/* Description */}
          <p
            className="mt-8 text-center text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed"
            style={{ animation: "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both" }}
          >
            Hire an AI-powered <strong className="text-white font-semibold">virtual assistant</strong> for your
            small business. Our AI-enhanced VAs handle email management, social media, graphic design,
            website development, and customer support — so you can focus on what actually grows your business.
          </p>

          {/* CTA Buttons */}
          <div
            className="mt-12 flex flex-col sm:flex-row gap-4"
            style={{ animation: "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both" }}
          >
            <a
              href="https://calendly.com/versassist/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold text-lg shadow-[0_0_40px_-8px_rgba(67,110,228,0.5)] hover:shadow-[0_0_50px_-6px_rgba(67,110,228,0.6)] hover:scale-[1.02] transition-all duration-300"
            >
              Book a Discovery Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full border border-white/12 text-white/70 font-medium text-lg hover:bg-white/[0.04] hover:border-white/20 hover:text-white/90 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>

          {/* Trust badges */}
          <div
            className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-gray-500"
            style={{ animation: "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both" }}
          >
            {["No lock-in contracts", "Hours never expire", "AI-enhanced productivity"].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
          <span className="text-[10px] tracking-[0.35em] uppercase font-medium">Scroll</span>
          <div className="w-px h-8 origin-top bg-gradient-to-b from-white/25 to-transparent" style={{ animation: "scrollLine 2s ease-in-out infinite" }} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          TRUSTED BY — Infinite marquee with fade edges
      ══════════════════════════════════════════════════════════ */}
      <section className="relative py-16 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <p className="font-heading text-[11px] font-semibold tracking-[0.25em] uppercase text-gray-400 mb-12">
            Trusted by businesses across industries
          </p>
          <div
            className="w-full overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            }}
          >
            <div className="marquee-track">
              {[...clientLogos, ...clientLogos].map((logo, idx) => {
                const bgClass =
                  logo.bg === "dark"
                    ? "bg-gray-900"
                    : logo.bg === "white"
                    ? "bg-white border border-gray-100"
                    : logo.bg
                    ? ""
                    : "bg-[#dce8f5]";
                const bgStyle = logo.bg && logo.bg !== "dark" && logo.bg !== "white"
                  ? { backgroundColor: logo.bg }
                  : undefined;
                return (
                  <div
                    key={`${logo.src}-${idx}`}
                    className={`flex-shrink-0 w-40 h-28 mx-3 flex items-center justify-center rounded-2xl overflow-hidden hover:shadow-soft transition-all duration-300 ${
                      logo.size === "xl" ? "p-1" : logo.size === "lg" ? "p-3" : "p-6"
                    } ${bgClass}`}
                    style={bgStyle}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className={`max-h-full max-w-full object-contain ${
                        logo.blend ? "mix-blend-multiply" : ""
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SERVICES — Enhanced cards with accent lines & gradient hover
      ══════════════════════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden">
        {/* Subtle dot grid texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(67,110,228,0.4) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 flex flex-col items-center">
          <p className="font-heading text-sm font-semibold tracking-wider uppercase text-primary mb-3">What We Do</p>
          <h2 className="font-heading text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5 max-w-3xl leading-tight">
            Virtual Assistant Services That Scale With You
          </h2>
          <p className="text-center text-gray-500 max-w-xl text-lg leading-relaxed mb-16">
            From inbox management to AI automation workflows — our AI-powered virtual assistants handle the work that slows small businesses down.
          </p>

          <ScrollAnimationWrapper stagger className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const Icon = resolveIcon(service.iconName);
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className={`animate-on-scroll stagger-${i + 1} group relative flex flex-col items-center bg-white rounded-2xl p-8 border border-gray-200/60 shadow-soft overflow-hidden transition-all duration-500 hover:shadow-elevated hover:-translate-y-2`}
                >
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Hover background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/[0.08] to-accent/[0.06] flex items-center justify-center mb-5 group-hover:from-primary group-hover:to-primary-dark group-hover:shadow-glow transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="relative font-heading text-center font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="relative text-center text-gray-500 text-sm leading-relaxed line-clamp-2">{service.description}</p>
                </Link>
              );
            })}
          </ScrollAnimationWrapper>

          <Link href="/services" className="mt-14 inline-flex items-center gap-2 font-heading text-primary font-semibold hover:gap-3 transition-all">
            View all virtual assistant services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          HOW IT WORKS — Bold step numbers, animated timeline
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <p className="font-heading text-sm font-semibold tracking-wider uppercase text-primary mb-3">How It Works</p>
          <h2 className="font-heading text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5 max-w-3xl leading-tight">
            How to Hire a Virtual Assistant in 3 Simple Steps
          </h2>
          <p className="text-center text-gray-500 max-w-xl text-lg leading-relaxed mb-18">
            From overwhelmed to optimized in less than a week.
          </p>

          <ScrollAnimationWrapper stagger className="relative w-full grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-[100px] left-[18%] right-[18%] h-px overflow-hidden">
              <div className="w-full h-full bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 animate-gradient-shift" style={{ backgroundSize: "200% 100%" }} />
            </div>

            {[
              { num: "01", icon: Target, title: "Book a Discovery Call", desc: "A free 15-minute call where we learn about your business, challenges, and goals. We recommend the fastest path to results.", img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80" },
              { num: "02", icon: Users, title: "Get Matched", desc: "We assign AI-trained virtual assistants who specialize in your focus areas. Onboarded to your workflows within 48 hours.", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" },
              { num: "03", icon: TrendingUp, title: "Scale & Grow", desc: "Delegate immediately. Track progress through detailed reports. Scale up or down as your business evolves. No lock-in.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" },
            ].map((step, i) => (
              <div key={step.num} className={`animate-on-scroll stagger-${i + 1} flex flex-col items-center`}>
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-dramatic group">
                  <Image src={step.img} alt={step.title} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-gray-900/10 to-transparent" />
                  <span className="absolute top-4 left-4 flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent text-xl font-heading font-bold text-white leading-none select-none shadow-glow">
                    {step.num}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/[0.08] to-accent/[0.06] flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-center text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-center text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          WHY US — Overlapping image & text with left border accents
      ══════════════════════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(67,110,228,0.5) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimationWrapper className="animate-on-scroll-left">
              <div className="relative rounded-3xl overflow-hidden shadow-dramatic aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&w=1200&q=80"
                  alt="VersAssist AI-powered virtual assistants working with small business clients"
                  fill
                  sizes="(min-width:1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
                {/* Decorative corner accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary/20 to-transparent" />
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper className="animate-on-scroll-right">
              <div className="flex flex-col items-center lg:items-start">
                <p className="font-heading text-sm font-semibold tracking-wider uppercase text-primary mb-3">Why VersAssist</p>
                <h2 className="font-heading text-center lg:text-left text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5 max-w-lg leading-tight">
                  Why Choose VersAssist Virtual Assistants
                </h2>
                <p className="text-center lg:text-left text-gray-500 text-lg leading-relaxed mb-10 max-w-lg">
                  We&apos;re not just another VA company. We&apos;re your AI-powered virtual assistant growth partner for small business.
                </p>

                <div className="w-full space-y-3">
                  {[
                    { icon: Sparkles, title: "AI-Powered", desc: "Our VAs use ChatGPT, Midjourney, Canva AI, and more — delivering 3x the productivity of traditional assistants." },
                    { icon: Clock, title: "Hours Never Expire", desc: "Use your hours whenever you need them. No monthly deadlines, no wasted budget." },
                    { icon: Shield, title: "No Lock-In", desc: "We earn your business every month. No long-term commitments, no cancellation fees." },
                    { icon: Zap, title: "Expert-Led", desc: "Founded by Dr. Jeff Bullock with 20+ years of business strategy. Quality-checked at every step." },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 rounded-xl p-4 border-l-2 border-transparent hover:border-primary hover:bg-white/60 hover:shadow-soft transition-all duration-300"
                    >
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/[0.08] to-accent/[0.06] flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-gray-900 mb-0.5">{item.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          STATS — Dark cinematic section with glowing numbers
      ══════════════════════════════════════════════════════════ */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2000&q=80"
          alt="Modern office where virtual assistant services are delivered"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070b18]/95 via-[#0a1028]/92 to-[#080c1a]/95" />

        {/* Mesh orbs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[120px] animate-mesh-drift-1" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-accent/6 rounded-full blur-[100px] animate-mesh-drift-2" />

        {/* Noise */}
        <div className="noise absolute inset-0" />

        <ScrollAnimationWrapper stagger className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`animate-on-scroll-scale stagger-${i + 1} py-4 ${
                  i > 0 ? "md:border-l md:border-white/[0.06]" : ""
                }`}
              >
                <StatCounter stat={stat} />
              </div>
            ))}
          </div>
        </ScrollAnimationWrapper>
      </section>

      {/* ══════════════════════════════════════════════════════════
          TESTIMONIALS — Decorative quotes, accent borders, premium cards
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <p className="font-heading text-sm font-semibold tracking-wider uppercase text-primary mb-3">Testimonials</p>
          <h2 className="font-heading text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5 max-w-3xl leading-tight">
            What Our Virtual Assistant Clients Say
          </h2>
          <p className="text-center text-gray-500 max-w-xl text-lg leading-relaxed mb-16">
            Real results from real small businesses our virtual assistants have helped grow.
          </p>

          <ScrollAnimationWrapper stagger className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={t._id}
                className={`animate-on-scroll stagger-${(i % 4) + 1} relative overflow-hidden bg-white rounded-2xl p-8 lg:p-10 border border-gray-200/60 shadow-soft hover:shadow-elevated transition-all duration-500 group`}
              >
                {/* Top accent line — always visible */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-accent to-primary-light opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Large decorative quote */}
                <div className="absolute -top-1 -left-1 text-[72px] font-heading font-bold text-primary/[0.04] leading-none select-none pointer-events-none">
                  &ldquo;
                </div>

                <div className="relative">
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">&ldquo;{t.quote}&rdquo;</p>

                  <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
                    {t.imageUrl ? (
                      <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 ring-2 ring-primary/10">
                        <Image src={t.imageUrl} alt={t.name} width={44} height={44} className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-glow">
                        {t.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <p className="font-heading font-semibold text-gray-900 text-sm">{t.name}</p>
                      <p className="text-gray-500 text-xs">{t.company ? `${t.title}, ${t.company}` : t.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* ════════════ VIDEO TESTIMONIALS ════════════ */}
      <VideoTestimonials />

      {/* ══════════════════════════════════════════════════════════
          FAQ — Clean accordion with numbered badges
      ══════════════════════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(67,110,228,0.5) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative max-w-2xl mx-auto px-6 flex flex-col items-center">
          <p className="font-heading text-sm font-semibold tracking-wider uppercase text-primary mb-3">FAQ</p>
          <h2 className="font-heading text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-14 max-w-xl leading-tight">
            Virtual Assistant FAQs
          </h2>

          <ScrollAnimationWrapper stagger className="w-full space-y-4">
            {faqItems.slice(0, 4).map((item, i) => (
              <details
                key={item._id}
                className={`animate-on-scroll stagger-${i + 1} group bg-white rounded-xl border border-gray-200/60 overflow-hidden hover:border-primary/20 hover:shadow-soft transition-all duration-300`}
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-gray-900 select-none">
                  <span className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent text-xs font-bold text-white shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.question}
                  </span>
                  <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 ml-4 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 pl-[4.25rem] text-gray-500 leading-relaxed -mt-1">{item.answer}</div>
              </details>
            ))}
          </ScrollAnimationWrapper>

          <Link href="/faq" className="mt-12 inline-flex items-center gap-2 font-heading text-primary font-semibold hover:gap-3 transition-all">
            View all FAQs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CTA — Full viewport, cinematic glass card, dramatic button
      ══════════════════════════════════════════════════════════ */}
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
          alt="Modern workspace"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070b18]/96 via-[#0a1028]/93 to-[#080c1a]/96" />

        {/* Mesh orbs */}
        <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] animate-mesh-drift-1" />
        <div className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] bg-accent/8 rounded-full blur-[130px] animate-mesh-drift-2" />

        {/* Noise */}
        <div className="noise absolute inset-0" />

        {/* Floating particles */}
        <div className="absolute top-[22%] left-[14%] w-1.5 h-1.5 rounded-full bg-primary/30 animate-float" />
        <div className="absolute bottom-[28%] right-[12%] w-1 h-1 rounded-full bg-accent/35 animate-float-delayed" />
        <div className="absolute top-[38%] right-[22%] w-1 h-1 rounded-full bg-white/10 animate-float-slow" />

        <ScrollAnimationWrapper className="animate-on-scroll-scale relative z-10 max-w-3xl mx-auto px-6">
          <div className="glass gradient-border-visible rounded-3xl p-10 md:p-16 flex flex-col items-center">
            <h2 className="font-heading text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 max-w-2xl leading-tight">
              Ready to Hire Your AI Virtual Assistant?
            </h2>
            <p className="text-center text-gray-400 max-w-lg text-lg leading-relaxed mb-10">
              Book a free 15-minute discovery call and let us show you how an AI-powered virtual assistant can transform your small business operations.
            </p>
            <a
              href="https://calendly.com/versassist/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold text-lg shadow-[0_0_40px_-8px_rgba(67,110,228,0.5)] hover:shadow-[0_0_50px_-6px_rgba(67,110,228,0.6)] hover:scale-[1.02] transition-all duration-300"
            >
              Book a Discovery Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </ScrollAnimationWrapper>
      </section>
    </>
  );
}
