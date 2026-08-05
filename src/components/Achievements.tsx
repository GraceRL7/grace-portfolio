import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Trophy, Video, Users, Sparkles, X, ChevronRight } from 'lucide-react';

interface AchievementItem {
  id: string;
  title: string;
  year: string;
  category: string;
  image: string;
  description: string;
  fullDescription: string;
  skillsGained: string[];
}

const achievementData: AchievementItem[] = [
  {
    id: 'rajya-puraskar',
    title: 'Rajya Puraskar Award',
    year: '2018',
    category: 'State Honors & Leadership',
    image: 'https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&w=1200&q=80',
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
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80',
    description:
      'Represented Mangalore University at the South Zone Football Tournament, competing against top universities across South India.',
    fullDescription:
      'Selected as a starting midfielder for the Mangalore University Football team, competing at the inter-university South Zone championship level across South India.',
    skillsGained: ['High-Performance Athletics', 'Strategic Thinking', 'Team Synergy', 'Resilience'],
  },
  {
    id: 'ksfa-b-division',
    title: 'KSFA B Division League',
    year: '2024',
    category: 'State Club Athletics',
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1200&q=80',
    description:
      'Played in the Karnataka State Football Association B Division League, gaining competitive football experience at the state level.',
    fullDescription:
      'Competed in the Bengaluru state club football division (KSFA B-Division League) representing El Mundo FC in high-intensity match play.',
    skillsGained: ['Tactical Positioning', 'Endurance under Pressure', 'On-Field Communication'],
  },
  {
    id: 'national-football',
    title: 'National Level Football Participation',
    year: '2022',
    category: 'National Competitions',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80',
    description:
      'Participated in national-level football competitions, representing my team and developing teamwork, resilience, and leadership skills.',
    fullDescription:
      'Trained and competed in national football tournaments representing Karnataka, building elite athletic endurance and strategic decision-making.',
    skillsGained: ['Competitive Drive', 'Adaptability', 'Team Alignment'],
  },
  {
    id: 'it-videography',
    title: '1st Place – IT Videography',
    year: '2025',
    category: 'Digital Storytelling',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80',
    description:
      'Secured First Place in Intracollegiate IT Videography, showcasing creativity, storytelling, and digital content creation skills.',
    fullDescription:
      'Directed, shot, and edited an IT promotional story video at Manoeuvre 2.0, winning 1st Place overall in technical videography.',
    skillsGained: ['Video Editing', 'Visual Storytelling', 'DaVinci Resolve', 'Creative Direction'],
  },
  {
    id: 'student-coordinator',
    title: 'Student Coordinator',
    year: '2025',
    category: 'Event Leadership',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    description:
      'Managed technical arrangements and event coordination for an international conference, ensuring smooth execution and participant engagement.',
    fullDescription:
      'Led student volunteers and technical logistics for the International Conference hosted by the Department of Computer Science.',
    skillsGained: ['Event Management', 'Public Speaking', 'Cross-Team Coordination'],
  },
  {
    id: 'shells-2026',
    title: 'SHELLS 2026 Co-Convenor',
    year: '2026',
    category: 'National Symposium Lead',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    description:
      'Led planning, coordination, and execution activities for SHELLS 2026, a national-level intercollegiate technical fest.',
    fullDescription:
      'Managed event scheduling, delegate registrations, technical tracks, and sponsorship execution for 500+ participants.',
    skillsGained: ['Executive Leadership', 'Budgeting & Logistics', 'Stakeholder Management'],
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
            02 / ACHIEVEMENTS
          </span>
        </div>

        <div className="mb-14">
          <h2 className="font-['Bebas_Neue',sans-serif] font-bold text-[48px] sm:text-[72px] lg:text-[96px] text-[#FFFFFF] tracking-[0.05em] leading-none uppercase mb-4">
            MILESTONES THAT SHAPED MY JOURNEY
          </h2>
          <p className="font-['Inter',sans-serif] text-base sm:text-lg text-[#BFBFBF] font-light max-w-2xl">
            A visual showcase of awards, athletic achievements, and leadership roles.
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
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-700 ease-out group-hover:scale-105"
              />

              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />

              {/* Top Bar: Year Badge */}
              <div className="relative z-20 p-6 flex justify-end">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest bg-black/60 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-white">
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

                <div className="pt-2 flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-white underline opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detailed Modal Drawer on Click */}
      <AnimatePresence>
        {selectedAchievement && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[#111111] border border-white/20 rounded-3xl p-8 sm:p-10 space-y-6 text-white shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedAchievement(null)}
                className="absolute top-6 right-6 p-2 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-64 rounded-2xl overflow-hidden bg-black border border-white/10">
                <img
                  src={selectedAchievement.image}
                  alt={selectedAchievement.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 font-mono text-xs uppercase tracking-widest bg-black/80 border border-white/20 px-3 py-1 rounded-full text-white">
                  {selectedAchievement.year} • {selectedAchievement.category}
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="font-['Bebas_Neue',sans-serif] text-4xl sm:text-5xl font-bold tracking-wider text-white">
                  {selectedAchievement.title}
                </h3>

                <p className="font-['Inter',sans-serif] text-sm sm:text-base text-white/80 font-light leading-relaxed">
                  {selectedAchievement.fullDescription}
                </p>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#BFBFBF] block">
                    SKILLS & QUALITIES DEMONSTRATED
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedAchievement.skillsGained.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="px-6 py-3 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-neutral-200"
                >
                  Close Showcase
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
