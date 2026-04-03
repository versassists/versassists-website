import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTABanner({
  title = "Ready to Scale Your Business?",
  description = "Book a free 15-minute discovery call and let us show you how AI-powered virtual assistance can transform your operations.",
  buttonText = "Book a Discovery Call",
  buttonHref = "https://calendly.com/versassist/30min",
}: CTABannerProps) {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="gradient-hero rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
              {description}
            </p>
            <Link
              href={buttonHref}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors text-lg"
            >
              {buttonText}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
