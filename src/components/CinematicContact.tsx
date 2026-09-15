import { useState } from 'react';
import { Mail, Linkedin, Instagram, Send, Workflow, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { profile } from '../data/cinematicProfile';
import { useTheme } from '../context/ThemeContext';

const N8N_CONTACT_WEBHOOK_URL = 'https://n8n.srv965596.hstgr.cloud/webhook/grace-contact';

export default function CinematicContact() {
  const { theme } = useTheme();
  const isBeach = theme === 'beach';

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
      className={`relative w-full min-h-screen py-16 sm:py-24 lg:py-32 border-t flex flex-col justify-center px-4 sm:px-8 lg:px-12 z-20 transition-colors duration-1000 ${
        isBeach
          ? 'bg-[#FAF6F0] text-[#1C242B] border-[#5C5349]/15'
          : 'bg-[#000000] text-[#FFFFFF] border-[#FFFFFF]/10'
      }`}
    >
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <div className={`w-2 h-2 rounded-full ${isBeach ? 'bg-[#1C6E8C]' : 'bg-[#FFFFFF]'}`} />
          <span className={`font-['Inter',sans-serif] text-[12px] sm:text-[14px] uppercase tracking-[0.25em] sm:tracking-[0.3em] ${
            isBeach ? 'text-[#7A4A21]' : 'text-[#BFBFBF]'
          }`}>
            07 / CONTACT ME
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <h2 className={`font-['Bebas_Neue',sans-serif] font-bold text-[36px] xs:text-[48px] sm:text-[72px] lg:text-[96px] tracking-[0.03em] sm:tracking-[0.05em] leading-none uppercase ${
              isBeach ? 'text-[#1C242B]' : 'text-[#FFFFFF]'
            }`}>
              CONTACT ME
            </h2>

            <p className={`font-['Inter',sans-serif] text-sm sm:text-base font-light leading-relaxed max-w-md ${
              isBeach ? 'text-[#5C5349]' : 'text-[#BFBFBF]'
            }`}>
              Available for AI automation architecture, full-stack web applications, and digital engineering inquiries.
            </p>

            {/* Workflow Pipeline Diagram Card */}
            <div className={`p-6 rounded-2xl border space-y-3 ${
              isBeach
                ? 'bg-[#F3ECE1] border-[#7A4A21]/20'
                : 'bg-[#0D0D0D] border-white/10'
            }`}>
              <div className={`flex items-center gap-2 text-xs font-mono uppercase tracking-wider ${
                isBeach ? 'text-[#1C6E8C]' : 'text-emerald-400'
              }`}>
                <Workflow size={14} />
                <span>Contact Workflow Engine</span>
              </div>
              <div className={`flex items-center gap-2 text-[11px] font-mono flex-wrap ${
                isBeach ? 'text-[#5C5349]' : 'text-white/60'
              }`}>
                <span>Contact Form</span>
                <ArrowRight size={12} className={isBeach ? 'text-[#7A4A21]/40' : 'text-white/30'} />
                <span>n8n Webhook</span>
                <ArrowRight size={12} className={isBeach ? 'text-[#7A4A21]/40' : 'text-white/30'} />
                <span>Google Sheets</span>
                <ArrowRight size={12} className={isBeach ? 'text-[#7A4A21]/40' : 'text-white/30'} />
                <span>Auto-Reply Email</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={`mailto:${profile.email}`}
                className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 font-['Inter',sans-serif] text-xs font-semibold tracking-widest uppercase ${
                  isBeach
                    ? 'border-[#7A4A21]/30 bg-transparent text-[#1C242B] hover:bg-[#1C6E8C] hover:text-white hover:border-[#1C6E8C]'
                    : 'border-[#FFFFFF]/30 bg-transparent text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#000000]'
                }`}
              >
                <Mail size={16} />
                <span>EMAIL ME</span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 font-['Inter',sans-serif] text-xs font-semibold tracking-widest uppercase ${
                  isBeach
                    ? 'border-[#7A4A21]/30 bg-transparent text-[#1C242B] hover:bg-[#1C6E8C] hover:text-white hover:border-[#1C6E8C]'
                    : 'border-[#FFFFFF]/30 bg-transparent text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#000000]'
                }`}
              >
                <Linkedin size={16} />
                <span>LINKEDIN</span>
              </a>

              <a
                href={profile.instagram}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 font-['Inter',sans-serif] text-xs font-semibold tracking-widest uppercase ${
                  isBeach
                    ? 'border-[#7A4A21]/30 bg-transparent text-[#1C242B] hover:bg-[#1C6E8C] hover:text-white hover:border-[#1C6E8C]'
                    : 'border-[#FFFFFF]/30 bg-transparent text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#000000]'
                }`}
              >
                <Instagram size={16} />
                <span>INSTAGRAM</span>
              </a>
            </div>
          </div>

          <div className={`lg:col-span-6 p-8 rounded-3xl border backdrop-blur-[20px] transition-colors ${
            isBeach
              ? 'bg-[#FFFFFF] border-[#7A4A21]/15 shadow-[0_10px_30px_rgba(90,82,74,0.08)]'
              : 'bg-[#111111]/70 border-[#FFFFFF]/15 shadow-2xl'
          }`}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className={`block text-[12px] font-mono uppercase tracking-widest mb-2 ${
                  isBeach ? 'text-[#7A4A21]' : 'text-[#BFBFBF]'
                }`}>Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  disabled={status === 'submitting'}
                  className={`w-full px-5 py-3 rounded-xl border text-sm transition-colors disabled:opacity-50 focus:outline-none ${
                    isBeach
                      ? 'bg-[#FAF6F0] border-[#7A4A21]/20 text-[#1C242B] placeholder:text-[#5C5349]/40 focus:border-[#1C6E8C]'
                      : 'bg-[#000000] border-[#FFFFFF]/15 text-[#FFFFFF] placeholder:text-[#BFBFBF]/40 focus:border-[#FFFFFF]'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-[12px] font-mono uppercase tracking-widest mb-2 ${
                  isBeach ? 'text-[#7A4A21]' : 'text-[#BFBFBF]'
                }`}>Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Your Email"
                  disabled={status === 'submitting'}
                  className={`w-full px-5 py-3 rounded-xl border text-sm transition-colors disabled:opacity-50 focus:outline-none ${
                    isBeach
                      ? 'bg-[#FAF6F0] border-[#7A4A21]/20 text-[#1C242B] placeholder:text-[#5C5349]/40 focus:border-[#1C6E8C]'
                      : 'bg-[#000000] border-[#FFFFFF]/15 text-[#FFFFFF] placeholder:text-[#BFBFBF]/40 focus:border-[#FFFFFF]'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-[12px] font-mono uppercase tracking-widest mb-2 ${
                  isBeach ? 'text-[#7A4A21]' : 'text-[#BFBFBF]'
                }`}>Message</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your Message..."
                  disabled={status === 'submitting'}
                  className={`w-full px-5 py-3 rounded-xl border text-sm transition-colors disabled:opacity-50 focus:outline-none ${
                    isBeach
                      ? 'bg-[#FAF6F0] border-[#7A4A21]/20 text-[#1C242B] placeholder:text-[#5C5349]/40 focus:border-[#1C6E8C]'
                      : 'bg-[#000000] border-[#FFFFFF]/15 text-[#FFFFFF] placeholder:text-[#BFBFBF]/40 focus:border-[#FFFFFF]'
                  }`}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="galaxy-btn w-full !py-3.5 group cursor-pointer"
              >
                <span className="galaxy-spark" />
                <span className="galaxy-backdrop" />
                <span className="galaxy-text">
                  <span>{status === 'submitting' ? 'SENDING...' : 'SEND MESSAGE ↗'}</span>
                  <Send size={14} />
                </span>
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
