"use client";

import { motion } from "motion/react";
import { ChevronDown, Download } from "lucide-react";
import Image from "next/image";
import { ecosystemPartners } from "@/lib/data";

const specialties = [
  "Business Analysis",
  "Product Ownership",
  "Pre-Sales",
  "DPI & Interoperability",
  "AI Automation",
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background dot grid */}
      <div className="absolute inset-0 dot-grid opacity-60" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]" />

      <div className="section-container relative z-10 pt-40 pb-32 md:pt-48 md:pb-40">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="mb-8 mt-10 md:mt-14"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full glow-pulse">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-blue to-accent-teal p-[3px]">
                <div className="w-full h-full rounded-full overflow-hidden bg-bg-primary">
                  <Image
                    src="/profile-pic-4.png"
                    alt="Mihir Brahme"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight"
          >
            <span className="gradient-text">Mihir Brahme</span>
          </motion.h1>

          {/* Triple-hat role title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 flex items-center gap-2 md:gap-3 text-base md:text-xl font-mono"
          >
            <span className="text-accent-blue">Business Analyst</span>
            <span className="text-accent-teal">|</span>
            <span className="text-text-primary">Product Owner</span>
            <span className="text-accent-teal">|</span>
            <span className="text-accent-teal">Pre-Sales Lead</span>
          </motion.div>

          {/* Specialty pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 flex flex-wrap justify-center gap-2"
          >
            {specialties.map((specialty, i) => (
              <motion.span
                key={specialty}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                className={`px-4 py-1.5 text-sm font-mono rounded-full border ${
                  i % 2 === 0
                    ? "border-accent-blue/30 text-accent-blue bg-accent-blue/5"
                    : "border-accent-teal/30 text-accent-teal bg-accent-teal/5"
                }`}
              >
                {specialty}
              </motion.span>
            ))}
          </motion.div>

          {/* Value proposition */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-8 text-lg md:text-xl text-text-secondary max-w-3xl leading-relaxed"
          >
            I build and deliver population-scale technology where the real test
            is not a demo&mdash;it&rsquo;s correctness, resilience, and adoption
            under real-world complexity.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-4 text-base md:text-lg text-text-muted max-w-3xl leading-relaxed"
          >
            My work sits at the intersection of robust systems of record,
            standardized API orchestration, event-driven architecture, and
            AI/agent-ready frameworks&mdash;paired with goal-oriented UX that
            helps diverse participants complete outcomes reliably.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3.5 rounded-full font-semibold text-sm bg-gradient-to-r from-accent-blue to-accent-teal text-white hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Work with me
            </a>
            <a
              href="/Mihir_Brahme_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full font-semibold text-sm border border-border text-text-secondary hover:border-accent-blue/50 hover:text-text-primary transition-all duration-300 inline-flex items-center gap-2"
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>

          {/* Ecosystem social proof strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-14 flex flex-col items-center gap-3"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-text-muted">
              Ecosystem Experience
            </span>
            <div className="flex items-center gap-6">
              {ecosystemPartners.map((partner) => (
                <span
                  key={partner.name}
                  className="text-sm font-semibold text-text-muted/70 hover:text-text-secondary transition-colors"
                  title={partner.name}
                >
                  {partner.abbr || partner.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 float-animation"
        >
          <ChevronDown size={24} className="text-text-muted" />
        </motion.div>
      </div>
    </section>
  );
}
