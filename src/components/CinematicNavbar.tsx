import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Moon } from 'lucide-react';
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

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 h-[70px] sm:h-[80px] flex items-center transition-all duration-700 ${
        scrolled || menuOpen
          ? isBeach
            ? 'bg-[#FAF6F0]/95 backdrop-blur-[20px] border-b border-[#5C5349]/15 shadow-md'
            : 'bg-[#000000]/95 backdrop-blur-[20px] border-b border-[#FFFFFF]/10 shadow-2xl'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* MOBILE / TABLET LOGO/BRAND BRANDING */}
        <a
          href="#hero"
          className={`font-['Bebas_Neue',sans-serif] text-xl tracking-[0.15em] transition-colors ${
            isBeach ? 'text-[#1C242B]' : 'text-[#FFFFFF]'
          }`}
        >
          GRL
        </a>

        {/* DESKTOP CENTERED NAVIGATION LINKS */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-9 mx-auto">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (window.innerWidth >= 1024) {
                    const el = document.getElementById(link.id);
                    if (el) {
                      e.preventDefault();
                      el.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
                    }
                  }
                }}
                className={`font-['Inter',sans-serif] text-[12px] xl:text-[13px] font-semibold tracking-[0.15em] transition-all duration-300 relative py-1 ${
                  isActive
                    ? isBeach
                      ? 'text-[#1C6E8C] font-bold'
                      : 'text-[#FFFFFF] opacity-100'
                    : isBeach
                      ? 'text-[#5C5349] hover:text-[#1C6E8C]'
                      : 'text-[#FFFFFF] opacity-80 hover:opacity-100'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeUnderline"
                    className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${
                      isBeach
                        ? 'bg-[#1C6E8C] shadow-[0_0_8px_rgba(28,110,140,0.6)]'
                        : 'bg-[#FFFFFF] shadow-[0_0_8px_rgba(255,255,255,0.8)]'
                    }`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* RIGHT ALIGNED RESUME BUTTON & THEME TOGGLE ICON */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className={`p-2 rounded-full border transition-all duration-300 cursor-pointer ${
              isBeach
                ? 'border-[#7A4A21]/30 bg-[#F3ECE1] text-[#7A4A21] hover:bg-[#1C6E8C] hover:text-white'
                : 'border-white/20 bg-white/10 text-white hover:bg-white hover:text-black'
            }`}
          >
            {isBeach ? <Moon size={16} /> : <Sparkles size={16} />}
          </button>

          <a
            href={profile.resumeFile}
            download
            className="galaxy-btn group !px-4 !py-2 !text-[10px]"
          >
            <span className="galaxy-spark" />
            <span className="galaxy-backdrop" />
            <span className="galaxy-text">
              <span>RESUME ↗</span>
            </span>
          </a>
        </div>

        {/* MOBILE / TABLET MENU TOGGLE */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className={`p-2 rounded-full border transition-colors ${
              isBeach ? 'border-[#7A4A21]/30 text-[#7A4A21]' : 'border-white/20 text-white'
            }`}
          >
            {isBeach ? <Moon size={20} /> : <Sparkles size={20} />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`p-2 ${isBeach ? 'text-[#1C242B]' : 'text-[#FFFFFF]'}`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden absolute top-[70px] sm:top-[80px] left-0 right-0 px-6 py-6 w-full shadow-2xl overflow-y-auto max-h-[calc(100vh-80px)] backdrop-blur-[24px] border-b transition-colors duration-500 ${
              isBeach
                ? 'bg-[#FAF6F0]/98 border-[#5C5349]/20 text-[#1C242B]'
                : 'bg-[#000000]/98 border-[#FFFFFF]/15 text-[#FFFFFF]'
            }`}
          >
            <div className="flex flex-col gap-3 max-w-md mx-auto">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`font-['Inter',sans-serif] text-sm font-medium tracking-[0.2em] py-2.5 px-3 rounded-lg border-b transition-colors flex items-center justify-between ${
                      isBeach
                        ? isActive
                          ? 'text-[#1C6E8C] bg-[#1C6E8C]/10 border-[#1C6E8C]/20 font-bold'
                          : 'text-[#5C5349] border-[#5C5349]/10 hover:text-[#1C242B]'
                        : isActive
                          ? 'text-[#FFFFFF] bg-[#FFFFFF]/10 border-[#FFFFFF]/20 font-semibold'
                          : 'text-[#BFBFBF] border-[#FFFFFF]/10 hover:text-[#FFFFFF]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className={`w-1.5 h-1.5 rounded-full ${isBeach ? 'bg-[#1C6E8C]' : 'bg-[#FFFFFF]'}`} />
                    )}
                  </a>
                );
              })}

              <a
                href={profile.resumeFile}
                download
                onClick={() => setMenuOpen(false)}
                className={`mt-4 w-full py-3.5 rounded-full text-center font-['Inter',sans-serif] font-bold text-xs tracking-[0.2em] shadow-lg active:scale-95 transition-transform ${
                  isBeach ? 'bg-[#1C6E8C] text-white' : 'bg-[#FFFFFF] text-[#000000]'
                }`}
              >
                DOWNLOAD RESUME
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
