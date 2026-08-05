import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Send } from 'lucide-react';
import { profile } from '../data/cinematicProfile';

export default function CinematicContact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen py-32 bg-[#000000] text-[#FFFFFF] flex flex-col justify-center px-6 sm:px-12 border-t border-[#FFFFFF]/10 z-20"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 rounded-full bg-[#FFFFFF]" />
          <span className="font-['Inter',sans-serif] text-[14px] uppercase tracking-[0.3em] text-[#BFBFBF]">
            05 / CONTACT
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-['Bebas_Neue',sans-serif] font-bold text-[48px] sm:text-[72px] lg:text-[96px] text-[#FFFFFF] tracking-[0.05em] leading-none uppercase">
              LET'S WORK TOGETHER
            </h2>

            <p className="font-['Inter',sans-serif] text-base text-[#BFBFBF] font-light leading-relaxed max-w-md">
              Available for full-stack development, WordPress engineering, and digital marketing inquiries.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
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
            </div>
          </div>

          <div className="lg:col-span-6 p-8 rounded-3xl bg-[#111111]/70 border border-[#FFFFFF]/15 backdrop-blur-[20px]">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[12px] font-mono uppercase tracking-widest text-[#BFBFBF] mb-2">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full px-5 py-3 rounded-xl bg-[#000000] border border-[#FFFFFF]/15 text-[#FFFFFF] placeholder:text-[#BFBFBF]/40 focus:outline-none focus:border-[#FFFFFF] transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-[12px] font-mono uppercase tracking-widest text-[#BFBFBF] mb-2">Email</label>
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  className="w-full px-5 py-3 rounded-xl bg-[#000000] border border-[#FFFFFF]/15 text-[#FFFFFF] placeholder:text-[#BFBFBF]/40 focus:outline-none focus:border-[#FFFFFF] transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-[12px] font-mono uppercase tracking-widest text-[#BFBFBF] mb-2">Message</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Your Message..."
                  className="w-full px-5 py-3 rounded-xl bg-[#000000] border border-[#FFFFFF]/15 text-[#FFFFFF] placeholder:text-[#BFBFBF]/40 focus:outline-none focus:border-[#FFFFFF] transition-colors text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#FFFFFF] text-[#000000] font-['Inter',sans-serif] font-bold text-xs uppercase tracking-widest hover:bg-[#BFBFBF] transition-colors flex items-center justify-center gap-2"
              >
                <span>SEND MESSAGE</span>
                <Send size={14} />
              </button>

              {submitted && (
                <p className="text-xs font-mono text-center text-[#FFFFFF]">
                  ✓ Message sent successfully.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
