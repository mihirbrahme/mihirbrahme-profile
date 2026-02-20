"use client";

import { GraduationCap, Award, BookOpen } from "lucide-react";
import { education } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInView } from "@/components/animations/FadeInView";

const iconForDegree = (degree: string) => {
  if (degree.includes("MBA")) return <GraduationCap size={20} />;
  if (degree.includes("CFA")) return <Award size={20} />;
  return <BookOpen size={20} />;
};

export function EducationSection() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="section-container">
        <SectionHeading
          label="Education"
          title="Credentials & learning"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {education.map((edu, i) => (
            <FadeInView
              key={edu.degree}
              delay={i * 0.1}
            >
              <div
                className={`h-full p-5 rounded-2xl border card-glow ${
                  i === 0
                    ? "bg-gradient-to-br from-accent-blue/5 to-accent-teal/5 border-accent-blue/20"
                    : "bg-bg-secondary/50 border-border"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      i === 0
                        ? "bg-accent-blue/15 text-accent-blue"
                        : "bg-bg-tertiary/50 text-text-muted"
                    }`}
                  >
                    {iconForDegree(edu.degree)}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-text-primary text-sm">
                      {edu.degree}
                    </h3>
                    <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-2 mt-2 flex-wrap">
                      <span className="text-xs font-mono text-text-muted">
                        {edu.year}
                      </span>
                      {edu.highlight && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-accent-blue/10 text-accent-blue">
                          {edu.highlight}
                        </span>
                      )}
                    </div>
                    {edu.relevance && (
                      <p className="mt-2 text-xs text-text-muted italic leading-relaxed">
                        {edu.relevance}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
