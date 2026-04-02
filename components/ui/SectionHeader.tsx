interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  label,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12 lg:mb-16`}>
      {label && (
        <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-3">
          {label}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
