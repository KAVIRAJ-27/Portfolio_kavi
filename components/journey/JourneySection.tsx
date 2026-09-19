'use client';

import React, { useState } from 'react';
import { journeyPhases } from '@/data/portfolioData';
import { Compass, CheckCircle2, ChevronRight, Award, Calendar, Sparkles } from 'lucide-react';

export function JourneySection() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(6); // Default on Phase 7 (Current)

  const activePhase = journeyPhases[activePhaseIndex];

  return (
    <section id="journey" className="py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-3">
          <Compass className="w-3.5 h-3.5" />
          <span>Curriculum & Self-Direction</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          My Development Journey
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
          An honest, phase-by-phase timeline of programming foundations, applied AI coursework, mobile frameworks, and advanced system projects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Vertical Roadmap */}
        <div className="lg:col-span-7 space-y-3">
          {journeyPhases.map((phase, idx) => {
            const isSelected = idx === activePhaseIndex;
            return (
              <button
                key={phase.phase}
                onClick={() => setActivePhaseIndex(idx)}
                className={`w-full flex items-center justify-between p-4 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-cyan-500/15 border-cyan-400/60 shadow-lg shadow-cyan-500/10 scale-[1.01]'
                    : 'glass-panel border-white/10 hover:border-white/20 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold transition-colors ${
                      isSelected
                        ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/30'
                        : 'bg-white/5 text-slate-400'
                    }`}
                  >
                    0{phase.phase}
                  </div>
                  <div>
                    <h3 className={`text-xs sm:text-sm font-bold ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                      {phase.title}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400">
                      {phase.period}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {phase.highlightProject && (
                    <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      Project Milestone
                    </span>
                  )}
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-500'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Deep Phase Details */}
        <div className="lg:col-span-5 sticky top-28">
          <div className="glass-panel p-6 sm:p-7 border border-cyan-500/30 bg-slate-900/90 shadow-xl">
            <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold font-mono text-cyan-400">
                  Phase 0{activePhase.phase}
                </span>
                <span className="text-xs text-slate-500">&bull;</span>
                <span className="text-xs font-mono text-slate-400">
                  {activePhase.period}
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                Milestone
              </span>
            </div>

            <h4 className="text-lg font-bold text-white mb-3">
              {activePhase.title}
            </h4>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              {activePhase.summary}
            </p>

            {/* Unlocked Competencies */}
            <div className="mb-6">
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block mb-2.5">
                Technical Capabilities Unlocked
              </span>
              <div className="flex flex-wrap gap-2">
                {activePhase.skillsUnlocked.map((skill) => (
                  <span
                    key={skill}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-200"
                  >
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Project Highlight if any */}
            {activePhase.highlightProject && (
              <div className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-950/30">
                <div className="flex items-center gap-1.5 text-cyan-300 text-xs font-bold font-mono mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Capstone Project Created</span>
                </div>
                <p className="text-xs text-slate-300 font-medium">
                  {activePhase.highlightProject}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
