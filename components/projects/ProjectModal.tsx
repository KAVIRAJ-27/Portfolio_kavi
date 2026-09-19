'use client';

import React, { useEffect } from 'react';
import { Project } from '@/types';
import { HydroMockup } from './HydroMockup';
import { LocationSim } from './LocationSim';
import { 
  X, 
  ExternalLink, 
  AlertCircle, 
  CheckCircle2, 
  Cpu, 
  Lightbulb, 
  ListChecks, 
  Layers
} from 'lucide-react';
import { Github } from '@/components/ui/Icons';
import { useToast } from '@/components/ui/Toast';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { showToast } = useToast();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const statusColors = {
    'Completed': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    'In Development': 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
    'Prototype': 'bg-amber-500/10 text-amber-300 border-amber-500/30',
  };

  return (
    <div className="fixed inset-0 z-[9980] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl glass-panel border border-white/15 bg-slate-950/95 shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
            {project.category}
          </span>
          <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${statusColors[project.status]}`}>
            Status: {project.status}
          </span>
          {project.accuracy && (
            <span className="text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/30 px-2.5 py-1 rounded-full">
              Accuracy: {project.accuracy}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Interactive Simulator Section (if applicable) */}
        {project.hasInteractiveSimulator === 'hydro' && (
          <div className="mb-8 p-4 rounded-xl border border-cyan-500/20 bg-cyan-950/20">
            <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3 text-center">
              Live Interactive Mobile Simulator
            </h4>
            <HydroMockup />
          </div>
        )}

        {project.hasInteractiveSimulator === 'location' && (
          <div className="mb-8 p-4 rounded-xl border border-cyan-500/20 bg-cyan-950/20">
            <LocationSim />
          </div>
        )}

        {/* Problem & Solution Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
              <AlertCircle className="w-4 h-4" />
              <span>Problem Solved</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
              <CheckCircle2 className="w-4 h-4" />
              <span>Architected Solution</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Features Breakdown */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-slate-200 text-sm font-bold mb-3">
            <ListChecks className="w-4 h-4 text-cyan-400" />
            <span>Key Engineering Features</span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 p-2 rounded-lg bg-white/5 border border-white/5">
                <span className="text-cyan-400 font-mono text-[10px] mt-0.5">&gt;</span>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technology Stack */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-slate-200 text-sm font-bold mb-2.5">
            <Layers className="w-4 h-4 text-indigo-400" />
            <span>Technologies & Libraries</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* What I Learned */}
        <div className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-950/20 mb-8">
          <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-1.5 font-mono">
            <Lightbulb className="w-4 h-4 text-cyan-400" />
            <span>What I Learned While Building This</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.learnings}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => showToast('Opening repository on github.com/KAVIRAJ-27', 'info')}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white text-xs font-medium border border-white/10 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Source Repository</span>
            </a>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => showToast('Live demo link placeholder: [Add Demo URL]', 'info')}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs font-medium border border-cyan-500/30 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demonstration</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white text-xs font-medium transition-colors"
          >
            Close Overview
          </button>
        </div>
      </div>

      {/* Backdrop */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />
    </div>
  );
}
