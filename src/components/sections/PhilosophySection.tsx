"use client";

import { philosophyLenses } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInView } from "@/components/animations/FadeInView";
import { Badge } from "@/components/ui/Badge";
import { BookOpen } from "lucide-react";

export function PhilosophySection() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="section-container">
        <SectionHeading
          label="Intellectual Framework"
          title="How I think"
          subtitle="Three lenses that shape my decision-making and system design"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {philosophyLenses.map((lens, i) => (
            <FadeInView key={lens.framework} delay={i * 0.15}>
              <div className="h-full p-6 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] card-glow group">
                <div className="w-10 h-10 rounded-lg bg-accent-teal/10 flex items-center justify-center text-accent-teal mb-4 group-hover:bg-accent-teal/20 transition-colors">
                  <BookOpen size={20} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary">
                  {lens.framework}
                </h3>
                <p className="text-sm text-text-muted mt-1 mb-4">
                  {lens.author}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {lens.concepts.map((concept) => (
                    <Badge key={concept} variant="outline">
                      {concept}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {lens.application}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
