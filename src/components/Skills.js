import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Code, Server, Wrench, Users, Globe, Bot, Palette } from 'lucide-react';
import { FaReact, FaPhp, FaWordpress, FaElementor, FaGithub, FaPython, FaHtml5, FaCss3Alt, FaJsSquare, } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMysql, SiFirebase, SiPostman, SiN8N, } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';
import { skills } from '../data/resumeData';
const groupsWithIcons = [
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
    return (_jsx("section", { id: "skills", className: "section-pad relative", children: _jsxs("div", { className: "mx-auto max-w-7xl", children: [_jsx(SectionHeading, { eyebrow: "Toolkit", title: "Skills", description: "Technical range built across internships, freelance builds, and coursework." }), _jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6", children: groupsWithIcons.map((g, i) => (_jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-60px' }, transition: { duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }, children: _jsxs(GlassCard, { glow: g.glow, className: "p-6 h-full", children: [_jsx("div", { className: "glass rounded-2xl p-2.5 inline-flex text-accent mb-4", children: _jsx(g.icon, { size: 18 }) }), _jsx("h3", { className: "font-display font-medium text-ink mb-3", children: g.title }), _jsx("div", { className: "flex flex-wrap gap-2", children: g.items.map((item) => {
                                        const Icon = item.icon;
                                        return (_jsxs("span", { className: "inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-pill glass text-ink-muted hover:text-white transition-colors", children: [_jsx(Icon, { style: { color: item.color }, className: "text-sm shrink-0" }), _jsx("span", { children: item.name })] }, item.name));
                                    }) })] }) }, g.title))) }), _jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-60px' }, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }, children: _jsxs(GlassCard, { className: "p-7 sm:p-8", glow: "sky", children: [_jsxs("div", { className: "flex items-center gap-2 mb-4", children: [_jsx(Users, { size: 18, className: "text-accent" }), _jsx("h3", { className: "font-display font-medium text-ink", children: "Soft Skills & Languages" })] }), _jsxs("div", { className: "grid sm:grid-cols-2 gap-6", children: [_jsx("div", { className: "flex flex-wrap gap-2", children: skills.soft.map((s) => (_jsx("span", { className: "text-xs px-3 py-1.5 rounded-pill glass text-ink/80", children: s }, s))) }), _jsx("div", { className: "space-y-2", children: skills.spoken.map((s) => (_jsxs("div", { className: "flex items-center justify-between text-sm", children: [_jsx("span", { className: "text-ink/80", children: s.lang }), _jsx("span", { className: "font-mono text-xs text-accent", children: s.level })] }, s.lang))) })] })] }) })] }) }));
}
