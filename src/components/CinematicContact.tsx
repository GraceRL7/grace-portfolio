import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Instagram, Send, Workflow, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { profile } from '../data/cinematicProfile';

const N8N_CONTACT_WEBHOOK_URL = 'https://n8n.srv965596.hstgr.cloud/webhook/grace-contact';

export default function CinematicContact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setStatus('error');
      setStatusMsg('Please fill in all fields.');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setStatusMsg('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    setStatusMsg('Sending message...');

    try {
      const response = await fetch(N8N_CONTACT_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json, text/plain, */*',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setStatus('success');
      setStatusMsg('Message sent successfully.');
      setFormData({ name: '', email: '', message: '' });
    } catch (err: unknown) {
      console.error('[Contact Webhook Error]', err);
      setStatus('error');
      setStatusMsg('Failed to send message. Please try again.');
    } finally {
      setTimeout(() => {
        setStatus('idle');
        setStatusMsg('');
      }, 7000);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen py-16 sm:py-24 lg:py-32 bg-[#000000] text-[#FFFFFF] flex flex-col justify-center px-4 sm:px-8 lg:px-12 border-t border-[#FFFFFF]/10 z-20"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <div className="w-2 h-2 rounded-full bg-[#FFFFFF]" />
          <span className="font-['Inter',sans-serif] text-[12px] sm:text-[14px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#BFBFBF]">
            06 / CONTACT & AUTOMATION
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <h2 className="font-['Bebas_Neue',sans-serif] font-bold text-[36px] xs:text-[48px] sm:text-[72px] lg:text-[96px] text-[#FFFFFF] tracking-[0.03em] sm:tracking-[0.05em] leading-none uppercase">
              LET'S WORK TOGETHER
            </h2>

            <p className="font-['Inter',sans-serif] text-sm sm:text-base text-[#BFBFBF] font-light leading-relaxed max-w-md">
              Available for AI automation architecture, full-stack web applications, and digital engineering inquiries.
            </p>

            {/* Workflow Pipeline Diagram Card */}
            <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
                <Workflow size={14} />
                <span>Contact Workflow Engine</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-white/60 flex-wrap">
                <span>Contact Form</span>
                <ArrowRight size={12} className="text-white/30" />
                <span>n8n Webhook</span>
                <ArrowRight size={12} className="text-white/30" />
                <span>Google Sheets</span>
                <ArrowRight size={12} className="text-white/30" />
                <span>Auto-Reply Email</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#FFFFFF]/30 bg-transparent text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#000000] transition-all duration-300 font-['Inter',sans-serif] text-xs font-semibold tracking-widest uppercase"
              >
                <Mail size={16} />
                <span>EMAIL ME</span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#FFFFFF]/30 bg-transparent text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#000000] transition-all duration-300 font-['Inter',sans-serif] text-xs font-semibold tracking-widest uppercase"
              >
                <Linkedin size={16} />
                <span>LINKEDIN</span>
              </a>

              <a
                href={profile.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#FFFFFF]/30 bg-transparent text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#000000] transition-all duration-300 font-['Inter',sans-serif] text-xs font-semibold tracking-widest uppercase"
              >
                <Instagram size={16} />
                <span>INSTAGRAM</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 p-8 rounded-3xl bg-[#111111]/70 border border-[#FFFFFF]/15 backdrop-blur-[20px]">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[12px] font-mono uppercase tracking-widest text-[#BFBFBF] mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  disabled={status === 'submitting'}
                  className="w-full px-5 py-3 rounded-xl bg-[#000000] border border-[#FFFFFF]/15 text-[#FFFFFF] placeholder:text-[#BFBFBF]/40 focus:outline-none focus:border-[#FFFFFF] transition-colors text-sm disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-[12px] font-mono uppercase tracking-widest text-[#BFBFBF] mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Your Email"
                  disabled={status === 'submitting'}
                  className="w-full px-5 py-3 rounded-xl bg-[#000000] border border-[#FFFFFF]/15 text-[#FFFFFF] placeholder:text-[#BFBFBF]/40 focus:outline-none focus:border-[#FFFFFF] transition-colors text-sm disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-[12px] font-mono uppercase tracking-widest text-[#BFBFBF] mb-2">Message</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your Message..."
                  disabled={status === 'submitting'}
                  className="w-full px-5 py-3 rounded-xl bg-[#000000] border border-[#FFFFFF]/15 text-[#FFFFFF] placeholder:text-[#BFBFBF]/40 focus:outline-none focus:border-[#FFFFFF] transition-colors text-sm disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3.5 rounded-full bg-[#FFFFFF] text-[#000000] font-['Inter',sans-serif] font-bold text-xs uppercase tracking-widest hover:bg-[#BFBFBF] transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <span>{status === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}</span>
                <Send size={14} />
              </button>

              {statusMsg && (
                <div
                  className={`p-3 rounded-xl border flex items-start gap-2 text-xs font-mono ${
                    status === 'success'
                      ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-400'
                      : status === 'error'
                      ? 'bg-red-950/30 border-red-500/30 text-red-400'
                      : 'bg-white/5 border-white/10 text-white/80'
                  }`}
                >
                  {status === 'success' ? (
                    <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                  ) : status === 'error' ? (
                    <AlertCircle size={16} className="shrink-0 mt-0.5" />
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse mt-1.5 shrink-0" />
                  )}
                  <span>{statusMsg}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
