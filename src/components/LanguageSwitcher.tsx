import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selector"
      className="inline-flex items-center p-1 rounded-xl bg-theme-surface border border-theme-border text-xs font-mono font-bold"
    >
      <button
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        className={`px-2.5 py-1 rounded-lg transition-all duration-200 cursor-pointer ${
          language === 'en'
            ? 'bg-theme-accent text-theme-accentText shadow-sm'
            : 'text-theme-textSecondary hover:text-theme-textPrimary'
        }`}
      >
        EN
      </button>
      <span className="text-theme-borderLight px-0.5">|</span>
      <button
        onClick={() => setLanguage('hi')}
        aria-pressed={language === 'hi'}
        className={`px-2.5 py-1 rounded-lg transition-all duration-200 cursor-pointer ${
          language === 'hi'
            ? 'bg-theme-accent text-theme-accentText shadow-sm'
            : 'text-theme-textSecondary hover:text-theme-textPrimary'
        }`}
      >
        HI
      </button>
    </div>
  );
};
