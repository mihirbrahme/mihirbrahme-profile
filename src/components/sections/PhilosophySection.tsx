"use client";

import { philosophyLenses } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInView } from "@/components/animations/FadeInView";
import { Shield, Users, Target } from "lucide-react";

const icons = [
  <Shield size={20} key="shield" />,
  <Users size={20} key="users" />,
  <Target size={20} key="target" />,
];

const accentColors = [
  "from-accent-blue to-accent-teal",
  "from-accent-teal to-emerald-400",
  "from-accent-blue to-violet-400",
];

export function PhilosophySection() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="section-container">
        <SectionHeading
          label="Decision Frameworks"
          title="Mental models I operate with"
          subtitle="Three principles that shape how I design systems, make trade-offs, and drive adoption"
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-teal to-accent-blue/20" />

            <div className="space-y-10">
              {philosophyLenses.map((lens, i) => (
                <FadeInView key={lens.principle} delay={i * 0.15}>
                  <div className="flex gap-6 items-start">
                    {/* Number node */}
                    <div className="relative flex-shrink-0">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${accentColors[i]} flex items-center justify-center text-white shadow-lg shadow-accent-blue/20`}>
                        {icons[i]}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-2">
                      <h3 className="text-xl font-semibold text-text-primary mb-1">
                        {lens.principle}
                      </h3>
                      <p className="text-xs font-mono text-text-muted uppercase tracking-wider mb-4">
                        Rooted in: {lens.rooted}
                      </p>

                      <div className="space-y-4">
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-wider text-accent-blue">
                            Why it matters
                          </span>
                          <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                            {lens.whyItMatters}
                          </p>
                        </div>
                        <div className="pl-4 border-l-2 border-accent-teal/30">
                          <span className="text-xs font-semibold uppercase tracking-wider text-accent-teal">
                            How I apply this
                          </span>
                          <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                            {lens.howIApply}
                          </p>
                        </div>
                      </div>
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
