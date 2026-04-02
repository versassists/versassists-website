import type { Testimonial } from "@/lib/constants";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-100 hover-lift">
      <Quote className="w-8 h-8 text-primary/20 mb-4" />
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-700 leading-relaxed mb-6 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-gray-900">{testimonial.name}</p>
          <p className="text-sm text-gray-500">
            {testimonial.title}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}
