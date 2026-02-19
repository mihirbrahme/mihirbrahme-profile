"use client";

import { motion } from "motion/react";
import { type ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function GradientText({
  children,
  className = "",
  delay = 0,
}: GradientTextProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={`gradient-text ${className}`}
    >
      {children}
    </motion.span>
  );
}
