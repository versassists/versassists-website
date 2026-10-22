"use client";

import { useEffect, useRef, useState } from "react";
import type { Stat } from "@/sanity/lib/fetchMarketing";

interface StatCounterProps {
  stat: Stat;
}

const formatNumber = (n: number) => (n >= 1000 ? n.toLocaleString("en-US") : n.toString());

export default function StatCounter({ stat }: StatCounterProps) {
  // The server HTML always carries the real number, so the stat reads
  // correctly with JavaScript off (search engines, AI crawlers). JavaScript
  // only adds the count-up when the stat scrolls into view.
  const finalText = stat.display ?? `${formatNumber(stat.value)}${stat.suffix || ""}`;
  const [count, setCount] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    let timer: ReturnType<typeof setInterval> | undefined;
    let done = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || done) return;
        done = true;
        observer.disconnect();
        const duration = 2000;
        const steps = 60;
        const increment = stat.value / steps;
        let current = 0;
        setCount(0);
        timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            setCount(null);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [stat.value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-white via-primary-light to-white bg-clip-text text-transparent">
        {count === null ? finalText : `${formatNumber(count)}${stat.suffix || ""}`}
      </div>
      <div className="text-gray-400 text-sm font-medium tracking-wide uppercase">{stat.label}</div>
    </div>
  );
}
