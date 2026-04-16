import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions of Service",
  description: "VersAssist terms and conditions governing the use of our AI-powered virtual assistant services, billing, and client agreements.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#16213e] pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Terms & Conditions</h1>
          <p className="text-gray-500">Last updated: March 2026</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-gray-600 leading-relaxed space-y-8">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Agreement to Terms</h2>
            <p>By accessing or using VersAssist&apos;s services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not access or use our services.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Services</h2>
            <p>VersAssist provides AI-powered virtual assistance services including but not limited to email management, calendar management, social media management, graphic design, website development, customer support, content creation, and AI consulting.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Payment & Billing</h2>
            <p>Services are billed at the agreed-upon hourly rate with no setup fees. Detailed billing reports are provided. Hours purchased do not expire. Payment is due according to the terms specified in your service agreement.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. No Lock-In</h2>
            <p>VersAssist does not require long-term contracts. You may cancel, upgrade, or downgrade your plan at any time without penalty. Any unused hours remain available for future use.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Confidentiality</h2>
            <p>We treat all client information as confidential. Our team members are bound by confidentiality agreements, and we implement appropriate security measures to protect your data.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Limitation of Liability</h2>
            <p>VersAssist shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Contact</h2>
            <p>For questions about these Terms, contact us at <a href="mailto:info@versassists.com" className="text-primary hover:underline">info@versassists.com</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
