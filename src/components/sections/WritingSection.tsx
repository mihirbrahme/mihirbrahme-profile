"use client";

import { Newspaper, Mic } from "lucide-react";
import { writingThemes } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInView } from "@/components/animations/FadeInView";
import { Badge } from "@/components/ui/Badge";

export function WritingSection() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-bg-secondary/20" />

      <div className="section-container relative z-10">
        <SectionHeading
          label="Thought Leadership"
          title="Writing & Speaking"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* AI Pulse */}
          <FadeInView>
            <div className="h-full p-6 rounded-2xl bg-bg-secondary/50 border border-border card-glow">
              <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-4">
                <Newspaper size={24} />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                AI Pulse
              </h3>
              <p className="text-xs font-mono text-text-muted uppercase tracking-wider mb-3">
                Internal Newsletter
              </p>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                A monthly internal newsletter translating fast-moving AI
                developments into practical adoption guidance&mdash;especially
                around agentic AI, automation patterns, and what actually works
                in delivery environments.
              </p>
              <div className="flex flex-wrap gap-2">
                {writingThemes.map((theme) => (
                  <Badge key={theme} variant="outline">
                    {theme}
                  </Badge>
                ))}
              </div>
            </div>
          </FadeInView>

          {/* Speaking */}
          <FadeInView delay={0.1}>
            <div className="h-full p-6 rounded-2xl bg-bg-secondary/50 border border-border card-glow">
              <div className="w-12 h-12 rounded-xl bg-accent-teal/10 flex items-center justify-center text-accent-teal mb-4">
                <Mic size={24} />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                Conferences & Presentations
              </h3>
              <p className="text-xs font-mono text-text-muted uppercase tracking-wider mb-3">
                Global DPI Summit & More
              </p>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                I present solution narratives to executive and stakeholder
                audiences&mdash;bridging technology, governance, and adoption.
                Known for converting complex systems into clear,
                outcome-oriented stories that drive engagement and large deals.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Cairo 2024</Badge>
                <Badge variant="outline">Cape Town 2025</Badge>
                <Badge variant="outline">Executive Audiences</Badge>
                <Badge variant="outline">Solution Narratives</Badge>
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
