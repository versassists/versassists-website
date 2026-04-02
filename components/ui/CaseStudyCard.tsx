import type { CaseStudy } from "@/lib/constants";
import { ArrowRight, CheckCircle } from "lucide-react";

interface CaseStudyCardProps {
  study: CaseStudy;
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover-lift">
      {/* Header */}
      <div className="gradient-hero p-8">
        <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium mb-3">
          {study.industry}
        </span>
        <h3 className="text-2xl font-bold text-white">{study.client}</h3>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Challenge
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            {study.challenge}
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Solution
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            {study.solution}
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Results
          </h4>
          <ul className="space-y-2">
            {study.results.map((result, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Testimonial */}
        <div className="border-t border-gray-100 pt-6">
          <p className="text-gray-600 text-sm italic leading-relaxed">
            &ldquo;{study.testimonial}&rdquo;
          </p>
          <p className="text-sm font-semibold text-gray-900 mt-2">
            — {study.client}
          </p>
        </div>
      </div>
    </div>
  );
}
