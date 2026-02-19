export interface NavLink {
  label: string;
  href: string;
}

export interface Competency {
  icon: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
}

export interface Principle {
  number: number;
  title: string;
  description: string;
}

export interface ExperienceEntry {
  title: string;
  bullets: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  entries: ExperienceEntry[];
}

export interface Project {
  number: number;
  title: string;
  whatItWas: string;
  myFocus: string;
  demonstrates: string;
  tags: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  highlight?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface PhilosophyLens {
  framework: string;
  author: string;
  concepts: string[];
  application: string;
}
