"use client";

import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInView } from "@/components/animations/FadeInView";
import { Badge } from "@/components/ui/Badge";

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
                <div className="flex items-start justify-between mb-4">
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

                <h3 className="text-lg font-semibold text-text-primary mb-4">
                  {project.title}
                </h3>

                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
                      What it was
                    </span>
                    <p className="mt-1 text-sm text-text-secondary">
                      {project.whatItWas}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
                      My focus
                    </span>
                    <p className="mt-1 text-sm text-text-secondary">
                      {project.myFocus}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
                      What this demonstrates
                    </span>
                    <p className="mt-1 text-sm text-accent-teal/80">
                      {project.demonstrates}
                    </p>
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
