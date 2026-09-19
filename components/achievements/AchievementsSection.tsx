'use client';

import React from 'react';
import { achievementsData } from '@/data/portfolioData';
import { Trophy, Award, Sparkles, CheckCircle2, Bookmark } from 'lucide-react';

export function AchievementsSection() {
  return (
    <section className="py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-3">
          <Trophy className="w-3.5 h-3.5" />
          <span>Milestones & Initiatives</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          Achievements & Activities
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
          National hackathon initiatives, academic milestones, and specialized technical projects developed during undergraduate studies.
        </p>
      </div>

      {/* Grid of Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievementsData.map((item, idx) => (
          <div
            key={idx}
            className={`glass-panel p-6 sm:p-7 border transition-all duration-300 relative overflow-hidden ${
              item.featured
                ? 'border-cyan-500/40 bg-slate-900/90 shadow-xl shadow-cyan-500/5'
                : 'border-white/10 hover:border-white/20'
            }`}
          >
            {item.featured && (
              <div className="absolute top-0 right-0 px-3 py-1 bg-gradient-to-l from-cyan-500/20 to-transparent text-cyan-400 font-mono text-[10px] uppercase tracking-wider border-b border-l border-cyan-500/30 rounded-bl-xl">
                Featured Initiative
              </div>
            )}

            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-cyan-400 block">
                  {item.category}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              {item.description}
            </p>

            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-3 border-t border-white/5">
              <span>Status: Active Record</span>
              <span className="text-cyan-400">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
