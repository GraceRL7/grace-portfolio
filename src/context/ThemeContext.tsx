import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ThemeMode = 'night' | 'beach';

interface ThemeContextType {
  theme: ThemeMode;
  isWaving: boolean;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('portfolio_theme') as ThemeMode;
      if (savedTheme === 'night' || savedTheme === 'beach') {
        return savedTheme;
      }
    }
    return 'night';
  });

  const [isWaving, setIsWaving] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('theme-night', 'theme-beach');
    root.classList.add(`theme-${theme}`);
    root.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    if (isWaving) return;
    setIsWaving(true);

    // Delay the theme state switch by 350ms so the ocean waves sweep down first
    setTimeout(() => {
      setThemeState((prev) => (prev === 'night' ? 'beach' : 'night'));
    }, 350);

    // Clear wave overlay after animation completes (1200ms)
    setTimeout(() => {
      setIsWaving(false);
    }, 1200);
  };

  const setTheme = (newTheme: ThemeMode) => {
    if (newTheme === theme) return;
    setIsWaving(true);
    setTimeout(() => {
      setThemeState(newTheme);
    }, 350);
    setTimeout(() => {
      setIsWaving(false);
    }, 1200);
  };

  return (
    <ThemeContext.Provider value={{ theme, isWaving, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
