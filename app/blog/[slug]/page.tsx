import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";
import { services } from "@/lib/constants";
import { blogServiceLinks } from "@/lib/blog-service-links";
import JsonLd from "@/components/seo/JsonLd";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schemas";

type Params = { slug: string };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return { title: "Post Not Found" };
  }
  const description = post.excerpt.replace(/<[^>]*>/g, "").slice(0, 160);
  return {
    title: post.title,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description,
      url: `https://www.versassists.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [{ url: post.image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const related = [
    ...blogPosts.slice(currentIndex + 1),
    ...blogPosts.slice(0, currentIndex),
  ]
    .filter((p) => p.category === post.category && p.slug !== slug)
    .slice(0, 2);

  const relatedServiceSlugs = blogServiceLinks[slug] ?? [];
  const relatedServices = relatedServiceSlugs
    .map((s) => services.find((svc) => svc.slug === s))
    .filter((svc): svc is (typeof services)[number] => Boolean(svc));

  // If not enough same-category related posts, fill with next posts
  while (related.length < 2) {
    const next = blogPosts[(currentIndex + related.length + 1) % blogPosts.length];
    if (next.slug !== slug && !related.find((r) => r.slug === next.slug)) {
      related.push(next);
    } else {
      break;
    }
  }

  return (
    <>
      <JsonLd
        data={[
          blogPostingSchema(post),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: post.title, href: `/blog/${post.slug}` },
          ]),
        ]}
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#16213e] pt-36 pb-20">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-accent/8 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary-light text-xs font-semibold mb-6">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-8 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white pt-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(min-width:1024px) 896px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <article
            className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-5 prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-strong:text-gray-900 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Related Services */}
          {relatedServices.length > 0 && (
            <aside
              aria-label="Related VersAssist services"
              className="mt-14 p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.04] to-accent/[0.04]"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-2">
                Put this into practice with VersAssist
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                Our AI-powered virtual assistants help you implement the strategies in this article. Explore the services most relevant to what you just read:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedServices.map((svc) => {
                  const Icon = svc.icon;
                  return (
                    <li key={svc.slug}>
                      <Link
                        href={`/services/${svc.slug}`}
                        className="group flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-100 hover:border-primary/40 hover:shadow-md transition-all"
                      >
                        <span className="shrink-0 w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                          <Icon className="w-5 h-5" />
                        </span>
                        <span className="min-w-0">
                          <span className="block font-semibold text-gray-900 group-hover:text-primary transition-colors">
                            {svc.shortTitle}
                          </span>
                          <span className="block text-sm text-gray-500 leading-snug mt-1 line-clamp-2">
                            {svc.description}
                          </span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </aside>
          )}

          {/* Author */}
          <div className="mt-16 p-8 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-5">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shrink-0 shadow-lg shadow-primary/20">
              {post.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <p className="font-bold text-gray-900 text-lg">{post.author}</p>
              <p className="text-sm text-gray-500 leading-relaxed mt-1">
                Expert insights on virtual assistance, AI productivity, and business growth strategies for small businesses and startups.
              </p>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8 text-center">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="group relative overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary/[0.05] hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                    <div className="relative aspect-video">
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        fill
                        sizes="(min-width:640px) 50vw, 100vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary/[0.08] text-primary text-xs font-semibold mb-2">
                        {rel.category}
                      </span>
                      <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                        {rel.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative rounded-3xl bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#16213e] px-8 py-16 sm:px-16 sm:py-20 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-accent/15 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Ready to Scale Your Business?
              </h2>
              <p className="text-gray-400 max-w-lg mx-auto mb-10 text-lg">
                Our AI-powered virtual assistants can help you implement these strategies and more. Book a free discovery call.
              </p>
              <a
                href="https://calendly.com/versassist/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold text-lg shadow-lg shadow-primary/25 hover:bg-primary-dark hover:shadow-primary/40 transition-all"
              >
                Book a Discovery Call <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
