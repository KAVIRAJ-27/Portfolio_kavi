'use client';

import React, { useState } from 'react';
import { skillsData } from '@/data/portfolioData';
import { 
  Code2, 
  Brain, 
  Globe, 
  Smartphone, 
  Database, 
  Wrench, 
  Sparkles,
  Info,
  Check,
  Search
} from 'lucide-react';

const categoryIcons: Record<string, React.ElementType> = {
  'Programming': Code2,
  'AI / Data': Brain,
  'Web': Globe,
  'Mobile': Smartphone,
  'Database': Database,
  'Tools': Wrench,
};

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedSkill, setSelectedSkill] = useState<string | null>('Machine Learning');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...skillsData.map(c => c.name)];

  // Filter skills based on selected category & search query
  const displayedCategories = skillsData.filter(cat => {
    if (activeCategory !== 'All' && cat.name !== activeCategory) return false;
    return true;
  });

  const allSkillsList = skillsData.flatMap(c => c.skills);
  const activeSkillDetails = allSkillsList.find(s => s.name === selectedSkill) || allSkillsList[0];

  return (
    <section id="skills" className="py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Constellation</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          Technical Ecosystem & Skills
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
          Click any domain or skill to inspect practical usage, underlying frameworks, and project integrations.
        </p>
      </div>

      {/* Category Filter Chips */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => {
          const Icon = categoryIcons[cat];
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                isActive
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-md shadow-cyan-500/10'
                  : 'glass-panel text-slate-400 hover:text-slate-200 hover:border-white/20'
              }`}
            >
              {Icon && <Icon className="w-3.5 h-3.5" />}
              <span>{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Main Grid: Skills Explorer + Active Skill Detail Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 8 Cols: Interactive Category Cards */}
        <div className="lg:col-span-8 space-y-6">
          {displayedCategories.map((category) => {
            const Icon = categoryIcons[category.name] || Code2;
            return (
              <div
                key={category.name}
                className="glass-panel p-5 sm:p-6 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-white/5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-100">
                        {category.name}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">
                        {category.skills.length} core technologies
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider bg-cyan-500/10 px-2 py-0.5 rounded">
                    Active Stack
                  </span>
                </div>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => {
                    const isSelected = selectedSkill === skill.name;
                    return (
                      <button
                        key={skill.name}
                        onClick={() => setSelectedSkill(skill.name)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                          isSelected
                            ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/25 scale-[1.03]'
                            : skill.highlight
                            ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400'
                            : 'bg-white/5 text-slate-300 border border-white/10 hover:border-white/20 hover:bg-white/10'
                        }`}
                      >
                        <span>{skill.name}</span>
                        {skill.highlight && (
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right 4 Cols: Contextual Skill Inspector */}
        <div className="lg:col-span-4 sticky top-28">
          <div className="glass-panel p-6 border border-cyan-500/30 bg-slate-900/90 shadow-xl">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs mb-3">
              <Info className="w-4 h-4" />
              <span>Technology Insight</span>
            </div>

            <div className="mb-4">
              <h4 className="text-xl font-bold text-white mb-1">
                {activeSkillDetails.name}
              </h4>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  Status: {activeSkillDetails.level}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-5">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                Practical Application
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeSkillDetails.context}
              </p>
            </div>

            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Integrated into active projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Hands-on implementation experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Continuous self-study & experimentation</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-center">
              <span className="text-[11px] font-mono text-slate-400">
                Click any other technology tag to view details.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
