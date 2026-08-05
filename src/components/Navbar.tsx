import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { navLinks, profile } from '../data/resumeData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* ── Circular floating navbar ── */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50"
      >
        <nav
          className={`
            flex items-center gap-1 px-2 py-2
            rounded-full
            bg-white/[0.06] backdrop-blur-2xl
            border border-white/[0.12]
            shadow-[0_8px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]
            transition-all duration-500
            ${scrolled ? 'shadow-[0_16px_60px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.1)]' : ''}
          `}
        >
          {/* Logo dot */}
          <a
            href="#hero"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-accent text-void font-display font-bold text-sm shrink-0 hover:scale-110 transition-transform"
          >
            G
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3.5 py-2 text-[13px] text-ink-muted hover:text-ink rounded-full hover:bg-white/[0.08] transition-all duration-200 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Resume button */}
          <a
            href={profile.resumeFile}
            download
            className="hidden lg:flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium text-void bg-accent rounded-full hover:brightness-110 transition-all whitespace-nowrap ml-1"
          >
            <Download size={13} />
            Resume
          </a>

          {/* Mobile menu trigger */}
          <button
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-white/10 text-ink transition-colors"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </nav>
      </motion.header>

      {/* ── Mobile fullscreen overlay ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-7 lg:hidden"
          >
            <button
              className="absolute top-6 right-6 text-ink hover:text-accent transition-colors"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X size={26} />
            </button>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="font-display text-2xl text-ink hover:text-accent transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href={profile.resumeFile}
              download
              className="flex items-center gap-2 px-6 py-3 mt-4 text-void bg-accent rounded-full font-medium"
            >
              <Download size={16} /> Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
