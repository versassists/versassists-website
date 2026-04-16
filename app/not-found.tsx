import Link from "next/link";
import { ArrowRight, Home, BookOpen, Briefcase, HelpCircle } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#16213e] pt-40 pb-32 min-h-[60vh] flex items-center">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-accent/8 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="text-8xl font-extrabold bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent mb-6">
            404
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            Page Not Found
          </h1>
          <p className="text-gray-400 text-lg max-w-md mx-auto mb-12 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Here are some helpful links to get you back on track:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            <Link
              href="/"
              className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-white/[0.06] border border-white/[0.1] hover:border-primary/40 hover:bg-white/[0.1] transition-all"
            >
              <Home className="w-5 h-5 text-primary-light shrink-0" />
              <span className="text-white font-medium group-hover:text-primary-light transition-colors">
                Home
              </span>
            </Link>
            <Link
              href="/services"
              className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-white/[0.06] border border-white/[0.1] hover:border-primary/40 hover:bg-white/[0.1] transition-all"
            >
              <Briefcase className="w-5 h-5 text-primary-light shrink-0" />
              <span className="text-white font-medium group-hover:text-primary-light transition-colors">
                Services
              </span>
            </Link>
            <Link
              href="/blog"
              className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-white/[0.06] border border-white/[0.1] hover:border-primary/40 hover:bg-white/[0.1] transition-all"
            >
              <BookOpen className="w-5 h-5 text-primary-light shrink-0" />
              <span className="text-white font-medium group-hover:text-primary-light transition-colors">
                Blog
              </span>
            </Link>
            <Link
              href="/contact"
              className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-white/[0.06] border border-white/[0.1] hover:border-primary/40 hover:bg-white/[0.1] transition-all"
            >
              <HelpCircle className="w-5 h-5 text-primary-light shrink-0" />
              <span className="text-white font-medium group-hover:text-primary-light transition-colors">
                Contact
              </span>
            </Link>
          </div>
          <div className="mt-12">
            <a
              href="https://calendly.com/versassist/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold shadow-lg shadow-primary/25 hover:bg-primary-dark hover:shadow-primary/40 transition-all"
            >
              Book a Discovery Call <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
