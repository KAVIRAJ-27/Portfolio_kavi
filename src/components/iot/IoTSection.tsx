'use client';

import React, { useState } from 'react';
import { iotSensors, iotPipelineSteps } from '@/data/portfolioData';
import { 
  Radio, 
  Wind, 
  Activity, 
  Sun, 
  Flame, 
  Camera, 
  Cpu, 
  Database, 
  LayoutDashboard, 
  ArrowRight, 
  Info,
  Layers,
  Sparkles
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Wind,
  Activity,
  Radio,
  Sun,
  Flame,
  Camera,
};

export function IoTSection() {
  const [activeSensorId, setActiveSensorId] = useState<string>('air-quality');

  const activeSensor = iotSensors.find(s => s.id === activeSensorId) || iotSensors[0];
  const ActiveIcon = iconMap[activeSensor.icon] || Radio;

  return (
    <section id="iot" className="py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-3">
          <Radio className="w-3.5 h-3.5" />
          <span>Edge Telemetry & Sensing</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          Exploring IoT & Smart Systems
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
          Architectural investigations bridging physical sensor streams, edge microcontroller preprocessing, and predictive intelligence.
        </p>
      </div>

      {/* Visual Pipeline Flow */}
      <div className="glass-panel p-6 border border-white/10 mb-10 overflow-x-auto">
        <div className="flex items-center justify-between min-w-[700px] gap-2">
          {iotPipelineSteps.map((step, idx) => (
            <React.Fragment key={step.step}>
              <div className="flex flex-col items-center text-center p-3 rounded-xl bg-white/5 border border-white/5 flex-1 hover:border-cyan-500/30 transition-colors">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider mb-1">
                  0{idx + 1}
                </span>
                <span className="text-xs font-bold text-slate-100">
                  {step.step}
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5">
                  {step.title}
                </span>
              </div>

              {idx < iotPipelineSteps.length - 1 && (
                <div className="text-slate-600 shrink-0">
                  <ArrowRight className="w-4 h-4 text-cyan-500/50" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Interactive Sensor Board + Details Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 7 Cols: Interactive Digital Sensor Board */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-6 sm:p-7 border border-white/10">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
              <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Sensor Modules Matrix</span>
              </h3>
              <span className="text-[10px] font-mono text-slate-400">
                Click sensor to inspect telemetry
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {iotSensors.map((sensor) => {
                const Icon = iconMap[sensor.icon] || Radio;
                const isSelected = sensor.id === activeSensorId;
                return (
                  <button
                    key={sensor.id}
                    onClick={() => setActiveSensorId(sensor.id)}
                    className={`flex flex-col items-start p-4 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'bg-cyan-500/15 border-cyan-400/60 shadow-lg shadow-cyan-500/10 scale-[1.02]'
                        : 'bg-white/5 border-white/5 hover:border-white/20 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <div className={`p-2 rounded-lg mb-2 ${isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-white/5 text-slate-400'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-xs font-bold leading-tight ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                      {sensor.name}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 mt-1">
                      {sensor.type}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Honest Disclaimer */}
            <div className="mt-6 p-3 rounded-xl bg-white/5 border border-white/5 flex items-start gap-2.5 text-xs text-slate-400">
              <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="text-slate-300 font-semibold">Exploratory Architecture Notice: </strong>
                These modules illustrate physical-to-digital telemetry architectures under study and prototyping. Features are presented as conceptual hardware designs rather than claimed commercial deployments.
              </p>
            </div>
          </div>
        </div>

        {/* Right 5 Cols: Active Sensor Purpose & Edge AI Application */}
        <div className="lg:col-span-5 sticky top-28">
          <div className="glass-panel p-6 sm:p-7 border border-cyan-500/30 bg-slate-900/90 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                <ActiveIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">
                  Hardware Specification
                </span>
                <h4 className="text-lg font-bold text-white">
                  {activeSensor.name}
                </h4>
                <span className="text-xs font-mono text-slate-400">
                  Module: {activeSensor.type}
                </span>
              </div>
            </div>

            {/* Purpose */}
            <div className="mb-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                Monitored Purpose
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeSensor.purpose}
              </p>
            </div>

            {/* Telemetry Metrics */}
            <div className="mb-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                Captured Telemetry Parameters
              </span>
              <p className="text-xs font-mono text-slate-200">
                {activeSensor.telemetryMetrics}
              </p>
            </div>

            {/* AI Application */}
            <div className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-950/20">
              <div className="flex items-center gap-1.5 text-cyan-300 text-xs font-bold font-mono mb-1">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Edge AI & Predictive Use Case</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {activeSensor.aiApplication}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
