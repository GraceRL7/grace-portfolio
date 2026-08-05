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

type IconComponent = IconType | typeof Sparkles | React.FC<{ className?: string; style?: React.CSSProperties }>;

// Custom exact SVG logo for Claude (Anthropic Starburst)
const ClaudeLogo = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M12 2L13.8 8.2L19.5 5.5L15.8 10.8L22 12.5L15.8 14.2L19.5 19.5L13.8 16.8L12 23L10.2 16.8L4.5 19.5L8.2 14.2L2 12.5L8.2 10.8L4.5 5.5L10.2 8.2L12 2Z" />
  </svg>
);

// Exact Google Antigravity logo with full multi-color gradient mesh arc
const AntigravityLogo = ({ className }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <defs>
      <linearGradient id="antigravityGrad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#4285F4" />
        <stop offset="35%" stopColor="#34A853" />
        <stop offset="70%" stopColor="#FBBC05" />
        <stop offset="100%" stopColor="#EA4335" />
      </linearGradient>
    </defs>
    <path
      d="M3.5 18.5C6.5 7.5 17.5 7.5 20.5 18.5"
      stroke="url(#antigravityGrad)"
      strokeWidth="3.2"
      strokeLinecap="round"
    />
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
        { name: 'REST APIs', icon: TbApi, color: '#FFFFFF' },
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
        { name: 'GitHub', icon: FaGithub, color: '#FFFFFF' },
        { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
        { name: 'Canva', icon: Palette, color: '#00C4CC' },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative w-full min-h-screen py-32 bg-[#000000] text-[#FFFFFF] flex flex-col justify-center px-6 sm:px-12 border-t border-[#FFFFFF]/10 z-20"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 rounded-full bg-[#FFFFFF]" />
          <span className="font-['Inter',sans-serif] text-[14px] uppercase tracking-[0.3em] text-[#BFBFBF]">
            02 / SKILLS & TECHNOLOGIES
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="font-['Bebas_Neue',sans-serif] font-bold text-[48px] sm:text-[72px] lg:text-[96px] text-[#FFFFFF] tracking-[0.05em] leading-none uppercase mb-12">
          TECHNICAL EXPERTISE
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-[#111111]/80 border border-[#FFFFFF]/15 backdrop-blur-[20px] hover:border-[#FFFFFF]/40 transition-all duration-300 shadow-2xl flex flex-col justify-start"
            >
              {/* Bebas Neue Heading with thin divider */}
              <h3 className="font-['Bebas_Neue',sans-serif] text-[28px] font-normal tracking-[0.18em] uppercase text-[#FFFFFF] border-b border-[#FFFFFF]/[0.08] pb-[20px] mb-[28px]">
                {cat.category}
              </h3>

              {/* Skill Chips with Uniform Height & Padding */}
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="group inline-flex items-center gap-[10px] h-[48px] px-[18px] rounded-[14px] bg-[#000000] border border-[#FFFFFF]/15 text-[14px] font-medium text-[#FFFFFF] hover:border-[#FFFFFF]/25 hover:bg-[#FFFFFF]/[0.03] hover:-translate-y-1 transition-all duration-300 cursor-default shrink-0"
                    >
                      <Icon
                        className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 shrink-0"
                        style={{ color: skill.color || undefined }}
                      />
                      <span className="text-[14px] font-medium tracking-wide group-hover:text-white transition-colors">
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
