import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { portfolioData, type SocialLink } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import {
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
} from './SocialIcons';

export const Socials: React.FC = () => {
  const { socials } = portfolioData;
  const { t } = useLanguage();

  const getPlatformIcon = (id: string) => {
    switch (id) {
      case 'instagram':
        return <InstagramIcon className="w-7 h-7 text-[#E1306C]" />;
      case 'facebook':
        return <FacebookIcon className="w-7 h-7 text-[#1877F2]" />;
      case 'youtube':
        return <YoutubeIcon className="w-7 h-7 text-[#FF0000]" />;
      default:
        return <Sparkles className="w-7 h-7 text-theme-accent" />;
    }
  };

  const getButtonLabel = (id: string) => {
    switch (id) {
      case 'instagram':
        return t.socials.visitInstagram;
      case 'facebook':
        return t.socials.connectFacebook;
      case 'youtube':
        return t.socials.subscribeYoutube;
      default:
        return 'Connect';
    }
  };

  return (
    <section id="socials" className="py-24 sm:py-32 bg-theme-bg relative overflow-hidden border-t border-theme-border">
      {/* Background accent lines */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-theme-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-theme-surface border border-theme-border mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-theme-accent animate-ping"></span>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-theme-accent font-semibold">
              {t.socials.badge}
            </span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-6xl text-theme-textPrimary uppercase tracking-tight mb-4">
            {t.socials.headline}
          </h2>

          <p className="text-base sm:text-lg text-theme-textSecondary max-w-xl mx-auto">
            {t.socials.description}
          </p>
        </div>

        {/* 3 Premium Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {socials.map((item: SocialLink, idx: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative p-5 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl bg-theme-card border-2 border-theme-border hover:border-theme-accent transition-all duration-300 group hover:-translate-y-2 hover:shadow-theme-card flex flex-col justify-between"
            >
              <div>
                {/* Platform Icon & Badge */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-theme-surface border border-theme-border flex items-center justify-center group-hover:scale-110 group-hover:shadow-sm transition-transform duration-300">
                    {getPlatformIcon(item.id)}
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-theme-surface border border-theme-border text-theme-accent text-[10px] font-mono font-semibold">
                    <CheckCircle2 className="w-3 h-3 text-theme-accent" />
                    {t.socials.officialBadge}
                  </span>
                </div>

                {/* Platform Name & Handle */}
                <h3 className="font-heading font-black text-theme-textPrimary text-2xl uppercase tracking-wide group-hover:text-theme-accent transition-colors mb-1">
                  {item.platform}
                </h3>
                
                <p className="text-xs font-mono font-medium text-theme-accent mb-4">
                  {item.handle}
                </p>

                <p className="text-sm text-theme-textSecondary leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>

              {/* Action Button */}
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full py-4 px-6 rounded-2xl bg-theme-surface border border-theme-border text-theme-textPrimary font-heading font-bold text-xs uppercase tracking-wider group-hover:bg-theme-accent group-hover:text-theme-accentText group-hover:border-theme-accent transition-all duration-300 shadow-sm"
              >
                <span>{getButtonLabel(item.id)}</span>
                <div className="w-7 h-7 rounded-full bg-theme-bg/60 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const SocialMedia = Socials;
