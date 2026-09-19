'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-xl border border-white/10 hover:border-cyan-400/40 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-amber-400 animate-in spin-in-90 duration-300" />
      ) : (
        <Moon className="w-4 h-4 text-cyan-500 animate-in spin-in-90 duration-300" />
      )}
    </button>
  );
}
