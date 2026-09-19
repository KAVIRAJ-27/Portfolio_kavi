'use client';

import React, { useState } from 'react';
import { personalInfo } from '@/data/portfolioData';
import { 
  Mail, 
  Send, 
  MapPin, 
  Copy, 
  Check, 
  ExternalLink, 
  MessageSquare 
} from 'lucide-react';
import { Github, Linkedin } from '@/components/ui/Icons';
import { useToast } from '@/components/ui/Toast';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { showToast } = useToast();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.emailRaw);
    setCopied(true);
    showToast('Email copied to clipboard: ' + personalInfo.socials.emailRaw, 'success');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill out Name, Email, and Message.', 'warning');
      return;
    }

    // Build functional mailto fallback link
    const mailtoUrl = `mailto:${personalInfo.socials.emailRaw}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setIsSubmitted(true);
    showToast('Launching email client with your message...', 'success');
  };

  return (
    <section id="contact" className="py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          Let&apos;s Build Something
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
          Have an idea, project, or collaboration opportunity? Let&apos;s connect.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Contact Channels & Socials */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-6 sm:p-8 border border-white/10">
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Communication Channels
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              I am interested in internships, hackathon collaborations, and engineering discussions around AI and software development.
            </p>

            {/* Email Card with Copy Button */}
            <div className="p-4 rounded-xl border border-cyan-500/30 bg-cyan-950/20 mb-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-300">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">
                    Direct Email
                  </span>
                  <span className="text-xs sm:text-sm font-mono text-slate-200 font-semibold">
                    {personalInfo.socials.emailRaw}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors"
                title="Copy email address"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6 flex items-center gap-3 text-xs text-slate-300">
              <div className="p-2 rounded-lg bg-white/5 text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Location
                </span>
                <span className="font-semibold text-slate-200">
                  {personalInfo.location}
                </span>
              </div>
            </div>

            {/* Social Links Buttons */}
            <div className="space-y-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => showToast('Opening GitHub profile: github.com/KAVIRAJ-27', 'info')}
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-mono border border-white/5 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />
                  <span>GitHub: github.com/KAVIRAJ-27</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => showToast('Opening LinkedIn profile: Kaviraj R', 'info')}
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-mono border border-white/5 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />
                  <span>LinkedIn: linkedin.com/in/kaviraj-r-0527b2395</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="glass-panel p-6 sm:p-8 border border-white/10 space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alan Turing"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/50"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. alan@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/50"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Collaboration / Project / Inquiry"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/50"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5">
                Message *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share your thoughts, project proposal, or query..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/50 resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] font-mono text-slate-500">
                Protected by direct mailto fallback. No silent failures.
              </span>

              <button
                type="submit"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
