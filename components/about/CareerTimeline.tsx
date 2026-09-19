'use client';

import React, { useState } from 'react';
import { careerMilestones } from '@/data/portfolioData';
import { CheckCircle2, Circle, ArrowRight } from 'lucide-react';

export function CareerTimeline() {
  const [activeStep, setActiveStep] = useState(3); // Default on "Project Developer"

  return (
    <div className="w-full glass-panel p-6 sm:p-8 border border-white/10 mt-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <span className="text-cyan-400 font-mono">01.</span>
            <span>Evolution Pathway</span>
          </h3>
          <p className="text-xs font-mono text-slate-400">
            Interactive progression: Student &rarr; Learner &rarr; Builder &rarr; Project Developer &rarr; Future AI Engineer
          </p>
        </div>
        <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 w-fit">
          Click any phase to inspect
        </span>
      </div>

      {/* Progress Track */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-6">
        {careerMilestones.map((m, idx) => {
          const isSelected = idx === activeStep;
          const isPast = idx < activeStep;

          return (
            <button
              key={m.step}
              onClick={() => setActiveStep(idx)}
              className={`flex flex-col items-start text-left p-3 rounded-xl border transition-all duration-200 ${
                isSelected
                  ? 'bg-cyan-500/15 border-cyan-400/60 shadow-lg shadow-cyan-500/10'
                  : 'bg-white/5 border-white/5 hover:border-white/20 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1">
                {isPast ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                ) : isSelected ? (
                  <span className="relative flex h-3.5 w-3.5 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-cyan-400 opacity-75" />
                    <Circle className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400/30" />
                  </span>
                ) : (
                  <Circle className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                )}
                <span className={`text-[10px] font-mono uppercase tracking-wider ${isSelected ? 'text-cyan-300 font-bold' : 'text-slate-400'}`}>
                  Step 0{idx + 1}
                </span>
              </div>
              <span className={`text-xs font-semibold leading-tight ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                {m.step}
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5">
                {m.subtitle}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Phase Description Panel */}
      <div className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-950/20 text-slate-300 animate-in fade-in duration-150">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs font-mono font-bold text-cyan-400">
            Phase 0{activeStep + 1}: {careerMilestones[activeStep].step}
          </span>
          <span className="text-xs text-slate-500">&bull;</span>
          <span className="text-xs font-mono text-slate-400">
            {careerMilestones[activeStep].subtitle}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {careerMilestones[activeStep].desc}
        </p>
      </div>
    </div>
  );
}
