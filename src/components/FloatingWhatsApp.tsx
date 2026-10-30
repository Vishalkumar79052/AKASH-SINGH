import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { WhatsAppIcon } from './SocialIcons';
import { useLanguage } from '../context/LanguageContext';

export const FloatingWhatsApp: React.FC = () => {
  const { personal } = portfolioData;
  const { t } = useLanguage();

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 left-4 sm:left-6 z-40 flex items-center gap-2 group"
    >
      <a
        href={personal.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat with Akash Singh"
        title="Direct WhatsApp Chat: +91 8954625571"
        className="relative flex items-center gap-2.5 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-full bg-[#25D366] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        {/* Pulsing online indicator */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>

        <WhatsAppIcon className="w-5 h-5 text-white" />
        <span className="hidden sm:inline font-bold tracking-wide">
          {t.socials.chatWhatsapp}
        </span>
      </a>
    </aside>
  );
};
