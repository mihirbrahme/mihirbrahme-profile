"use client";

import { personalInterests } from "@/lib/data";
import { FadeInView } from "@/components/animations/FadeInView";
import {
  UtensilsCrossed,
  Compass,
  BookOpen,
  Landmark,
  ScrollText,
} from "lucide-react";

const interestIcons = [
  <UtensilsCrossed size={18} key="cook" />,
  <Compass size={18} key="travel" />,
  <BookOpen size={18} key="history" />,
  <Landmark size={18} key="indic" />,
  <ScrollText size={18} key="lit" />,
];

export function PersonalSection() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-bg-secondary/20" />

      <div className="section-container relative z-10">
        <FadeInView>
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block mb-3 text-sm font-mono uppercase tracking-widest text-accent-teal">
              Beyond Work
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
              A few personal notes
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              Outside work, I enjoy the slower, more reflective side of
              life&mdash;things that shape perspective and keep curiosity alive.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {personalInterests.map((interest, i) => (
                <span
                  key={interest}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-tertiary/50 border border-border text-sm text-text-secondary"
                >
                  <span className="text-accent-teal">{interestIcons[i]}</span>
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
