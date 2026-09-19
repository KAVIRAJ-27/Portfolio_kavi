'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  label?: string;
  isCore?: boolean;
}

export function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const coreLabels = ['AI', 'Data', 'Code', 'IoT', 'Mobile', 'Web'];
    const nodes: Node[] = [];
    const mouse = { x: -1000, y: -1000, radius: 140 };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Spawn 6 Core Named Nodes
    coreLabels.forEach((label, i) => {
      const angle = (i / coreLabels.length) * Math.PI * 2;
      const dist = Math.min(width, height) * 0.28;
      nodes.push({
        x: width / 2 + Math.cos(angle) * dist,
        y: height / 2 + Math.sin(angle) * dist,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: 6,
        label,
        isCore: true
      });
    });

    // Spawn 22 ambient constellation nodes
    const ambientCount = 22;
    for (let i = 0; i < ambientCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2.5 + 1.5,
        isCore: false
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Animation Loop
    let pulse = 0;
    const render = () => {
      pulse += 0.02;
      ctx.clearRect(0, 0, width, height);

      const isLight = theme === 'light';
      const nodeColor = isLight ? '#0284c7' : '#38bdf8';
      const coreNodeColor = isLight ? '#4f46e5' : '#818cf8';
      const textColor = isLight ? '#0f172a' : '#e0f2fe';
      const lineColorBase = isLight ? 'rgba(14, 165, 233,' : 'rgba(56, 189, 248,';

      // Update positions
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x < 20 || node.x > width - 20) node.vx *= -1;
        if (node.y < 20 || node.y > height - 20) node.vy *= -1;

        // Mouse gentle repulsion
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius && dist > 0) {
          const force = (mouse.radius - dist) / mouse.radius;
          node.x -= (dx / dist) * force * 2;
          node.y -= (dy / dist) * force * 2;
        }
      });

      // Draw Connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = (n1.isCore && n2.isCore) ? 220 : 130;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * (n1.isCore && n2.isCore ? 0.35 : 0.15);
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `${lineColorBase} ${alpha})`;
            ctx.lineWidth = n1.isCore && n2.isCore ? 1.5 : 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw Nodes and Labels
      nodes.forEach(node => {
        ctx.beginPath();
        const currentRadius = node.isCore 
          ? node.radius + Math.sin(pulse + node.x) * 0.8 
          : node.radius;

        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = node.isCore ? coreNodeColor : nodeColor;
        ctx.fill();

        if (node.isCore && !isLight) {
          ctx.shadowBlur = 12;
          ctx.shadowColor = '#38bdf8';
        } else {
          ctx.shadowBlur = 0;
        }

        // Draw Label for Core Nodes
        if (node.isCore && node.label) {
          ctx.font = '600 11px ui-monospace, SFMono-Regular, Menlo, monospace';
          ctx.fillStyle = textColor;
          ctx.textAlign = 'center';
          ctx.fillText(node.label, node.x, node.y - 12);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto opacity-70 transition-opacity duration-500"
      aria-hidden="true"
    />
  );
}
