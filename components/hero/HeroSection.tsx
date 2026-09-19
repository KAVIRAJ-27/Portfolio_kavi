'use client';

import React, { useState, useEffect } from 'react';
import { NetworkCanvas } from './NetworkCanvas';
import { personalInfo } from '@/data/portfolioData';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Sparkles,
  Terminal
} from 'lucide-react';
import { Github, Linkedin } from '@/components/ui/Icons';
import { useToast } from '@/components/ui/Toast';

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const { showToast } = useToast();

  const currentRole = personalInfo.rotatingRoles[roleIndex];

  // Typing animation effect
  useEffect(() => {
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseTime = isDeleting ? 40 : 1800;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        } else {
          // Pause at end of word then start deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personalInfo.rotatingRoles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole]);

  const handleDownloadResume = (e: React.MouseEvent) => {
    showToast('Initiating resume download...', 'info');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern">
      {/* Background Interactive Network Constellation */}
      <NetworkCanvas />

      {/* Futuristic ambient radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md mb-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
          </span>
          <span className="text-xs font-mono font-medium text-cyan-300">
            {personalInfo.education}
          </span>
        </div>

        {/* Name Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
          <span className="block text-slate-100">
            {personalInfo.name}
          </span>
          <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2 text-gradient-cyan">
            AI & Data Science Student
          </span>
        </h1>

        {/* Dynamic Rotating Role Badge */}
        <div className="flex items-center justify-center gap-2 mb-6 font-mono text-base sm:text-xl text-slate-300">
          <span className="text-cyan-400">&gt;</span>
          <span>Role: </span>
          <span className="text-cyan-400 font-semibold border-b-2 border-cyan-400 min-w-[200px] text-left">
            {displayText}
            <span className="animate-pulse">_</span>
          </span>
        </div>

        {/* Headline Quote */}
        <p className="text-lg sm:text-2xl font-medium text-slate-200 max-w-3xl mx-auto leading-relaxed mb-4">
          &ldquo;{personalInfo.headline}&rdquo;
        </p>

        {/* Supporting Bio */}
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
          {personalInfo.supportingText}
        </p>

        {/* Location and College Info */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 mb-9">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>{personalInfo.location}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
            <span>III Year Undergraduate</span>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.socials.resumePdf}
            download="Kaviraj_R_Resume.pdf"
            onClick={handleDownloadResume}
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass-panel text-slate-200 hover:text-white hover:border-cyan-500/40 hover:bg-white/10 font-medium text-sm transition-all"
          >
            <FileDown className="w-4 h-4 text-cyan-400" />
            <span>Download Resume</span>
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-medium text-sm transition-all"
          >
            <Mail className="w-4 h-4 text-indigo-400" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Social Icons Row */}
        <div className="flex items-center justify-center gap-4">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-400 transition-colors"
            aria-label="GitHub Profile: KAVIRAJ-27"
            title="GitHub: https://github.com/KAVIRAJ-27"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn Profile: Kaviraj R"
            title="LinkedIn Profile: Kaviraj R"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href={personalInfo.socials.email}
            className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-400 transition-colors"
            aria-label="Send Email"
            title="Email: [Add Email]"
          >
            <Mail className="w-5 h-5" />
          </a>

          <a
            href="#terminal"
            className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-400 transition-colors"
            aria-label="Jump to CLI Terminal"
            title="Launch Interactive Terminal"
          >
            <Terminal className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
