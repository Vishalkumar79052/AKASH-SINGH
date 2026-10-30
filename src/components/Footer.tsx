import React from 'react';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { InstagramIcon, FacebookIcon, YoutubeIcon, WhatsAppIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const { socials } = portfolioData;
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: t.nav.home, href: '#home', id: 'home' },
    { label: t.nav.about, href: '#about', id: 'about' },
    { label: t.nav.journey, href: '#journey', id: 'journey' },
    { label: t.nav.socials, href: '#socials', id: 'socials' },
    { label: t.nav.collaboration, href: '#collaboration', id: 'collaboration' },
    { label: t.nav.contact, href: '#contact', id: 'contact' },
  ];

  const whatsappLink = socials.find((s) => s.id === 'whatsapp')?.url;
  const instagramLink = socials.find((s) => s.id === 'instagram')?.url;
  const facebookLink = socials.find((s) => s.id === 'facebook')?.url;
  const youtubeLink = socials.find((s) => s.id === 'youtube')?.url;

  return (
    <footer className="bg-theme-surface border-t border-theme-border pt-16 pb-12 relative overflow-hidden">
      {/* Background subtle radial */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-40 bg-radial-gradient pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-theme-border">
          {/* Col 1: Brand & Personal Tagline */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-theme-card border border-theme-border flex items-center justify-center font-heading font-black text-theme-textPrimary text-lg tracking-wider">
                <span>A</span>
                <span className="text-theme-accent">S</span>
              </div>
              <span className="font-heading font-black text-xl text-theme-textPrimary tracking-widest uppercase">
                AKASH SINGH
              </span>
            </div>

            <p className="text-sm text-theme-textSecondary max-w-sm leading-relaxed">
              {t.footer.tagline}
            </p>

            {/* Social Icons (Instagram, Facebook, YouTube) */}
            <div className="flex items-center gap-3 pt-2">
              {instagramLink && (
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-theme-card border border-theme-border flex items-center justify-center text-theme-textSecondary hover:text-[#E1306C] hover:border-[#E1306C] transition-colors shadow-sm"
                  aria-label="Instagram Profile"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              )}
              {facebookLink && (
                <a
                  href={facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-theme-card border border-theme-border flex items-center justify-center text-theme-textSecondary hover:text-[#1877F2] hover:border-[#1877F2] transition-colors shadow-sm"
                  aria-label="Facebook Profile"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              )}
              {youtubeLink && (
                <a
                  href={youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-theme-card border border-theme-border flex items-center justify-center text-theme-textSecondary hover:text-[#FF0000] hover:border-[#FF0000] transition-colors shadow-sm"
                  aria-label="YouTube Channel"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              )}
              {whatsappLink && (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-theme-card border border-theme-border flex items-center justify-center text-theme-textSecondary hover:text-[#25D366] hover:border-[#25D366] transition-colors shadow-sm"
                  aria-label="Direct WhatsApp SMS"
                  title="Direct WhatsApp: +91 8954625571"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="font-heading font-bold text-theme-textPrimary text-xs uppercase tracking-widest">
              {t.footer.navHeading}
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(item.href);
                    }}
                    className="text-xs text-theme-textSecondary hover:text-theme-accent transition-colors block py-0.5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Collaboration CTA Box */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-theme-card border border-theme-border flex flex-col justify-between text-left shadow-sm">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-theme-accent font-semibold block mb-1">
                {t.footer.collabTag}
              </span>
              <h5 className="font-heading font-extrabold text-theme-textPrimary text-base uppercase">
                {t.footer.collabTitle}
              </h5>
              <p className="text-xs text-theme-textSecondary mt-1 leading-relaxed">
                {t.footer.collabDesc}
              </p>
            </div>
            <div className="pt-4">
              <a
                href="#collaboration"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#collaboration');
                }}
                className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-theme-accent hover:opacity-80 transition-opacity"
              >
                <span>{t.footer.collabBtn}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-theme-textSecondary font-mono">
          <p>{t.footer.copyright}</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-theme-textSecondary hover:text-theme-accent transition-colors cursor-pointer group"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
