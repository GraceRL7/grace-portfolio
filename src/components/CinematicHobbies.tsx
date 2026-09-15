import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

  // Wheel scroll handler to continuously rotate circular cards endless loop
  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY > 30) {
      handleNext();
    } else if (e.deltaY < -30) {
      handlePrev();
    }
  };

  // Calculate position on arc for each card with wide spacing (25 degrees)
  const radius = isMobile ? 420 : 720;
  const arcCenterY = isMobile ? 360 : 580;
  const angleStep = isMobile ? 26 : 25; // Extra spacing between cards

  const activeHobby = HOBBIES_LIST[activeIndex];

  return (
    <section
      ref={containerRef}
      id="hobbies"
      onWheel={handleWheel}
      className="relative w-full min-h-screen pt-24 sm:pt-32 pb-16 bg-[#000000] text-[#FFFFFF] z-20 flex flex-col justify-between overflow-hidden"
    >
      {/* Viewport Container */}
      <div className="w-full min-h-[85vh] flex flex-col justify-between py-4 sm:py-8 px-4 sm:px-8 lg:px-12 bg-[#000000]">

        {/* TOP SECTION HEADER */}
        <div className="w-full max-w-[1400px] mx-auto z-30">
          <div className="flex items-center gap-3 mb-2 sm:mb-3">
            <div className="w-2 h-2 rounded-full bg-[#FFFFFF]" />
            <span className="font-['Inter',sans-serif] text-[11px] sm:text-[13px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#BFBFBF]">
              06 / WHO I AM OUTSIDE WORK
            </span>
          </div>

          <h2 className="font-['Bebas_Neue',sans-serif] font-bold text-[32px] xs:text-[42px] sm:text-[60px] lg:text-[76px] text-[#FFFFFF] tracking-[0.04em] leading-none uppercase mb-1 sm:mb-2">
            WHO I AM OUTSIDE WORK
          </h2>

          <p className="font-['Inter',sans-serif] text-xs sm:text-sm lg:text-base text-[#BFBFBF] font-light max-w-xl">
            Creative arts, music, visual editing, and athletic passions.
          </p>
        </div>

        {/* CIRCULAR STAGE CAROUSEL WITH ULTRA-THIN SIDE NAVIGATION ARROWS */}
        <div className="relative w-full min-h-[380px] sm:min-h-[460px] flex-grow flex items-center justify-center my-4 sm:my-8 overflow-hidden">

          {/* Ultra-thin Left Side Navigation Arrow */}
          <button
            onClick={handlePrev}
            aria-label="Previous Hobby"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-40 p-3 sm:p-4 text-white/50 hover:text-white transition-colors focus-visible:outline-none group cursor-pointer"
          >
            <ChevronLeft strokeWidth={1} className="w-9 h-9 sm:w-12 sm:h-12 group-hover:scale-125 transition-transform" />
          </button>

          {/* Ultra-thin Right Side Navigation Arrow */}
          <button
            onClick={handleNext}
            aria-label="Next Hobby"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-40 p-3 sm:p-4 text-white/50 hover:text-white transition-colors focus-visible:outline-none group cursor-pointer"
          >
            <ChevronRight strokeWidth={1} className="w-9 h-9 sm:w-12 sm:h-12 group-hover:scale-125 transition-transform" />
          </button>

          {HOBBIES_LIST.map((hobby, index) => {
            // Endless circular index diff offset calculation
            let diff = (index - activeIndex + total) % total;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            // Compute circular arc angles with 0 deg at top center
            const cardAngle = diff * angleStep; // in degrees
            const rad = cardAngle * (Math.PI / 180);

            const cardX = Math.sin(rad) * radius; // sin(0) = 0 -> exact center X = 0 above text
            const cardY = -Math.cos(rad) * radius + arcCenterY; // cos(0) = 1 -> arc apex
            const cardRotate = cardAngle;

            // Scale, blur, grayscale, opacity based on distance from active center
            const absDiff = Math.abs(diff);
            const isVisible = absDiff <= 4;
            if (!isVisible) return null;

            const scale = absDiff === 0 ? 1.12 : Math.max(0.65, 0.95 - absDiff * 0.12);
            const opacity = absDiff === 0 ? 1 : Math.max(0.15, 0.8 - absDiff * 0.22);
            const grayscale = absDiff === 0 ? 0 : 1;
            const blur = absDiff === 0 ? 0 : Math.min(6, absDiff * 2);

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
                className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center pointer-events-auto cursor-pointer"
              >
                <div
                  style={{
                    filter: `grayscale(${grayscale}) blur(${blur}px)`,
                  }}
                  className={`relative w-[160px] xs:w-[190px] sm:w-[230px] lg:w-[250px] aspect-[3/4] rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 bg-[#0d0d0f] border transition-all duration-300 ${diff === 0
                      ? 'border-white/80 shadow-[0_0_40px_rgba(255,255,255,0.22)] z-30 ring-1 ring-white/40'
                      : 'border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.9)] z-10'
                    }`}
                >
                  {/* Subtle inner metallic frame line */}
                  <div className="absolute inset-1 rounded-xl sm:rounded-2xl border border-white/10 pointer-events-none" />

                  {/* Card Image */}
                  <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-black">
                    <img
                      src={hobby.image}
                      alt={hobby.title}
                      loading="eager"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                    {/* Category pill on card */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 border border-white/20 text-[9px] sm:text-[10px] font-mono tracking-widest text-white/90 uppercase">
                      {hobby.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ACTIVE CAPTION & DESCRIPTION BELOW CARD */}
        <div className="w-full max-w-[600px] mx-auto text-center z-30 min-h-[100px] flex flex-col items-center justify-center">
          <motion.div
            key={activeHobby.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col items-center"
          >
            <h3 className="font-['Caveat',cursive] text-3xl sm:text-5xl font-bold tracking-wide text-white capitalize mb-1 sm:mb-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              {activeHobby.title}
            </h3>
            <p className="font-['Inter',sans-serif] text-xs sm:text-sm text-[#BFBFBF] font-light max-w-md leading-relaxed px-4">
              {activeHobby.description}
            </p>
          </motion.div>

          {/* Scroll Indicator Prompt */}
          <div className="mt-3 flex items-center gap-2 text-[10px] font-mono tracking-widest text-white/40 uppercase">
            <Mouse className="w-3.5 h-3.5 animate-bounce" />
            <span>SCROLL TO ROTATE ({activeIndex + 1} / {total})</span>
          </div>
        </div>
      </div>
    </section>
  );
}

