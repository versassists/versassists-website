import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Expert tips on virtual assistance, AI productivity, and growth strategies for small businesses.",
};

const blogPosts = [
  { title: "5 Ways AI-Powered Virtual Assistants Can Transform Your Small Business", excerpt: "Discover how AI-enhanced virtual assistants are helping small businesses save time, reduce costs, and scale faster than ever before.", date: "Mar 15, 2026", readTime: "5 min read", category: "AI & Business", slug: "ai-virtual-assistants-transform-small-business" },
  { title: "Email Management Best Practices: How to Achieve Inbox Zero", excerpt: "Learn proven strategies for managing your inbox efficiently, from AI-powered triage to template responses and follow-up automation.", date: "Mar 8, 2026", readTime: "4 min read", category: "Productivity", slug: "email-management-inbox-zero" },
  { title: "The Ultimate Guide to Social Media Content Planning", excerpt: "A step-by-step framework for planning, creating, and scheduling social media content that drives growth.", date: "Feb 28, 2026", readTime: "7 min read", category: "Social Media", slug: "social-media-content-planning-guide" },
  { title: "Why Startups Should Outsource Virtual Assistance Instead of Hiring", excerpt: "Compare the costs, flexibility, and benefits of virtual assistance vs. full-time hires for startups.", date: "Feb 20, 2026", readTime: "6 min read", category: "Business Strategy", slug: "startups-outsource-virtual-assistance" },
  { title: "How to Build a Professional Website on a Budget", excerpt: "You don't need to spend thousands. Here's how to get a professional, high-converting site affordably.", date: "Feb 12, 2026", readTime: "5 min read", category: "Web Development", slug: "professional-website-on-budget" },
  { title: "The Rise of AI in Customer Support", excerpt: "AI chatbots and intelligent routing are changing customer support. Learn how small businesses can leverage these.", date: "Feb 5, 2026", readTime: "6 min read", category: "AI & Business", slug: "ai-customer-support-small-businesses" },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#16213e] pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary-light mb-4 text-center">Blog</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight text-center max-w-4xl">
            Insights &{" "}
            <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">Resources</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed text-center">
            Expert tips on virtual assistance, business productivity, and AI-driven growth strategies.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-28 lg:py-36 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.slug} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary/[0.05] hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-primary/[0.08] to-accent/[0.08] flex items-center justify-center">
                  <span className="text-primary/30 text-sm font-medium">Featured Image</span>
                </div>
                <div className="p-6 text-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/[0.08] text-primary text-xs font-semibold mb-3">{post.category}</span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-center gap-4 text-gray-400 text-xs">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
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
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 text-center max-w-3xl">Want Personalized Advice?</h2>
              <p className="text-gray-400 max-w-lg mb-10 text-lg leading-relaxed text-center">
                Our team can help you implement these strategies. Book a discovery call to get started.
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
