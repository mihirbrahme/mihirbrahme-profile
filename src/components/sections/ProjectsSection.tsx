"use client";

import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInView } from "@/components/animations/FadeInView";
import { Badge } from "@/components/ui/Badge";
import { Target, Lightbulb, CheckCircle, TrendingUp } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="section-container">
        <SectionHeading
          label="Selected Projects"
          title="Programs & impact"
          subtitle="Key programs that demonstrate my approach to building at scale"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <FadeInView key={project.number} delay={i * 0.1}>
              <div className="h-full p-6 rounded-2xl bg-bg-secondary/50 border border-border card-glow group">
                {/* Project number and tags */}
                <div className="flex items-start justify-between mb-3">
                  <span className="text-4xl font-bold gradient-text opacity-60">
                    0{project.number}
                  </span>
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-text-primary mb-1">
                  {project.title}
                </h3>

                {/* Role badge */}
                <p className="text-xs font-mono text-accent-teal/80 mb-4">
                  Role: {project.role}
                </p>

                {/* Case study format */}
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <Target size={14} className="text-red-400/70" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
                        Challenge
                      </span>
                      <p className="mt-0.5 text-sm text-text-secondary leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <Lightbulb size={14} className="text-accent-blue/70" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
                        Approach
                      </span>
                      <p className="mt-0.5 text-sm text-text-secondary leading-relaxed">
                        {project.approach}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <CheckCircle size={14} className="text-accent-teal/70" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
                        Outcome
                      </span>
                      <p className="mt-0.5 text-sm text-accent-teal/80 leading-relaxed">
                        {project.outcome}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Impact metric */}
                {project.impact && (
                  <div className="mt-4 pt-3 border-t border-border/50">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-blue/5 border border-accent-blue/20">
                      <TrendingUp size={12} className="text-accent-blue" />
                      <span className="text-xs font-semibold text-accent-blue">
                        {project.impact}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
