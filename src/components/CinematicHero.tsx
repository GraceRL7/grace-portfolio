import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/cinematicProfile';
import graceImg from './Graceprofilepicture.png';
import ParticleBackground from './ParticleBackground';

export default function CinematicHero() {
  return (
    <div id="hero" className="relative w-full h-screen min-h-[650px] bg-[#000000] text-[#FFFFFF] overflow-hidden">
      {/* VIDEO BACKGROUND & GRADIENT OVERLAY */}
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

      {/* SOFT SPOTLIGHT FROM TOP CENTER */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[550px] pointer-events-none z-10">
        <div className="w-full h-full bg-radial-gradient from-[#FFFFFF]/25 via-[#FFFFFF]/5 to-transparent blur-[90px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-[#FFFFFF] blur-sm opacity-80" />
      </div>

      {/* Dust Particles Atmosphere */}
      <ParticleBackground />

      {/* Radial Glow directly behind portrait photo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00BCD4]/10 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* HERO COMPOSITION */}
      <div className="relative z-20 w-full h-full max-w-[1400px] mx-auto px-4 sm:px-6 flex flex-col justify-between items-center pt-20 sm:pt-24 pb-6 sm:pb-8">
        
        {/* TITLE TEXT BEHIND IMAGE LAYER */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-5 text-center overflow-hidden w-full px-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="origin-center text-center flex items-center justify-center w-full"
          >
            <h1 className="font-['Antonio',sans-serif] font-black text-[7vw] sm:text-[7.2vw] lg:text-[7.5vw] text-[#FFFFFF] tracking-[0.02em] uppercase text-center leading-none whitespace-nowrap drop-shadow-[0_15px_40px_rgba(0,0,0,0.95)] scale-y-[1.4] transform select-none w-full max-w-[100vw]">
              GRACE RESHAL LEWIS
            </h1>
          </motion.div>
        </div>

        {/* CENTERED TRANSPARENT PNG PHOTO LAYER */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 pt-8 sm:pt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
            className="relative flex items-center justify-center px-4"
          >
            <img
              src={graceImg}
              alt="Grace Reshal Lewis"
              className="w-[240px] xs:w-[280px] sm:w-[400px] md:w-[480px] lg:w-[540px] max-h-[65vh] sm:max-h-none h-auto object-contain filter contrast-[1.08] brightness-[0.98] drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
            />
          </motion.div>
        </div>

        {/* BUTTONS, SOCIALS & SCROLL INDICATOR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full flex flex-col items-center gap-4 sm:gap-6 z-30 pt-auto mt-auto pointer-events-auto px-4"
        >
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-full">
            {/* 3D Monochrome Galaxy Glass Button */}
            <a
              href="#projects"
              className="galaxy-btn group"
            >
              <span className="galaxy-spark" />
              <span className="galaxy-backdrop" />
              <span className="galaxy-container">
                <span className="galaxy-star galaxy-star--static" style={{ top: '30%', left: '20%', '--duration': 12, '--delay': 2, '--size': 3 } as React.CSSProperties} />
                <span className="galaxy-star galaxy-star--static" style={{ top: '70%', left: '75%', '--duration': 15, '--delay': 4, '--size': 2 } as React.CSSProperties} />
                <span className="galaxy-star galaxy-star--static" style={{ top: '40%', left: '85%', '--duration': 10, '--delay': 1, '--size': 3 } as React.CSSProperties} />
                <span className="galaxy-star galaxy-star--static" style={{ top: '80%', left: '15%', '--duration': 18, '--delay': 3, '--size': 2 } as React.CSSProperties} />
              </span>
              <span className="galaxy-text">
                <span>VIEW PROJECTS ↗</span>
              </span>
            </a>

            <a
              href={profile.resumeFile}
              download
              className="galaxy-btn group"
            >
              <span className="galaxy-spark" />
              <span className="galaxy-backdrop" />
              <span className="galaxy-container">
                <span className="galaxy-star galaxy-star--static" style={{ top: '25%', left: '30%', '--duration': 14, '--delay': 1, '--size': 2 } as React.CSSProperties} />
                <span className="galaxy-star galaxy-star--static" style={{ top: '65%', left: '80%', '--duration': 16, '--delay': 3, '--size': 3 } as React.CSSProperties} />
              </span>
              <span className="galaxy-text">
                <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>DOWNLOAD RESUME</span>
              </span>
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
      </div>
    </div>
  );
}
