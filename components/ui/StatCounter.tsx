"use client";

import { useEffect, useRef, useState } from "react";
import type { Stat } from "@/lib/constants";

interface StatCounterProps {
  stat: Stat;
}

export default function StatCounter({ stat }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = stat.value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= stat.value) {
              setCount(stat.value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [stat.value, hasAnimated]);

  const formatNumber = (n: number) => {
    if (n >= 1000) return n.toLocaleString();
    return n.toString();
  };

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {formatNumber(count)}
        {stat.suffix}
      </div>
      <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
    </div>
  );
}
