"use client";

import {
  Search,
  Package,
  TrendingUp,
  Workflow,
  Bot,
  LayoutDashboard,
} from "lucide-react";
import { competencies, stats } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInView } from "@/components/animations/FadeInView";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search size={28} />,
  Package: <Package size={28} />,
  TrendingUp: <TrendingUp size={28} />,
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
          title="What I bring to the table"
          subtitle="A full-stack skill set across business analysis, product ownership, and pre-sales"
        />

        {/* Competency cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((comp, i) => (
            <FadeInView key={comp.title} delay={i * 0.1}>
              <div className="h-full p-6 rounded-2xl bg-bg-secondary/50 border border-border card-glow group">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    i % 2 === 0
                      ? "bg-accent-blue/10 text-accent-blue"
                      : "bg-accent-teal/10 text-accent-teal"
                  }`}
                >
                  {iconMap[comp.icon]}
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {comp.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-3">
                  {comp.description}
                </p>
                {comp.linkTo && (
                  <a
                    href={comp.linkTo}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(comp.linkTo!)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`inline-flex items-center gap-1 text-xs font-medium transition-colors ${
                      i % 2 === 0
                        ? "text-accent-blue/70 hover:text-accent-blue"
                        : "text-accent-teal/70 hover:text-accent-teal"
                    }`}
                  >
                    See this in action &rarr;
                  </a>
                )}
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
