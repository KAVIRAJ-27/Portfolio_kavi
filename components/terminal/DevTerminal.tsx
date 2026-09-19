'use client';

import React, { useState, useRef, useEffect } from 'react';
import { executeTerminalCommand, CommandOutput } from '@/data/terminalCommands';
import { useTheme } from '@/context/ThemeContext';
import { Terminal as TerminalIcon, Maximize2, Minimize2, Trash2, CornerDownLeft, Sparkles } from 'lucide-react';
import { useToast } from '@/components/ui/Toast';

interface HistoryEntry {
  command: string;
  output: CommandOutput;
}

export function DevTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      command: 'whoami',
      output: executeTerminalCommand('whoami')
    },
    {
      command: 'help',
      output: executeTerminalCommand('help')
    }
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>(['whoami', 'help']);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [isExpanded, setIsExpanded] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const { toggleTheme } = useTheme();
  const { showToast } = useToast();

  const availableCommands = ['help', 'whoami', 'about', 'skills', 'projects', 'journey', 'hackathon', 'contact', 'resume', 'theme', 'clear', 'date'];

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const trimmed = input.trim();
    const result = executeTerminalCommand(trimmed, () => {
      toggleTheme();
      showToast('Theme toggled via terminal!', 'success');
    });

    if (result.type === 'clear') {
      setHistory([]);
    } else {
      setHistory(prev => [...prev, { command: trimmed, output: result }]);
    }

    setCommandHistory(prev => [...prev, trimmed]);
    setHistoryIndex(-1);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(commandHistory[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput('');
      } else {
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex]);
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const match = availableCommands.find(c => c.startsWith(input.toLowerCase().trim()));
      if (match) {
        setInput(match);
      }
    }
  };

  return (
    <section id="terminal" className="py-20 relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-3">
          <TerminalIcon className="w-3.5 h-3.5" />
          <span>Interactive Shell</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          Developer CLI Terminal
        </h2>
        <p className="mt-2 text-sm text-slate-400 max-w-xl">
          Direct terminal interface into my portfolio ecosystem. Type commands, query projects, or toggle themes.
        </p>
      </div>

      {/* Terminal Window Box */}
      <div 
        className={`w-full rounded-2xl glass-panel border border-white/15 bg-slate-950/95 shadow-2xl overflow-hidden font-mono text-xs transition-all duration-300 ${
          isExpanded ? 'min-h-[560px]' : 'min-h-[380px]'
        }`}
        onClick={() => inputRef.current?.focus()}
      >
        {/* Terminal Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-white/10 select-none">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-slate-400 text-[11px] font-mono">
              kaviraj@portfolio: ~ (bash/zsh)
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setHistory([]);
              }}
              className="p-1 rounded hover:bg-white/5 hover:text-white"
              title="Clear terminal"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="p-1 rounded hover:bg-white/5 hover:text-white"
              title={isExpanded ? 'Minimize' : 'Expand'}
            >
              {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-4 sm:p-5 overflow-y-auto max-h-[460px] space-y-4">
          {history.map((entry, idx) => (
            <div key={idx} className="space-y-1.5">
              {/* Command Prompt line */}
              <div className="flex items-center gap-2 text-cyan-400">
                <span className="text-emerald-400 font-bold">kaviraj@portfolio</span>
                <span className="text-slate-500">:</span>
                <span className="text-indigo-400">~</span>
                <span className="text-slate-400">$</span>
                <span className="text-slate-100 font-semibold">{entry.command}</span>
              </div>

              {/* Output Content */}
              <div className="pl-4 border-l border-white/5 text-slate-300 space-y-1 leading-relaxed">
                {Array.isArray(entry.output.content) ? (
                  entry.output.content.map((line, i) => (
                    <div
                      key={i}
                      className={
                        entry.output.type === 'success'
                          ? 'text-emerald-300'
                          : entry.output.type === 'info'
                          ? 'text-cyan-300'
                          : entry.output.type === 'error'
                          ? 'text-rose-400'
                          : 'text-slate-300'
                      }
                    >
                      {line}
                    </div>
                  ))
                ) : (
                  <div
                    className={
                      entry.output.type === 'error' ? 'text-rose-400' : 'text-slate-300'
                    }
                  >
                    {entry.output.content}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Active Input Line */}
          <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 text-cyan-400 pt-1">
            <span className="text-emerald-400 font-bold">kaviraj@portfolio</span>
            <span className="text-slate-500">:</span>
            <span className="text-indigo-400">~</span>
            <span className="text-slate-400">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-slate-100 focus:outline-none caret-cyan-400 text-xs font-mono"
              placeholder="type 'help' for commands..."
              autoComplete="off"
              spellCheck="false"
            />
            <button
              type="submit"
              className="p-1 text-slate-500 hover:text-cyan-400"
              aria-label="Submit command"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>

          <div ref={terminalEndRef} />
        </div>

        {/* Terminal Quick Command Chips */}
        <div className="px-4 py-2 bg-slate-900/50 border-t border-white/5 flex flex-wrap items-center gap-1.5 text-[10px] text-slate-400">
          <span className="text-slate-500">Quick Try:</span>
          {['whoami', 'projects', 'skills', 'journey', 'hackathon', 'theme', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => {
                setInput(cmd);
                inputRef.current?.focus();
              }}
              className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-cyan-300/80 hover:text-cyan-300 transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
