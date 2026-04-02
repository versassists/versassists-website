import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "VersAssist privacy policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#16213e] pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-500">Last updated: March 2026</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-gray-600 leading-relaxed space-y-8">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, book a discovery call, or communicate with us. This may include your name, email address, phone number, company name, and message content.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and fulfill your requests</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Communicate with you about products, services, and events</li>
              <li>Monitor and analyze trends, usage, and activities</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist us in operating our website and conducting business, subject to confidentiality agreements.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Cookies</h2>
            <p>Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information. You may also opt out of receiving marketing communications at any time by contacting us at <a href="mailto:info@versassists.com" className="text-primary hover:underline">info@versassists.com</a>.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:info@versassists.com" className="text-primary hover:underline">info@versassists.com</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
