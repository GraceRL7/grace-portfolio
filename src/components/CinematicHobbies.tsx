import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mouse, ChevronLeft, ChevronRight } from 'lucide-react';

import sketchingImg from '../data/Hobbies/Sketching.png';
import footballImg from '../data/Hobbies/football.png';
import badmintonImg from '../data/Hobbies/Badminton.png';
import cricketImg from '../data/Hobbies/Cricket.png';
import gardeningImg from '../data/Hobbies/Gardening.png';
import designingImg from '../data/Hobbies/Designing.png';
import videoEditorImg from '../data/Hobbies/Video editor.png';
import photographyImg from '../data/Hobbies/photography.png';
import reelsContentImg from '../data/Hobbies/ReelsContent.png';
import keyboardImg from '../data/Hobbies/Keyboard.png';
import musicImg from '../data/Hobbies/Music.png';
import { useTheme } from '../context/ThemeContext';

export interface HobbyItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const HOBBIES_LIST: HobbyItem[] = [
  {
    id: 'sketching',
    title: 'Sketching',
    category: 'Fine Arts & Freehand Drawing',
    image: sketchingImg,
    description: 'Pencil portraits, freehand illustration, and detailed artistic sketching.',
  },
  {
    id: 'football',
    title: 'Football',
    category: 'Competitive Athletics',
    image: footballImg,
    description: 'KSFA B Division League player & South Zone Inter-University varsity representative.',
  },
  {
    id: 'badminton',
    title: 'Badminton',
    category: 'Court Sports & Reflexes',
    image: badmintonImg,
    description: 'Competitive singles & doubles badminton, agility and focus.',
  },
  {
    id: 'cricket',
    title: 'Cricket',
    category: 'Team Strategy & Sports',
    image: cricketImg,
    description: 'Inter-collegiate cricket tournaments, team leadership, and strategic gameplay.',
  },
  {
    id: 'gardening',
    title: 'Gardening',
    category: 'Nature & Plant Cultivation',
    image: gardeningImg,
    description: 'Botanical care, organic garden cultivation, and relaxing green living spaces.',
  },
  {
    id: 'designing',
    title: 'Designing',
    category: 'UI/UX & Brand Graphics',
    image: designingImg,
    description: 'Digital posters, user interface mockups, and creative brand design systems.',
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    category: 'Cinematic Post-Production',
    image: videoEditorImg,
    description: 'Event head for videography, multi-track timeline editing, color grading & audio sync.',
  },
  {
    id: 'photography',
    title: 'Photography',
    category: 'Visual Framing & Stories',
    image: photographyImg,
    description: 'Award-winning photography at Milaverse 2.0 & Manoeuvre IT Fest event coverage.',
  },
  {
    id: 'reels',
    title: 'Reels / Content Creation',
    category: 'Social Media & Media Edits',
    image: reelsContentImg,
    description: 'Short-form video editing, aesthetic visual pacing, and creative digital storytelling.',
  },
  {
    id: 'keyboard',
    title: 'Keyboard',
    category: 'Instrumental Music',
    image: keyboardImg,
    description: 'Keyboard melodies, chord arrangements, and live acoustic music sessions.',
  },
  {
    id: 'music',
    title: 'Music',
    category: 'Soundscapes & Rhythm',
    image: musicImg,
    description: 'Exploring diverse musical genres, rhythm production, and sound design inspiration.',
  },
];

export default function CinematicHobbies() {
  const { theme } = useTheme();
  const isBeach = theme === 'beach';

  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const total = HOBBIES_LIST.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // Mouse wheel scroll handler
  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY > 30) {
      handleNext();
    } else if (e.deltaY < -30) {
      handlePrev();
    }
  };

  // Touch swipe state for mobile & tablet horizontal gesture scrolling
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 35; // minimum swipe distance threshold in px

    if (distance > minSwipeDistance) {
      // Swiped finger Left -> rotate next hobby image
      handleNext();
    } else if (distance < -minSwipeDistance) {
      // Swiped finger Right -> rotate previous hobby image
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      ref={containerRef}
      id="hobbies"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`relative w-full min-h-screen pt-24 sm:pt-32 pb-16 z-20 flex flex-col justify-between overflow-hidden transition-colors duration-1000 ${
        isBeach ? 'bg-[#FAF8F5] text-[#121E24]' : 'bg-[#000000] text-[#FFFFFF]'
      }`}
    >
      {/* Viewport Container */}
      <div className="w-full min-h-[85vh] flex flex-col justify-between py-4 sm:py-8 px-4 sm:px-8 lg:px-12">

        {/* TOP SECTION HEADER */}
        <div className="w-full max-w-[1400px] mx-auto z-30">
          <div className="flex items-center gap-3 mb-2 sm:mb-3">
            <div className={`w-2 h-2 rounded-full ${isBeach ? 'bg-[#00ACC1]' : 'bg-[#FFFFFF]'}`} />
            <span className={`font-['Inter',sans-serif] text-[11px] sm:text-[13px] uppercase tracking-[0.25em] sm:tracking-[0.3em] ${
              isBeach ? 'text-[#7A4A21]' : 'text-[#BFBFBF]'
            }`}>
              06 / WHO I AM OUTSIDE WORK
            </span>
          </div>

          <h2 className={`font-['Bebas_Neue',sans-serif] font-bold text-[32px] xs:text-[42px] sm:text-[60px] lg:text-[76px] tracking-[0.04em] leading-none uppercase mb-1 sm:mb-2 ${
            isBeach ? 'text-[#121E24]' : 'text-[#FFFFFF]'
          }`}>
            WHO I AM OUTSIDE WORK
          </h2>

          <p className={`font-['Inter',sans-serif] text-xs sm:text-sm lg:text-base font-light max-w-xl ${
            isBeach ? 'text-[#4A5B66]' : 'text-[#BFBFBF]'
          }`}>
            Creative arts, music, visual editing, and athletic passions.
          </p>
        </div>

        {/* PROPER FIXED SEMICIRCLE CAROUSEL STAGE (Shifted 100px left) */}
        <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] flex items-center justify-center my-2 sm:my-4 -translate-x-0 md:-translate-x-[100px]">

          {/* PROPER SEMICIRCLE ORBITING CARDS WITH INCREASED SPACING */}
          {HOBBIES_LIST.map((hobby, index) => {
            // Endless circular index diff offset calculation
            let diff = (index - activeIndex + total) % total;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            const absDiff = Math.abs(diff);
            // Render active card (0) and 2 neighboring cards on each side (-2, -1, 0, 1, 2)
            if (absDiff > 2) return null;

            // Semicircle arc geometry with generous card spacing
            const angleDeg = diff * (isMobile ? 32 : 30); // Increased angle step for clear spacing after every card
            const angleRad = (angleDeg * Math.PI) / 180;
            const radiusX = isMobile ? 400 : 620; // Expanded radius for spacing
            const radiusY = isMobile ? 110 : 150;

            const cardX = Math.sin(angleRad) * radiusX;
            const cardY = (1 - Math.cos(angleRad)) * radiusY - (isMobile ? 40 : 60);
            const cardRotate = diff * 7; // Clean symmetrical radial tilt

            const scale = 1; // Constant fixed size across all cards
            const opacity = absDiff === 0 ? 1 : absDiff === 1 ? 0.65 : 0.3;
            const grayscale = absDiff === 0 ? 0 : 1;
            const blur = absDiff === 0 ? 0 : absDiff === 1 ? 3 : 5;
            const isActive = absDiff === 0;

            return (
              <motion.div
                key={hobby.id}
                onClick={() => setActiveIndex(index)}
                initial={false}
                animate={{
                  x: cardX,
                  y: cardY,
                  rotate: cardRotate,
                  scale,
                  opacity,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 28,
                }}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center pointer-events-auto cursor-pointer flex flex-col items-center ${
                  isActive ? 'z-30' : 'z-10'
                }`}
              >
                {/* UNIFORM FIXED-SIZE CARD CONTAINER */}
                <div
                  style={{
                    filter: `grayscale(${grayscale}) blur(${blur}px)`,
                  }}
                  className={`relative w-[170px] sm:w-[220px] h-[240px] sm:h-[305px] rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 border transition-all duration-300 ${
                    isBeach
                      ? isActive
                        ? 'bg-[#FFFFFF] border-[#00ACC1] shadow-[0_0_35px_rgba(0,188,212,0.3)] ring-2 ring-[#00ACC1]/40'
                        : 'bg-[#F0F7F9] border-[#0097A7]/20 shadow-[0_6px_20px_rgba(0,131,143,0.1)]'
                      : isActive
                        ? 'bg-[#0d0d0f] border-white/80 shadow-[0_0_40px_rgba(255,255,255,0.22)] ring-1 ring-white/40'
                        : 'bg-[#0d0d0f] border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.9)]'
                  }`}
                >
                  {/* Subtle inner metallic/brown frame line */}
                  <div className={`absolute inset-1 rounded-xl sm:rounded-2xl border pointer-events-none ${
                    isBeach ? 'border-[#0097A7]/15' : 'border-white/10'
                  }`} />

                  {/* Card Image */}
                  <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-black">
                    <img
                      src={hobby.image}
                      alt={hobby.title}
                      loading="eager"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* INDEPENDENT PAGE-CENTERED ACTIVE CONTENT BLOCK WITH ARROWS BESIDE TITLE */}
        {HOBBIES_LIST[activeIndex] && (
          <div className="w-full max-w-[650px] mx-auto text-center flex flex-col items-center justify-center my-4 mt-8 sm:mt-10 z-30 pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={HOBBIES_LIST[activeIndex].id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col items-center justify-center w-full"
              >
                {/* Title Container with Left & Right Arrow Buttons Beside Text */}
                <div className="flex items-center justify-center gap-4 sm:gap-8 w-full pointer-events-auto mb-1 sm:mb-2">
                  {/* Left Side Navigation Arrow Beside Title */}
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Hobby"
                    className={`p-2 sm:p-3 transition-colors focus-visible:outline-none group cursor-pointer ${
                      isBeach ? 'text-[#7A4A21]/60 hover:text-[#00ACC1]' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    <ChevronLeft strokeWidth={1.5} className="w-7 h-7 sm:w-10 sm:h-10 group-hover:scale-125 transition-transform" />
                  </button>

                  {/* Active Hobby Title */}
                  <h3 className={`font-['Caveat',cursive] text-3xl sm:text-5xl font-bold tracking-wide capitalize ${
                    isBeach ? 'text-[#00838F]' : 'text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]'
                  }`}>
                    {HOBBIES_LIST[activeIndex].title}
                  </h3>

                  {/* Right Side Navigation Arrow Beside Title */}
                  <button
                    onClick={handleNext}
                    aria-label="Next Hobby"
                    className={`p-2 sm:p-3 transition-colors focus-visible:outline-none group cursor-pointer ${
                      isBeach ? 'text-[#7A4A21]/60 hover:text-[#00ACC1]' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    <ChevronRight strokeWidth={1.5} className="w-7 h-7 sm:w-10 sm:h-10 group-hover:scale-125 transition-transform" />
                  </button>
                </div>

                {/* Description */}
                <p className={`font-['Inter',sans-serif] text-xs sm:text-sm font-light max-w-md leading-relaxed px-2 ${
                  isBeach ? 'text-[#4A5B66]' : 'text-[#BFBFBF]'
                }`}>
                  {HOBBIES_LIST[activeIndex].description}
                </p>

                {/* Scroll Indicator Prompt */}
                <div className={`mt-3 flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase ${
                  isBeach ? 'text-[#00838F]/70' : 'text-white/40'
                }`}>
                  <Mouse className="w-3.5 h-3.5 animate-bounce" />
                  <span>SCROLL TO ROTATE ({activeIndex + 1} / {total})</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
