import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function CinematicAbout() {
  const { theme } = useTheme();
  const isBeach = theme === 'beach';

  return (
    <section
      id="about"
      className={`relative w-full min-h-screen py-16 sm:py-24 lg:py-32 flex flex-col justify-center px-4 sm:px-8 lg:px-12 border-t transition-colors duration-1000 z-20 ${
        isBeach
          ? 'bg-[#FAF6F0] text-[#1C242B] border-[#5C5349]/15'
          : 'bg-[#000000] text-[#FFFFFF] border-[#FFFFFF]/10'
      }`}
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
          <div className={`w-2 h-2 rounded-full ${isBeach ? 'bg-[#1C6E8C]' : 'bg-[#FFFFFF]'}`} />
          <span className={`font-['Inter',sans-serif] text-[12px] sm:text-[14px] uppercase tracking-[0.25em] sm:tracking-[0.3em] ${
            isBeach ? 'text-[#7A4A21]' : 'text-[#BFBFBF]'
          }`}>
            01 / WHO I AM
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
          <h2 className={`font-['Bebas_Neue',sans-serif] font-bold text-[36px] xs:text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] tracking-[0.03em] sm:tracking-[0.05em] leading-[0.95] uppercase max-w-5xl ${
            isBeach ? 'text-[#1C242B]' : 'text-[#FFFFFF]'
          }`}>
            WHO I AM <br />
            <span className={`italic font-serif font-normal text-2xl sm:text-4xl md:text-5xl ${
              isBeach ? 'text-[#7A4A21]' : 'text-[#BFBFBF]'
            }`}>BUILDING DIGITAL EXPERIENCES THAT LEAVE AN IMPACT</span>
          </h2>
        </motion.div>

        {/* Main Content Layout */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`p-6 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl border backdrop-blur-[20px] transition-all duration-1000 ${
            isBeach
              ? 'bg-[#F3ECE1]/90 border-[#7A4A21]/20 shadow-[0_10px_30px_rgba(90,82,74,0.12)] text-[#1C242B]'
              : 'bg-[#111111]/70 border-[#FFFFFF]/15 shadow-2xl text-[#FFFFFF]'
          }`}
        >
          {/* Personal Story Text */}
          <div className="max-w-4xl space-y-4 sm:space-y-6">
            <p className={`font-['Inter',sans-serif] text-base sm:text-lg lg:text-xl font-semibold leading-relaxed ${
              isBeach ? 'text-[#1C242B]' : 'text-[#FFFFFF]'
            }`}>
              Hey, I'm Grace.
            </p>
            <p className={`font-['Inter',sans-serif] text-sm sm:text-base lg:text-lg font-normal leading-relaxed ${
              isBeach ? 'text-[#5C5349]' : 'text-[#BFBFBF]'
            }`}>
              I don't like doing things the usual way.
            </p>
            <p className={`font-['Inter',sans-serif] text-sm sm:text-base lg:text-lg font-normal leading-relaxed ${
              isBeach ? 'text-[#5C5349]' : 'text-[#BFBFBF]'
            }`}>
              I'm a frontend-focused web developer who enjoys turning ideas into experiences that are clean, creative, and meaningful. Whether I'm building a website, developing a web application, or experimenting with AI automation, I'm always looking for ways to make things smarter, better, and a little more unique.
            </p>
            <p className={`font-['Inter',sans-serif] text-sm sm:text-base lg:text-lg font-normal leading-relaxed ${
              isBeach ? 'text-[#5C5349]' : 'text-[#BFBFBF]'
            }`}>
              I love blending creativity with technology, exploring new tools, and bringing ideas to life through thoughtful design and interactive experiences.
            </p>
            <p className={`font-['Inter',sans-serif] text-sm sm:text-base lg:text-lg font-medium italic leading-relaxed pt-2 ${
              isBeach ? 'text-[#1C6E8C]' : 'text-[#FFFFFF]/90'
            }`}>
              For me, great digital products aren't just functional — they're memorable.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
