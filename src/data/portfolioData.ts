export interface SocialLink {
  id: string;
  platform: string;
  handle: string;
  url: string;
  isLive: boolean;
  description: string;
  badge?: string;
  color?: string;
  ctaText?: string;
}

export interface SiteConfig {
  personal: {
    name: string;
    firstName: string;
    lastName: string;
    title: string;
    sport: string;
    subheading: string;
    tagline: string;
    heroDescription: string;
    location: string;
    email: string;
    profileImage: string;
    heroBgImage: string;
    rugbyImage: string;
  };
  navigation: {
    key: string;
    href: string;
  }[];
  socials: SocialLink[];
}

export const portfolioData: SiteConfig = {
  personal: {
    name: "Akash Singh",
    firstName: "Akash",
    lastName: "Singh",
    title: "PERSONAL BRAND | SPORTS & FITNESS",
    sport: "Rugby Competitor & Fitness Athlete",
    subheading: "Passion. Dedication. Performance.",
    tagline: "Driven by discipline on and off the field.",
    heroDescription:
      "Welcome to my personal space. Explore my journey, connect with me, and let's create something meaningful together.",
    location: "Roorkee, India",
    email: "contact.akashsingh@gmail.com",
    profileImage: "/images/akash-singh.jpg", // The actual uploaded photo
    heroBgImage: "/images/hero-athlete.jpg",
    rugbyImage: "/images/rugby-action.jpg",
  },
  navigation: [
    { key: "home", href: "#home" },
    { key: "about", href: "#about" },
    { key: "journey", href: "#journey" },
    { key: "socials", href: "#socials" },
    { key: "collaboration", href: "#collaboration" },
    { key: "contact", href: "#contact" },
  ],
  socials: [
    {
      id: "instagram",
      platform: "Instagram",
      handle: "@akash_singh_rathour_rugby",
      url: "https://www.instagram.com/akash_singh_rathour_rugby?rpxt=MW1qaXdkYmIybGEwcA==",
      isLive: true,
      description: "Follow daily athletic training routines, rugby pitch action, workout reels, and fitness lifestyle updates.",
      badge: "Official Profile",
      color: "#E1306C",
      ctaText: "Follow on Instagram",
    },
    {
      id: "facebook",
      platform: "Facebook",
      handle: "Akash Singh (Prabh Dayal Singh)",
      url: "https://www.facebook.com/prabh.dayalsingh.94",
      isLive: true,
      description: "Connect for community posts, life milestones, sports circle discussions, and personal updates.",
      badge: "Official Profile",
      color: "#1877F2",
      ctaText: "Connect on Facebook",
    },
    {
      id: "youtube",
      platform: "YouTube",
      handle: "Paaji Fitness Club Roorkee",
      url: "https://youtube.com/@paajifitnessclubroorkee460?si=bwTWiDG3wFHPp195",
      isLive: true,
      description: "Official workout videos, athletic conditioning tips, gym workouts, and sports journey docu-vlogs.",
      badge: "Official Channel",
      color: "#FF0000",
      ctaText: "Subscribe on YouTube",
    },
  ],
};
