import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from 'framer-motion';
import { Mouse } from 'lucide-react';
import ksfaImg from '../data/Ksfa B division.jpeg';
import eventHeadImg from '../data/Event head at manoeuvre it fes for videography and photography3.0.jpeg';
import winnersImg from '../data/Manoeuvre it fest overall winners 2.0.jpeg';
import rajyaPuraskarImg from '../data/Rajya puraskar award.jpeg';
import southZoneImg from '../data/south zone.jpeg';

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
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1000&auto=format&fit=crop',
    description: 'Pencil portraits, freehand illustration, and detailed artistic sketching.',
  },
  {
    id: 'football',
    title: 'Football',
    category: 'Competitive Athletics',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format&fit=crop',
    description: 'KSFA B Division League player & South Zone Inter-University varsity representative.',
  },
  {
    id: 'badminton',
    title: 'Badminton',
    category: 'Court Sports & Reflexes',
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=1000&auto=format&fit=crop',
    description: 'Competitive singles & doubles badminton, agility and focus.',
  },
  {
    id: 'cricket',
    title: 'Cricket',
    category: 'Team Strategy & Sports',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1000&auto=format&fit=crop',
    description: 'Inter-collegiate cricket tournaments, team leadership, and strategic gameplay.',
  },
  {
    id: 'gardening',
    title: 'Gardening',
    category: 'Nature & Plant Cultivation',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1000&auto=format&fit=crop',
    description: 'Botanical care, organic garden cultivation, and relaxing green living spaces.',
  },
  {
    id: 'designing',
    title: 'Designing',
    category: 'UI/UX & Brand Graphics',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop',
    description: 'Digital posters, user interface mockups, and creative brand design systems.',
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    category: 'Cinematic Post-Production',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1000&auto=format&fit=crop',
    description: 'Event head for videography, multi-track timeline editing, color grading & audio sync.',
  },
  {
    id: 'photography',
    title: 'Photography',
    category: 'Visual Framing & Stories',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop',
    description: 'Award-winning photography at Milaverse 2.0 & Manoeuvre IT Fest event coverage.',
  },
  {
    id: 'reels',
    title: 'Reels / Content Creation',
    category: 'Social Media & Media Edits',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop',
    description: 'Short-form video editing, aesthetic visual pacing, and creative digital storytelling.',
  },
  {
    id: 'keyboard',
    title: 'Keyboard',
    category: 'Instrumental Music',
    image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=1000&auto=format&fit=crop',
    description: 'Keyboard melodies, chord arrangements, and live acoustic music sessions.',
  },
  {
    id: 'music',
    title: 'Music',
    category: 'Soundscapes & Rhythm',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop',
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

  // Track scroll progress within tall container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  // Map scroll progress (0 to 1) to active index (0 to total - 1)
  const rawIndex = useTransform(smoothProgress, [0, 1], [0, total - 1]);

  useMotionValueEvent(rawIndex, 'change', (latest) => {
    const rounded = Math.min(total - 1, Math.max(0, Math.round(latest)));
    if (rounded !== activeIndex) {
      setActiveIndex(rounded);
    }
  });

  // Calculate position on arc for each card
  // Arc radius & center tailored to screen width & height
  const radius = isMobile ? 380 : 650; // Radius of circular arc
  const arcCenterY = isMobile ? 320 : 520; // Lower center so top of arc lifts cards up into center of viewport
  const angleStep = isMobile ? 18 : 16; // Degrees per step along circle

  const activeHobby = HOBBIES_LIST[activeIndex];

  return (
    <section
      ref={containerRef}
      id="hobbies"
      className="relative w-full h-[350vh] bg-[#000000] text-[#FFFFFF] z-20"
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-between py-8 sm:py-12 px-4 sm:px-8 lg:px-12 bg-[#000000]">
        
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

        {/* CIRCULAR STAGE CAROUSEL */}
        <div className="relative w-full flex-grow flex items-center justify-center my-2 sm:my-4 overflow-hidden">
          {HOBBIES_LIST.map((hobby, index) => {
            // Transform for card position based on smooth scroll index
            // Angle offset relative to current smoothProgress index
            const cardAngle = useTransform(rawIndex, (currIndex) => {
              const diff = index - currIndex;
              return diff * angleStep; // in degrees
            });

            // Calculate x, y position along circular arc
            const cardX = useTransform(cardAngle, (deg) => {
              const rad = (deg - 90) * (Math.PI / 180);
              return Math.cos(rad) * radius;
            });

            const cardY = useTransform(cardAngle, (deg) => {
              const rad = (deg - 90) * (Math.PI / 180);
              return Math.sin(rad) * radius + arcCenterY;
            });

            const cardRotate = useTransform(cardAngle, (deg) => deg);

            // Scale, blur, grayscale, opacity based on distance from center
            const distFromCenter = useTransform(cardAngle, (deg) => Math.abs(deg) / angleStep);
            
            const scale = useTransform(distFromCenter, [0, 1, 2, 3], [1.15, 0.92, 0.78, 0.65]);
            const opacity = useTransform(distFromCenter, [0, 1, 2, 3.5], [1, 0.75, 0.45, 0]);
            const grayscale = useTransform(distFromCenter, [0, 0.4, 1], [0, 1, 1]);
            const blur = useTransform(distFromCenter, [0, 0.5, 2], [0, 2, 6]);

            return (
              <motion.div
                key={hobby.id}
                style={{
                  x: cardX,
                  y: cardY,
                  rotate: cardRotate,
                  scale,
                  opacity,
                }}
                className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center pointer-events-auto cursor-pointer"
              >
                <motion.div
                  style={{
                    filter: useTransform(
                      [grayscale, blur],
                      ([g, b]) => `grayscale(${g}) blur(${b}px)`
                    ),
                  }}
                  className={`relative w-[150px] xs:w-[180px] sm:w-[220px] lg:w-[240px] aspect-[3/4] rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 bg-[#0d0d0f] border transition-all duration-300 ${
                    index === activeIndex
                      ? 'border-white/70 shadow-[0_0_35px_rgba(255,255,255,0.18)] z-30'
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
                </motion.div>
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

