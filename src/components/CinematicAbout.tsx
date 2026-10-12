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
              Hey, I'm Grace 👋
            </p>
            <p className={`font-['Inter',sans-serif] text-sm sm:text-base lg:text-lg font-normal leading-relaxed ${
              isBeach ? 'text-[#5C5349]' : 'text-[#BFBFBF]'
            }`}>
              Need someone who can take your brand to the next level? I'm all in. 🚀
            </p>
            <p className={`font-['Inter',sans-serif] text-sm sm:text-base lg:text-lg font-normal leading-relaxed ${
              isBeach ? 'text-[#5C5349]' : 'text-[#BFBFBF]'
            }`}>
              I'm an all-in-one digital creative blending <strong className={isBeach ? 'text-[#1C242B]' : 'text-white'}>frontend development, vibe coding, digital marketing, and content creation</strong> to turn ideas into brands and digital experiences that stand out.
            </p>
            <div className={`space-y-2 font-['Inter',sans-serif] text-sm sm:text-base lg:text-lg font-normal leading-relaxed ${
              isBeach ? 'text-[#5C5349]' : 'text-[#BFBFBF]'
            }`}>
              <p>💻 <strong className={isBeach ? 'text-[#1C242B]' : 'text-white'}>I build</strong> — modern, responsive websites and web apps using frontend technologies and AI-powered vibe coding.</p>
              <p>📈 <strong className={isBeach ? 'text-[#1C242B]' : 'text-white'}>I grow</strong> — brands through SEO, social media strategy, content planning, and performance analytics.</p>
              <p>🎬 <strong className={isBeach ? 'text-[#1C242B]' : 'text-white'}>I create</strong> — scroll-stopping reels, engaging visuals, and content that gets people talking.</p>
              <p>🤖 <strong className={isBeach ? 'text-[#1C242B]' : 'text-white'}>I innovate</strong> — with AI tools, workflow automation, and smarter ways to bring ideas to life.</p>
            </div>
            <p className={`font-['Inter',sans-serif] text-sm sm:text-base lg:text-lg font-normal leading-relaxed ${
              isBeach ? 'text-[#5C5349]' : 'text-[#BFBFBF]'
            }`}>
              From building websites and managing digital presence to creating content and tracking what actually works, I bring creativity and tech together under one roof.
            </p>
            <p className={`font-['Inter',sans-serif] text-sm sm:text-base lg:text-lg font-medium italic leading-relaxed pt-2 ${
              isBeach ? 'text-[#1C6E8C]' : 'text-[#FFFFFF]/90'
            }`}>
              One creative mind. Multiple skill sets. One goal: making your brand impossible to ignore. ✨
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
