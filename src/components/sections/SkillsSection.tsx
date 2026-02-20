"use client";

import { skillGroups, languages } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInView } from "@/components/animations/FadeInView";
import { Globe } from "lucide-react";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-bg-secondary/20" />

      <div className="section-container relative z-10">
        <SectionHeading label="Skills" title="Capabilities" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillGroups.map((group, i) => (
            <FadeInView
              key={group.category}
              delay={i * 0.1}
              className={i === skillGroups.length - 1 && skillGroups.length % 2 !== 0 ? "md:col-span-2 md:max-w-md md:mx-auto" : ""}
            >
              <div className="h-full p-6 rounded-2xl bg-bg-secondary/50 border border-border">
                <h3 className={`text-sm font-mono uppercase tracking-wider mb-4 ${
                  i % 2 === 0 ? "text-accent-blue" : "text-accent-teal"
                }`}>
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1.5 text-xs rounded-full border transition-colors cursor-default ${
                        skill.primary
                          ? "bg-accent-blue/10 text-accent-blue border-accent-blue/30 font-medium"
                          : "bg-bg-tertiary/50 text-text-secondary border-border hover:border-accent-blue/30 hover:text-text-primary"
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInView>
          ))}
        </div>

        {/* Languages */}
        <FadeInView delay={0.4} className="mt-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-bg-secondary/30 border border-border">
              <Globe size={16} className="text-accent-teal" />
              <span className="text-sm text-text-muted">Languages:</span>
              <div className="flex gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1 text-xs rounded-full bg-accent-teal/5 text-accent-teal border border-accent-teal/20"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
