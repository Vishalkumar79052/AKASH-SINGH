import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Flame } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { t } = useLanguage();

  const navItems = [
    { label: t.nav.home, href: '#home', id: 'home' },
    { label: t.nav.about, href: '#about', id: 'about' },
    { label: t.nav.journey, href: '#journey', id: 'journey' },
    { label: t.nav.socials, href: '#socials', id: 'socials' },
    { label: t.nav.collaboration, href: '#collaboration', id: 'collaboration' },
    { label: t.nav.contact, href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'journey', 'socials', 'collaboration', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-theme-bg/95 backdrop-blur-md border-b border-theme-border py-2.5 sm:py-3 shadow-theme-subtle'
            : 'bg-transparent py-3 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#home');
            }}
            className="group flex items-center gap-2 sm:gap-3 focus:outline-none shrink-0"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-theme-surface border border-theme-border flex items-center justify-center font-heading font-black text-theme-textPrimary text-sm sm:text-base tracking-wider transition-all duration-300 group-hover:border-theme-accent group-hover:shadow-theme-neon">
              <span>A</span>
              <span className="text-theme-accent">S</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-heading font-extrabold tracking-wider text-xs sm:text-base text-theme-textPrimary group-hover:text-theme-accent transition-colors flex items-center gap-1">
                AKASH SINGH
                <span className="w-1.5 h-1.5 rounded-full bg-theme-accent animate-pulse hidden xs:inline-block"></span>
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-widest text-theme-textSecondary hidden xs:inline-block">
                Athlete & Brand
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-theme-surface/85 px-3.5 py-1.5 rounded-full border border-theme-border backdrop-blur-sm shadow-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.href);
                  }}
                  className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 rounded-full cursor-pointer ${
                    isActive
                      ? 'text-theme-accentText bg-theme-accent font-bold shadow-sm'
                      : 'text-theme-textSecondary hover:text-theme-textPrimary hover:bg-theme-card/60'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Controls (Language Switcher, Theme Toggle, Let's Connect) */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            <LanguageSwitcher />
            <ThemeToggle />

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#contact');
              }}
              className="group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-theme-accent text-theme-accentText font-heading font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:shadow-theme-neon hover:opacity-95 active:scale-95 cursor-pointer"
            >
              <span>{t.nav.letsConnect}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Right Controls: Language, Theme, Hamburger */}
          <div className="flex md:hidden items-center gap-1.5 sm:gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-theme-surface border border-theme-border flex items-center justify-center text-theme-textPrimary hover:text-theme-accent hover:border-theme-accent transition-colors active:scale-95"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Fullscreen Animated Drawer */}
        <div
          className={`md:hidden fixed inset-x-0 top-[56px] sm:top-[64px] bottom-0 bg-theme-bg/98 backdrop-blur-2xl border-b border-theme-border px-5 py-6 flex flex-col justify-between transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
          style={{ height: 'calc(100dvh - 56px)' }}
        >
          <div className="flex flex-col gap-2 overflow-y-auto pr-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.href);
                  }}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'bg-theme-accent text-theme-accentText font-bold shadow-sm'
                      : 'text-theme-textPrimary bg-theme-surface/70 border border-theme-border/60 hover:bg-theme-surface'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <Flame className="w-4 h-4 text-theme-accentText" />}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-theme-border space-y-3 shrink-0">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#contact');
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-theme-accent text-theme-accentText font-heading font-bold text-sm tracking-wider uppercase shadow-theme-neon"
            >
              <span>{t.nav.letsConnect}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <p className="text-center text-[10px] font-mono text-theme-textSecondary">
              Official Athlete Website • 2026
            </p>
          </div>
        </div>
      </header>

      {/* Backdrop overlay for mobile drawer */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        />
      )}
    </>
  );
};
