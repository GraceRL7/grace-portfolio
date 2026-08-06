import { motion } from 'framer-motion';
import { Layout, Sparkles, Cpu, Lightbulb } from 'lucide-react';

export default function CinematicAbout() {
  const cards = [
    {
      label: 'ROLE',
      value: 'Frontend Developer',
      icon: Layout,
    },
    {
      label: 'FOCUS',
      value: 'Web & UI Experiences',
      icon: Sparkles,
    },
    {
      label: 'INTEREST',
      value: 'AI Automation',
      icon: Cpu,
    },
    {
      label: 'APPROACH',
      value: 'Creative Problem Solving',
      icon: Lightbulb,
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full min-h-screen py-16 sm:py-24 lg:py-32 bg-[#000000] text-[#FFFFFF] flex flex-col justify-center px-4 sm:px-8 lg:px-12 border-t border-[#FFFFFF]/10 z-20"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4 sm:mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-[#FFFFFF]" />
          <span className="font-['Inter',sans-serif] text-[12px] sm:text-[14px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#BFBFBF]">
            01 / ABOUT ME
          </span>
        </motion.div>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="font-['Bebas_Neue',sans-serif] font-bold text-[36px] xs:text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] text-[#FFFFFF] tracking-[0.03em] sm:tracking-[0.05em] leading-[0.95] uppercase max-w-5xl">
            BUILDING DIGITAL EXPERIENCES <br />
            <span className="italic font-serif font-normal text-[#BFBFBF]">THAT LEAVE AN IMPACT</span>
          </h2>
        </motion.div>

        {/* Main Content Layout */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-6 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl bg-[#111111]/70 border border-[#FFFFFF]/15 backdrop-blur-[20px] shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
        >
          {/* Left Column: Clean Personal Story */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <p className="font-['Inter',sans-serif] text-base sm:text-lg lg:text-xl text-[#FFFFFF] font-medium leading-relaxed">
              Hey, I'm Grace.
            </p>
            <p className="font-['Inter',sans-serif] text-sm sm:text-base lg:text-lg text-[#BFBFBF] font-light leading-relaxed">
              I don't like doing things the usual way.
            </p>
            <p className="font-['Inter',sans-serif] text-sm sm:text-base lg:text-lg text-[#BFBFBF] font-light leading-relaxed">
              I'm a frontend-focused web developer who enjoys turning ideas into experiences that are clean, creative, and meaningful. Whether I'm building a website, developing a web application, or experimenting with AI automation, I'm always looking for ways to make things smarter, better, and a little more unique.
            </p>
            <p className="font-['Inter',sans-serif] text-sm sm:text-base lg:text-lg text-[#BFBFBF] font-light leading-relaxed">
              I love blending creativity with technology, exploring new tools, and bringing ideas to life through thoughtful design and interactive experiences.
            </p>
            <p className="font-['Inter',sans-serif] text-sm sm:text-base lg:text-lg text-[#FFFFFF]/90 font-medium italic leading-relaxed pt-2">
              For me, great digital products aren't just functional — they're memorable.
            </p>
          </div>

          {/* Right Column: Highlight Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.label}
                  className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#000000] border border-[#FFFFFF]/10 transition-all duration-300 hover:border-[#FFFFFF]/40 hover:-translate-y-1 group"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFFFFF] mb-2 sm:mb-3 transition-transform duration-300 group-hover:scale-110" />
                  <p className="text-[10px] sm:text-[11px] font-mono text-[#BFBFBF] uppercase tracking-widest mb-1">
                    {card.label}
                  </p>
                  <p className="text-sm sm:text-base font-bold text-[#FFFFFF] leading-snug">
                    {card.value}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
