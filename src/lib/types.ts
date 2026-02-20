export interface NavLink {
  label: string;
  href: string;
}

export interface Competency {
  icon: string;
  title: string;
  description: string;
  linkTo?: string;
}

export interface Stat {
  value: string;
  numericValue: number;
  suffix: string;
  prefix?: string;
  label: string;
}

export interface Principle {
  number: number;
  title: string;
  description: string;
  example?: string;
}

export interface ExperienceEntry {
  title: string;
  highlight?: string;
  roleBadge?: string;
  bullets: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  narrative?: string;
  entries: ExperienceEntry[];
}

export interface Project {
  number: number;
  title: string;
  role: string;
  challenge: string;
  approach: string;
  outcome: string;
  impact?: string;
  tags: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  highlight?: string;
  relevance?: string;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  primary?: boolean;
}

export interface PhilosophyLens {
  framework: string;
  author: string;
  concepts: string[];
  application: string;
  example?: string;
}

export interface EcosystemPartner {
  name: string;
  abbr?: string;
}
