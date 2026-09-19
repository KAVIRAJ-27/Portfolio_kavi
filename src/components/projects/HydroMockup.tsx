'use client';

import React, { useState } from 'react';
import { Droplet, Bell, Clock, CheckCircle, Database, Award, RotateCcw } from 'lucide-react';
import { useToast } from '@/components/ui/Toast';

export function HydroMockup() {
  const [intake, setIntake] = useState(1750);
  const target = 2500;
  const [streak, setStreak] = useState(7);
  const [snoozeActive, setSnoozeActive] = useState(false);
  const [snoozeMins, setSnoozeMins] = useState(0);
  const { showToast } = useToast();

  const percentage = Math.min(100, Math.round((intake / target) * 100));

  const addDrink = (amount: number) => {
    setIntake(prev => {
      const next = prev + amount;
      if (next >= target && prev < target) {
        showToast('🎉 Daily hydration target achieved! Streak updated.', 'success');
        setStreak(s => s + 1);
      } else {
        showToast(`Recorded +${amount}ml intake to local SQLite!`, 'success');
      }
      return next;
    });
    setSnoozeActive(false);
  };

  const handleSnooze = (minutes: number) => {
    setSnoozeActive(true);
    setSnoozeMins(minutes);
    showToast(`Reminder snoozed for ${minutes} minutes.`, 'info');
  };

  const resetIntake = () => {
    setIntake(0);
    setSnoozeActive(false);
    showToast('Intake reset for simulated new day.', 'info');
  };

  return (
    <div className="w-full max-w-xs mx-auto rounded-[38px] p-3.5 bg-slate-900 border-4 border-slate-700 shadow-2xl shadow-cyan-500/10">
      {/* Phone Speaker & Camera Notch */}
      <div className="w-full flex justify-center mb-2">
        <div className="h-4 w-28 bg-slate-800 rounded-full flex items-center justify-end px-3">
          <div className="h-2 w-2 rounded-full bg-slate-950" />
        </div>
      </div>

      {/* Screen Area */}
      <div className="rounded-[28px] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 p-4 border border-white/5 text-slate-100 flex flex-col items-center">
        {/* Top Status */}
        <div className="w-full flex items-center justify-between text-[10px] font-mono text-slate-400 mb-3 px-1">
          <div className="flex items-center gap-1 text-emerald-400">
            <Database className="w-3 h-3" />
            <span>SQLite: Local</span>
          </div>
          <div className="flex items-center gap-1 text-cyan-400">
            <Award className="w-3 h-3" />
            <span>Streak: {streak}d</span>
          </div>
        </div>

        {/* Title */}
        <h4 className="text-sm font-bold text-slate-200 mb-3 flex items-center gap-1.5">
          <Droplet className="w-4 h-4 text-cyan-400 fill-cyan-400/20" />
          <span>HydroReminder</span>
        </h4>

        {/* Circular Progress Display */}
        <div className="relative w-36 h-36 flex items-center justify-center mb-4">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              className="text-slate-800"
              strokeWidth="8"
              stroke="currentColor"
              fill="transparent"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              className="text-cyan-400 transition-all duration-500 ease-out"
              strokeWidth="8"
              strokeDasharray={251.2}
              strokeDashoffset={251.2 - (251.2 * percentage) / 100}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
            />
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-2xl font-bold text-white font-mono">{intake}</span>
            <span className="text-[10px] text-slate-400 font-mono">/ {target} ml</span>
            <span className="text-[11px] font-semibold text-cyan-400 mt-0.5">{percentage}%</span>
          </div>
        </div>

        {/* Alarm Banner Simulation */}
        <div className="w-full p-2.5 rounded-xl border border-cyan-500/30 bg-cyan-950/40 mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className={`w-3.5 h-3.5 ${snoozeActive ? 'text-amber-400' : 'text-cyan-400 animate-bounce'}`} />
            <div className="text-[11px] text-slate-200">
              {snoozeActive ? `Snoozed (${snoozeMins}m)` : 'Scheduled Hydration'}
            </div>
          </div>
          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
            Alarm
          </span>
        </div>

        {/* Quick Actions */}
        <div className="w-full grid grid-cols-2 gap-2 mb-2">
          <button
            onClick={() => addDrink(250)}
            className="flex items-center justify-center gap-1 py-2 px-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-[11px] font-semibold shadow-md shadow-cyan-500/20 active:scale-95 transition-transform"
          >
            <CheckCircle className="w-3.5 h-3.5" />
            <span>+250 ml</span>
          </button>
          <button
            onClick={() => addDrink(500)}
            className="flex items-center justify-center gap-1 py-2 px-2 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 text-[11px] font-semibold border border-white/10 active:scale-95 transition-transform"
          >
            <span>+500 ml</span>
          </button>
        </div>

        {/* Snooze & Reset Controls */}
        <div className="w-full flex items-center justify-between gap-1 text-[10px] text-slate-400 font-mono pt-1">
          <button
            onClick={() => handleSnooze(15)}
            className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
          >
            Snooze 15m
          </button>
          <button
            onClick={() => handleSnooze(30)}
            className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
          >
            Snooze 30m
          </button>
          <button
            onClick={resetIntake}
            className="p-1 rounded bg-white/5 hover:bg-white/10 hover:text-rose-400 transition-colors"
            title="Reset simulated day"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
