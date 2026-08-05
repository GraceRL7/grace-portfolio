import { motion } from 'framer-motion';
import { Code, Server, Wrench, Users, Globe, Bot, Palette } from 'lucide-react';
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
import { IconType } from 'react-icons';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';
import { skills } from '../data/resumeData';

type IconComponent = IconType | typeof Bot;

interface IconSkill {
  name: string;
  icon: IconComponent;
  color?: string;
}

const groupsWithIcons: {
  title: string;
  icon: typeof Code;
  glow: 'accent' | 'sky' | 'gold';
  items: IconSkill[];
}[] = [
  {
    title: 'Languages & Core',
    icon: Code,
    glow: 'accent',
    items: [
      { name: 'JavaScript', icon: FaJsSquare, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Python', icon: FaPython, color: '#3776AB' },
      { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
      { name: 'PHP', icon: FaPhp, color: '#777BB4' },
      { name: 'SQL (MySQL)', icon: SiMysql, color: '#4479A1' },
    ],
  },
  {
    title: 'Frontend & UI',
    icon: Globe,
    glow: 'sky',
    items: [
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'WordPress', icon: FaWordpress, color: '#21759B' },
      { name: 'Elementor', icon: FaElementor, color: '#92003B' },
    ],
  },
  {
    title: 'Backend & Automation',
    icon: Server,
    glow: 'gold',
    items: [
      { name: 'n8n', icon: SiN8N, color: '#FF6D5A' },
      { name: 'AI Automation', icon: Bot, color: '#10A37F' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'REST APIs', icon: TbApi, color: '#FFFFFF' },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    glow: 'accent',
    items: [
      { name: 'GitHub', icon: FaGithub, color: '#FFFFFF' },
      { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Canva', icon: Palette, color: '#00C4CC' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Toolkit"
          title="Skills"
          description="Technical range built across internships, freelance builds, and coursework."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
          {groupsWithIcons.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard glow={g.glow} className="p-6 h-full">
                <div className="glass rounded-2xl p-2.5 inline-flex text-accent mb-4">
                  <g.icon size={18} />
                </div>
                <h3 className="font-display font-medium text-ink mb-3">{g.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <span
                        key={item.name}
                        className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-pill glass text-ink-muted hover:text-white transition-colors"
                      >
                        <Icon style={{ color: item.color }} className="text-sm shrink-0" />
                        <span>{item.name}</span>
                      </span>
                    );
                  })}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <GlassCard className="p-7 sm:p-8" glow="sky">
            <div className="flex items-center gap-2 mb-4">
              <Users size={18} className="text-accent" />
              <h3 className="font-display font-medium text-ink">Soft Skills & Languages</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((s) => (
                  <span key={s} className="text-xs px-3 py-1.5 rounded-pill glass text-ink/80">
                    {s}
                  </span>
                ))}
              </div>
              <div className="space-y-2">
                {skills.spoken.map((s) => (
                  <div key={s.lang} className="flex items-center justify-between text-sm">
                    <span className="text-ink/80">{s.lang}</span>
                    <span className="font-mono text-xs text-accent">{s.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
