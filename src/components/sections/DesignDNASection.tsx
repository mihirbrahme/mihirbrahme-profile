"use client";

import { designDNAPrinciples } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInView } from "@/components/animations/FadeInView";
import {
  Shield,
  Layers,
  FileCheck,
  Zap,
  Cpu,
} from "lucide-react";

const icons = [
  <Shield size={24} key="shield" />,
  <Layers size={24} key="layers" />,
  <FileCheck size={24} key="filecheck" />,
  <Zap size={24} key="zap" />,
  <Cpu size={24} key="cpu" />,
];

export function DesignDNASection() {
  return (
    <section id="design-dna" className="py-24 md:py-32 relative">
      <div className="section-container">
        <SectionHeading
          label="Design DNA"
          title="How I design systems"
          subtitle="The principles I push for in every engagement"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {designDNAPrinciples.map((principle, i) => (
            <FadeInView
              key={principle.number}
              delay={i * 0.1}
              className={i === 4 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <div className="h-full p-6 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] card-glow group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue group-hover:bg-accent-blue/20 transition-colors">
                    {icons[i]}
                  </div>
                  <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
                    0{principle.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  {principle.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
