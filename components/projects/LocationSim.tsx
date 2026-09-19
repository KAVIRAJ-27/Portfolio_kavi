'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Fingerprint, 
  Navigation, 
  ShieldCheck, 
  FileSpreadsheet, 
  Wifi, 
  WifiOff, 
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { useToast } from '@/components/ui/Toast';

const simulatedWaypoints = [
  { time: '08:30 AM', title: 'Home Base', coords: '11.0168° N, 76.9558° E', distance: '0.0 km', status: 'Origin' },
  { time: '09:15 AM', title: 'Campus AI & DS Lab', coords: '11.0289° N, 76.9674° E', distance: '4.2 km', status: 'Waypoint' },
  { time: '01:20 PM', title: 'Innovation Incubation Center', coords: '11.0315° N, 76.9620° E', distance: '5.8 km', status: 'Waypoint' },
  { time: '04:45 PM', title: 'Hardware & IoT Workshop', coords: '11.0250° N, 76.9580° E', distance: '8.4 km', status: 'Active Log' },
];

export function LocationSim() {
  const [selectedPoint, setSelectedPoint] = useState(0);
  const [offlineMode, setOfflineMode] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [authSuccess, setAuthSuccess] = useState(false);
  const { showToast } = useToast();

  const handleBiometricExport = () => {
    setIsExporting(true);
    setAuthSuccess(false);

    // Simulate biometric scan
    setTimeout(() => {
      setAuthSuccess(true);
      showToast('Biometric fingerprint verified! Exporting local GeoJSON coordinates...', 'success');
      setTimeout(() => {
        setIsExporting(false);
        setAuthSuccess(false);
      }, 2000);
    }, 1200);
  };

  return (
    <div className="w-full glass-panel p-5 sm:p-6 border border-white/10 bg-slate-950/80">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-white/10">
        <div>
          <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
            <Navigation className="w-4 h-4 text-cyan-400" />
            <span>Simulated Travel History & Local GPS</span>
          </h4>
          <p className="text-[11px] font-mono text-slate-400">
            Interactive demonstration: Privacy-first on-device location telemetry
          </p>
        </div>

        {/* Offline Fallback Toggle */}
        <button
          onClick={() => {
            setOfflineMode(!offlineMode);
            showToast(
              !offlineMode 
                ? 'Offline tile cache activated (zero network transmission).' 
                : 'Online vector tile mode restored.',
              'info'
            );
          }}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono transition-colors ${
            offlineMode
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
          }`}
        >
          {offlineMode ? <WifiOff className="w-3.5 h-3.5" /> : <Wifi className="w-3.5 h-3.5" />}
          <span>{offlineMode ? 'Offline Cache Only' : 'Online Maps Mode'}</span>
        </button>
      </div>

      {/* Simulated Vector Map View */}
      <div className="relative w-full h-44 sm:h-52 rounded-xl bg-slate-900 border border-white/10 overflow-hidden mb-4 p-4 flex flex-col justify-between">
        {/* Subtle grid pattern representing map coordinates */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />

        {/* Map Header Overlay */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 text-slate-300 border border-white/10 flex items-center gap-1">
            <Calendar className="w-3 h-3 text-cyan-400" />
            <span>Recorded Session: Today</span>
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
            Total Distance: 8.4 km
          </span>
        </div>

        {/* Map Visual Path */}
        <div className="relative z-10 flex items-center justify-around w-full py-4">
          {simulatedWaypoints.map((pt, idx) => {
            const isSelected = selectedPoint === idx;
            return (
              <button
                key={pt.title}
                onClick={() => setSelectedPoint(idx)}
                className="flex flex-col items-center group relative cursor-pointer"
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                    isSelected
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50 scale-110 ring-4 ring-cyan-500/20'
                      : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="text-[9px] font-mono text-slate-400 mt-1 max-w-[70px] truncate text-center">
                  {pt.time}
                </span>
              </button>
            );
          })}
        </div>

        {/* Bottom Coordinate Bar */}
        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400 bg-black/60 px-3 py-1 rounded border border-white/5">
          <span>Active Point: {simulatedWaypoints[selectedPoint].title}</span>
          <span className="text-cyan-400">{simulatedWaypoints[selectedPoint].coords}</span>
        </div>
      </div>

      {/* Biometric Export Confirmation Trigger */}
      <div className="p-3.5 rounded-xl border border-white/10 bg-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 text-xs text-slate-300">
          <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Local Biometric Gate: Export requires fingerprint confirmation.</span>
        </div>

        <button
          onClick={handleBiometricExport}
          disabled={isExporting}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-mono transition-colors disabled:opacity-50"
        >
          {authSuccess ? (
            <>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Biometric Verified</span>
            </>
          ) : isExporting ? (
            <>
              <Fingerprint className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>Scanning Sensor...</span>
            </>
          ) : (
            <>
              <Fingerprint className="w-3.5 h-3.5 text-cyan-400" />
              <span>Export via Biometrics</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
