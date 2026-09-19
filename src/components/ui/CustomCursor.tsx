'use client';

import React, { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [dotPosition, setDotPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if device supports hover and has fine pointer
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!hasFinePointer || prefersReducedMotion) {
      setIsMobile(true);
      return;
    }
    
    setIsMobile(false);

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      setDotPosition({ x: e.clientX, y: e.clientY });
      
      // Slightly smoothed follower
      requestAnimationFrame(() => {
        setPosition(prev => ({
          x: prev.x + (e.clientX - prev.x) * 0.35,
          y: prev.y + (e.clientY - prev.y) * 0.35
        }));
      });

      // Detect if hovering over clickable elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = Boolean(
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('cursor-pointer')
        );
        setIsPointer(isClickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Outer subtle glow ring */}
      <div
        className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-75 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '44px' : '28px',
          height: isPointer ? '44px' : '28px',
          border: isPointer 
            ? '1.5px solid rgba(56, 189, 248, 0.7)' 
            : '1px solid rgba(129, 140, 248, 0.4)',
          background: isPointer 
            ? 'rgba(56, 189, 248, 0.08)' 
            : 'rgba(99, 102, 241, 0.03)',
          boxShadow: isPointer ? '0 0 16px rgba(56, 189, 248, 0.3)' : 'none'
        }}
      />
      {/* Inner precise dot */}
      <div
        className="pointer-events-none fixed z-[9999] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400"
        style={{
          left: `${dotPosition.x}px`,
          top: `${dotPosition.y}px`,
          boxShadow: '0 0 6px #38bdf8'
        }}
      />
    </>
  );
}
