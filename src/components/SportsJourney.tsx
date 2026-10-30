import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const SportsJourney: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'rugby' | 'strength' | 'mindset' | 'community'>('rugby');
  const { t } = useLanguage();

  const tabKeys: ('rugby' | 'strength' | 'mindset' | 'community')[] = [
    'rugby',
    'strength',
    'mindset',
    'community',
  ];

  const currentPillar = t.journey.tabs[activeTab];

  const scrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="journey" className="py-24 sm:py-32 bg-theme-surface/40 relative overflow-hidden border-t border-theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-theme-card border border-theme-border mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-theme-accent"></span>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-theme-accent font-semibold">
                {t.journey.badge}
              </span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-theme-textPrimary uppercase tracking-tight">
              {t.journey.headline}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-theme-textSecondary max-w-md">
            {t.journey.subtitle}
          </p>
        </div>

        {/* Pillar Tabs Bar - Mobile Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 rounded-2xl bg-theme-card border border-theme-border mb-8 sm:mb-10 max-w-3xl shadow-sm">
          {tabKeys.map((key) => {
            const tabData = t.journey.tabs[key];
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`py-2.5 sm:py-3 px-2 sm:px-4 rounded-xl text-[11px] sm:text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer text-center ${
                  isActive
                    ? 'bg-theme-accent text-theme-accentText shadow-sm'
                    : 'text-theme-textSecondary hover:text-theme-textPrimary hover:bg-theme-surface'
                }`}
              >
                {tabData.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Pillar Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Details Column */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-theme-card border border-theme-border flex flex-col justify-between shadow-theme-card">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-theme-surface text-theme-accent border border-theme-border font-semibold">
                    {currentPillar.label}
                  </span>
                  <div className="text-right">
                    <p className="text-[10px] font-mono uppercase text-theme-textSecondary">
                      {currentPillar.statLabel}
                    </p>
                    <p className="text-sm font-heading font-bold text-theme-textPrimary">
                      {currentPillar.statValue}
                    </p>
                  </div>
                </div>

                <h3 className="font-heading font-black text-2xl sm:text-4xl text-theme-textPrimary uppercase tracking-wide">
                  {currentPillar.title}
                </h3>

                <p className="text-sm sm:text-base text-theme-textSecondary leading-relaxed">
                  {currentPillar.desc}
                </p>

                <div className="space-y-3 pt-4 border-t border-theme-border">
                  {currentPillar.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-theme-textPrimary">
                      <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="pt-8 mt-6 border-t border-theme-border flex items-center justify-between">
              <span className="text-xs font-mono text-theme-textSecondary">
                {t.journey.footerTag}
              </span>
              <button
                onClick={() => scrollTo('collaboration')}
                className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-theme-accent hover:opacity-80 transition-opacity cursor-pointer"
              >
                <span>{t.journey.footerBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Media / Sports Photo Column */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-theme-border min-h-[340px] group shadow-theme-card">
            <img
              src={portfolioData.personal.rugbyImage}
              alt="Rugby Ball Match Field"
              className="w-full h-full object-cover object-center filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-theme-bg via-theme-bg/40 to-transparent"></div>

            <div className="absolute bottom-6 inset-x-6 z-10 p-5 rounded-2xl bg-theme-surface/90 backdrop-blur-md border border-theme-border">
              <div className="flex items-center gap-2 text-theme-accent text-xs font-mono uppercase tracking-wider mb-1">
                <Zap className="w-3.5 h-3.5" />
                <span>On the Pitch</span>
              </div>
              <h4 className="font-heading font-bold text-theme-textPrimary text-base uppercase">
                Rugby & Athletic Training
              </h4>
              <p className="text-xs text-theme-textSecondary mt-1 leading-relaxed">
                Toughness, brotherhood, and tactical speed. Every single second demands 100% commitment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
