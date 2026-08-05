import { motion } from 'framer-motion';
import { ReactNode, useRef, useState } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glow?: 'accent' | 'sky' | 'gold' | 'none';
  as?: 'div' | 'article';
  interactive?: boolean;
}

const glowColor: Record<string, string> = {
  accent: 'rgba(79,156,255,0.18)',
  sky: 'rgba(79,156,255,0.14)',
  gold: 'rgba(255,107,157,0.16)',
  none: 'transparent',
};

/**
 * The site's core "Liquid Glass" surface. Tracks pointer position to render
 * a soft specular highlight that follows the cursor, mimicking the way
 * Apple's Liquid Glass reacts to light.
 */
export default function GlassCard({
  children,
  className = '',
  glow = 'none',
  interactive = true,
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!interactive || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`glass rounded-glass relative overflow-hidden ${className}`}
      style={{
        backgroundImage: interactive
          ? `radial-gradient(circle at ${pos.x}% ${pos.y}%, ${glowColor[glow]}, transparent 60%)`
          : undefined,
      }}
      whileHover={interactive ? { y: -4 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
    >
      {children}
    </motion.div>
  );
}
