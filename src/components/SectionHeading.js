import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
export default function SectionHeading({ eyebrow, title, description, align = 'left', }) {
    return (_jsxs(motion.div, { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' }, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }, className: `mb-14 max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`, children: [_jsx("span", { className: "eyebrow", children: eyebrow }), _jsx("h2", { className: "mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-ink", children: title }), description && (_jsx("p", { className: "mt-4 text-ink-muted text-base sm:text-lg leading-relaxed", children: description }))] }));
}
