"use client";

import {
  Database,
  FileCode,
  Workflow,
  Bot,
  LayoutDashboard,
} from "lucide-react";
import { competencies, stats } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInView } from "@/components/animations/FadeInView";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";

const iconMap: Record<string, React.ReactNode> = {
  Database: <Database size={28} />,
  FileCode: <FileCode size={28} />,
  Workflow: <Workflow size={28} />,
  Bot: <Bot size={28} />,
  LayoutDashboard: <LayoutDashboard size={28} />,
};

export function CompetenciesSection() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="section-container">
        <SectionHeading
          label="Core Strengths"
          title="What I'm best at"
        />

        {/* Competency cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((comp, i) => (
            <FadeInView key={comp.title} delay={i * 0.1}>
              <div className="h-full p-6 rounded-2xl bg-bg-secondary/50 border border-border card-glow">
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-4">
                  {iconMap[comp.icon]}
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {comp.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {comp.description}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>

        {/* Stats strip */}
        <FadeInView delay={0.3} className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 p-8 rounded-2xl bg-bg-secondary/30 border border-border">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">
                  {stat.suffix === "M+" ? (
                    <>
                      $<AnimatedCounter value={stat.numericValue} suffix="M+" />
                    </>
                  ) : stat.suffix === "%" ? (
                    <>
                      ~<AnimatedCounter value={stat.numericValue} suffix="%" />
                    </>
                  ) : (
                    <AnimatedCounter
                      value={stat.numericValue}
                      suffix={stat.suffix}
                    />
                  )}
                </div>
                <p className="mt-2 text-sm text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
