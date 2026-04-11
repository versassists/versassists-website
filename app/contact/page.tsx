import type { Metadata } from "next";
import { Mail, Clock, ArrowRight } from "lucide-react";
import GhlForm from "@/components/ui/GhlForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with VersAssist. Book a free discovery call or send us a message — we respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#16213e] pt-40 pb-32">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.08] border border-white/[0.12] text-sm text-white/80 backdrop-blur-sm mb-6">
            <Mail className="w-4 h-4 text-accent" />
            Get in Touch
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight text-center max-w-4xl">
            Let&apos;s Start a{" "}
            <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
              Conversation
            </span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl leading-relaxed text-center">
            Book a free 15-minute discovery call or send us a message. We&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl px-8 pt-8 pb-4 lg:px-10 lg:pt-10 lg:pb-4 border border-gray-100 relative overflow-hidden hover:shadow-xl transition-shadow duration-300 shadow-sm">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
                <h2 className="text-2xl font-bold text-gray-900 mb-1 text-center lg:text-left">
                  Fill Out the Client Intake Form
                </h2>
                <p className="text-gray-500 text-sm mb-2 text-center lg:text-left">
                  We&apos;ll respond within 24 hours.
                </p>
                <GhlForm
                  formId="dcNpxGMqf7d2KsRXMhuO"
                  title="Client Intake Form"
                  initialHeight={780}
                  className="-mt-12 sm:-mt-16"
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Discovery Call */}
              <div className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl p-10 text-center hover:shadow-lg transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[60px]" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3">Book a Discovery Call</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Schedule a free 15-minute call and we&apos;ll recommend the fastest path to results.
                  </p>
                  <a
                    href="https://calendly.com/versassist/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary-dark shadow-lg shadow-primary/25 transition-all"
                  >
                    Schedule a Call <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-2xl p-10 border border-gray-100 text-center lg:text-left hover:shadow-lg transition-all duration-300">
                <h3 className="font-bold text-gray-900 mb-5">Contact Information</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4 justify-center lg:justify-start">
                    <div className="w-10 h-10 rounded-lg bg-primary/[0.08] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-medium text-gray-700">Email</p>
                      <a
                        href="mailto:info@versassists.com"
                        className="text-sm text-primary hover:underline"
                      >
                        info@versassists.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 justify-center lg:justify-start">
                    <div className="w-10 h-10 rounded-lg bg-primary/[0.08] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-medium text-gray-700">Response Time</p>
                      <p className="text-sm text-gray-500">Within 24 hours, Mon&ndash;Fri</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="bg-white rounded-2xl p-10 border border-gray-100 text-center lg:text-left hover:shadow-lg transition-all duration-300">
                <h3 className="font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-3 justify-center lg:justify-start">
                  <a
                    href="https://www.instagram.com/versassists/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/versassist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
