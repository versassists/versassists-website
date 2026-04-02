import type { Service } from "@/lib/constants";
import { CheckCircle } from "lucide-react";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;
  return (
    <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover-lift hover:border-primary/20">
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
        <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {service.description}
      </p>
      <ul className="space-y-2">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
            <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
