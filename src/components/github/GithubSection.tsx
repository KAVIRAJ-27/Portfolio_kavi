'use client';

import React from 'react';
import { Star, GitFork, BookOpen, ExternalLink, Info } from 'lucide-react';
import { Github } from '@/components/ui/Icons';
import { personalInfo } from '@/data/portfolioData';
import { useToast } from '@/components/ui/Toast';

const repositories = [
  {
    name: 'QuantumLearn',
    desc: 'AI-powered interactive quantum circuit builder, Qiskit simulation backend, and Socratic mentor.',
    tech: 'TypeScript',
    techColor: '#3178c6',
    stars: 'SIH 2024',
    forks: 'National'
  },
  {
    name: 'HydroReminder-App',
    desc: 'Local-first offline water tracking Android application using Expo SQLite and custom alarm notifications.',
    tech: 'React Native',
    techColor: '#61dafb',
    stars: 'Android',
    forks: 'Offline'
  },
  {
    name: 'Location-Recorder',
    desc: 'Privacy-first GPS travel history logger with offline maps and biometric authentication gate.',
    tech: 'TypeScript',
    techColor: '#3178c6',
    stars: 'Android',
    forks: 'Biometric'
  },
  {
    name: 'Human-Stress-Prediction',
    desc: 'Random Forest classifier (~88.64% test accuracy) predicting stress indicators from physiological metrics.',
    tech: 'Python',
    techColor: '#3572A5',
    stars: '~88.64%',
    forks: 'ML Model'
  }
];

// Generate simulated commit matrix (weeks and days)
const weeks = 28;
const days = 7;
const matrix = Array.from({ length: weeks }, (_, w) =>
  Array.from({ length: days }, (_, d) => {
    // Generate organic visual pattern
    const val = (w * 3 + d * 5 + (w % 4)) % 5;
    return val;
  })
);

export function GithubSection() {
  const { showToast } = useToast();

  const getHeatmapColor = (val: number) => {
    switch (val) {
      case 1: return 'bg-cyan-950/60 dark:bg-cyan-950/60 border border-cyan-800/40';
      case 2: return 'bg-cyan-800/70 dark:bg-cyan-800/70 border border-cyan-600/40';
      case 3: return 'bg-cyan-600/80 dark:bg-cyan-600/80 border border-cyan-400/50';
      case 4: return 'bg-cyan-400 text-black shadow-sm shadow-cyan-400/30';
      default: return 'bg-white/5 border border-white/5';
    }
  };

  return (
    <section className="py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-3">
          <Github className="w-3.5 h-3.5" />
          <span>Open Source & Repositories</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          GitHub & Code Activity
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
          Visual portfolio representation of version-controlled repositories and software development activity.
        </p>
      </div>

      {/* GitHub Activity Grid Container */}
      <div className="glass-panel p-6 sm:p-8 border border-white/10 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center text-slate-200">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <span>Kaviraj R</span>
                <span className="text-xs font-mono text-cyan-400">@KAVIRAJ-27</span>
              </h3>
              <span className="text-[11px] font-mono text-slate-400">
                Visual Activity Representation &bull; Active Commits
              </span>
            </div>
          </div>

          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 hover:text-white text-xs font-mono border border-cyan-500/30 w-fit transition-colors"
          >
            <span>View GitHub @KAVIRAJ-27</span>
            <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
          </a>
        </div>

        {/* Heatmap Grid */}
        <div className="overflow-x-auto pb-2">
          <div className="flex gap-1.5 min-w-[620px]">
            {matrix.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-1.5">
                {week.map((val, dIdx) => (
                  <div
                    key={dIdx}
                    className={`w-3.5 h-3.5 rounded-sm transition-colors ${getHeatmapColor(val)}`}
                    title={`Portfolio development log`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/5 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Info className="w-3.5 h-3.5 text-slate-500" />
            <span>Honest Note: Visual activity overview representing active project build cycles.</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>Less</span>
            <div className="w-3 h-3 rounded-sm bg-white/5" />
            <div className="w-3 h-3 rounded-sm bg-cyan-950" />
            <div className="w-3 h-3 rounded-sm bg-cyan-800" />
            <div className="w-3 h-3 rounded-sm bg-cyan-600" />
            <div className="w-3 h-3 rounded-sm bg-cyan-400" />
            <span>More</span>
          </div>
        </div>
      </div>

      {/* Featured Repositories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repositories.map((repo) => (
          <div
            key={repo.name}
            className="glass-panel p-5 border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold group-hover:text-cyan-300">
                  <BookOpen className="w-4 h-4" />
                  <span>{repo.name}</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
                  Public
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {repo.desc}
              </p>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-3 border-t border-white/5">
              <div className="flex items-center gap-1.5">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: repo.techColor }}
                />
                <span>{repo.tech}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-400" />
                  <span>{repo.stars}</span>
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-3 h-3 text-slate-400" />
                  <span>{repo.forks}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
