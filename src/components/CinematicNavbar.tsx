import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { profile } from '../data/cinematicProfile';

export default function CinematicNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'skills', 'projects', 'automation', 'experience', 'contact'];
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
    { name: 'SKILLS', href: '#skills', id: 'skills' },
    { name: 'PROJECTS', href: '#projects', id: 'projects' },
    { name: 'AI AUTOMATION', href: '#automation', id: 'automation' },
    { name: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 h-[80px] flex items-center transition-all duration-500 ${
        scrolled
          ? 'bg-[#000000]/80 backdrop-blur-[20px] border-b border-[#FFFFFF]/10 shadow-2xl'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 flex items-center justify-between">
        <div className="w-20 hidden md:block" />

        {/* CENTERED NAVIGATION LINKS */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 mx-auto">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`font-['Inter',sans-serif] text-[13px] lg:text-[14px] font-medium tracking-[0.2em] transition-colors duration-300 relative py-1 ${
                  isActive ? 'text-[#FFFFFF]' : 'text-[#BFBFBF] hover:text-[#FFFFFF]'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FFFFFF] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* RIGHT ALIGNED RESUME BUTTON */}
        <div className="hidden md:flex items-center justify-end">
          <a
            href={profile.resumeFile}
            download
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#FFFFFF]/30 text-[14px] font-['Inter',sans-serif] font-medium tracking-[0.2em] text-[#FFFFFF] transition-all duration-300 hover:bg-[#FFFFFF] hover:text-[#000000] hover:scale-[1.03]"
          >
            <span>RESUME</span>
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#FFFFFF] p-2 ml-auto"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#000000]/95 backdrop-blur-[20px] border-b border-[#FFFFFF]/10 px-6 py-8 w-full"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-['Inter',sans-serif] text-sm font-medium tracking-[0.2em] text-[#BFBFBF] hover:text-[#FFFFFF] py-2 border-b border-[#FFFFFF]/10"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={profile.resumeFile}
                download
                onClick={() => setMenuOpen(false)}
                className="mt-4 w-full py-3 rounded-full bg-[#FFFFFF] text-[#000000] text-center font-['Inter',sans-serif] font-bold text-xs tracking-[0.2em]"
              >
                RESUME
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
