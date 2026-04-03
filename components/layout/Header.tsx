"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/constants";

export default function Header() {
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logos/versassist%20png%20logo.avif"
              alt="VersAssist"
              className={`h-14 w-auto object-contain transition-all duration-300 ${scrolled ? "" : "brightness-0 invert"}`}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isExternal = link.href.startsWith("http");
              const Tag = isExternal ? "a" : Link;
              return (
                <Tag
                  key={link.href}
                  href={link.href}
                  {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-primary"
                      : scrolled
                      ? "text-gray-600 hover:text-gray-900"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </Tag>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://calendly.com/versassist/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full bg-primary text-white text-sm font-semibold shadow-sm shadow-primary/20 hover:bg-primary-dark transition-all"
            >
              Book a Call
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
          {navLinks.map((link) => {
            const isExternal = link.href.startsWith("http");
            const Tag = isExternal ? "a" : Link;
            return (
              <Tag
                key={link.href}
                href={link.href}
                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`block px-4 py-3 rounded-xl text-sm font-medium text-center transition-colors ${
                  pathname === link.href ? "bg-primary/[0.08] text-primary" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Tag>
            );
          })}
          <a href="https://calendly.com/versassist/30min" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 mt-3 text-center rounded-full bg-primary text-white text-sm font-semibold">
            Book a Call
          </a>
        </div>
      </div>
    </header>
  );
}
