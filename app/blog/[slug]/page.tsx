import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog Post",
  description: "Read our latest insights on virtual assistance, AI productivity, and business growth.",
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#16213e] pt-36 pb-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 text-sm hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary-light text-xs font-semibold mb-4">Category</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            Blog Post Title Goes Here
          </h1>
          <div className="flex flex-wrap justify-center gap-6 text-gray-500 text-sm">
            <span className="flex items-center gap-2"><User className="w-4 h-4" />VersAssist Team</span>
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />March 15, 2026</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" />5 min read</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl text-gray-500 leading-relaxed mb-8">
              This is a placeholder for blog post content. When you connect a CMS, the actual blog content will be rendered here.
            </p>
            <h2>Section Heading</h2>
            <p>
              Blog content goes here. This template supports headings, paragraphs,
              lists, images, code blocks, and other rich text elements.
            </p>
            <h3>Subsection</h3>
            <p>
              Additional content with supporting details, examples, and insights
              that provide value to the reader.
            </p>
            <ul>
              <li>Key point or takeaway one</li>
              <li>Key point or takeaway two</li>
              <li>Key point or takeaway three</li>
            </ul>
            <p>Conclusion paragraph that summarizes the key points.</p>
          </article>

          {/* Author */}
          <div className="mt-14 p-6 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shrink-0">VA</div>
            <div>
              <p className="font-bold text-gray-900">VersAssist Team</p>
              <p className="text-sm text-gray-500 leading-relaxed mt-1">Expert insights on virtual assistance, AI productivity, and business growth.</p>
            </div>
          </div>

          {/* Related */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[1, 2].map((i) => (
                <Link key={i} href="/blog" className="group p-6 rounded-xl border border-gray-100 hover:border-primary/20 transition-all text-left">
                  <span className="inline-block px-2 py-0.5 rounded bg-primary/[0.08] text-primary text-xs font-semibold mb-2">Category</span>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">Related Blog Post Title {i}</h3>
                  <p className="text-sm text-gray-500 mt-2">Brief excerpt of the related article...</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative rounded-3xl bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#16213e] px-8 py-16 sm:px-16 sm:py-20 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-accent/15 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Ready to Scale?</h2>
              <p className="text-gray-400 max-w-lg mx-auto mb-10 text-lg">Book a free discovery call to get started.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold text-lg shadow-lg shadow-primary/25 hover:bg-primary-dark transition-all">
                Book a Discovery Call <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
