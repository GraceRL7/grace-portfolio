import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { ArrowUpRight, Code2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';
import { projects } from '../data/resumeData';
const accentText = {
    accent: 'text-accent',
    sky: 'text-sky',
    gold: 'text-gold',
};
const accentBorder = {
    accent: 'border-accent/30',
    sky: 'border-sky/30',
    gold: 'border-gold/30',
};
export default function Projects() {
    return (_jsx("section", { id: "projects", className: "section-pad relative", children: _jsxs("div", { className: "mx-auto max-w-7xl", children: [_jsx(SectionHeading, { eyebrow: "Selected Work", title: "Projects", description: "Six real builds \u2014 from trial registration systems to live e-commerce admin portals." }), _jsx("div", { className: "grid md:grid-cols-2 gap-6", children: projects.map((p, i) => (_jsx(motion.div, { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-60px' }, transition: { duration: 0.6, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }, children: _jsxs(GlassCard, { glow: p.accent, className: "p-7 sm:p-8 h-full flex flex-col group", children: [_jsxs("div", { className: "flex items-start justify-between gap-3 mb-3", children: [_jsx("span", { className: `text-xs font-mono px-3 py-1 rounded-pill glass border ${accentBorder[p.accent]} ${accentText[p.accent]}`, children: p.tag }), p.link && (_jsx("a", { href: p.link, target: "_blank", rel: "noreferrer", className: "glass rounded-full p-2 text-ink-muted hover:text-accent transition-colors", "aria-label": `Visit ${p.title}`, children: _jsx(ArrowUpRight, { size: 16 }) }))] }), _jsx("h3", { className: "font-display text-2xl font-medium text-ink mb-1", children: p.title }), _jsx("p", { className: `text-sm font-medium mb-3 ${accentText[p.accent]}`, children: p.subtitle }), _jsx("p", { className: "text-sm text-ink-muted leading-relaxed mb-5", children: p.description }), _jsx("ul", { className: "space-y-2 mb-6 flex-1", children: p.points.map((pt) => (_jsxs("li", { className: "text-sm text-ink/75 leading-relaxed flex gap-2.5", children: [_jsx("span", { className: `mt-1.5 ${accentText[p.accent]}`, children: "\u00B7" }), _jsx("span", { children: pt })] }, pt))) }), _jsx("div", { className: "flex flex-wrap gap-2 pt-4 border-t border-white/10", children: p.stack.map((s) => (_jsxs("span", { className: "flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-pill glass text-ink-muted", children: [_jsx(Code2, { size: 11 }), s] }, s))) })] }) }, p.id))) })] }) }));
}
