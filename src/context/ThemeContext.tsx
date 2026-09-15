import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ThemeMode = 'night' | 'beach';

interface ThemeContextType {
  theme: ThemeMode;
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

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('theme-night', 'theme-beach');
    root.classList.add(`theme-${theme}`);
    root.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'night' ? 'beach' : 'night'));
  };

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
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
