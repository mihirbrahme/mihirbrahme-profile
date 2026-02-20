"use client";

import { backbonePrinciples } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInView } from "@/components/animations/FadeInView";
import { Award, GraduationCap, BarChart3, Search, Pencil, Truck, TrendingUp } from "lucide-react";

const credentials = [
  { icon: <BarChart3 size={14} key="dpi" />, text: "5+ Years DPI Ecosystems" },
  { icon: <GraduationCap size={14} key="mba" />, text: "Executive MBA" },
  { icon: <Award size={14} key="cfa" />, text: "CFA Level I" },
];

const howIWork = [
  { step: "01", label: "Discover", icon: <Search size={16} key="discover" />, color: "text-accent-blue" },
  { step: "02", label: "Design", icon: <Pencil size={16} key="design" />, color: "text-accent-teal" },
  { step: "03", label: "Deliver", icon: <Truck size={16} key="deliver" />, color: "text-accent-blue" },
  { step: "04", label: "Grow", icon: <TrendingUp size={16} key="grow" />, color: "text-accent-teal" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      {/* Subtle background variant */}
      <div className="absolute inset-0 bg-bg-secondary/20" />

      <div className="section-container relative z-10">
        <SectionHeading label="About" title="Who I am" />

        {/* Short version */}
        <FadeInView>
          <div className="max-w-3xl mx-auto mb-8">
            <div className="pl-6 border-l-2 border-accent-blue/50">
              <p className="text-lg text-text-secondary leading-relaxed">
                I&rsquo;m a <span className="text-text-primary font-semibold">Senior Business Analyst, Product Owner, and Pre-Sales Lead</span> based in Pune,
                working at Suma Soft Pvt. Ltd. I help teams build platforms that
                must remain correct and usable at scale&mdash;across stakeholders,
                standards, and operational realities.
              </p>
            </div>
          </div>
        </FadeInView>

        {/* Credential badges */}
        <FadeInView>
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {credentials.map((cred) => (
                <span
                  key={cred.text}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue/5 border border-accent-blue/20 text-sm text-accent-blue"
                >
                  {cred.icon}
                  {cred.text}
                </span>
              ))}
            </div>
          </div>
        </FadeInView>

        {/* How I Work strip */}
        <FadeInView>
          <div className="max-w-3xl mx-auto mb-16">
            <h3 className="text-center text-sm font-mono uppercase tracking-widest text-text-muted mb-6">
              How I Work
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {howIWork.map((item, i) => (
                <div key={item.label} className="relative text-center group">
                  <div className={`w-12 h-12 mx-auto rounded-xl bg-bg-secondary/50 border border-border flex items-center justify-center ${item.color} group-hover:border-accent-blue/30 transition-colors`}>
                    {item.icon}
                  </div>
                  <p className="mt-2 text-sm font-semibold text-text-primary">{item.label}</p>
                  <span className="text-xs text-text-muted font-mono">{item.step}</span>
                  {i < howIWork.length - 1 && (
                    <div className="hidden md:block absolute top-6 -right-2 text-text-muted/30">
                      &rarr;
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeInView>

        {/* Long version intro */}
        <FadeInView>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-base text-text-secondary leading-relaxed">
              DPI ecosystems teach you a hard truth: at population scale, the
              constraint is rarely just engineering speed. The constraint is
              coordination, and the cost of ambiguity is massive. If the system
              isn&rsquo;t robust&mdash;if contracts aren&rsquo;t clean, if error
              handling is inconsistent, if evidence and audit trails are
              weak&mdash;delivery slows down, trust erodes, and participation
              becomes fragile.
            </p>
            <p className="mt-4 text-lg font-semibold text-text-primary">
              That&rsquo;s why my work starts with a{" "}
              <span className="gradient-text">backbone-first philosophy:</span>
            </p>
          </div>
        </FadeInView>

        {/* Backbone principles - visual pipeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Connecting line - visible on all screens */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-teal to-accent-blue/20" />

            <div className="space-y-8">
              {backbonePrinciples.map((principle, i) => (
                <FadeInView key={principle.number} delay={i * 0.15}>
                  <div className="flex gap-6 items-start">
                    {/* Number node */}
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-blue to-accent-teal flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-accent-blue/20">
                        {principle.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-2">
                      <h3 className="text-xl font-semibold text-text-primary mb-2">
                        {principle.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {principle.description}
                      </p>
                      {principle.example && (
                        <p className="mt-2 text-sm text-accent-teal/70 italic">
                          {principle.example}
                        </p>
                      )}
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <FadeInView delay={0.3}>
          <div className="max-w-3xl mx-auto mt-16">
            <div className="p-6 rounded-2xl bg-bg-secondary/50 border border-border">
              <p className="text-text-secondary leading-relaxed italic">
                I operate as the bridge between product intent, operational
                reality, and engineering execution&mdash;bringing structure
                through discovery, mapping, requirements, delivery governance,
                and quality-driven rollout readiness.
              </p>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
