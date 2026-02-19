"use client";

import { Mail, Github, MapPin, Download } from "lucide-react";
import { FadeInView } from "@/components/animations/FadeInView";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-accent-blue/5 to-bg-primary" />
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="section-container relative z-10">
        <FadeInView>
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block mb-3 text-sm font-mono uppercase tracking-widest text-accent-blue">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Let&rsquo;s build something{" "}
              <span className="gradient-text">at scale</span>
            </h2>
            <p className="text-text-secondary leading-relaxed mb-10">
              If you&rsquo;re building an ecosystem platform, modernizing
              system-of-record foundations, or preparing for event-driven
              orchestration and agentic automation&mdash;let&rsquo;s connect.
            </p>

            {/* Contact links */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="mailto:mihir.brahme@gmail.com"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent-blue to-accent-teal text-white font-semibold text-sm hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Mail size={18} />
                mihir.brahme@gmail.com
              </a>
              <a
                href="https://github.com/mihirbrahme"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-border text-text-secondary hover:border-accent-blue/50 hover:text-text-primary transition-all duration-300 text-sm"
              >
                <Github size={18} />
                GitHub
              </a>
            </div>

            {/* Location and CV */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <span className="flex items-center gap-2 text-sm text-text-muted">
                <MapPin size={16} />
                Pune, India
              </span>
              <a
                href="/Mihir_Brahme_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent-blue transition-colors"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
