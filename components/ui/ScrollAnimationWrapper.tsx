"use client";

import { useEffect, useRef } from "react";

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
}

export default function ScrollAnimationWrapper({
  children,
  className = "",
  stagger = false,
}: ScrollAnimationWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    if (stagger) {
      const children = el.children;
      for (let i = 0; i < children.length; i++) {
        observer.observe(children[i]);
      }
    } else {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
