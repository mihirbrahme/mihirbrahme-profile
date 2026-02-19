"use client";

import { FadeInView } from "@/components/animations/FadeInView";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <FadeInView className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
      {label && (
        <span className="inline-block mb-3 text-sm font-mono uppercase tracking-widest text-accent-blue">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </FadeInView>
  );
}
