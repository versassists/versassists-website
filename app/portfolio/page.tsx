import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Sparkles, Search, Layout, Palette, Film, Briefcase, Quote } from "lucide-react";
import VideoTestimonials from "@/components/ui/VideoTestimonials";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, videoObjectSchemas } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Virtual Assistant Case Studies & Client Results",
  description:
    "Real VersAssist client results: SEO wins, website revamps, social media designs, video editing and more. AI-powered VAs delivering measurable outcomes.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Virtual Assistant Case Studies & Client Results | VersAssist",
    description:
      "Real results from real businesses. SEO, web revamps, social media, video, and more.",
    url: "https://www.versassists.com/portfolio",
  },
};

const seoResults = [
  { src: "/seo-results/Alemedia.mp4", title: "Alemedia", description: "From hidden pages to page one rankings." },
  { src: "/seo-results/lint-guy.mp4", title: "Lint Guy", description: "Climbed to the top for key industry keywords." },
  { src: "/seo-results/linus.mp4", title: "Linus", description: "Proven SEO strategy driving top rankings." },
];

const websiteRevamps = [
  { src: "/website-revamp/ayo-before.mp4", title: "Before", description: "The original website — overlooked and dated." },
  { src: "/website-revamp/ayo-after.mp4", title: "After", description: "Fresh, modern, and built to convert." },
];

const socialDesigns = Array.from({ length: 26 }, (_, i) => `/social-designs/design-${String(i + 1).padStart(2, "0")}.png`)
  .concat(Array.from({ length: 5 }, (_, i) => `/social-designs/design-${String(i + 27).padStart(2, "0")}.jpg`));

const reels = Array.from({ length: 19 }, (_, i) => `/reels/reel-${String(i + 1).padStart(2, "0")}.mp4`);

const clientProjects = [
  {
    name: "PRISM AI Consultants",
    description:
      "Enhanced their digital footprint across Instagram, YouTube, and LinkedIn with AI-generated content that drove sales for their AI Coaching programs and AI ebook.",
    services: ["Social Media", "Content Creation", "AI Integration"],
  },
  {
    name: "Luxury Properties of DFW",
    description:
      "Built the \"Unlocking Luxury\" online course for realtors and managed their online marketing and ad campaigns for maximum reach.",
    services: ["Course Creation", "Marketing", "Ad Campaigns"],
  },
  {
    name: "Carter & Olay Foundation",
    description:
      "Built a website for gathering donations to fund financial literacy education for children of color, and set up their full social media presence.",
    services: ["Web Development", "Social Media", "Fundraising"],
  },
  {
    name: "PharmDToBe Guides",
    description:
      "Brought the \"Smart Study Skills\" program to life — edited and organized course content, created LinkedIn launch posts, and built the sales page.",
    services: ["Course Production", "Copywriting", "Sales Pages"],
  },
  {
    name: "The Nursing Spot",
    description:
      "Created a website for nursing students featuring 1-on-1 coaching and digital products, plus full social media management.",
    services: ["Web Development", "Coaching Platform", "Social Media"],
  },
];

const partnerTestimonials = [
  {
    name: "Michael Lievers",
    company: "Client Partner",
    quote:
      "Incredibly satisfied with the social media management and content creation services provided by VersAssist. Their team truly understands how to elevate a brand.",
  },
  {
    name: "Natosha Pope",
    company: "Client Partner",
    quote:
      "Thoroughly impressed with the website revamp done by VersAssist. They transformed my online presence and made everything look professional and modern.",
  },
  {
    name: "Neferteri Bey",
    company: "Client Partner",
    quote:
      "Extremely pleased with the work VersAssist did in conducting web research and revamping my website. The attention to detail was outstanding.",
  },
  {
    name: "Byron Young",
    company: "Client Partner",
    quote:
      "VersAssist delivered exceptional results. Their professionalism and dedication to quality made the entire experience seamless.",
  },
];


export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Portfolio", href: "/portfolio" },
          ]),
          ...videoObjectSchemas(
            reels.map((src, i) => ({ src, index: i + 1 }))
          ),
        ]}
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#16213e] pt-40 pb-32">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.08] border border-white/[0.12] text-sm text-white/80 backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            Our Work
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight text-center max-w-4xl">
            Our Work in{" "}
            <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
              Action
            </span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl leading-relaxed text-center">
            At VersAssist, we don&apos;t just talk about results — we show them. Explore our portfolio below
            to see how we&apos;ve helped businesses transform their online presence, boost visibility, and
            grow with confidence.
          </p>
        </div>
      </section>

      {/* SEO Results */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/[0.08] text-primary text-xs font-semibold mb-5">
            <Search className="w-3.5 h-3.5" />
            SEO Results
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 text-center max-w-3xl">
            Ranked on <span className="text-primary">Page One</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mb-16 text-lg text-center leading-relaxed">
            We&apos;ve helped companies climb to the top of Google&apos;s search results with proven,
            tailored SEO strategies. These real-time screen recordings show our clients&apos; websites
            moving from hidden pages to page one rankings for their most important keywords.
          </p>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {seoResults.map((video) => (
              <div
                key={video.src}
                className="group relative overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary/[0.05] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <div className="relative aspect-video bg-gray-900">
                  <video
                    src={video.src}
                    controls
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{video.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-gray-600 mb-6 text-lg">Ready to see your business on Google&apos;s first page?</p>
            <a
              href="https://calendly.com/versassist/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary-dark transition-all"
            >
              Book Your Discovery Call <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Website Revamps */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/[0.08] text-primary text-xs font-semibold mb-5">
            <Layout className="w-3.5 h-3.5" />
            Website Revamps
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 text-center max-w-3xl">
            Before & <span className="text-primary">After</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mb-16 text-lg text-center leading-relaxed">
            A fresh website can be the difference between being overlooked and standing out. Here, we
            showcase before-and-after screen recordings of websites we&apos;ve redesigned and rebuilt for
            our clients.
          </p>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            {websiteRevamps.map((video) => (
              <div
                key={video.src}
                className="group relative overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary/[0.05] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <div className="relative aspect-video bg-gray-900">
                  <video
                    src={video.src}
                    controls
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/[0.08] text-primary text-xs font-semibold mb-2">
                    {video.title}
                  </span>
                  <p className="text-gray-600 leading-relaxed">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Design */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/[0.08] text-primary text-xs font-semibold mb-5">
            <Palette className="w-3.5 h-3.5" />
            Social Media Design
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 text-center max-w-3xl">
            Posts, Carousels & <span className="text-primary">More</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mb-16 text-lg text-center leading-relaxed">
            Great design fuels engagement. From eye-catching static posts and educational carousels to
            brand-consistent graphics, we help our clients stand out in crowded feeds.
          </p>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {socialDesigns.map((src, i) => (
              <div
                key={src}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <Image
                  src={src}
                  alt={`Instagram and social media graphic design example ${i + 1} by VersAssist — branded post and carousel template for small business clients`}
                  fill
                  sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Editing & Reels */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/[0.08] text-primary text-xs font-semibold mb-5">
            <Film className="w-3.5 h-3.5" />
            Video Editing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 text-center max-w-3xl">
            Reels That <span className="text-primary">Convert</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mb-16 text-lg text-center leading-relaxed">
            Short-form video is king, and we help brands take full advantage of it. From scroll-stopping
            reels to polished edits that tell a story, our video work is built to engage.
          </p>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {reels.map((src, i) => (
              <div
                key={src}
                className="group relative aspect-[9/16] rounded-2xl overflow-hidden bg-gray-900 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <video
                  src={src}
                  controls
                  preload="metadata"
                  className="w-full h-full object-cover"
                  aria-label={`Short-form Instagram reel example ${i + 1} — edited by VersAssist`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Projects */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/[0.08] text-primary text-xs font-semibold mb-5">
            <Briefcase className="w-3.5 h-3.5" />
            Client Projects
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 text-center max-w-3xl">
            See The Projects We Did For <span className="text-primary">Our Clients</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mb-16 text-lg text-center leading-relaxed">
            Every partnership is unique, but the outcome is the same: measurable growth. Here&apos;s a
            sample of what we&apos;ve built together.
          </p>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientProjects.map((project) => (
              <div
                key={project.name}
                className="group relative overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary/[0.05] hover:-translate-y-1 transition-all duration-300 p-8"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1 rounded-full bg-gray-50 border border-gray-100 text-xs font-medium text-gray-600"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <VideoTestimonials />

      {/* Partner Testimonials */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 text-center max-w-3xl">
            Partner <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mb-16 text-lg text-center leading-relaxed">
            Trusted by brands and business owners who value results and relationships.
          </p>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerTestimonials.map((t) => (
              <div
                key={t.name}
                className="group relative overflow-hidden bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary/[0.05] hover:-translate-y-1 transition-all duration-300 p-8"
              >
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-gray-600 italic leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
          alt="Modern small business workspace where VersAssist virtual assistants help teams scale"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/92 via-[#1a1a2e]/90 to-[#16213e]/92" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-8 text-center max-w-3xl">
            It&apos;s Time to Take Your Business to the{" "}
            <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
              Next Level
            </span>
          </h2>
          <p className="text-gray-300 max-w-lg mb-12 text-lg leading-relaxed text-center">
            Let&apos;s build something remarkable together. Book a free discovery call and see how
            VersAssist can transform your business.
          </p>
          <a
            href="https://calendly.com/versassist/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-primary text-white font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary-dark transition-all"
          >
            Book a Discovery Call <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  );
}
