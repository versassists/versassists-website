import type { NextConfig } from "next";

// Security headers applied to every response.
// CSP is intentionally permissive for now because the site loads:
//   - Google Analytics / gtag (googletagmanager.com + google-analytics.com)
//   - GoHighLevel embedded forms (msgsndr.com + leadconnectorhq.com)
//   - Calendly link outs
//   - Unsplash + wixstatic remote images
// Tighten these directives further once the final third-party list is locked in.
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://*.msgsndr.com https://*.leadconnectorhq.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https://images.unsplash.com https://static.wixstatic.com https://www.google-analytics.com https://www.googletagmanager.com https://*.msgsndr.com https://*.leadconnectorhq.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.msgsndr.com https://*.leadconnectorhq.com",
      "frame-src 'self' https://calendly.com https://*.msgsndr.com https://*.leadconnectorhq.com",
      "media-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
