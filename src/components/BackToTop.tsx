import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const checkScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label={t.footer.backToTop}
      title={t.footer.backToTop}
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-2xl bg-theme-surface/90 backdrop-blur-md border border-theme-border text-theme-textPrimary hover:bg-theme-accent hover:text-theme-accentText hover:border-theme-accent transition-all duration-300 shadow-theme-card flex items-center justify-center cursor-pointer group active:scale-95 animate-fade-in"
    >
      <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-1" />
    </button>
  );
};
