import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Trophy,
  Calendar,
  Layers,
  ArrowRight,
  CheckCircle,
  Handshake,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CollaborationProps {
  onSelectCategory?: (category: string) => void;
}

export const Collaboration: React.FC<CollaborationProps> = ({ onSelectCategory }) => {
  const { t } = useLanguage();

  const collabCards = [
    { key: 'brand', data: t.collaboration.cards.brand, id: 'brand-collabs' },
    { key: 'sponsorship', data: t.collaboration.cards.sponsorship, id: 'sponsorships' },
    { key: 'events', data: t.collaboration.cards.events, id: 'events' },
    { key: 'creative', data: t.collaboration.cards.creative, id: 'creative-partnerships' },
  ];

  const getCollabIcon = (id: string) => {
    switch (id) {
      case 'brand-collabs':
        return <Sparkles className="w-6 h-6 text-theme-accent" />;
      case 'sponsorships':
        return <Trophy className="w-6 h-6 text-theme-accent" />;
      case 'events':
        return <Calendar className="w-6 h-6 text-theme-accent" />;
      case 'creative-partnerships':
        return <Layers className="w-6 h-6 text-theme-accent" />;
      default:
        return <Handshake className="w-6 h-6 text-theme-accent" />;
    }
  };

  const handleSelectCard = (title: string) => {
    if (onSelectCategory) {
      onSelectCategory(title);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="collaboration" className="py-24 sm:py-32 bg-theme-surface/30 relative overflow-hidden border-t border-theme-border">
      {/* Background accents */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-theme-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-theme-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-theme-card border border-theme-border mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-theme-accent"></span>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-theme-accent font-semibold">
              {t.collaboration.badge}
            </span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-6xl text-theme-textPrimary uppercase tracking-tight mb-4">
            {t.collaboration.headline}
          </h2>

          <p className="text-base sm:text-lg text-theme-textSecondary max-w-2xl mx-auto">
            {t.collaboration.description}
          </p>
        </div>

        {/* 4 Collaboration Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {collabCards.map((item, idx: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => handleSelectCard(item.data.title)}
              className="relative p-5 sm:p-7 lg:p-9 rounded-2xl sm:rounded-3xl bg-theme-card border-2 border-theme-border hover:border-theme-accent transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-theme-card cursor-pointer flex flex-col justify-between"
            >
              {/* Header with icon & card number */}
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-theme-surface border border-theme-border flex items-center justify-center group-hover:border-theme-accent group-hover:shadow-theme-neon transition-all">
                    {getCollabIcon(item.id)}
                  </div>
                  <span className="text-xs font-mono font-bold text-theme-textSecondary/60 group-hover:text-theme-accent transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-theme-textPrimary uppercase tracking-wide group-hover:text-theme-accent transition-colors mb-2">
                  {item.data.title}
                </h3>

                <p className="text-xs font-mono text-theme-accent uppercase tracking-wider mb-3 sm:mb-4 font-semibold">
                  {item.data.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-theme-textSecondary leading-relaxed mb-6">
                  {item.data.desc}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2 pt-4 border-t border-theme-border mb-6">
                  {item.data.deliverables.map((deliv, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-theme-textSecondary">
                      <CheckCircle className="w-3.5 h-3.5 text-theme-accent shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card CTA */}
              <div className="pt-2 flex items-center justify-between text-xs font-heading font-bold uppercase tracking-wider text-theme-textPrimary group-hover:text-theme-accent transition-colors">
                <span>{t.collaboration.inquireBtn}</span>
                <div className="w-8 h-8 rounded-full bg-theme-surface border border-theme-border flex items-center justify-center group-hover:bg-theme-accent group-hover:text-theme-accentText group-hover:border-theme-accent transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Central Prominent CTA */}
        <div className="text-center px-4">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleSelectCard('General Inquiry')}
            className="group relative inline-flex items-center justify-center gap-3 px-6 sm:px-10 py-4 sm:py-5 rounded-full bg-theme-accent text-theme-accentText font-heading font-black text-xs sm:text-sm uppercase tracking-[0.15em] shadow-theme-neon hover:opacity-90 transition-all duration-300 cursor-pointer w-full sm:w-auto"
          >
            <span>{t.collaboration.mainCta}</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
          </motion.button>
          <p className="text-[11px] sm:text-xs text-theme-textSecondary mt-3 font-mono">
            {t.collaboration.ctaSubtext}
          </p>
        </div>
      </div>
    </section>
  );
};
