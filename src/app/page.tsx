import { HeroSection } from "@/components/sections/HeroSection";
import { CompetenciesSection } from "@/components/sections/CompetenciesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { DesignDNASection } from "@/components/sections/DesignDNASection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { WritingSection } from "@/components/sections/WritingSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { PersonalSection } from "@/components/sections/PersonalSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CompetenciesSection />
      <AboutSection />
      <DesignDNASection />
      <ExperienceSection />
      <ProjectsSection />
      <WritingSection />
      <EducationSection />
      <SkillsSection />
      <PhilosophySection />
      <PersonalSection />
      <ContactSection />
    </>
  );
}
