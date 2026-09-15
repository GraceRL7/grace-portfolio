import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function CinematicExperience() {
  const { theme } = useTheme();
  const isBeach = theme === 'beach';

  const experiences = [
    {
      role: 'WordPress Developer',
      company: 'El Mundo Sports, Bengaluru',
      period: 'Aug 2024 – May 2025',
      contributions: [
        'Developed and maintained the official El Mundo Sports website using WordPress and Elementor.',
        'Configured search engine optimization (SEO), meta titles, meta descriptions, and search keyphrases using All in One SEO to boost organic search visibility.',
        'Designed responsive pages, custom forms (Forminator), and interactive UI elements for optimal user experience across all devices.',
        'Applied backend performance optimization, speed enhancements, content updates, and regular website security updates.',
        'Collaborated with stakeholders to execute digital marketing and online brand visibility strategies.',
      ],
    },
    {
      role: 'Social Media & Content Creation Specialist',
      company: 'Freelance & Brand Client Accounts',
      period: '2024 – 2026',
      contributions: [
        'Served as full-time Social Media Lead for KJU KJIT and Grace Captures (2024–2026), managing end-to-end content calendars, brand strategy, and reels editing.',
        'Executed short-term event media campaigns & promotional video coverage for SHELLS 2026, VFA Manipal, Udupi District Football Association, ICYM Sasthan, and Nithyadar Kripa Food Products.',
        'Generated 441K+ views on Grace Captures, with 5,493 profile activity actions and a 38.2% increase in profile visits.',
        'Created high-performing content reaching 40K+ views per campaign using Instagram Analytics to track reach, engagement, and audience performance.',
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
      className={`relative w-full min-h-screen py-16 sm:py-24 lg:py-32 flex flex-col justify-center px-4 sm:px-8 lg:px-12 border-t transition-colors duration-1000 z-20 ${
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
            02 / WHAT I'VE DONE
          </span>
        </div>

        {/* Section Heading */}
        <div className="mb-10 sm:mb-16">
          <h2 className={`font-['Bebas_Neue',sans-serif] font-bold text-[36px] xs:text-[48px] sm:text-[72px] lg:text-[96px] tracking-[0.03em] sm:tracking-[0.05em] leading-none uppercase mb-2 sm:mb-4 ${
            isBeach ? 'text-[#1C242B]' : 'text-[#FFFFFF]'
          }`}>
            WHAT I'VE DONE
          </h2>
          <p className={`font-['Inter',sans-serif] text-sm sm:text-base lg:text-lg font-light max-w-xl ${
            isBeach ? 'text-[#5C5349]' : 'text-[#BFBFBF]'
          }`}>
            CAREER JOURNEY & PROFESSIONAL EXPERIENCE
          </p>
        </div>

        {/* Experience Cards Stream */}
        <div className={`relative pl-6 sm:pl-10 border-l space-y-12 ${
          isBeach ? 'border-[#7A4A21]/20' : 'border-[#FFFFFF]/15'
        }`}>
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
              <div className={`absolute -left-[31px] sm:-left-[47px] top-2.5 w-3.5 h-3.5 rounded-full border-2 transition-colors duration-300 ${
                isBeach
                  ? 'bg-[#FAF6F0] border-[#1C6E8C] group-hover:bg-[#1C6E8C]'
                  : 'bg-[#000000] border-[#FFFFFF] group-hover:bg-[#FFFFFF]'
              }`} />

              {/* 3D Glass Card */}
              <div className={`relative group/card p-6 sm:p-8 rounded-3xl border backdrop-blur-[20px] transition-all duration-500 overflow-hidden ${
                isBeach
                  ? 'bg-[#FFFFFF] border-[#7A4A21]/15 hover:border-[#1C6E8C]/50 shadow-[0_10px_30px_rgba(90,82,74,0.08)] hover:shadow-[0_15px_40px_rgba(28,110,140,0.15)] hover:-translate-y-1.5'
                  : 'bg-[#111111]/80 border-[#FFFFFF]/15 hover:border-[#FFFFFF]/60 hover:bg-[#161619] shadow-2xl hover:shadow-[0_15px_40px_rgba(255,255,255,0.12)] hover:-translate-y-1.5'
              }`}>
                {/* Shimmer Light Line Sweep Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.12)_45%,rgba(255,255,255,0.28)_50%,rgba(255,255,255,0.12)_55%,transparent_80%)] translate-x-[-100%] group-hover/card:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

                <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3">
                  <h3 className={`font-['Bebas_Neue',sans-serif] text-[32px] tracking-[0.05em] transition-colors duration-300 ${
                    isBeach ? 'text-[#1C242B] group-hover/card:text-[#1C6E8C]' : 'text-[#FFFFFF] group-hover/card:text-white'
                  }`}>
                    {exp.role}
                  </h3>
                  <span className={`font-mono text-xs px-3 py-1 rounded-full border transition-all duration-300 ${
                    isBeach
                      ? 'border-[#7A4A21]/20 bg-[#F3ECE1] text-[#7A4A21]'
                      : 'border-white/20 bg-white/5 text-[#BFBFBF]'
                  }`}>
                    {exp.period}
                  </span>
                </div>

                {/* Highlighted Company Badge & Title */}
                <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border transition-all duration-300 mb-6 ${
                  isBeach
                    ? 'bg-[#1C6E8C]/10 border-[#1C6E8C]/20 text-[#1C6E8C]'
                    : 'bg-white/10 border-white/20 text-[#FFFFFF]'
                }`}>
                  <Building2 className={`w-3.5 h-3.5 shrink-0 ${isBeach ? 'text-[#1C6E8C]' : 'text-white'}`} />
                  <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    {exp.company}
                  </span>
                </div>

                <ul className={`space-y-3 font-['Inter',sans-serif] text-sm font-light leading-relaxed transition-colors duration-300 ${
                  isBeach ? 'text-[#5C5349]' : 'text-[#FFFFFF]/80'
                }`}>
                  {exp.contributions.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className={`mt-1 font-bold ${isBeach ? 'text-[#1C6E8C]' : 'text-[#FFFFFF]/40'}`}>•</span>
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
