import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function OceanWaveTransition() {
  const { isWaving } = useTheme();

  return (
    <AnimatePresence>
      {isWaving && (
        <motion.div
          initial={{ y: '-100%' }}
          animate={{ y: '100%' }}
          exit={{ y: '100%' }}
          transition={{ duration: 1.15, ease: [0.45, 0, 0.15, 1] }}
          className="fixed inset-0 z-[999] pointer-events-none overflow-hidden flex flex-col justify-end"
        >
          {/* Aqua Blue Wave Gradient Sweep Body */}
          <div className="w-full h-[60vh] bg-gradient-to-b from-[#00E5FF]/90 via-[#00ACC1]/95 to-[#00838F]/95 backdrop-blur-md shadow-2xl flex flex-col justify-between">
            {/* Top Foam Wave Crest */}
            <svg
              className="w-full h-24 sm:h-36 text-white/40 fill-current transform -translate-y-full"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path d="M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,213.3C672,224,768,192,864,165.3C960,139,1056,117,1152,128C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
            </svg>

            {/* Submerged Wave Shimmer */}
            <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.4)_0%,transparent_70%)] opacity-60 animate-pulse" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
