"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import type { NavLink } from "@/sanity/lib/fetchSiteSettings";

interface HeaderClientProps {
  navLinks: NavLink[];
  calendlyUrl: string;
  logoUrl?: string;
  companyName: string;
}

export default function HeaderClient({
  navLinks,
  calendlyUrl,
  companyName,
}: HeaderClientProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Hide site chrome inside Sanity Studio so it takes the full viewport.
  if (pathname?.startsWith("/studio")) return null;

  // Two logo variants that crossfade with the header background:
  //   - on-dark (white text)  → shown at the top, where the header is transparent over the dark hero
  //   - on-light (dark text)  → shown once scrolled, when the header turns white
  // Both are the same 1080×279 horizontal artwork so they stay pixel-aligned during the fade.

  // Keep the primary nav lean: internal pages stay top-level, while external
  // apps/offers (Calculator, Book Production, Social Media QA) collapse into a
  // single "Tools" dropdown so the bar doesn't feel cluttered.
  const isExternalLink = (link: NavLink) =>
    link.external || link.href.startsWith("http");
  const mainLinks = navLinks.filter((link) => !isExternalLink(link));
  const toolLinks = navLinks.filter(isExternalLink);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="relative flex items-center h-11 w-[170px] sm:h-14 sm:w-[217px]"
            aria-label={`${companyName} home`}
          >
            <Image
              src="/logos/versassist-logo-on-dark.png"
              alt={companyName}
              fill
              sizes="217px"
              priority
              className={`object-contain object-left transition-opacity duration-300 ${
                scrolled ? "opacity-0" : "opacity-100"
              }`}
            />
            <Image
              src="/logos/versassist-logo-on-light.png"
              alt=""
              aria-hidden="true"
              fill
              sizes="217px"
              priority
              className={`object-contain object-left transition-opacity duration-300 ${
                scrolled ? "opacity-100" : "opacity-0"
              }`}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-primary"
                    : scrolled
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {toolLinks.length > 0 && (
              <div className="relative group">
                <button
                  type="button"
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-gray-600 hover:text-gray-900"
                      : "text-white/80 hover:text-white"
                  }`}
                  aria-haspopup="true"
                >
                  Tools
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                {/* pt-3 bridges the gap so hover doesn't drop between trigger and panel */}
                <div className="absolute right-0 top-full pt-3 invisible opacity-0 translate-y-1 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0">
                  <div className="min-w-[220px] rounded-2xl bg-white shadow-xl ring-1 ring-black/5 p-2">
                    {toolLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-primary/[0.08] hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-semibold shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              Book a Call
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-gray-900" : "text-white"}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-white border-t shadow-lg px-6 py-6 space-y-1">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 rounded-xl text-sm font-medium text-center transition-colors ${
                pathname === link.href ? "bg-primary/[0.08] text-primary" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {toolLinks.length > 0 && (
            <div className="pt-3 mt-2 border-t">
              <p className="px-4 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-400 text-center">
                Tools
              </p>
              {toolLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 rounded-xl text-sm font-medium text-center text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}

          <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-3 mt-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-semibold shadow-md shadow-primary/25">
            Book a Call
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
