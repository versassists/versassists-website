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
} from "lucide-react";
import { services, testimonials, stats, faqItems } from "@/lib/constants";
import StatCounter from "@/components/ui/StatCounter";

const clientLogos = [
  { name: "The Nursing Spot", src: "/logos/nursing-spot.svg" },
  { name: "Carter & Olay Foundation", src: "/logos/carter-olay.svg" },
  { name: "PRISM", src: "/logos/prism.svg" },
  { name: "PharmDToBe Guides", src: "/logos/pharmdtobe.svg" },
  { name: "About Life & Marriage", src: "/logos/about-life-marriage.svg" },
  { name: "Edge Medical Writing", src: "/logos/edge-medical.svg" },
  { name: "Lehigh Valley Dryer Vent Solutions", src: "/logos/lehigh-valley.svg" },
  { name: "CavemanBrain", src: "/logos/cavemanbrain.svg" },
  { name: "Partner", src: "/logos/partner-logo.svg" },
];

export default function Home() {
  return (
    <>
      {/* ════════════ HERO ════════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
          alt="Professional team collaborating"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-[#1a1a2e]/85 to-[#16213e]/90" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px]" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-28 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.08] border border-white/[0.12] text-sm text-white/80 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-accent" />
            AI-Powered Virtual Assistance
          </div>

          <h1 className="mt-8 text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight max-w-4xl">
            Stop Doing Everything.
            <br />
            <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
              Start Growing.
            </span>
          </h1>

          <p className="mt-6 text-center text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
            AI-enhanced virtual assistants who handle your email, social media,
            design, website, and more — so you can focus on what actually grows
            your business.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary-dark transition-all"
            >
              Book a Discovery Call
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-lg hover:bg-white/[0.06] backdrop-blur-sm transition-all"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-gray-400">
            {["No lock-in contracts", "Hours never expire", "AI-enhanced productivity"].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* ════════════ TRUSTED BY (Logos) ════════════ */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-10">
            Trusted by businesses across industries
          </p>
          <div className="w-full flex flex-wrap items-center justify-center gap-10 md:gap-14">
            {clientLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center justify-center h-14 w-auto grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-full w-auto object-contain max-w-[140px]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ SERVICES ════════════ */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-3">What We Do</p>
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 max-w-3xl">
            Services That Scale With You
          </h2>
          <p className="text-center text-gray-500 max-w-xl text-lg leading-relaxed mb-14">
            From inbox management to AI prototyping — our virtual assistants handle the work that slows you down.
          </p>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href="/services"
                  className="group flex flex-col items-center bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary/[0.06] hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/[0.08] flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-center font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-center text-gray-500 text-sm leading-relaxed line-clamp-2">{service.description}</p>
                </Link>
              );
            })}
          </div>

          <Link href="/services" className="mt-12 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            View all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ════════════ HOW IT WORKS ════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-3">How It Works</p>
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 max-w-3xl">
            Three Simple Steps
          </h2>
          <p className="text-center text-gray-500 max-w-xl text-lg leading-relaxed mb-16">
            From overwhelmed to optimized in less than a week.
          </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { num: "01", icon: Target, title: "Book a Discovery Call", desc: "A free 15-minute call where we learn about your business, challenges, and goals. We recommend the fastest path to results.", img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80" },
              { num: "02", icon: Users, title: "Get Matched", desc: "We assign AI-trained virtual assistants who specialize in your focus areas. Onboarded to your workflows within 48 hours.", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" },
              { num: "03", icon: TrendingUp, title: "Scale & Grow", desc: "Delegate immediately. Track progress through detailed reports. Scale up or down as your business evolves. No lock-in.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" },
            ].map((step) => (
              <div key={step.num} className="flex flex-col items-center">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-lg">
                  <Image src={step.img} alt={step.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
                  <span className="absolute top-4 left-4 text-5xl font-black text-white/30 leading-none select-none">{step.num}</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary/[0.08] flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-center text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-center text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ WHY US ════════════ */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&w=1200&q=80"
                alt="Team working with AI technology"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-3">Why VersAssist</p>
              <h2 className="text-center lg:text-left text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 max-w-lg">
                What Makes Us Different
              </h2>
              <p className="text-center lg:text-left text-gray-500 text-lg leading-relaxed mb-8 max-w-lg">
                We&apos;re not just another VA company. We&apos;re your AI-powered growth partner.
              </p>

              <div className="w-full space-y-5">
                {[
                  { icon: Sparkles, title: "AI-Powered", desc: "Our VAs use ChatGPT, Midjourney, Canva AI, and more — delivering 3x the productivity of traditional assistants." },
                  { icon: Clock, title: "Hours Never Expire", desc: "Use your hours whenever you need them. No monthly deadlines, no wasted budget." },
                  { icon: Shield, title: "No Lock-In", desc: "We earn your business every month. No long-term commitments, no cancellation fees." },
                  { icon: Zap, title: "Expert-Led", desc: "Founded by Dr. Jeff Bullock with 20+ years of business strategy. Quality-checked at every step." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/[0.08] flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ STATS ════════════ */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2000&q=80"
          alt="Modern office"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/85" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat, i) => (
              <StatCounter key={i} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ TESTIMONIALS ════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-3">Testimonials</p>
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 max-w-3xl">
            What Our Clients Say
          </h2>
          <p className="text-center text-gray-500 max-w-xl text-lg leading-relaxed mb-14">
            Real results from real businesses we&apos;ve helped grow.
          </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 lg:p-10 border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-8">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-gray-500 text-sm">{t.title}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ FAQ ════════════ */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-2xl mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-3">FAQ</p>
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12 max-w-xl">
            Common Questions
          </h2>

          <div className="w-full space-y-4">
            {faqItems.slice(0, 4).map((item, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-900 select-none">
                  {item.question}
                  <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 ml-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed -mt-1">{item.answer}</div>
              </details>
            ))}
          </div>

          <Link href="/faq" className="mt-10 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            View all FAQs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
          alt="Modern workspace"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/92 via-[#1a1a2e]/90 to-[#16213e]/92" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center">
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-white mb-6 max-w-2xl">
            Ready to Scale Your Business?
          </h2>
          <p className="text-center text-gray-300 max-w-lg text-lg leading-relaxed mb-10">
            Book a free 15-minute discovery call and let us show you how AI-powered virtual assistance can transform your operations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary-dark transition-all"
          >
            Book a Discovery Call
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
