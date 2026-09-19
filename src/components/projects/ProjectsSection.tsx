'use client';

import React, { useState, useMemo } from 'react';
import { projectsData } from '@/data/portfolioData';
import { Project, ProjectCategory } from '@/types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Search, FolderGit2, Sparkles, Filter } from 'lucide-react';

const filterCategories: ProjectCategory[] = [
  'All',
  'AI',
  'Machine Learning',
  'Web',
  'Android',
  'Education',
  'Data Science'
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      // Category check
      const matchesCategory =
        activeCategory === 'All' ||
        project.tags.includes(activeCategory);

      // Search query check
      const matchesSearch =
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="projects" className="py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-3">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Core Engineering Portfolio</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          Featured Projects & Explorer
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
          Practical systems engineered across AI, Machine Learning, Android local-first apps, and optimization algorithms.
        </p>
      </div>

      {/* Filter and Search Bar Controls */}
      <div className="glass-panel p-4 mb-10 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Chips */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {filterCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'bg-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/10 border border-transparent'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Box */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by tech, keyword..."
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-3.5 py-2 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/50"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center glass-panel border border-white/10">
          <FolderGit2 className="w-8 h-8 text-slate-500 mx-auto mb-3" />
          <h4 className="text-base font-semibold text-slate-300 mb-1">
            No matching projects found
          </h4>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try adjusting your search query or selecting &quot;All&quot; in the filter categories above.
          </p>
        </div>
      )}

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
