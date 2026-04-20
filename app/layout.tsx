import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ConditionalFooter from "@/components/layout/ConditionalFooter";
import DraftBanner from "@/components/layout/DraftBanner";
import JsonLd from "@/components/seo/JsonLd";
import {
  organizationSchema,
  websiteSchema,
  professionalServiceSchema,
} from "@/lib/schemas";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-9EJFXCF9B1";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.versassists.com"),
  title: {
    default:
      "AI-Powered Virtual Assistants for Small Business | VersAssist",
    template: "%s | VersAssist",
  },
  description:
    "Hire AI-powered virtual assistants for email, social media, design, web dev and support. Hours never expire. No lock-in. Book a free discovery call.",
  keywords: [
    "virtual assistant",
    "AI virtual assistant",
    "AI-powered virtual assistant",
    "virtual assistant for small business",
    "hire virtual assistant",
    "virtual assistant services",
    "AI VA",
    "small business virtual assistant",
    "startup virtual assistant",
    "email management services",
    "social media management",
    "graphic design services",
    "website development",
    "customer support outsourcing",
    "VersAssist",
    "VersAssists",
  ],
  authors: [{ name: "VersAssist", url: "https://www.versassists.com" }],
  creator: "VersAssist",
  publisher: "VersAssist",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.versassists.com",
    siteName: "VersAssist",
    title: "AI-Powered Virtual Assistants for Small Business | VersAssist",
    description:
      "Scale your business with AI-enhanced virtual assistants. Email, social media, design, web dev, and more. Hours never expire. No lock-in.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Virtual Assistants | VersAssist",
    description:
      "Scale your business with AI-enhanced virtual assistants. Hours never expire. No lock-in.",
    creator: "@versassist",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Business Services",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html lang="en-US" className={`${inter.className} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        {isDraftMode && <DraftBanner />}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-primary focus:text-white focus:font-semibold focus:shadow-lg"
        >
          Skip to main content
        </a>
        <JsonLd
          data={[organizationSchema, websiteSchema, professionalServiceSchema]}
        />
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <ConditionalFooter>
          <Footer />
        </ConditionalFooter>
      </body>
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
    </html>
  );
}
