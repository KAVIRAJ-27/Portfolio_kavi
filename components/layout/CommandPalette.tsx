'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useToast } from '@/components/ui/Toast';
import { 
  Search, 
  Home, 
  User, 
  Cpu, 
  FolderGit2, 
  Compass, 
  Terminal, 
  Mail, 
  Sun, 
  Moon, 
  FileText, 
  Copy,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme, toggleTheme } = useTheme();
  const { showToast } = useToast();

  const commands = [
    {
      id: 'home',
      name: 'Go to Home',
      category: 'Navigation',
      icon: Home,
      action: () => scrollToSection('#home')
    },
    {
      id: 'about',
      name: 'Go to About Me',
      category: 'Navigation',
      icon: User,
      action: () => scrollToSection('#about')
    },
    {
      id: 'skills',
      name: 'Go to Technical Skills',
      category: 'Navigation',
      icon: Cpu,
      action: () => scrollToSection('#skills')
    },
    {
      id: 'projects',
      name: 'Go to Featured Projects',
      category: 'Navigation',
      icon: FolderGit2,
      action: () => scrollToSection('#projects')
    },
    {
      id: 'iot',
      name: 'Explore IoT & Smart Systems',
      category: 'Navigation',
      icon: Compass,
      action: () => scrollToSection('#iot')
    },
    {
      id: 'journey',
      name: 'View Development Journey',
      category: 'Navigation',
      icon: Compass,
      action: () => scrollToSection('#journey')
    },
    {
      id: 'terminal',
      name: 'Open Interactive Terminal',
      category: 'Navigation',
      icon: Terminal,
      action: () => scrollToSection('#terminal')
    },
    {
      id: 'contact',
      name: 'Contact & Collaboration',
      category: 'Navigation',
      icon: Mail,
      action: () => scrollToSection('#contact')
    },
    {
      id: 'theme',
      name: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
      category: 'Preferences',
      icon: theme === 'dark' ? Sun : Moon,
      action: () => {
        toggleTheme();
        showToast(`Theme switched to ${theme === 'dark' ? 'Light' : 'Dark'} Mode!`, 'info');
      }
    },
    {
      id: 'copy-email',
      name: 'Copy Contact Email',
      category: 'Actions',
      icon: Copy,
      action: () => {
        navigator.clipboard.writeText(personalInfo.socials.emailRaw);
        showToast('Email address copied to clipboard!', 'success');
      }
    },
    {
      id: 'resume',
      name: 'Download Resume PDF',
      category: 'Actions',
      icon: FileText,
      action: () => {
        const link = document.createElement('a');
        link.href = personalInfo.socials.resumePdf;
        link.download = 'Kaviraj_R_Resume.pdf';
        link.click();
        showToast('Downloading resume...', 'info');
      }
    },
    {
      id: 'resume-drive',
      name: 'Open Resume on Google Drive',
      category: 'Actions',
      icon: ExternalLink,
      action: () => {
        window.open(personalInfo.socials.resumeDrive, '_blank');
        showToast('Opening resume on Google Drive...', 'info');
      }
    }
  ];

  const filteredCommands = commands.filter(cmd => 
    cmd.name.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent or state
          onClose(); // Invert handled outside
        }
      }

      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  const scrollToSection = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9990] flex items-start justify-center pt-24 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="w-full max-w-xl rounded-2xl glass-panel border border-white/15 bg-slate-950/90 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-white/5">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or jump to section..."
            className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-white/10 rounded border border-white/10">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-white/5">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((cmd, idx) => {
              const Icon = cmd.icon;
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  onClick={() => {
                    cmd.action();
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-xs transition-colors ${
                    isSelected
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`} />
                    <span className="font-medium">{cmd.name}</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    {cmd.category}
                  </span>
                </button>
              );
            })
          ) : (
            <div className="py-8 text-center text-xs text-slate-400">
              No matching commands for &quot;{query}&quot;
            </div>
          )}
        </div>

        {/* Footer Hint */}
        <div className="px-4 py-2 border-t border-white/10 bg-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <span>Navigate with &uarr; &darr;</span>
          <span>Select with &crarr;</span>
        </div>
      </div>

      {/* Backdrop click to close */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />
    </div>
  );
}
