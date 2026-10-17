import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';
import { leadership } from '../data/resumeData';
export default function Leadership() {
    return (_jsx("section", { id: "leadership", className: "section-pad relative", children: _jsxs("div", { className: "mx-auto max-w-7xl", children: [_jsx(SectionHeading, { eyebrow: "Responsibility", title: "Leadership & Responsibility", description: "Positions of trust and responsibility across academics and community." }), _jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: leadership.map((l, i) => (_jsx(motion.div, { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-60px' }, transition: { duration: 0.5, delay: (i % 3) * 0.08 }, children: _jsxs(GlassCard, { glow: "sky", className: "p-6 h-full", children: [_jsx("div", { className: "glass rounded-2xl p-2.5 inline-flex text-sky mb-4", children: _jsx(Crown, { size: 16 }) }), _jsx("h4", { className: "font-display text-ink font-medium leading-snug", children: l.title }), _jsx("p", { className: "text-sm text-ink-muted mt-2", children: l.org })] }) }, l.title))) })] }) }));
}
