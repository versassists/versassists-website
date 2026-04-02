import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.versassists.com"),
  title: {
    default: "VersAssist | AI-Powered Virtual Assistance for Small Businesses",
    template: "%s | VersAssist",
  },
  description:
    "VersAssist provides AI-powered virtual assistance services for small businesses and startups. Email management, social media, graphic design, website development, and more. Hours never expire, no lock-in contracts.",
  keywords: [
    "virtual assistant",
    "AI virtual assistant",
    "small business support",
    "startup virtual assistant",
    "email management",
    "social media management",
    "graphic design",
    "website development",
    "AI-powered",
    "VersAssist",
  ],
  authors: [{ name: "VersAssist" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.versassists.com",
    siteName: "VersAssist",
    title: "VersAssist | AI-Powered Virtual Assistance",
    description:
      "Scale your business with AI-enhanced virtual assistants. Flexible plans, hours never expire, no lock-in contracts.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VersAssist - AI-Powered Virtual Assistance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VersAssist | AI-Powered Virtual Assistance",
    description:
      "Scale your business with AI-enhanced virtual assistants. Flexible plans, hours never expire.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
