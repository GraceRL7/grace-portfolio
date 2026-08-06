import { motion } from 'framer-motion';
import { Camera, PenTool, Palette, Video, Trophy, Music, ExternalLink, Sparkles } from 'lucide-react';
import { profile } from '../data/cinematicProfile';

interface HobbyItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tools: string[];
  icon: React.ElementType;
  link?: string;
  gradient: string;
}

const hobbyData: HobbyItem[] = [
  {
    id: 'photography',
    title: 'Photography & Content Creation',
    category: 'Visual Storytelling',
    description: 'Capturing aesthetic perspectives, event photography, and creative visual stories.',
    tools: ['Camera Direction', 'Instagram', 'Visual Framing'],
    icon: Camera,
    link: profile.instagram,
    gradient: 'from-purple-900/40 via-pink-900/20 to-black',
  },
  {
    id: 'sketching',
    title: 'Sketching & Fine Arts',
    category: 'Creative Arts',
    description: 'Pencil portraits, freehand illustration, and detailed artistic sketching.',
    tools: ['Pencil Sketching', 'Digital Art', 'Illustration'],
    icon: PenTool,
    gradient: 'from-amber-900/40 via-yellow-900/20 to-black',
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    category: 'Digital Branding',
    description: 'Poster design, typography layouts, and marketing banners using Canva.',
    tools: ['Canva', 'Poster Design', 'Social Media Graphics'],
    icon: Palette,
    gradient: 'from-cyan-900/40 via-blue-900/20 to-black',
  },
  {
    id: 'video-editing',
    title: 'Video Editing & Cinematic Edits',
    category: 'Media Production',
    description: 'Cinematic video compilation, audio synchronization, and reel editing using CapCut & VN.',
    tools: ['CapCut', 'VN Video Editor', 'Reel Editing'],
    icon: Video,
    gradient: 'from-emerald-900/40 via-teal-900/20 to-black',
  },
  {
    id: 'football',
    title: 'Football & Athletics',
    category: 'Competitive Sports',
    description: 'State club player (KSFA B Division) & Mangalore University South Zone varsity team.',
    tools: ['KSFA B-Division', 'Varsity Football', 'Team Athletics'],
    icon: Trophy,
    gradient: 'from-red-900/40 via-orange-900/20 to-black',
  },
  {
    id: 'keyboard',
    title: 'Keyboard Playing',
    category: 'Instrumental Music',
    description: 'Keyboard melody arrangement, rhythm composition, and musical performance.',
    tools: ['Keyboard Performance', 'Melody Composition', 'Musical Arrangement'],
    icon: Music,
    gradient: 'from-indigo-900/40 via-violet-900/20 to-black',
  },
];

export default function CinematicHobbies() {
  return (
    <section
      id="hobbies"
      className="relative w-full py-16 sm:py-24 lg:py-32 bg-[#000000] text-[#FFFFFF] px-4 sm:px-8 lg:px-12 border-t border-[#FFFFFF]/10 z-20 overflow-hidden"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <div className="w-2 h-2 rounded-full bg-[#FFFFFF]" />
          <span className="font-['Inter',sans-serif] text-[12px] sm:text-[14px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#BFBFBF]">
            05 / HOBBIES & CREATIVE PURSUITS
          </span>
        </div>

        <div className="mb-8 sm:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div>
            <h2 className="font-['Bebas_Neue',sans-serif] font-bold text-[36px] xs:text-[48px] sm:text-[72px] lg:text-[96px] text-[#FFFFFF] tracking-[0.03em] sm:tracking-[0.05em] leading-none uppercase mb-2 sm:mb-4">
              BEYOND CODE & AUTOMATION
            </h2>
            <p className="font-['Inter',sans-serif] text-sm sm:text-base lg:text-lg text-[#BFBFBF] font-light max-w-2xl">
              Creative arts, music, visual editing, and athletic passions that fuel my discipline and design thinking.
            </p>
          </div>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbyData.map((hobby) => {
            const Icon = hobby.icon;
            const cardContent = (
              <motion.div
                key={hobby.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`group relative p-7 rounded-3xl bg-gradient-to-br ${hobby.gradient} border border-white/15 backdrop-blur-[20px] hover:border-white/50 transition-all duration-300 h-full flex flex-col justify-between overflow-hidden shadow-xl`}
              >
                {/* Background Glow */}
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-white/5 blur-2xl group-hover:bg-white/10 transition-colors pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-black/60 border border-white/15 text-white group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#BFBFBF] bg-black/60 px-3 py-1 rounded-full border border-white/10">
                      {hobby.category}
                    </span>
                  </div>

                  <h3 className="font-['Bebas_Neue',sans-serif] text-2xl sm:text-3xl tracking-wider text-white mb-2 leading-tight group-hover:text-[#E0E0E0] transition-colors">
                    {hobby.title}
                  </h3>

                  <p className="font-['Inter',sans-serif] text-xs sm:text-sm text-white/80 font-light leading-relaxed mb-6">
                    {hobby.description}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {hobby.tools.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono text-white/90 px-2.5 py-1 rounded-md bg-black/70 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {hobby.link && (
                    <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold pt-1 group-hover:underline">
                      <span>Visit Instagram (@grace_captures__)</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              </motion.div>
            );

            if (hobby.link) {
              return (
                <a
                  key={hobby.id}
                  href={hobby.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  {cardContent}
                </a>
              );
            }

            return <div key={hobby.id} className="h-full">{cardContent}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
