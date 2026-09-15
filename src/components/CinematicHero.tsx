import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, ChevronRight, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/cinematicProfile';
import graceImg from './Graceprofilepicture.png';
import ParticleBackground from './ParticleBackground';

export default function CinematicHero() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Extended 400vh scroll duration (3x slower, heavy GSAP-style scrub timing)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // TIMELINE & CONTINUOUS CENTERED GROWTH:
  // 0% Scroll: Small centered name (48px) above head
  // 20% Scroll: Name grows to 60px, image barely moves
  // 40% Scroll: Name grows to 90px-140px, image dominant
  // 60% Scroll: Name dramatic (220px), image slowly moving upward (-100px)
  // 80% Scroll: Name spans most of screen width (320px), image leaving center (-180px)
  // 100% Scroll: Giant centered title card (90vw), image exits (-250px max), text fades to 20%
  const nameScale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [1, 1.25, 1.87, 2.9, 4.5, 6.6]
  );

  // Image moves much slower: only y: 0 to y: -250px max
  const imageY = useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [0, -20, -100, -250]);

  // Fade giant text to 20% opacity at 100% completion before About section enters
  const nameOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 0.9, 0.2]);

  // Subtitle, buttons, and scroll indicator fade out cleanly early in scroll
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.15, 0.35], [1, 0.4, 0]);

  return (
    <div ref={containerRef} id="hero" className="relative h-[400vh] bg-[#000000] text-[#FFFFFF]">
      {/* Pinned Sticky 100vh Viewport */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-between items-center bg-[#000000]">

        {/* TACTUS VIDEO BACKGROUND & GRADIENT OVERLAY */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <video
            autoPlay
            playsInline
            loop
            muted
            className="hero-video-bg"
          >
            <source src="https://assets.codepen.io/319606/tactus-waves-hero-sm.mp4" type="video/mp4" />
          </video>
          <div className="gradient-overlay-bottom" />
        </div>

        {/* 1. SOFT SPOTLIGHT FROM TOP CENTER */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[550px] pointer-events-none z-10">
          <div className="w-full h-full bg-radial-gradient from-[#FFFFFF]/25 via-[#FFFFFF]/5 to-transparent blur-[90px]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-[#FFFFFF] blur-sm opacity-80" />
        </div>

        {/* Dust Particles Atmosphere */}
        <ParticleBackground />

        {/* Radial Glow directly behind portrait photo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00BCD4]/10 blur-[120px] rounded-full pointer-events-none z-0" />

        {/* 2. HERO COMPOSITION */}
        <motion.div
          animate={{ scale: [1, 1.015, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="relative z-20 w-full h-full max-w-[1400px] mx-auto px-4 sm:px-6 flex flex-col justify-between items-center pt-20 sm:pt-24 pb-6 sm:pb-8"
        >
          {/* GIANT EXTRA TALL TEXT BEHIND IMAGE LAYER (z-5) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-5 text-center overflow-hidden w-full px-2">
            <motion.div
              style={{ scale: nameScale, opacity: nameOpacity }}
              className="origin-center text-center flex items-center justify-center w-full"
            >
              <h1 className="font-['Antonio',sans-serif] font-black text-[6.8vw] sm:text-[7vw] lg:text-[7.2vw] text-[#FFFFFF] tracking-[0.02em] uppercase text-center leading-none whitespace-nowrap drop-shadow-[0_15px_40px_rgba(0,0,0,0.95)] scale-y-[1.65] transform select-none w-full max-w-[100vw]">
                GRACE RESHAL LEWIS
              </h1>
            </motion.div>
          </div>


          {/* CENTERED TRANSPARENT PNG PHOTO LAYER (z-20 in front of text) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 pt-8 sm:pt-12">
            <motion.div style={{ y: imageY }} className="relative flex items-center justify-center px-4">
              <img
                src={graceImg}
                alt="Grace Reshal Lewis"
                className="w-[240px] xs:w-[280px] sm:w-[400px] md:w-[480px] lg:w-[540px] max-h-[65vh] sm:max-h-none h-auto object-contain filter contrast-[1.08] brightness-[0.98] drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
              />
            </motion.div>
          </div>

          {/* BUTTONS, SOCIALS & SCROLL INDICATOR */}
          <motion.div
            style={{ opacity: overlayOpacity }}
            className="w-full flex flex-col items-center gap-4 sm:gap-6 z-30 pt-auto mt-auto pointer-events-auto px-4"
          >
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-full">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border border-[#FFFFFF] bg-transparent text-[#FFFFFF] font-['Inter',sans-serif] text-[11px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#FFFFFF] hover:text-[#000000] hover:scale-[1.03] whitespace-nowrap"
              >
                <span>VIEW PROJECTS</span>
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={profile.resumeFile}
                download
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border border-[#FFFFFF]/40 bg-transparent text-[#FFFFFF] font-['Inter',sans-serif] text-[11px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#FFFFFF] hover:text-[#000000] hover:scale-[1.03] whitespace-nowrap"
              >
                <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#BFBFBF]" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#FFFFFF]/30 bg-transparent flex items-center justify-center text-[#BFBFBF] hover:bg-[#FFFFFF] hover:text-[#000000] hover:border-[#FFFFFF] transition-all duration-300"
              >
                <Github size={15} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#FFFFFF]/30 bg-transparent flex items-center justify-center text-[#BFBFBF] hover:bg-[#FFFFFF] hover:text-[#000000] hover:border-[#FFFFFF] transition-all duration-300"
              >
                <Linkedin size={15} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#FFFFFF]/30 bg-transparent flex items-center justify-center text-[#BFBFBF] hover:bg-[#FFFFFF] hover:text-[#000000] hover:border-[#FFFFFF] transition-all duration-300"
              >
                <Mail size={15} />
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="hidden xs:flex flex-col items-center gap-1.5 text-[#BFBFBF] pt-1 sm:pt-2 pointer-events-none">
              <div className="w-4 h-7 sm:w-5 sm:h-8 rounded-full border-2 border-[#FFFFFF]/40 flex items-start justify-center p-1">
                <div className="w-1 h-1.5 sm:h-2 bg-[#FFFFFF] rounded-full animate-bounce" />
              </div>
              <span className="font-['Inter',sans-serif] text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#BFBFBF]">
                SCROLL TO EXPLORE
              </span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
