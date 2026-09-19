'use client';

import React from 'react';
import { personalInfo } from '@/data/portfolioData';
import { CareerTimeline } from './CareerTimeline';
import { 
  Brain, 
  Cpu, 
  Sparkles, 
  Smartphone, 
  Radio, 
  Database, 
  Sliders, 
  Code2, 
  Lightbulb, 
  ShieldCheck,
  Compass
} from 'lucide-react';

const coreInterests = [
  { name: 'Artificial Intelligence', icon: Brain, desc: 'Neural architectures, heuristics, and algorithmic agents' },
  { name: 'Machine Learning', icon: Cpu, desc: 'Supervised predictive models, feature extraction & Random Forest' },
  { name: 'Generative AI', icon: Sparkles, desc: 'RAG workflows, LangChain, and structured LLM tool calling' },
  { name: 'Full-Stack Development', icon: Code2, desc: 'React, Next.js App Router, Tailwind CSS & REST backends' },
  { name: 'Android Development', icon: Smartphone, desc: 'Local-first mobile applications with React Native & Expo' },
  { name: 'Internet of Things (IoT)', icon: Radio, desc: 'Sensor telemetry, microcontrollers, and edge processing' },
  { name: 'Data Science', icon: Database, desc: 'Exploratory data analysis, Pandas, and distribution modeling' },
  { name: 'Optimization', icon: Sliders, desc: 'Resource allocation heuristics and constraint satisfaction' },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-3">
          <Compass className="w-3.5 h-3.5" />
          <span>Profile & Philosophy</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          About Me
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
          A transparent look at who I am, my current academic journey, and what fuels my curiosity.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Who I Am */}
        <div className="lg:col-span-6 space-y-6">
          <div className="glass-panel p-6 sm:p-8 border border-white/10">
            <h3 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
              <span className="text-cyan-400 font-mono">01.</span>
              <span>Who I Am</span>
            </h3>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
              {personalInfo.shortBio}
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
              {personalInfo.extendedBio}
            </p>

            {/* Honest Builder Stance */}
            <div className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-950/20 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-cyan-300 font-semibold block mb-0.5">Authentic Student Portfolio</strong>
                I present myself honestly as an undergraduate student actively learning, writing code, and prototyping solutions across AI and software engineering. No exaggerated titles or artificial corporate metrics.
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Core Interests Grid */}
        <div className="lg:col-span-6">
          <div className="glass-panel p-6 sm:p-8 border border-white/10">
            <h3 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
              <span className="text-cyan-400 font-mono">02.</span>
              <span>Core Focus Areas</span>
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Key domains where I apply algorithmic thinking, system design, and software implementation:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {coreInterests.map((interest) => {
                const Icon = interest.icon;
                return (
                  <div
                    key={interest.name}
                    className="p-3.5 rounded-xl border border-white/5 bg-white/5 hover:border-cyan-500/30 hover:bg-white/10 transition-colors group"
                  >
                    <div className="flex items-center gap-2.5 mb-1">
                      <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold text-slate-200 group-hover:text-white">
                        {interest.name}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {interest.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Evolution Pathway Timeline */}
      <CareerTimeline />
    </section>
  );
}
