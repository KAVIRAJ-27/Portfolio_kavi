'use client';

import React from 'react';
import { Project } from '@/types';
import { 
  ExternalLink, 
  ChevronRight, 
  Smartphone, 
  MapPin, 
  Sparkles, 
  Layers,
  Activity
} from 'lucide-react';
import { Github } from '@/components/ui/Icons';
import { useToast } from '@/components/ui/Toast';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const { showToast } = useToast();

  const statusColors = {
    'Completed': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    'In Development': 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
    'Prototype': 'bg-amber-500/10 text-amber-300 border-amber-500/30',
  };

  return (
    <div className="glass-panel p-6 sm:p-7 border border-white/10 flex flex-col justify-between group hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300">
      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
            {project.category}
          </span>
          <div className="flex items-center gap-2">
            {project.isMajor && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-indigo-400" />
                <span>Featured</span>
              </span>
            )}
            <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full border ${statusColors[project.status]}`}>
              {project.status}
            </span>
          </div>
        </div>

        {/* Project Name */}
        <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mb-2">
          {project.name}
        </h3>

        {/* Accuracy badge if model */}
        {project.accuracy && (
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono mb-3">
            <Activity className="w-3.5 h-3.5 text-purple-400" />
            <span>Random Forest Model: {project.accuracy} Accuracy</span>
          </div>
        )}

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3 mb-4">
          {project.description}
        </p>

        {/* Key Feature Highlight */}
        <div className="p-3 rounded-xl bg-white/5 border border-white/5 mb-5 text-xs text-slate-300">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
            Core Architecture Highlights
          </span>
          <p className="line-clamp-2 leading-relaxed">
            {project.features[0]}
          </p>
        </div>
      </div>

      <div>
        {/* Technology Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-slate-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-slate-400">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Actions Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
                showToast(`Opening repository on github.com/KAVIRAJ-27`, 'info');
              }}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              title="GitHub: https://github.com/KAVIRAJ-27"
            >
              <Github className="w-4 h-4" />
            </a>

            {project.hasInteractiveSimulator && (
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/20 flex items-center gap-1">
                {project.hasInteractiveSimulator === 'hydro' ? (
                  <>
                    <Smartphone className="w-3 h-3" />
                    <span>Interactive UI</span>
                  </>
                ) : (
                  <>
                    <MapPin className="w-3 h-3" />
                    <span>GPS Simulator</span>
                  </>
                )}
              </span>
            )}
          </div>

          <button
            onClick={() => onSelect(project)}
            className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group/btn transition-colors"
          >
            <span>View Architecture</span>
            <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
