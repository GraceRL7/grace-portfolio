import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Moon, Download } from 'lucide-react';
import { profile } from '../data/cinematicProfile';
import { useTheme } from '../context/ThemeContext';
export default function CinematicNavbar() {
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
            const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'certifications', 'hobbies', 'contact'];
            const scrollPos = window.scrollY + 200;
            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPos >= top && scrollPos < top + height) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    // Prevent scroll when mobile sidebar is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);
    const navLinks = [
        { name: 'HOME', href: '#hero', id: 'hero' },
        { name: 'ABOUT', href: '#about', id: 'about' },
        { name: 'EXPERIENCE', href: '#experience', id: 'experience' },
        { name: 'SKILLS', href: '#skills', id: 'skills' },
        { name: 'PROJECTS', href: '#projects', id: 'projects' },
        { name: 'CERTIFICATIONS', href: '#certifications', id: 'certifications' },
        { name: 'HOBBIES', href: '#hobbies', id: 'hobbies' },
        { name: 'CONTACT', href: '#contact', id: 'contact' },
    ];
    const isBeach = theme === 'beach';
    return (_jsxs(_Fragment, { children: [_jsx(motion.header, { initial: { y: -80, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }, className: `fixed top-0 left-0 right-0 z-40 h-[70px] sm:h-[80px] flex items-center transition-all duration-700 ${scrolled || menuOpen
                    ? isBeach
                        ? 'bg-[#FAF6F0]/95 backdrop-blur-[20px] border-b border-[#5C5349]/15 shadow-md'
                        : 'bg-[#000000]/95 backdrop-blur-[20px] border-b border-[#FFFFFF]/10 shadow-2xl'
                    : 'bg-transparent border-b border-transparent'}`, children: _jsxs("div", { className: "w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between", children: [_jsx("a", { href: "#hero", className: `font-['Bebas_Neue',sans-serif] text-2xl tracking-[0.15em] transition-colors ${isBeach ? 'text-[#1C242B]' : 'text-[#FFFFFF]'}`, children: "GRL" }), _jsx("nav", { className: "hidden lg:flex items-center gap-6 xl:gap-9 mx-auto", children: navLinks.map((link) => {
                                const isActive = activeSection === link.id;
                                return (_jsxs("a", { href: link.href, onClick: (e) => {
                                        const el = document.getElementById(link.id);
                                        if (el) {
                                            e.preventDefault();
                                            el.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
                                        }
                                    }, className: `font-['Inter',sans-serif] text-[12px] xl:text-[13px] font-semibold tracking-[0.15em] transition-all duration-300 relative py-1 ${isActive
                                        ? isBeach
                                            ? 'text-[#1C6E8C] font-bold'
                                            : 'text-[#FFFFFF] opacity-100'
                                        : isBeach
                                            ? 'text-[#5C5349] hover:text-[#1C6E8C]'
                                            : 'text-[#FFFFFF] opacity-80 hover:opacity-100'}`, children: [link.name, isActive && (_jsx(motion.span, { layoutId: "activeUnderline", className: `absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${isBeach
                                                ? 'bg-[#1C6E8C] shadow-[0_0_8px_rgba(28,110,140,0.6)]'
                                                : 'bg-[#FFFFFF] shadow-[0_0_8px_rgba(255,255,255,0.8)]'}`, transition: { type: 'spring', stiffness: 380, damping: 30 } }))] }, link.name));
                            }) }), _jsxs("div", { className: "hidden lg:flex items-center gap-3", children: [_jsx("button", { onClick: toggleTheme, "aria-label": "Toggle Theme", className: `p-2 rounded-full border transition-all duration-300 cursor-pointer ${isBeach
                                        ? 'border-[#7A4A21]/30 bg-[#F3ECE1] text-[#7A4A21] hover:bg-[#1C6E8C] hover:text-white'
                                        : 'border-white/20 bg-white/10 text-white hover:bg-white hover:text-black'}`, children: isBeach ? _jsx(Moon, { size: 16 }) : _jsx(Sparkles, { size: 16 }) }), _jsx("a", { href: profile.resumeFile, download: true, className: `inline-flex items-center justify-center gap-2 h-9 px-4 rounded-full font-['Inter',sans-serif] font-bold text-[10px] tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer ${isBeach
                                        ? 'bg-[#FAF8F5] text-[#00838F] hover:bg-white border border-[#00838F]/40 shadow-sm'
                                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/30 backdrop-blur-md'}`, children: _jsx("span", { children: "RESUME" }) })] }), _jsxs("div", { className: "flex items-center gap-3 lg:hidden", children: [_jsx("button", { onClick: toggleTheme, "aria-label": "Toggle Theme", className: `p-2 rounded-full border transition-colors ${isBeach ? 'border-[#7A4A21]/30 text-[#7A4A21] bg-[#F3ECE1]' : 'border-white/20 text-white bg-white/10'}`, children: isBeach ? _jsx(Moon, { size: 18 }) : _jsx(Sparkles, { size: 18 }) }), _jsx("button", { onClick: () => setMenuOpen(!menuOpen), className: `p-2 rounded-lg border transition-all cursor-pointer ${isBeach
                                        ? 'border-[#7A4A21]/30 text-[#1C242B] hover:bg-[#1C6E8C]/10'
                                        : 'border-white/20 text-white hover:bg-white/10'}`, "aria-label": "Toggle Mobile Sidebar Menu", children: _jsx(Menu, { size: 22 }) })] })] }) }), _jsx(AnimatePresence, { children: menuOpen && (_jsxs(_Fragment, { children: [_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.3 }, onClick: () => setMenuOpen(false), className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden" }), _jsxs(motion.aside, { initial: { x: '100%' }, animate: { x: 0 }, exit: { x: '100%' }, transition: { type: 'spring', damping: 25, stiffness: 220 }, className: `fixed top-0 right-0 bottom-0 z-50 w-[280px] sm:w-[320px] h-full shadow-2xl flex flex-col justify-between p-6 overflow-y-auto lg:hidden backdrop-blur-2xl transition-colors duration-500 ${isBeach
                                ? 'bg-[#FAF8F5] text-[#1C242B] border-l border-[#5C5349]/20'
                                : 'bg-[#0A0A0E] text-white border-l border-white/15'}`, children: [_jsxs("div", { className: "flex items-center justify-between pb-6 border-b border-current/10", children: [_jsx("a", { href: "#hero", onClick: () => setMenuOpen(false), className: "font-['Bebas_Neue',sans-serif] text-2xl tracking-[0.15em]", children: "GRL" }), _jsx("button", { onClick: () => setMenuOpen(false), className: `p-2 rounded-full border transition-colors cursor-pointer ${isBeach ? 'border-[#7A4A21]/30 text-[#1C242B] hover:bg-black/5' : 'border-white/20 text-white hover:bg-white/10'}`, "aria-label": "Close sidebar", children: _jsx(X, { size: 20 }) })] }), _jsx("nav", { className: "flex flex-col gap-2 py-6 my-auto", children: navLinks.map((link, idx) => {
                                        const isActive = activeSection === link.id;
                                        return (_jsxs("a", { href: link.href, onClick: () => setMenuOpen(false), className: `font-['Inter',sans-serif] text-sm font-semibold tracking-[0.2em] py-3 px-4 rounded-xl transition-all flex items-center justify-between ${isBeach
                                                ? isActive
                                                    ? 'text-[#1C6E8C] bg-[#1C6E8C]/15 font-bold shadow-sm'
                                                    : 'text-[#5C5349] hover:text-[#1C242B] hover:bg-black/5'
                                                : isActive
                                                    ? 'text-white bg-white/15 font-bold shadow-sm'
                                                    : 'text-[#BFBFBF] hover:text-white hover:bg-white/5'}`, children: [_jsxs("span", { className: "flex items-center gap-3", children: [_jsxs("span", { className: "text-[10px] font-mono opacity-50", children: ["0", idx + 1] }), _jsx("span", { children: link.name })] }), isActive && (_jsx("span", { className: `w-2 h-2 rounded-full ${isBeach ? 'bg-[#1C6E8C]' : 'bg-white'}` }))] }, link.name));
                                    }) }), _jsx("div", { className: "pt-6 border-t border-current/10 flex flex-col gap-3", children: _jsxs("a", { href: profile.resumeFile, download: true, onClick: () => setMenuOpen(false), className: `w-full h-11 rounded-xl flex items-center justify-center gap-2 font-['Inter',sans-serif] font-bold text-xs tracking-[0.15em] uppercase shadow-md active:scale-95 transition-all ${isBeach
                                            ? 'bg-[#00838F] text-white hover:bg-[#00ACC1]'
                                            : 'bg-white text-black hover:bg-neutral-200'}`, children: [_jsx(Download, { size: 15 }), _jsx("span", { children: "DOWNLOAD RESUME" })] }) })] })] })) })] }));
}
