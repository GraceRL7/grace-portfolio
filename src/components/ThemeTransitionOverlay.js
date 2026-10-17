import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
export default function ThemeTransitionOverlay() {
    const { isWaving, transitionDirection } = useTheme();
    // Color Palettes matching exact prompt specifications
    // Night -> Beach: Indigo -> Ocean Blue -> Mid Blue -> Bright Cyan -> Aqua -> Beach Sand/Ivory
    // Beach -> Night: Beach Sand/Ivory -> Aqua -> Bright Cyan -> Mid Blue -> Ocean Blue -> Indigo -> Black
    const waveLayers = useMemo(() => {
        if (transitionDirection === 'night-to-beach') {
            return [
                { color: '#2B2385', delay: 0 }, // Deep Ocean Indigo
                { color: '#3064B1', delay: 0.08 }, // Ocean Blue
                { color: '#3291D5', delay: 0.16 }, // Ocean Mid
                { color: '#29B9ED', delay: 0.24 }, // Bright Cyan
                { color: '#4FE6F6', delay: 0.32 }, // Ocean Aqua
                { color: '#FAF9F4', delay: 0.40 }, // Beach Sand / Ivory
            ];
        }
        else {
            return [
                { color: '#FAF9F4', delay: 0 }, // Beach Sand / Ivory
                { color: '#4FE6F6', delay: 0.08 }, // Ocean Aqua
                { color: '#29B9ED', delay: 0.16 }, // Bright Cyan
                { color: '#3291D5', delay: 0.24 }, // Ocean Mid
                { color: '#3064B1', delay: 0.32 }, // Ocean Blue
                { color: '#2B2385', delay: 0.40 }, // Deep Ocean Indigo
                { color: '#000000', delay: 0.48 }, // Pitch Black
            ];
        }
    }, [transitionDirection]);
    // Text title characters for subtle "THE MAGIC" animation
    const titleText = "THE MAGIC";
    const titleChars = useMemo(() => titleText.split(''), []);
    return (_jsx(AnimatePresence, { children: isWaving && (_jsxs("div", { className: "fixed inset-0 w-screen h-screen z-[9999] pointer-events-auto overflow-hidden select-none", "aria-hidden": "true", children: [waveLayers.map((layer, index) => (_jsx(motion.div, { initial: { y: '-105%' }, animate: { y: '105%' }, exit: { y: '105%' }, transition: {
                        duration: 1.15,
                        delay: layer.delay,
                        ease: [0.4, 0, 0.2, 1],
                    }, style: { backgroundColor: layer.color }, className: "absolute inset-0 w-full h-full flex flex-col justify-end shadow-2xl", children: _jsx("div", { className: "w-full h-24 sm:h-36 lg:h-44 shrink-0 transform -translate-y-[99%] pointer-events-none", children: _jsx("svg", { className: "w-full h-full fill-current", style: { color: layer.color }, viewBox: "0 0 1440 320", preserveAspectRatio: "none", children: _jsx("path", { d: "M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,213.3C672,224,768,192,864,165.3C960,139,1056,117,1152,128C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" }) }) }) }, `${transitionDirection}-wave-${index}`))), _jsx("div", { className: "absolute inset-0 z-[10000] flex items-center justify-center pointer-events-none", children: _jsx(motion.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 1.05 }, transition: { duration: 0.4, delay: 0.2 }, className: "flex items-center gap-1 sm:gap-2 px-6 py-3 rounded-full bg-black/40 backdrop-blur-md border border-white/20 shadow-2xl", children: titleChars.map((char, charIdx) => (_jsx(motion.span, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: {
                                duration: 0.3,
                                delay: 0.2 + charIdx * 0.04,
                            }, className: "font-['Antonio',sans-serif] font-bold text-sm sm:text-base tracking-[0.25em] text-white uppercase inline-block", children: char === ' ' ? '\u00A0' : char }, `magic-char-${charIdx}`))) }) })] })) }));
}
