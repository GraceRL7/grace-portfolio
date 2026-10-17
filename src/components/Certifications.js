import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';
import { certifications } from '../data/resumeData';
export default function Certifications() {
    return (_jsx("section", { id: "certifications", className: "section-pad relative", children: _jsxs("div", { className: "mx-auto max-w-7xl", children: [_jsx(SectionHeading, { eyebrow: "Verified", title: "Certifications", description: "Coursework and industry certifications spanning AI, cloud, automation, and core programming." }), _jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4", children: certifications.map((c, i) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-60px' }, transition: { duration: 0.45, delay: (i % 6) * 0.06 }, children: _jsx(GlassCard, { glow: "accent", className: "p-5 h-full", children: _jsxs("div", { className: "flex items-start gap-3", children: [_jsx(BadgeCheck, { size: 17, className: "text-accent mt-0.5 shrink-0" }), _jsxs("div", { children: [_jsx("h4", { className: "font-display text-sm font-medium text-ink leading-snug", children: c.title }), _jsx("p", { className: "text-xs text-ink-muted mt-1", children: c.issuer }), c.detail && (_jsx("p", { className: "text-xs text-sky mt-1 italic", children: c.detail })), _jsx("p", { className: "text-xs font-mono text-ink-faint mt-1.5", children: c.date })] })] }) }) }, c.title))) })] }) }));
}
