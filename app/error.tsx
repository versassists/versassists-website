"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#16213e] pt-40 pb-32 min-h-[60vh] flex items-center">
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-accent/8 rounded-full blur-[100px]" />
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <p className="text-6xl font-extrabold bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent mb-6">
          Oops
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
          Something Went Wrong
        </h1>
        <p className="text-gray-400 text-lg max-w-md mx-auto mb-10 leading-relaxed">
          We hit an unexpected error. You can try again or head back to the
          homepage.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold shadow-lg shadow-primary/25 hover:bg-primary-dark hover:shadow-primary/40 transition-all"
          >
            <RefreshCw className="w-5 h-5" /> Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/[0.08] border border-white/[0.15] text-white font-semibold hover:bg-white/[0.12] transition-all"
          >
            <Home className="w-5 h-5" /> Go Home
          </Link>
        </div>
      </div>
    </section>
  );
}
