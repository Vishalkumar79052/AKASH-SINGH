import React from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  Trophy,
  Users,
  Briefcase,
  Flame,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { personal } = portfolioData;
  const { t } = useLanguage();

  const getCardIcon = (key: string) => {
    switch (key) {
      case 'journey':
        return <Compass className="w-5 h-5 text-theme-accent" />;
      case 'sports':
        return <Trophy className="w-5 h-5 text-theme-accent" />;
      case 'community':
        return <Users className="w-5 h-5 text-theme-accent" />;
      case 'collab':
        return <Briefcase className="w-5 h-5 text-theme-accent" />;
      default:
        return <Flame className="w-5 h-5 text-theme-accent" />;
    }
  };

  const scrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cards = [
    { key: 'journey', data: t.about.highlightCards.journey },
    { key: 'sports', data: t.about.highlightCards.sports },
    { key: 'community', data: t.about.highlightCards.community },
    { key: 'collab', data: t.about.highlightCards.collab },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-theme-surface/60 relative overflow-hidden border-t border-theme-border">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-theme-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-theme-card border border-theme-border mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-theme-accent"></span>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-theme-accent font-semibold">
              {t.about.badge}
            </span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-theme-textPrimary uppercase tracking-tight mb-4">
            {t.about.headline}
          </h2>
          <p className="text-base sm:text-lg text-theme-textSecondary leading-relaxed">
            {t.about.description}
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Profile Photograph */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl overflow-hidden border-2 border-theme-border bg-theme-card group shadow-theme-card">
              {/* Corner Accents */}
              <div className="absolute top-4 left-4 z-20 w-3 h-3 border-t-2 border-l-2 border-theme-accent"></div>
              <div className="absolute top-4 right-4 z-20 w-3 h-3 border-t-2 border-r-2 border-theme-accent"></div>
              <div className="absolute bottom-4 left-4 z-20 w-3 h-3 border-b-2 border-l-2 border-theme-accent"></div>
              <div className="absolute bottom-4 right-4 z-20 w-3 h-3 border-b-2 border-r-2 border-theme-accent"></div>

              {/* Portrait Photo */}
              <div className="aspect-[3/4] w-full overflow-hidden relative">
                <img
                  src={personal.profileImage}
                  alt="Akash Singh Profile"
                  className="w-full h-full object-cover object-[center_12%] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-theme-bg via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Overlay Badge at bottom of photo */}
              <div className="absolute bottom-4 inset-x-4 z-20 p-4 rounded-2xl bg-theme-surface/90 backdrop-blur-md border border-theme-border flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-black text-theme-textPrimary text-base uppercase tracking-wider">
                      Akash Singh
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-theme-accent"></span>
                  </div>
                  <p className="text-xs text-theme-accent font-mono mt-0.5 font-medium">
                    {t.about.athleteTag}
                  </p>
                </div>
                <div className="w-9 h-9 rounded-xl bg-theme-bg border border-theme-border flex items-center justify-center text-theme-accent">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Ethos Box */}
            <div className="mt-6 p-5 rounded-2xl bg-theme-card border border-theme-border shadow-sm">
              <p className="text-xs font-mono uppercase tracking-widest text-theme-accent mb-1 font-semibold">
                Ethos & Drive
              </p>
              <p className="text-sm text-theme-textSecondary italic leading-relaxed">
                "{t.about.extended}"
              </p>
            </div>
          </motion.div>

          {/* Right Column: Description & 4 Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-theme-textPrimary uppercase tracking-wide mb-3 flex items-center gap-2">
                <span>{t.about.philosophyTitle}</span>
                <span className="h-px flex-1 bg-theme-border"></span>
              </h3>
              <p className="text-theme-textSecondary text-base leading-relaxed mb-8">
                {t.about.philosophyText}
              </p>

              {/* 4 Highlight Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cards.map((item, idx) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="p-5 rounded-2xl bg-theme-card border border-theme-border hover:border-theme-accent transition-all duration-300 group hover:-translate-y-1 hover:shadow-theme-card flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-theme-surface border border-theme-border flex items-center justify-center group-hover:border-theme-accent group-hover:shadow-theme-neon transition-all">
                          {getCardIcon(item.key)}
                        </div>
                        <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-theme-surface text-theme-accent border border-theme-border font-semibold">
                          {item.data.tag}
                        </span>
                      </div>
                      <h4 className="font-heading font-bold text-theme-textPrimary text-base group-hover:text-theme-accent transition-colors">
                        {item.data.title}
                      </h4>
                      <p className="text-xs font-mono text-theme-accent mb-2 font-medium">
                        {item.data.subtitle}
                      </p>
                      <p className="text-xs text-theme-textSecondary leading-relaxed">
                        {item.data.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Callout to Collaboration */}
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-2xl bg-theme-card border border-theme-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
              <div>
                <h5 className="font-heading font-bold text-theme-textPrimary text-sm uppercase tracking-wide">
                  {t.about.collabBannerTitle}
                </h5>
                <p className="text-xs text-theme-textSecondary mt-0.5">
                  {t.about.collabBannerDesc}
                </p>
              </div>
              <button
                onClick={() => scrollTo('collaboration')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-theme-accent text-theme-accentText font-heading font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer shrink-0 shadow-sm"
              >
                <span>{t.about.collabBannerBtn}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
