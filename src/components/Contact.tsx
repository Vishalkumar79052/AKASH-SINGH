import React, { useState, useEffect } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Mail,
  ExternalLink,
  Loader2,
  Info,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { InstagramIcon, FacebookIcon, YoutubeIcon, WhatsAppIcon } from './SocialIcons';

interface ContactProps {
  selectedCategory?: string;
}

interface FormState {
  fullName: string;
  email: string;
  subject: string;
  collaborationType: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  collaborationType?: string;
  message?: string;
}

export const Contact: React.FC<ContactProps> = ({ selectedCategory }) => {
  const { personal, socials } = portfolioData;
  const { t } = useLanguage();

  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    subject: '',
    collaborationType: selectedCategory || t.contact.options.brand,
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'unconfigured'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Keep collaboration type in sync if parent changes
  useEffect(() => {
    if (selectedCategory) {
      setFormData((prev) => ({ ...prev, collaborationType: selectedCategory }));
    }
  }, [selectedCategory]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = t.contact.errors.nameRequired;
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = t.contact.errors.nameInvalid;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = t.contact.errors.emailRequired;
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = t.contact.errors.emailInvalid;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t.contact.errors.subjectRequired;
    }

    if (!formData.collaborationType) {
      newErrors.collaborationType = t.contact.errors.typeRequired;
    }

    if (!formData.message.trim()) {
      newErrors.message = t.contact.errors.msgRequired;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t.contact.errors.msgShort;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const formspreeKey =
      import.meta.env.VITE_FORMSPREE_KEY ||
      import.meta.env.VITE_FORMSPREE_ENDPOINT;

    if (!formspreeKey) {
      setIsSubmitting(false);
      setSubmitStatus('unconfigured');
      return;
    }

    try {
      const endpoint = formspreeKey.startsWith('http')
        ? formspreeKey
        : `https://formspree.io/f/${formspreeKey}`;

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          subject: formData.subject,
          collaborationType: formData.collaborationType,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          subject: '',
          collaborationType: t.contact.options.brand,
          message: '',
        });
      } else {
        const errorData = await response.json();
        setSubmitStatus('error');
        setErrorMessage(
          errorData.error || 'Failed to submit form. Please try again or use direct email.'
        );
      }
    } catch (err: unknown) {
      setSubmitStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Network error occurred while connecting to the form service.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendDirectEmail = () => {
    const mailtoSubject = encodeURIComponent(`[${formData.collaborationType}] ${formData.subject || 'Portfolio Inquiry'}`);
    const mailtoBody = encodeURIComponent(
      `From: ${formData.fullName}\nEmail: ${formData.email}\nCollaboration Type: ${formData.collaborationType}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  const instagramLink = socials.find((s) => s.id === 'instagram')?.url;
  const facebookLink = socials.find((s) => s.id === 'facebook')?.url;
  const youtubeLink = socials.find((s) => s.id === 'youtube')?.url;

  return (
    <section id="contact" className="py-24 sm:py-32 bg-theme-bg relative overflow-hidden border-t border-theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-theme-surface border border-theme-border mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-theme-accent"></span>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-theme-accent font-semibold">
              {t.contact.badge}
            </span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-6xl text-theme-textPrimary uppercase tracking-tight mb-4">
            {t.contact.headline}
          </h2>

          <p className="text-base sm:text-lg text-theme-textSecondary max-w-xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Touchpoints */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="p-5 sm:p-8 rounded-3xl bg-theme-card border border-theme-border shadow-theme-card">
              <h3 className="font-heading font-bold text-theme-textPrimary text-lg sm:text-xl uppercase tracking-wide mb-2">
                {t.contact.directTitle}
              </h3>
              <p className="text-xs sm:text-sm text-theme-textSecondary mb-6">
                {t.contact.directSubtitle}
              </p>

              <div className="space-y-3 sm:space-y-4">
                {/* Email Direct */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-theme-surface border border-theme-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-theme-card border border-theme-border flex items-center justify-center text-theme-accent shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 pr-2">
                      <p className="text-[10px] sm:text-[11px] font-mono uppercase text-theme-textSecondary">
                        {t.contact.emailLabel}
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-theme-textPrimary truncate">
                        {personal.email}
                      </p>
                    </div>
                  </div>
                  <a
                    href={`mailto:${personal.email}`}
                    className="p-2 rounded-xl bg-theme-card hover:bg-theme-accent hover:text-theme-accentText text-theme-textPrimary transition-colors shrink-0"
                    title="Send Email"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* WhatsApp Direct Chat */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-theme-surface border border-theme-border flex items-center justify-between hover:border-[#25D366] transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shrink-0">
                      <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                    </div>
                    <div className="min-w-0 pr-2">
                      <div className="flex items-center gap-1.5">
                        <p className="text-[10px] sm:text-[11px] font-mono uppercase text-theme-textSecondary">
                          {t.contact.whatsappLabel}
                        </p>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span>
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-theme-textPrimary truncate">
                        +91 8954625571
                      </p>
                    </div>
                  </div>
                  <a
                    href={personal.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold font-heading uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-sm active:scale-95 shrink-0"
                    title="Direct WhatsApp SMS"
                  >
                    <span>SMS / Chat</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Instagram Direct */}
                {instagramLink && (
                  <div className="p-4 rounded-2xl bg-theme-surface border border-theme-border flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-theme-card border border-theme-border flex items-center justify-center text-[#E1306C]">
                        <InstagramIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-mono uppercase text-theme-textSecondary">
                          {t.contact.instagramLabel}
                        </p>
                        <p className="text-sm font-semibold text-theme-textPrimary">
                          @akash_singh_rathour_rugby
                        </p>
                      </div>
                    </div>
                    <a
                      href={instagramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-theme-card hover:bg-theme-accent hover:text-theme-accentText text-theme-textPrimary transition-colors"
                      title="Open Instagram"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}

                {/* Facebook Profile */}
                {facebookLink && (
                  <div className="p-4 rounded-2xl bg-theme-surface border border-theme-border flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-theme-card border border-theme-border flex items-center justify-center text-[#1877F2]">
                        <FacebookIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-mono uppercase text-theme-textSecondary">
                          {t.contact.facebookLabel}
                        </p>
                        <p className="text-sm font-semibold text-theme-textPrimary">
                          Akash Singh
                        </p>
                      </div>
                    </div>
                    <a
                      href={facebookLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-theme-card hover:bg-theme-accent hover:text-theme-accentText text-theme-textPrimary transition-colors"
                      title="Open Facebook"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}

                {/* YouTube Channel */}
                {youtubeLink && (
                  <div className="p-4 rounded-2xl bg-theme-surface border border-theme-border flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-theme-card border border-theme-border flex items-center justify-center text-[#FF0000]">
                        <YoutubeIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-mono uppercase text-theme-textSecondary">
                          {t.contact.youtubeLabel}
                        </p>
                        <p className="text-sm font-semibold text-theme-textPrimary">
                          Paaji Fitness Club Roorkee
                        </p>
                      </div>
                    </div>
                    <a
                      href={youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-theme-card hover:bg-theme-accent hover:text-theme-accentText text-theme-textPrimary transition-colors"
                      title="Open YouTube"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Status Card */}
            <div className="p-6 rounded-3xl bg-theme-surface border border-theme-border shadow-sm">
              <div className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-theme-accent mt-1.5 shrink-0 animate-pulse"></span>
                <div>
                  <h4 className="font-heading font-bold text-theme-textPrimary text-sm uppercase">
                    {t.contact.statusTitle}
                  </h4>
                  <p className="text-xs text-theme-textSecondary mt-1 leading-relaxed">
                    {t.contact.statusText}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-theme-card border border-theme-border shadow-theme-card relative">
              
              {/* Formspree Configuration Notice (Accurate Backend State) */}
              {submitStatus === 'unconfigured' && (
                <div className="mb-6 p-5 rounded-2xl bg-theme-surface border border-theme-accent/60 text-left">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-theme-accent shrink-0 mt-0.5" />
                    <div className="space-y-2">
                      <h4 className="font-heading font-bold text-theme-textPrimary text-sm">
                        {t.contact.notifications.unconfiguredTitle}
                      </h4>
                      <p className="text-xs text-theme-textSecondary leading-relaxed">
                        {t.contact.notifications.unconfiguredDesc}
                      </p>
                      <p className="text-xs text-theme-textSecondary font-medium">
                        {t.contact.notifications.unconfiguredEmailPrompt}
                      </p>
                      <button
                        type="button"
                        onClick={handleSendDirectEmail}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-theme-accent text-theme-accentText font-heading font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer mt-1 shadow-sm"
                      >
                        <Mail className="w-4 h-4" />
                        <span>{t.contact.notifications.emailClientBtn}</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Success Notification */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/60 text-left flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-theme-textPrimary text-sm">
                      {t.contact.notifications.successTitle}
                    </h4>
                    <p className="text-xs text-theme-textSecondary mt-1">
                      {t.contact.notifications.successDesc}
                    </p>
                  </div>
                </div>
              )}

              {/* Error Notification */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-5 rounded-2xl bg-rose-950/20 border border-rose-500/60 text-left flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-theme-textPrimary text-sm">
                      {t.contact.notifications.errorTitle}
                    </h4>
                    <p className="text-xs text-theme-textSecondary mt-1">
                      {errorMessage}
                    </p>
                    <button
                      type="button"
                      onClick={handleSendDirectEmail}
                      className="mt-2 text-xs font-semibold text-theme-accent underline hover:opacity-80"
                    >
                      {t.contact.notifications.directEmailInstead}
                    </button>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5 text-left">
                {/* Full Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-mono uppercase tracking-wider text-theme-textSecondary mb-2">
                      {t.contact.labels.fullName} <span className="text-theme-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder={t.contact.placeholders.fullName}
                      className={`w-full px-4 py-3 rounded-xl bg-theme-surface border text-theme-textPrimary text-sm placeholder:text-theme-textMuted focus:outline-none transition-colors ${
                        errors.fullName ? 'border-rose-500' : 'border-theme-border focus:border-theme-accent'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-rose-500 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-theme-textSecondary mb-2">
                      {t.contact.labels.email} <span className="text-theme-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.contact.placeholders.email}
                      className={`w-full px-4 py-3 rounded-xl bg-theme-surface border text-theme-textPrimary text-sm placeholder:text-theme-textMuted focus:outline-none transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-theme-border focus:border-theme-accent'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-500 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject & Collaboration Type Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-theme-textSecondary mb-2">
                      {t.contact.labels.subject} <span className="text-theme-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={t.contact.placeholders.subject}
                      className={`w-full px-4 py-3 rounded-xl bg-theme-surface border text-theme-textPrimary text-sm placeholder:text-theme-textMuted focus:outline-none transition-colors ${
                        errors.subject ? 'border-rose-500' : 'border-theme-border focus:border-theme-accent'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-rose-500 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="collaborationType" className="block text-xs font-mono uppercase tracking-wider text-theme-textSecondary mb-2">
                      {t.contact.labels.collabType} <span className="text-theme-accent">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="collaborationType"
                        name="collaborationType"
                        value={formData.collaborationType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-theme-surface border border-theme-border text-theme-textPrimary text-sm focus:outline-none focus:border-theme-accent transition-colors appearance-none cursor-pointer"
                      >
                        <option value={t.contact.options.brand}>{t.contact.options.brand}</option>
                        <option value={t.contact.options.sponsorship}>{t.contact.options.sponsorship}</option>
                        <option value={t.contact.options.events}>{t.contact.options.events}</option>
                        <option value={t.contact.options.creative}>{t.contact.options.creative}</option>
                        <option value={t.contact.options.general}>{t.contact.options.general}</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-theme-textSecondary">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-theme-textSecondary mb-2">
                    {t.contact.labels.message} <span className="text-theme-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contact.placeholders.message}
                    className={`w-full px-4 py-3 rounded-xl bg-theme-surface border text-theme-textPrimary text-sm placeholder:text-theme-textMuted focus:outline-none transition-colors resize-none ${
                      errors.message ? 'border-rose-500' : 'border-theme-border focus:border-theme-accent'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-[11px] text-rose-500 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 rounded-xl bg-theme-accent text-theme-accentText font-heading font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300 shadow-theme-neon cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>{t.contact.labels.sendingBtn}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t.contact.labels.submitBtn}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
