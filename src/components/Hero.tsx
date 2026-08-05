import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Download, ChevronRight, Sparkles } from 'lucide-react';
import { profile } from '../data/resumeData';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Scroll Progress linked over a 250vh pinned container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Dynamic transforms: Text grows from standard size (scale: 1) up to massive editorial size (scale: 2.8)
  const textScale = useTransform(scrollYProgress, [0, 0.7, 1], [1, 2.4, 3.2]);
  const textY = useTransform(scrollYProgress, [0, 0.7, 1], [0, -30, -80]);
  const subtitleOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 0.4, 0]);
  const ctaOpacity = useTransform(scrollYProgress, [0, 0.25, 0.5], [1, 0.3, 0]);
  const backdropDim = useTransform(scrollYProgress, [0, 0.5, 1], [0.35, 0.2, 0.05]);

  return (
    <div ref={containerRef} className="relative h-[250vh] bg-black text-white">
      {/* Fixed Sticky Screen (Locks in view as user scrolls down) */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-between bg-black">
        {/* 1. Top Studio Spotlight Beam matching exact reference photo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-radial-gradient from-white/25 via-white/5 to-transparent blur-[80px] pointer-events-none z-10" />

        {/* 2. Fixed Centered Studio Portrait Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={profile.portrait}
              alt="Grace Reshal Lewis"
              className="w-full h-full object-cover object-center filter contrast-[1.08] brightness-[0.92]"
            />
          </div>

          {/* Dark Overlay that softens as text grows */}
          <motion.div
            style={{ opacity: backdropDim }}
            className="absolute inset-0 bg-black pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none" />
        </div>

        {/* 3. Text & Content Layer */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 h-full flex flex-col items-center justify-between py-12">
          {/* Top Spacing / Optional Badge */}
          <motion.div
            style={{ opacity: subtitleOpacity }}
            className="pt-16 flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-sony-cyan" />
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/90">
                Personal Portfolio
              </span>
            </div>
          </motion.div>

          {/* CENTER: Growing Text "GRACE RESHAL LEWIS" in exact font */}
          <div className="flex-1 flex flex-col items-center justify-center my-auto w-full">
            <motion.h1
              style={{ scale: textScale, y: textY }}
              className="font-['Orbitron','Space_Grotesk',sans-serif] font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-[0.18em] uppercase text-center drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)] origin-center transition-transform duration-75"
            >
              GRACE RESHAL LEWIS
            </motion.h1>

            {/* Subtitle fading softly as scroll progresses */}
            <motion.p
              style={{ opacity: subtitleOpacity }}
              className="mt-6 text-sm sm:text-lg md:text-xl font-light text-white/80 tracking-widest uppercase text-center font-body"
            >
              <span className="text-sony-cyan font-medium">MCA Graduate</span>{' '}
              <span className="text-white/30">|</span> Web Developer{' '}
              <span className="text-white/30">|</span> Digital Marketing Professional
            </motion.p>
          </div>

          {/* BOTTOM: Action Buttons */}
          <motion.div
            style={{ opacity: ctaOpacity }}
            className="pb-8 flex flex-wrap items-center justify-center gap-4 z-30"
          >
            <a
              href="#about"
              className="group relative inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-gradient-to-r from-sony-blue via-sony-cyan to-sony-blue text-white font-semibold text-xs tracking-widest uppercase shadow-glow-cyan hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">View Portfolio</span>
              <ChevronRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a
              href={profile.resumeFile}
              download
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white font-semibold text-xs tracking-widest uppercase hover:bg-white/20 transition-all duration-300 shadow-glass"
            >
              <Download className="w-4 h-4 text-sony-cyan" />
              <span>Resume</span>
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity: subtitleOpacity }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 z-20 pointer-events-none"
        >
          <span className="text-[9px] font-mono tracking-[0.3em] uppercase">Scroll Slowly</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-sony-cyan" />
        </motion.div>
      </div>
    </div>
  );
}
