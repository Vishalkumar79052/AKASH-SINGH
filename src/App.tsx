import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SportsJourney } from './components/SportsJourney';
import { Socials } from './components/Socials';
import { Collaboration } from './components/Collaboration';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export const AppContent: React.FC = () => {
  const [selectedCollaborationCategory, setSelectedCollaborationCategory] =
    useState<string>('Brand Collaborations');

  const handleSelectCollaborationCategory = (category: string) => {
    setSelectedCollaborationCategory(category);
  };

  return (
    <div className="min-h-screen bg-theme-bg text-theme-textPrimary font-sans antialiased selection:bg-theme-accent selection:text-theme-accentText transition-colors duration-300">
      {/* Scroll Progress Bar at the very top */}
      <ScrollProgress />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section (Prominently displaying Akash's uploaded photograph on desktop right) */}
        <Hero />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Sports Journey & Athletic Pillars */}
        <SportsJourney />

        {/* 4. Social Media Section (Instagram, Facebook, Paaji Fitness Club YouTube) */}
        <Socials />

        {/* 5. Collaboration Section */}
        <Collaboration onSelectCategory={handleSelectCollaborationCategory} />

        {/* 6. Contact Section */}
        <Contact selectedCategory={selectedCollaborationCategory} />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* Floating Back to Top */}
      <BackToTop />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
