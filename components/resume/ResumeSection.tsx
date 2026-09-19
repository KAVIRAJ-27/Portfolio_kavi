'use client';

import React, { useState } from 'react';
import { personalInfo } from '@/data/portfolioData';
import { FileText, Download, Eye, X, CheckCircle2, GraduationCap, Code2, Brain, ExternalLink } from 'lucide-react';
import { useToast } from '@/components/ui/Toast';

export function ResumeSection() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const { showToast } = useToast();

  const handleDownload = () => {
    showToast('Downloading Kaviraj_R_Resume.pdf...', 'info');
  };

  return (
    <section className="py-20 relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="glass-panel p-8 sm:p-12 border border-cyan-500/30 bg-gradient-to-b from-slate-900/80 to-slate-950/90 text-center relative overflow-hidden shadow-2xl shadow-cyan-500/5">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-4">
          <FileText className="w-3.5 h-3.5" />
          <span>Curriculum Vitae</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Want to know more about my journey?
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed mb-8">
          Download my official technical resume or inspect it directly on Google Drive.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setIsPreviewOpen(true)}
            className="flex items-center gap-2 px-5 py-3 rounded-xl glass-panel text-slate-200 hover:text-white hover:border-cyan-400/50 hover:bg-white/10 text-xs sm:text-sm font-semibold transition-all"
          >
            <Eye className="w-4 h-4 text-cyan-400" />
            <span>View Summary</span>
          </button>

          <a
            href={personalInfo.socials.resumePdf}
            download="Kaviraj_R_Resume.pdf"
            onClick={handleDownload}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </a>

          <a
            href={personalInfo.socials.resumeDrive}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => showToast('Opening resume on Google Drive...', 'info')}
            className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold transition-all"
          >
            <ExternalLink className="w-4 h-4 text-cyan-400" />
            <span>Google Drive</span>
          </a>
        </div>

        <p className="text-[11px] font-mono text-slate-500 mt-5">
          Standard target: &quot;{personalInfo.socials.resumePdf}&quot; (Easy drop-in replacement)
        </p>
      </div>

      {/* Resume Preview Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-[9985] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
          <div
            className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl glass-panel border border-white/20 bg-slate-950 p-6 sm:p-8 relative animate-in zoom-in-95 duration-200"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setIsPreviewOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 hover:bg-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="border-b border-white/10 pb-4 mb-6">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                Candidate Profile
              </span>
              <h3 className="text-2xl font-bold text-white">
                {personalInfo.name}
              </h3>
              <p className="text-xs font-mono text-slate-300 mt-1">
                {personalInfo.education} &bull; {personalInfo.location}
              </p>
            </div>

            {/* Overview */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase text-cyan-400 font-bold mb-2">
                Executive Profile
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {personalInfo.shortBio}
              </p>
            </div>

            {/* Core Competencies */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase text-cyan-400 font-bold mb-2">
                Core Competencies
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                  <strong className="block text-white mb-0.5">AI & Data Science:</strong>
                  Machine Learning, Random Forest, Generative AI, RAG, LangChain
                </div>
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                  <strong className="block text-white mb-0.5">Full-Stack & Mobile:</strong>
                  React, Next.js, TypeScript, React Native, Expo, FastAPI
                </div>
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                  <strong className="block text-white mb-0.5">Databases:</strong>
                  MySQL, PostgreSQL, Local SQLite (offline-first)
                </div>
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                  <strong className="block text-white mb-0.5">Specialized:</strong>
                  Qiskit (Quantum Circuits), IoT Telemetry, Heuristic Optimization
                </div>
              </div>
            </div>

            {/* Major Project Highlights */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase text-cyan-400 font-bold mb-2">
                Featured Engineering Projects
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                  <strong className="text-cyan-300">QuantumLearn:</strong> AI-powered quantum algorithm learning platform with 35 guided lessons, circuit builder, Qiskit integration, and Socratic AI mentor (Smart India Hackathon).
                </li>
                <li className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                  <strong className="text-cyan-300">HydroReminder:</strong> Local-first Android water reminder app using React Native, Expo SQLite, and alarm-style notification scheduling.
                </li>
                <li className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                  <strong className="text-cyan-300">Stress Prediction:</strong> Random Forest model (~88.64% test accuracy) predicting physiological stress metrics with interactive evaluation dashboard.
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.socials.resumePdf}
                  download="Kaviraj_R_Resume.pdf"
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-semibold text-xs hover:bg-cyan-400 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>

                <a
                  href={personalInfo.socials.resumeDrive}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => showToast('Opening Google Drive...', 'info')}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-semibold border border-white/10 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Open Drive</span>
                </a>
              </div>

              <button
                onClick={() => setIsPreviewOpen(false)}
                className="px-4 py-2 rounded-xl bg-white/5 text-slate-300 hover:text-white text-xs"
              >
                Close Preview
              </button>
            </div>
          </div>

          <div className="fixed inset-0 -z-10" onClick={() => setIsPreviewOpen(false)} />
        </div>
      )}
    </section>
  );
}
