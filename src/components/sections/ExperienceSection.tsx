"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, Briefcase, GraduationCap } from "lucide-react";
import { experience } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInView } from "@/components/animations/FadeInView";

const roleBadgeColors: Record<string, string> = {
  "Business Analyst": "bg-accent-blue/10 text-accent-blue border-accent-blue/20",
  "Product Owner": "bg-accent-teal/10 text-accent-teal border-accent-teal/20",
  "Pre-Sales Lead": "bg-purple-500/10 text-purple-400 border-purple-500/20",
};

export function ExperienceSection() {
  const [expandedEntries, setExpandedEntries] = useState<Record<string, boolean>>({});

  const toggleEntry = (key: string) => {
    setExpandedEntries((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-bg-secondary/20" />

      <div className="section-container relative z-10">
        <SectionHeading
          label="Experience"
          title="Career journey"
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-teal to-border" />

            <div className="space-y-12">
              {experience.map((exp, expIdx) => (
                <FadeInView key={exp.company} delay={expIdx * 0.15}>
                  <div className="relative pl-12 md:pl-16">
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-2 top-1">
                      <div className="w-8 h-8 md:w-8 md:h-8 rounded-full bg-bg-primary border-2 border-accent-blue flex items-center justify-center">
                        {expIdx === 0 ? (
                          <Briefcase size={14} className="text-accent-blue" />
                        ) : (
                          <GraduationCap size={14} className="text-accent-teal" />
                        )}
                      </div>
                    </div>

                    {/* Role header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-text-primary">
                        {exp.role}
                      </h3>
                      <p className="text-accent-blue font-medium">{exp.company}</p>
                      <p className="text-sm text-text-muted mt-1">
                        {exp.period} &middot; {exp.location}
                      </p>
                      {exp.narrative && (
                        <p className="mt-3 text-sm text-text-secondary italic leading-relaxed border-l-2 border-accent-teal/30 pl-4">
                          {exp.narrative}
                        </p>
                      )}
                    </div>

                    {/* Entries */}
                    <div className="space-y-3">
                      {exp.entries.map((entry, entryIdx) => {
                        const key = `${expIdx}-${entryIdx}`;
                        const isExpanded = expandedEntries[key];

                        return (
                          <div
                            key={key}
                            className="rounded-xl bg-bg-secondary/50 border border-border overflow-hidden"
                          >
                            <button
                              onClick={() => toggleEntry(key)}
                              className="w-full px-4 py-3 flex items-start justify-between text-left hover:bg-bg-tertiary/30 transition-colors"
                            >
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="text-sm font-medium text-text-primary">
                                    {entry.title}
                                  </span>
                                  {entry.roleBadge && (
                                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${roleBadgeColors[entry.roleBadge] || "bg-bg-tertiary/50 text-text-muted border-border"}`}>
                                      {entry.roleBadge}
                                    </span>
                                  )}
                                </div>
                                {entry.highlight && (
                                  <p className="text-xs text-accent-teal/80 mt-1">
                                    {entry.highlight}
                                  </p>
                                )}
                              </div>
                              <div className="flex-shrink-0 ml-2 mt-1">
                                {isExpanded ? (
                                  <ChevronDown size={16} className="text-text-muted" />
                                ) : (
                                  <ChevronRight size={16} className="text-text-muted" />
                                )}
                              </div>
                            </button>

                            {isExpanded && (
                              <div className="px-4 pb-4">
                                <ul className="space-y-2">
                                  {entry.bullets.map((bullet, bIdx) => (
                                    <li
                                      key={bIdx}
                                      className="text-sm text-text-secondary leading-relaxed flex gap-2"
                                    >
                                      <span className="text-accent-blue mt-1.5 flex-shrink-0">
                                        &bull;
                                      </span>
                                      <span>{bullet}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
