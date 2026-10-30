import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Handshake, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  const { personal, socials } = portfolioData;
  const { t } = useLanguage();

  const scrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const instagram = socials.find((s) => s.id === 'instagram');
  const facebook = socials.find((s) => s.id === 'facebook');
  const youtube = socials.find((s) => s.id === 'youtube');

  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-14 sm:py-24 lg:py-28 bg-theme-bg"
    >
      {/* Background radial accent glow */}
      <div className="absolute top-1/4 -left-32 w-80 sm:w-96 h-80 sm:h-96 bg-theme-accent/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-80 sm:w-96 h-80 sm:h-96 bg-theme-accent/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Subtle geometric grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Introduction & CTAs */}
          <div className="lg:col-span-7 text-left flex flex-col items-start order-2 lg:order-1">
            {/* Small Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-theme-surface border border-theme-border mb-4 sm:mb-6 shadow-theme-subtle"
            >
              <span className="w-2 h-2 rounded-full bg-theme-accent animate-pulse shadow-theme-neon"></span>
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.18em] uppercase text-theme-textPrimary">
                {t.hero.badge}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-theme-textPrimary uppercase leading-[0.98] mb-3 sm:mb-4"
            >
              {t.hero.headlineFirst}{' '}
              <span className="text-theme-accent drop-shadow-sm">
                {t.hero.headlineSecond}
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-heading text-base sm:text-xl lg:text-2xl font-bold text-theme-textPrimary/90 tracking-wide uppercase mb-4"
            >
              <span>{t.hero.subheading}</span>
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-xl text-sm sm:text-base lg:text-lg text-theme-textSecondary font-normal leading-relaxed mb-6 sm:mb-8"
            >
              {t.hero.description}
            </motion.p>

            {/* Hero CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10"
            >
              <button
                onClick={() => scrollTo('about')}
                className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-theme-textPrimary text-theme-bg font-heading font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:bg-theme-accent hover:text-theme-accentText hover:shadow-theme-neon active:scale-95 cursor-pointer shadow-md"
              >
                <span>{t.hero.btnJourney}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo('collaboration')}
                className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-theme-surface text-theme-textPrimary font-heading font-bold text-xs uppercase tracking-wider border border-theme-border hover:border-theme-accent hover:text-theme-accent transition-all duration-300 active:scale-95 cursor-pointer shadow-theme-subtle"
              >
                <Handshake className="w-4 h-4 text-theme-accent" />
                <span>{t.hero.btnCollab}</span>
              </button>
            </motion.div>

            {/* Social Media Shortcut Icons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-5 sm:pt-6 border-t border-theme-border w-full max-w-lg"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-theme-textSecondary shrink-0 mr-1 sm:mr-2">
                Connect:
              </span>

              {instagram && (
                <a
                  href={instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-theme-surface border border-theme-border flex items-center justify-center text-theme-textSecondary hover:text-[#E1306C] hover:border-[#E1306C] shadow-theme-subtle transition-all"
                  aria-label="Instagram Profile"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              )}

              {facebook && (
                <a
                  href={facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-theme-surface border border-theme-border flex items-center justify-center text-theme-textSecondary hover:text-[#1877F2] hover:border-[#1877F2] shadow-theme-subtle transition-all"
                  aria-label="Facebook Profile"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              )}

              {youtube && (
                <a
                  href={youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-theme-surface border border-theme-border flex items-center justify-center text-theme-textSecondary hover:text-[#FF0000] hover:border-[#FF0000] shadow-theme-subtle transition-all"
                  aria-label="YouTube Channel"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              )}

              <div className="ml-auto hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-theme-textSecondary">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Open for 2026</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Uploaded Profile Photograph Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center order-1 lg:order-2"
          >
            <div className="relative w-full max-w-[290px] sm:max-w-sm lg:max-w-md group">
              {/* Decorative accent background border glow */}
              <div className="absolute -inset-2 rounded-[28px] sm:rounded-[34px] bg-gradient-to-tr from-theme-accent/25 via-transparent to-theme-accent/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Card Container */}
              <div className="relative rounded-2xl sm:rounded-[28px] overflow-hidden bg-theme-surface border-2 border-theme-border group-hover:border-theme-accent/80 transition-all duration-500 shadow-theme-card">
                
                {/* Corner markers */}
                <div className="absolute top-3.5 left-3.5 z-20 w-3 h-3 border-t-2 border-l-2 border-theme-accent"></div>
                <div className="absolute top-3.5 right-3.5 z-20 w-3 h-3 border-t-2 border-r-2 border-theme-accent"></div>
                <div className="absolute bottom-3.5 left-3.5 z-20 w-3 h-3 border-b-2 border-l-2 border-theme-accent"></div>
                <div className="absolute bottom-3.5 right-3.5 z-20 w-3 h-3 border-b-2 border-r-2 border-theme-accent"></div>

                {/* Top Badge Overlay */}
                <div className="absolute top-3 inset-x-3 z-20 flex justify-between items-center pointer-events-none px-2">
                  <span className="px-2.5 py-1 rounded-full bg-theme-bg/85 backdrop-blur-md border border-theme-border text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-theme-textPrimary font-semibold flex items-center gap-1.5 shadow-sm">
                    <CheckCircle2 className="w-3 h-3 text-theme-accent" />
                    Official Identity
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono text-theme-accent font-bold tracking-widest bg-theme-bg/85 backdrop-blur-md px-2 py-0.5 rounded-md border border-theme-border shadow-sm">
                    2026
                  </span>
                </div>

                {/* Actual Uploaded Photograph */}
                <div className="aspect-[3/4] w-full overflow-hidden relative bg-theme-surface">
                  <img
                    src={personal.profileImage}
                    alt="Akash Singh Official Photo"
                    className="w-full h-full object-cover object-[center_12%] group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  {/* Bottom subtle gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-theme-bg/95 via-transparent to-transparent opacity-80 pointer-events-none"></div>
                </div>

                {/* Caption / Signature Badge */}
                <div className="p-3.5 sm:p-5 bg-theme-surface border-t border-theme-border flex items-center justify-between">
                  <div>
                    <h3 className="font-heading font-black text-theme-textPrimary text-base sm:text-lg uppercase tracking-wider">
                      Akash Singh
                    </h3>
                    <p className="text-[11px] sm:text-xs font-mono text-theme-accent mt-0.5 font-medium">
                      {personal.sport}
                    </p>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-theme-bg border border-theme-border flex items-center justify-center text-theme-accent shadow-sm shrink-0">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        onClick={() => scrollTo('about')}
        className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer group"
      >
        <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-theme-textSecondary group-hover:text-theme-accent uppercase mb-1 transition-colors">
          {t.hero.scrollDown}
        </span>
        <div className="w-4 h-7 sm:w-5 sm:h-8 rounded-full border border-theme-border group-hover:border-theme-accent flex items-start justify-center p-1 transition-colors">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-theme-accent"
          />
        </div>
      </div>
    </section>
  );
};
