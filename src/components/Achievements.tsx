import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ArrowLeft, Globe } from 'lucide-react';

import rajyaPuraskarImg from '../data/Rajya puraskar award.jpeg';
import southZoneImg from '../data/south zone.jpeg';
import ksfaBDivisionImg from '../data/Ksfa B division.jpeg';
import eventHeadImg from '../data/Event head at manoeuvre it fes for videography and photography3.0.jpeg';
import manoeuvreWinnersImg from '../data/Manoeuvre it fest overall winners 2.0.jpeg';
import shellsCoConvenorImg from '../data/Shells co convenor.jpeg';

interface AchievementItem {
  id: string;
  title: string;
  year: string;
  category: string;
  image: string;
  description: string;
  fullDescription: string;
  skillsGained: string[];
  websiteUrl?: string;
}

const achievementData: AchievementItem[] = [
  {
    id: 'rajya-puraskar',
    title: 'Rajya Puraskar Award',
    year: '2018',
    category: 'State Honors & Leadership',
    image: rajyaPuraskarImg,
    description:
      'Recognized with the Rajya Puraskar Award under Bharath Scouts and Guides for leadership, discipline, and community service.',
    fullDescription:
      'Awarded the highest state-level Scout honor (Rajya Puraskar) presented by the Governor of Karnataka. Demonstrated exceptional leadership, survival discipline, emergency response preparedness, and community service initiative.',
    skillsGained: ['Leadership', 'Community Service', 'Crisis Management', 'Team Discipline'],
  },
  {
    id: 'south-zone-football',
    title: 'South Zone Football Tournament',
    year: '2023 - 2024',
    category: 'University Varsity Sports',
    image: southZoneImg,
    description:
      'Represented Mangalore University at the South Zone Inter-University Football Tournament (Nanded 2022-23 / 2023-24).',
    fullDescription:
      'Selected as a key player for the Mangalore University Football team, competing at the inter-university South Zone championship level across South India.',
    skillsGained: ['High-Performance Athletics', 'Strategic Thinking', 'Team Synergy', 'Resilience'],
  },
  {
    id: 'ksfa-b-division',
    title: 'KSFA B Division League',
    year: '2024',
    category: 'State Club Athletics',
    image: ksfaBDivisionImg,
    description:
      'Played in the Karnataka State Football Association (KSFA) B Division League, gaining competitive club experience.',
    fullDescription:
      'Competed in the Bengaluru state club football division (KSFA B-Division League) representing El Mundo FC in high-intensity match play.',
    skillsGained: ['Tactical Positioning', 'Endurance under Pressure', 'On-Field Communication'],
  },
  {
    id: 'event-head-manoeuvre',
    title: 'Event Head – Manoeuvre 3.0',
    year: '2025',
    category: 'Videography & Photography Lead',
    image: eventHeadImg,
    description:
      'Served as Event Head for Videography and Photography at Manoeuvre 3.0 IT Fest, directing visual coverage and media production.',
    fullDescription:
      'Spearheaded media creation, event camera direction, videography production, and photography teams for the Manoeuvre 3.0 IT Fest.',
    skillsGained: ['Event Leadership', 'Videography Direction', 'Media Production', 'Team Coordination'],
  },
  {
    id: 'manoeuvre-winners',
    title: 'Manoeuvre IT Fest Overall Winners 2.0',
    year: '2025',
    category: 'State Level IT Championship',
    image: manoeuvreWinnersImg,
    description:
      'Secured Overall Champions Trophy at Manoeuvre 2.0 IT Fest, competing in technical videography, coding, and digital strategy.',
    fullDescription:
      'Led team performance to win the Overall Championship Trophy at Manoeuvre 2.0 IT Fest, demonstrating excellence in digital media and IT events.',
    skillsGained: ['Team Championship', 'Digital Storytelling', 'Technical Execution', 'Competitive Strategy'],
  },
  {
    id: 'shells-co-convenor',
    title: 'SHELLS 2026 Co-Convenor',
    year: '2026',
    category: 'SHELLS 2026',
    image: shellsCoConvenorImg,
    websiteUrl: 'https://shells.kristujayanti.edu.in/',
    description:
      'Led planning, coordination, and executive operations for SHELLS 2026, a national-level intercollegiate technical fest.',
    fullDescription:
      'Managed stage management, delegate registrations, technical tracks, delegate hospitality, and overall execution for 500+ participants.',
    skillsGained: ['Executive Leadership', 'Stage Management', 'Event Logistics', 'Stakeholder Management'],
  },
];

export default function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState<AchievementItem | null>(null);

  return (
    <section
      id="achievements"
      className="relative w-full py-32 bg-[#000000] text-[#FFFFFF] px-6 sm:px-12 border-t border-[#FFFFFF]/10 z-20 overflow-hidden"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Section Label & Title */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 rounded-full bg-[#FFFFFF]" />
          <span className="font-['Inter',sans-serif] text-[14px] uppercase tracking-[0.3em] text-[#BFBFBF]">
            02 / ACHIEVEMENTS & HONORS
          </span>
        </div>

        <div className="mb-14">
          <h2 className="font-['Bebas_Neue',sans-serif] font-bold text-[48px] sm:text-[72px] lg:text-[96px] text-[#FFFFFF] tracking-[0.05em] leading-none uppercase mb-4">
            MILESTONES THAT SHAPED MY JOURNEY
          </h2>
          <p className="font-['Inter',sans-serif] text-base sm:text-lg text-[#BFBFBF] font-light max-w-2xl">
            A visual showcase of official awards, athletic championships, and leadership roles.
          </p>
        </div>

        {/* Horizontal Carousel Track */}
        <div className="flex items-center gap-8 overflow-x-auto pb-10 pt-2 no-scrollbar scroll-smooth">
          {achievementData.map((item) => (
            <motion.div
              key={item.id}
              onClick={() => setSelectedAchievement(item)}
              whileHover={{ y: -8 }}
              className="group relative w-[300px] sm:w-[380px] lg:w-[420px] h-[480px] rounded-3xl overflow-hidden bg-[#111111] border border-white/15 cursor-pointer shadow-2xl shrink-0 transition-all duration-300 hover:border-white hover:shadow-[0_10px_40px_rgba(255,255,255,0.15)] flex flex-col justify-between"
            >
              {/* Photo Background with 105% Zoom on Hover */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-all duration-700 ease-out group-hover:scale-105"
              />

              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />

              {/* Top Bar: Year Badge */}
              <div className="relative z-20 p-6 flex justify-end">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest bg-black/70 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-white">
                  {item.year}
                </span>
              </div>

              {/* Content Box: Slides Upward on Hover */}
              <div className="relative z-20 p-8 space-y-3 transform transition-transform duration-500 group-hover:-translate-y-2">
                <span className="font-mono text-xs text-[#BFBFBF] uppercase tracking-widest block">
                  {item.category}
                </span>

                <h3 className="font-['Bebas_Neue',sans-serif] text-3xl sm:text-4xl font-bold tracking-wider text-white group-hover:scale-105 origin-left transition-all">
                  {item.title}
                </h3>

                <p className="font-['Inter',sans-serif] text-xs sm:text-sm text-white/80 font-light leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                <div className="pt-2 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-white underline opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>

                  {item.websiteUrl && (
                    <span className="p-1.5 rounded-full bg-white text-black text-[10px] font-mono font-bold">
                      <Globe className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Side-by-Side 2-Column Split Showcase Modal */}
      <AnimatePresence>
        {selectedAchievement && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-2xl overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl lg:max-w-5xl max-h-[90vh] overflow-y-auto bg-[#0D0D0D]/95 border border-white/20 rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-2xl no-scrollbar my-auto"
            >
              {/* Close X Button */}
              <button
                onClick={() => setSelectedAchievement(null)}
                className="absolute top-4 right-4 p-2 rounded-full border border-white/20 bg-black/60 text-white/80 hover:text-white hover:border-white transition-colors z-30"
                aria-label="Close Showcase Modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* 2-Column Split Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* LEFT COLUMN: Image (100% Fully Visible) */}
                <div className="lg:col-span-6 relative w-full h-[280px] sm:h-[360px] lg:h-[420px] rounded-2xl overflow-hidden bg-[#050505] border border-white/15 flex items-center justify-center">
                  <img
                    src={selectedAchievement.image}
                    alt={selectedAchievement.title}
                    className="w-full h-full object-contain bg-[#050505]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-4 left-4 font-mono text-[10px] sm:text-xs uppercase tracking-widest bg-black/80 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-white shadow-md">
                    {selectedAchievement.year} • {selectedAchievement.category}
                  </span>
                </div>

                {/* RIGHT COLUMN: Text & Details */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <span className="font-mono text-xs text-[#BFBFBF] uppercase tracking-widest block">
                      {selectedAchievement.category}
                    </span>

                    <h3 className="font-['Bebas_Neue',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wider text-white uppercase leading-tight">
                      {selectedAchievement.title}
                    </h3>

                    <p className="font-['Inter',sans-serif] text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                      {selectedAchievement.fullDescription}
                    </p>
                  </div>

                  {/* Skills & Qualities Demonstrated */}
                  <div className="pt-4 border-t border-white/10 space-y-2">
                    <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#BFBFBF] block">
                      SKILLS & QUALITIES DEMONSTRATED
                    </span>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {selectedAchievement.skillsGained.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                    {selectedAchievement.websiteUrl && (
                      <a
                        href={selectedAchievement.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 rounded-full bg-white text-black font-['Inter',sans-serif] font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        <span>VISIT OFFICIAL SITE</span>
                      </a>
                    )}

                    <button
                      onClick={() => setSelectedAchievement(null)}
                      className="px-6 py-2.5 rounded-full border border-white/30 bg-transparent text-white font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>CLOSE SHOWCASE</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
