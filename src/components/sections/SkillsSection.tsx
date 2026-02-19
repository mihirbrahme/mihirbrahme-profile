"use client";

import { skillGroups } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInView } from "@/components/animations/FadeInView";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-bg-secondary/20" />

      <div className="section-container relative z-10">
        <SectionHeading label="Skills" title="Capabilities" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillGroups.map((group, i) => (
            <FadeInView key={group.category} delay={i * 0.1}>
              <div className="p-6 rounded-2xl bg-bg-secondary/50 border border-border">
                <h3 className="text-sm font-mono uppercase tracking-wider text-accent-blue mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs rounded-full bg-bg-tertiary/50 text-text-secondary border border-border hover:border-accent-blue/30 hover:text-text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
