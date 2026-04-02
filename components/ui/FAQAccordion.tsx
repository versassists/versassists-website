"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/lib/constants";

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className={`rounded-xl border transition-all ${
            openIndex === index
              ? "border-primary/20 bg-primary/[0.02] shadow-sm"
              : "border-gray-200 bg-white"
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-5 text-left"
          >
            <span className="font-semibold text-gray-900 pr-4">
              {item.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                openIndex === index ? "rotate-180 text-primary" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="px-5 pb-5 text-gray-600 leading-relaxed text-sm">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
