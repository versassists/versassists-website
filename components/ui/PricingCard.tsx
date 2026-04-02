import Link from "next/link";
import type { PricingPlan } from "@/lib/constants";
import { Check } from "lucide-react";

interface PricingCardProps {
  plan: PricingPlan;
}

export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-8 lg:p-10 ${
        plan.highlighted
          ? "bg-gray-900 text-white border-2 border-primary shadow-2xl shadow-primary/20 scale-[1.02]"
          : "bg-white text-gray-900 border border-gray-200"
      } hover-lift`}
    >
      {plan.highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider">
          Most Popular
        </div>
      )}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
        <p
          className={`text-sm ${
            plan.highlighted ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {plan.tagline}
        </p>
      </div>
      <div className="mb-8">
        <div className="flex items-end gap-1">
          <span className="text-4xl font-bold">{plan.price}</span>
        </div>
        <p
          className={`text-sm mt-1 ${
            plan.highlighted ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {plan.period}
        </p>
      </div>
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <Check
              className={`w-5 h-5 shrink-0 mt-0.5 ${
                plan.highlighted ? "text-primary-light" : "text-primary"
              }`}
            />
            <span
              className={
                plan.highlighted ? "text-gray-300" : "text-gray-600"
              }
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className={`block text-center py-3.5 rounded-full font-semibold text-sm transition-all ${
          plan.highlighted
            ? "bg-primary text-white hover:bg-primary-dark"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {plan.cta}
      </Link>
    </div>
  );
}
