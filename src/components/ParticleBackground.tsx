import { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function ParticleBackground() {
  // Generate 150 small white dust particles (1px - 3px, opacity 5% - 20%)
  const particles = useMemo(() => {
    return Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1, // 1px - 3px
      x: Math.random() * 100, // 0 - 100vw
      y: Math.random() * 100, // 0 - 100vh
      opacity: Math.random() * 0.15 + 0.05, // 5% - 20% opacity
      duration: Math.random() * 20 + 20, // 20s - 40s slow drift
      dx: (Math.random() - 0.5) * 60, // random horizontal drift
      dy: (Math.random() - 0.5) * 60, // random vertical drift
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            x: `${p.x}vw`,
            y: `${p.y}vh`,
            opacity: p.opacity,
          }}
          animate={{
            x: [`${p.x}vw`, `${p.x + p.dx / 10}vw`, `${p.x}vw`],
            y: [`${p.y}vh`, `${p.y + p.dy / 10}vh`, `${p.y}vh`],
            opacity: [p.opacity, p.opacity * 1.5, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
          className="absolute rounded-full bg-[#FFFFFF]"
        />
      ))}
    </div>
  );
}
