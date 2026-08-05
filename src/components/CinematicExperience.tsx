import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

export default function CinematicExperience() {
  const experiences = [
    {
      role: 'WordPress Developer',
      company: 'El Mundo Sports, Bengaluru',
      period: 'Aug 2024 – May 2025',
      contributions: [
        'Developed and maintained the official El Mundo Sports website using WordPress and Elementor.',
        'Designed responsive pages and improved user experience across all devices.',
        'Managed content updates, performance optimization, and website enhancements.',
        'Collaborated with stakeholders to implement business and marketing requirements.',
      ],
    },
    {
      role: 'Web Developer Intern',
      company: 'Nano Stream Technologies, Bengaluru',
      period: 'Feb 2026 – Jun 2026',
      contributions: [
        'Worked on the development of "Svasthya Fresh — Admin Side Management System" using React, TypeScript, and Tailwind CSS.',
        'Developed responsive frontend interfaces and reusable UI components for multiple dashboard modules.',
        'Implemented modules including Orders, Coupons, Analytics, Users, and Support Center.',
        'Integrated REST APIs and handled dynamic data rendering for real-time dashboard functionality.',
      ],
    },
    {
      role: 'AI Automation Intern',
      company: 'Jivrus Technologies',
      period: 'May 2026 – Sep 2026',
      contributions: [
        'Worked on AI-powered workflow automation projects.',
        'Built and tested automation workflows using AI tools and prompt-based solutions.',
        'Created intelligent workflows to improve productivity and operational efficiency.',
        'Collaborated with teams to optimize business and content processes.',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative w-full min-h-screen py-32 bg-[#000000] text-[#FFFFFF] flex flex-col justify-center px-6 sm:px-12 border-t border-[#FFFFFF]/10 z-20"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 rounded-full bg-[#FFFFFF]" />
          <span className="font-['Inter',sans-serif] text-[14px] uppercase tracking-[0.3em] text-[#BFBFBF]">
            04 / CAREER & LEARNING
          </span>
        </div>

        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="font-['Bebas_Neue',sans-serif] font-bold text-[48px] sm:text-[72px] lg:text-[96px] text-[#FFFFFF] tracking-[0.05em] leading-none uppercase mb-4">
            EXPERIENCE
          </h2>
          <p className="font-['Inter',sans-serif] text-base sm:text-lg text-[#BFBFBF] font-light max-w-xl">
            WHERE I'VE BUILT & LEARNED
          </p>
        </div>

        {/* Experience Cards Stream */}
        <div className="relative pl-6 sm:pl-10 border-l border-[#FFFFFF]/15 space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group"
            >
              {/* Timeline Indicator Point */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-2.5 w-3.5 h-3.5 rounded-full bg-[#000000] border-2 border-[#FFFFFF] group-hover:bg-[#FFFFFF] transition-colors duration-300" />

              {/* Minimal Luxury Card */}
              <div className="p-8 rounded-3xl bg-[#111111]/80 border border-[#FFFFFF]/15 backdrop-blur-[20px] transition-all duration-300 hover:border-[#FFFFFF]/40 hover:-translate-y-1 shadow-2xl">
                <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3">
                  <h3 className="font-['Bebas_Neue',sans-serif] text-[32px] tracking-[0.05em] text-[#FFFFFF]">
                    {exp.role}
                  </h3>
                  <span className="font-mono text-xs px-3 py-1 rounded-full border border-white/20 bg-white/5 text-[#BFBFBF]">
                    {exp.period}
                  </span>
                </div>

                {/* Highlighted Company Badge & Title */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 border border-white/20 text-[#FFFFFF] mb-6">
                  <Building2 className="w-3.5 h-3.5 text-white shrink-0" />
                  <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    {exp.company}
                  </span>
                </div>

                <ul className="space-y-3 font-['Inter',sans-serif] text-sm text-[#FFFFFF]/80 font-light leading-relaxed">
                  {exp.contributions.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#FFFFFF]/40 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
