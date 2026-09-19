'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { CommandPalette } from '@/components/layout/CommandPalette';
import { HeroSection } from '@/components/hero/HeroSection';
import { AboutSection } from '@/components/about/AboutSection';
import { SkillsSection } from '@/components/skills/SkillsSection';
import { ProjectsSection } from '@/components/projects/ProjectsSection';
import { IoTSection } from '@/components/iot/IoTSection';
import { JourneySection } from '@/components/journey/JourneySection';
import { GithubSection } from '@/components/github/GithubSection';
import { AchievementsSection } from '@/components/achievements/AchievementsSection';
import { ResumeSection } from '@/components/resume/ResumeSection';
import { DevTerminal } from '@/components/terminal/DevTerminal';
import { ContactSection } from '@/components/contact/ContactSection';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenPalette={() => setIsPaletteOpen(true)} />

      {/* Global Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <HeroSection />

        {/* About & Pathway Section */}
        <AboutSection />

        {/* Technical Ecosystem & Skills */}
        <SkillsSection />

        {/* Featured Projects & Project Explorer */}
        <ProjectsSection />

        {/* Exploring IoT & Smart Systems */}
        <IoTSection />

        {/* 7-Phase Development Journey */}
        <JourneySection />

        {/* GitHub Activity & Open Source Repositories */}
        <GithubSection />

        {/* Achievements & Smart India Hackathon */}
        <AchievementsSection />

        {/* Curriculum Vitae & Resume Download */}
        <ResumeSection />

        {/* Interactive Developer CLI Terminal */}
        <DevTerminal />

        {/* Contact & Collaboration */}
        <ContactSection />
      </main>

      {/* Minimal Futuristic Footer */}
      <Footer />
    </div>
  );
}
