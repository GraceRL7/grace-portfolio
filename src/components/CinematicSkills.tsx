import { motion } from 'framer-motion';
import {
  FaReact,
  FaPhp,
  FaWordpress,
  FaElementor,
  FaGithub,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaAws,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiFirebase,
  SiPostman,
  SiN8N,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';
import { Sparkles, Bot, Palette, Database } from 'lucide-react';
import { IconType } from 'react-icons';
import { useTheme } from '../context/ThemeContext';

type IconComponent = IconType | typeof Sparkles | React.FC<{ className?: string; style?: React.CSSProperties }>;

// Custom exact SVG logo for Claude (Anthropic Starburst)
const ClaudeLogo = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M12 2L13.8 8.2L19.5 5.5L15.8 10.8L22 12.5L15.8 14.2L19.5 19.5L13.8 16.8L12 23L10.2 16.8L4.5 19.5L8.2 14.2L2 12.5L8.2 10.8L4.5 5.5L10.2 8.2L12 2Z" />
  </svg>
);

interface SkillItem {
  name: string;
  icon: IconComponent;
  color?: string;
}

interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export default function CinematicSkills() {
  const { theme } = useTheme();
  const isBeach = theme === 'beach';

  const skillCategories: SkillCategory[] = [
    {
      category: 'FRONTEND',
      skills: [
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'JavaScript', icon: FaJsSquare, color: '#F7DF1E' },
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      ],
    },
    {
      category: 'BACKEND',
      skills: [
        { name: 'PHP', icon: FaPhp, color: '#777BB4' },
        { name: 'Python', icon: FaPython, color: '#3776AB' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'SQL Workbench', icon: Database, color: '#00758F' },
        { name: 'AWS', icon: FaAws, color: '#FF9900' },
        { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
        { name: 'REST APIs', icon: TbApi, color: isBeach ? '#1C6E8C' : '#FFFFFF' },
      ],
    },
    {
      category: 'TOOLS & AUTOMATION',
      skills: [
        { name: 'Claude', icon: ClaudeLogo, color: '#D97706' },
        { name: 'n8n', icon: SiN8N, color: '#FF6D5A' },
        { name: 'AI Automation', icon: Bot, color: '#10A37F' },
        { name: 'WordPress', icon: FaWordpress, color: '#21759B' },
        { name: 'Elementor', icon: FaElementor, color: '#92003B' },
        { name: 'GitHub', icon: FaGithub, color: isBeach ? '#1C242B' : '#FFFFFF' },
        { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
        { name: 'Canva', icon: Palette, color: '#00C4CC' },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`relative w-full min-h-screen py-16 sm:py-24 lg:py-32 flex flex-col justify-center px-4 sm:px-8 lg:px-12 border-t transition-colors duration-1000 z-20 ${
        isBeach
          ? 'bg-[#FAF6F0] text-[#1C242B] border-[#5C5349]/15'
          : 'bg-[#000000] text-[#FFFFFF] border-[#FFFFFF]/10'
      }`}
    >
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <div className={`w-2 h-2 rounded-full ${isBeach ? 'bg-[#1C6E8C]' : 'bg-[#FFFFFF]'}`} />
          <span className={`font-['Inter',sans-serif] text-[12px] sm:text-[14px] uppercase tracking-[0.25em] sm:tracking-[0.3em] ${
            isBeach ? 'text-[#7A4A21]' : 'text-[#BFBFBF]'
          }`}>
            03 / WHAT I KNOW
          </span>
        </div>

        {/* Section Heading */}
        <h2 className={`font-['Bebas_Neue',sans-serif] font-bold text-[36px] xs:text-[48px] sm:text-[72px] lg:text-[96px] tracking-[0.03em] sm:tracking-[0.05em] leading-none uppercase mb-8 sm:mb-12 ${
          isBeach ? 'text-[#1C242B]' : 'text-[#FFFFFF]'
        }`}>
          WHAT I KNOW
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl border backdrop-blur-[20px] transition-all duration-500 flex flex-col justify-start ${
                isBeach
                  ? 'bg-[#FFFFFF] border-[#7A4A21]/15 shadow-[0_10px_30px_rgba(90,82,74,0.08)] hover:border-[#1C6E8C]/40'
                  : 'bg-[#111111]/80 border-[#FFFFFF]/15 shadow-2xl hover:border-[#FFFFFF]/40'
              }`}
            >
              {/* Bebas Neue Heading with thin divider */}
              <h3 className={`font-['Bebas_Neue',sans-serif] text-[28px] font-normal tracking-[0.18em] uppercase border-b pb-[20px] mb-[28px] ${
                isBeach
                  ? 'text-[#1C6E8C] border-[#7A4A21]/15'
                  : 'text-[#FFFFFF] border-[#FFFFFF]/[0.08]'
              }`}>
                {cat.category}
              </h3>

              {/* Skill Chips */}
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className={`group inline-flex items-center gap-[10px] h-[48px] px-[18px] rounded-[14px] border text-[14px] font-medium transition-all duration-300 cursor-default shrink-0 ${
                        isBeach
                          ? 'bg-[#F3ECE1] border-[#7A4A21]/15 text-[#1C242B] hover:border-[#1C6E8C]/40 hover:bg-[#FAF6F0] hover:-translate-y-1'
                          : 'bg-[#000000] border-[#FFFFFF]/15 text-[#FFFFFF] hover:border-[#FFFFFF]/25 hover:bg-[#FFFFFF]/[0.03] hover:-translate-y-1'
                      }`}
                    >
                      <Icon
                        className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 shrink-0"
                        style={{ color: skill.color || undefined }}
                      />
                      <span className="text-[14px] font-medium tracking-wide">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
