import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, MousePointerClick } from 'lucide-react';
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
    image: ksfaImg,
    description: 'KSFA B Division League player & South Zone Inter-University varsity representative.',
  },
  {
    id: 'badminton',
    title: 'Badminton',
    category: 'Court Sports & Reflexes',
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=1000&auto=format&fit=crop',
    description: 'Competitive singles & doubles badminton matches and fast-paced agility drills.',
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
    image: eventHeadImg,
    description: 'Event head for videography, multi-track timeline editing, color grading & audio sync.',
  },
  {
    id: 'photography',
    title: 'Photography',
    category: 'Visual Framing & Stories',
    image: winnersImg,
    description: 'Award-winning photography at Milaverse 2.0 & Manoeuvre IT Fest event coverage.',
  },
  {
    id: 'reels',
    title: 'Reels / Content Creation',
    category: 'Social Media & Media Edits',
    image: southZoneImg,
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
    image: rajyaPuraskarImg,
    description: 'Exploring diverse musical genres, rhythm production, and sound design inspiration.',
  },
];

export default function CinematicHobbies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const totalCards = HOBBIES_LIST.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalCards);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  return (
    <section
      ref={sectionRef}
      id="hobbies"
      className="relative w-full min-h-screen py-20 sm:py-28 lg:py-36 bg-[#000000] text-[#FFFFFF] border-t border-[#FFFFFF]/10 z-20 overflow-hidden"
    >
      {/* Background Subtle Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/[0.02] blur-[160px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* SECTION LABEL & HEADING */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-2 h-2 rounded-full bg-[#FFFFFF]" />
              <span className="font-['Inter',sans-serif] text-[12px] sm:text-[14px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#BFBFBF]">
                06 / WHO I AM OUTSIDE WORK
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-['Antonio',sans-serif] text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-[0.03em] leading-none mb-3 text-[#FFFFFF]"
            >
              WHO I AM OUTSIDE WORK
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-['Inter',sans-serif] text-base sm:text-xl font-light tracking-wide text-[#CCCCCC]"
            >
              Creative arts, music, visual editing, and athletic passions.
            </motion.p>
          </div>

          {/* Carousel Navigation Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={handlePrev}
              aria-label="Previous hobby"
              className="w-11 h-11 rounded-full bg-black/80 border border-white/20 text-white flex items-center justify-center backdrop-blur-md shadow-xl hover:bg-white hover:text-black hover:border-white transition-all duration-300 focus-visible:outline-none"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next hobby"
              className="w-11 h-11 rounded-full bg-black/80 border border-white/20 text-white flex items-center justify-center backdrop-blur-md shadow-xl hover:bg-white hover:text-black hover:border-white transition-all duration-300 focus-visible:outline-none"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3D CIRCULAR SCROLL & WHEEL CAROUSEL STAGE */}
        <div className="relative w-full h-[500px] sm:h-[580px] lg:h-[620px] flex items-center justify-center perspective-[1200px] overflow-hidden rounded-3xl bg-gradient-to-b from-[#09090b]/80 via-[#050505]/90 to-[#000000] border border-white/10 p-4">
          
          {/* Subtle Ambient Radial Ring */}
          <div className="absolute w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] rounded-full border border-white/[0.08] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

          {/* CARDS DISPLAY CONTAINER */}
          <div className="relative w-full h-full flex items-center justify-center">
            {HOBBIES_LIST.map((hobby, index) => {
              // Calculate relative offset distance from current active index
              let diff = (index - activeIndex + totalCards) % totalCards;
              if (diff > totalCards / 2) diff -= totalCards;

              // Compute 3D circular transformation variables
              const isActive = diff === 0;
              const isVisible = Math.abs(diff) <= 3; // Show 7 cards around active center
              
              const rotateY = diff * 22; // degree rotation
              const translateX = diff * 180; // px spacing
              const translateZ = isActive ? 120 : -Math.abs(diff) * 140; // depth offset
              const scale = isActive ? 1.08 : Math.max(0.7, 1 - Math.abs(diff) * 0.12);
              const opacity = isVisible ? (isActive ? 1 : Math.max(0.25, 1 - Math.abs(diff) * 0.28)) : 0;
              const isGrayscale = !isActive;

              if (!isVisible) return null;

              return (
                <motion.div
                  key={hobby.id}
                  onClick={() => setActiveIndex(index)}
                  initial={false}
                  animate={{
                    x: translateX,
                    z: translateZ,
                    rotateY: rotateY,
                    scale: scale,
                    opacity: opacity,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 26,
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                  className={`absolute w-[220px] xs:w-[250px] sm:w-[300px] lg:w-[340px] aspect-[4/5] rounded-2xl p-4 sm:p-5 flex flex-col justify-between cursor-pointer select-none transition-all duration-500 bg-[#121215]/90 backdrop-blur-xl border ${
                    isActive
                      ? 'border-white/60 shadow-[0_20px_50px_rgba(255,255,255,0.18)] z-30'
                      : 'border-white/15 hover:border-white/40 shadow-[0_10px_30px_rgba(0,0,0,0.8)] z-10'
                  }`}
                >
                  {/* Metallic 3D Subtle Inner Edge */}
                  <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none" />

                  {/* CARD PREVIEW IMAGE */}
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#050505] border border-white/10 mb-3">
                    <img
                      src={hobby.image}
                      alt={hobby.title}
                      loading="lazy"
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        isGrayscale ? 'filter grayscale opacity-75' : 'filter-none opacity-100 scale-105'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-black/80 border border-white/20 text-[10px] font-mono tracking-widest text-white/90 uppercase">
                      {hobby.category}
                    </span>
                  </div>

                  {/* CARD DETAILS */}
                  <div className="flex flex-col justify-between flex-grow pt-1">
                    <div>
                      <h3 className="font-['Antonio',sans-serif] text-xl sm:text-2xl font-bold uppercase tracking-wide text-white mb-1">
                        {hobby.title}
                      </h3>
                      <p className="font-['Inter',sans-serif] text-xs text-white/70 line-clamp-2 leading-relaxed">
                        {hobby.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-white/50 uppercase tracking-wider">
                      <span>{String(index + 1).padStart(2, '0')} / {String(totalCards).padStart(2, '0')}</span>
                      {isActive && <span className="text-white font-semibold flex items-center gap-1"><MousePointerClick size={12} /> Active</span>}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ACTIVE CAPTION DISPLAY AT BOTTOM OF CAROUSEL STAGE */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 text-center pointer-events-none">
            <motion.p
              key={HOBBIES_LIST[activeIndex].id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="font-['Handlee',cursive] font-serif italic text-xl sm:text-2xl text-white tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
            >
              "{HOBBIES_LIST[activeIndex].title}"
            </motion.p>
          </div>
        </div>

        {/* BOTTOM SECTION FOOTER BAR */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
          <div className="flex items-center gap-4">
            <span className="text-white font-bold tracking-widest">
              {String(activeIndex + 1).padStart(2, '0')}
            </span>
            <div className="w-28 sm:w-44 h-[2px] bg-white/15 relative overflow-hidden rounded-full">
              <div
                className="h-full bg-white transition-all duration-300 rounded-full"
                style={{
                  width: `${((activeIndex + 1) / totalCards) * 100}%`,
                }}
              />
            </div>
            <span>{String(totalCards).padStart(2, '0')}</span>
          </div>

          <div className="flex items-center gap-6 tracking-widest uppercase text-[11px]">
            <span className="text-white/70">11 HOBBIES & CREATIVE PURSUITS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
