import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="relative w-9 h-9 rounded-xl bg-theme-surface border border-theme-border flex items-center justify-center text-theme-textSecondary hover:text-theme-accent hover:border-theme-accent transition-all duration-300 cursor-pointer shadow-sm active:scale-95"
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-theme-accent transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-theme-accent transition-transform duration-300 rotate-0 hover:-rotate-12" />
      )}
    </button>
  );
};
