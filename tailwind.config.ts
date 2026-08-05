import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#000000',
          soft: '#060608',
          panel: '#0A0A0E',
        },
        accent: {
          DEFAULT: '#4F9CFF',
          dim: '#3B82D9',
          glow: 'rgba(79,156,255,0.35)',
        },
        pink: {
          DEFAULT: '#FF6B9D',
          dim: '#E5597F',
          glow: 'rgba(255,107,157,0.30)',
        },
        sky: {
          DEFAULT: '#4F9CFF',
        },
        gold: {
          DEFAULT: '#FF6B9D',
        },
        ink: {
          DEFAULT: '#FFFFFF',
          muted: '#A0A0B0',
          faint: '#6E6E7A',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
        glass: '28px',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)',
        'glass-lg': '0 24px 64px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)',
        glow: '0 0 40px rgba(79,156,255,0.25)',
      },
      borderRadius: {
        glass: '28px',
        pill: '999px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
