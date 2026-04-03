import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Expert tips on virtual assistance, AI productivity, and growth strategies for small businesses.",
};

const blogPosts = [
  { title: "5 Ways AI-Powered Virtual Assistants Can Transform Your Small Business", excerpt: "Discover how AI-enhanced virtual assistants are helping small businesses save time, reduce costs, and scale faster than ever before.", date: "Mar 15, 2026", readTime: "5 min read", category: "AI & Business", slug: "ai-virtual-assistants-transform-small-business", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80" },
  { title: "Email Management Best Practices: How to Achieve Inbox Zero", excerpt: "Learn proven strategies for managing your inbox efficiently, from AI-powered triage to template responses and follow-up automation.", date: "Mar 8, 2026", readTime: "4 min read", category: "Productivity", slug: "email-management-inbox-zero", image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=800&q=80" },
  { title: "The Ultimate Guide to Social Media Content Planning", excerpt: "A step-by-step framework for planning, creating, and scheduling social media content that drives growth.", date: "Feb 28, 2026", readTime: "7 min read", category: "Social Media", slug: "social-media-content-planning-guide", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80" },
  { title: "Why Startups Should Outsource Virtual Assistance Instead of Hiring", excerpt: "Compare the costs, flexibility, and benefits of virtual assistance vs. full-time hires for startups.", date: "Feb 20, 2026", readTime: "6 min read", category: "Business Strategy", slug: "startups-outsource-virtual-assistance", image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80" },
  { title: "How to Build a Professional Website on a Budget", excerpt: "You don't need to spend thousands. Here's how to get a professional, high-converting site affordably.", date: "Feb 12, 2026", readTime: "5 min read", category: "Web Development", slug: "professional-website-on-budget", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80" },
  { title: "The Rise of AI in Customer Support", excerpt: "AI chatbots and intelligent routing are changing customer support. Learn how small businesses can leverage these.", date: "Feb 5, 2026", readTime: "6 min read", category: "AI & Business", slug: "ai-customer-support-small-businesses", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80" },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#16213e] pt-40 pb-32">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary-light mb-5 text-center">Blog</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight text-center max-w-4xl">
            Insights &{" "}
            <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">Resources</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl leading-relaxed text-center">
            Expert tips on virtual assistance, business productivity, and AI-driven growth strategies.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-32 lg:py-40 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary/[0.05] hover:-translate-y-1 transition-all duration-300">
                <div className="relative aspect-video">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-10 text-center">
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
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80" alt="Modern workspace" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/92 via-[#1a1a2e]/90 to-[#16213e]/92" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8 text-center max-w-3xl">Want Personalized Advice?</h2>
          <p className="text-gray-300 max-w-lg mb-12 text-lg sm:text-xl leading-relaxed text-center">
            Our team can help you implement these strategies. Book a discovery call to get started.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-primary text-white font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary-dark transition-all">
            Book a Discovery Call <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
