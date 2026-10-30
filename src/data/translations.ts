export type Language = 'en' | 'hi';

export interface TranslationDictionary {
  nav: {
    home: string;
    about: string;
    journey: string;
    socials: string;
    collaboration: string;
    contact: string;
    letsConnect: string;
  };
  hero: {
    badge: string;
    headlineFirst: string;
    headlineSecond: string;
    subheading: string;
    description: string;
    btnJourney: string;
    btnCollab: string;
    scrollDown: string;
    pillarRugby: string;
    pillarDiscipline: string;
    pillarCollab: string;
  };
  about: {
    badge: string;
    headline: string;
    description: string;
    extended: string;
    philosophyTitle: string;
    philosophyText: string;
    athleteTag: string;
    highlightCards: {
      journey: { title: string; subtitle: string; desc: string; tag: string };
      sports: { title: string; subtitle: string; desc: string; tag: string };
      community: { title: string; subtitle: string; desc: string; tag: string };
      collab: { title: string; subtitle: string; desc: string; tag: string };
    };
    collabBannerTitle: string;
    collabBannerDesc: string;
    collabBannerBtn: string;
  };
  journey: {
    badge: string;
    headline: string;
    subtitle: string;
    tabs: {
      rugby: { label: string; statLabel: string; statValue: string; title: string; desc: string; items: string[] };
      strength: { label: string; statLabel: string; statValue: string; title: string; desc: string; items: string[] };
      mindset: { label: string; statLabel: string; statValue: string; title: string; desc: string; items: string[] };
      community: { label: string; statLabel: string; statValue: string; title: string; desc: string; items: string[] };
    };
    footerTag: string;
    footerBtn: string;
  };
  socials: {
    badge: string;
    headline: string;
    description: string;
    activeTitle: string;
    visitInstagram: string;
    connectFacebook: string;
    subscribeYoutube: string;
    officialBadge: string;
    subscribersLabel: string;
  };
  collaboration: {
    badge: string;
    headline: string;
    description: string;
    inquireBtn: string;
    mainCta: string;
    ctaSubtext: string;
    cards: {
      brand: { title: string; subtitle: string; desc: string; deliverables: string[] };
      sponsorship: { title: string; subtitle: string; desc: string; deliverables: string[] };
      events: { title: string; subtitle: string; desc: string; deliverables: string[] };
      creative: { title: string; subtitle: string; desc: string; deliverables: string[] };
    };
  };
  contact: {
    badge: string;
    headline: string;
    description: string;
    directTitle: string;
    directSubtitle: string;
    emailLabel: string;
    instagramLabel: string;
    facebookLabel: string;
    youtubeLabel: string;
    statusTitle: string;
    statusText: string;
    labels: {
      fullName: string;
      email: string;
      subject: string;
      collabType: string;
      message: string;
      submitBtn: string;
      sendingBtn: string;
    };
    placeholders: {
      fullName: string;
      email: string;
      subject: string;
      message: string;
    };
    options: {
      brand: string;
      sponsorship: string;
      events: string;
      creative: string;
      general: string;
    };
    errors: {
      nameRequired: string;
      nameInvalid: string;
      emailRequired: string;
      emailInvalid: string;
      subjectRequired: string;
      typeRequired: string;
      msgRequired: string;
      msgShort: string;
    };
    notifications: {
      unconfiguredTitle: string;
      unconfiguredDesc: string;
      unconfiguredEmailPrompt: string;
      emailClientBtn: string;
      successTitle: string;
      successDesc: string;
      errorTitle: string;
      directEmailInstead: string;
    };
  };
  footer: {
    tagline: string;
    navHeading: string;
    collabTag: string;
    collabTitle: string;
    collabDesc: string;
    collabBtn: string;
    backToTop: string;
    copyright: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      journey: "Sports Journey",
      socials: "Socials",
      collaboration: "Collaboration",
      contact: "Contact",
      letsConnect: "Let's Connect",
    },
    hero: {
      badge: "PERSONAL BRAND | SPORTS & FITNESS",
      headlineFirst: "AKASH",
      headlineSecond: "SINGH",
      subheading: "Passion. Dedication. Performance.",
      description:
        "Welcome to my personal space. Explore my journey, connect with me, and let's create something meaningful together.",
      btnJourney: "Explore My Journey",
      btnCollab: "Let's Collaborate",
      scrollDown: "Scroll Down",
      pillarRugby: "Rugby Competitor",
      pillarDiscipline: "Daily Conditioning",
      pillarCollab: "Open for Collaborations",
    },
    about: {
      badge: "A LITTLE ABOUT ME",
      headline: "Beyond The Game.",
      description:
        "Hey, I'm Akash Singh. Welcome to my personal space. Here, I share my interests, journey, passion, and opportunities to connect with people and brands.",
      extended:
        "Sports and fitness are an uncompromising pursuit of discipline, physical resilience, and continuous growth. From intense field rugby play to fitness training and community building, I put dedication into every challenge.",
      philosophyTitle: "The Athletic Philosophy",
      philosophyText:
        "True strength is built on consistency and honesty in the work. Whether preparing for rugby competition, daily conditioning, or partnering with brands, every step is taken with focus, respect, and relentless grit.",
      athleteTag: "Rugby & Fitness Athlete",
      highlightCards: {
        journey: {
          title: "Personal Journey",
          subtitle: "Grit & Growth",
          desc: "Every workout and training session builds character. Committed to continuous personal growth and an authentic fitness lifestyle.",
          tag: "Focus",
        },
        sports: {
          title: "Sports & Fitness",
          subtitle: "Rugby & Athletic Power",
          desc: "Passionate rugby competitor and fitness athlete dedicated to tactical agility, endurance, and physical conditioning.",
          tag: "Discipline",
        },
        community: {
          title: "Community",
          subtitle: "Paaji Fitness Club",
          desc: "Connecting with sports enthusiasts, young athletes, and gym members through Paaji Fitness Club Roorkee and social media.",
          tag: "Impact",
        },
        collab: {
          title: "Brand Collaborations",
          subtitle: "Partnerships with Purpose",
          desc: "Teaming up with fitness, apparel, nutrition, and lifestyle brands that embody dedication and authentic energy.",
          tag: "Synergy",
        },
      },
      collabBannerTitle: "Looking to build a collaboration?",
      collabBannerDesc: "Available for sports sponsorships, fitness brand promotions, and public appearances.",
      collabBannerBtn: "View Options",
    },
    journey: {
      badge: "ATHLETIC FOUNDATION",
      headline: "SPORTS JOURNEY",
      subtitle:
        "The core pillars that fuel the athletic mindset, rugby discipline, and continuous physical excellence.",
      tabs: {
        rugby: {
          label: "Rugby Play",
          statLabel: "Specialty",
          statValue: "Rugby Competitor",
          title: "Rugby & Field Tactics",
          desc: "Rugby demands total mental presence, physical fearlessness, and tactical coordination under high pressure.",
          items: [
            "Tactical positioning & open-field agility",
            "Physical resilience & contact discipline",
            "Speed endurance & team coordination",
          ],
        },
        strength: {
          label: "Conditioning",
          statLabel: "Standard",
          statValue: "Daily Training",
          title: "Athletic Power & Conditioning",
          desc: "Functional athletic performance developed through compound training, mobility work, and explosive conditioning.",
          items: [
            "Explosive power & athletic strength conditioning",
            "Joint mobility and injury prevention protocols",
            "Cardiovascular endurance for competitive match play",
          ],
        },
        mindset: {
          label: "Mindset",
          statLabel: "Ethos",
          statValue: "Relentless Grit",
          title: "The Athlete Mindset",
          desc: "Victory begins before stepping onto the pitch. Consistency, recovery, and discipline determine long-term success.",
          items: [
            "Consistent daily routines & disciplined lifestyle",
            "Rest, recovery, and nutritional fueling",
            "Focus and calm execution under intense pressure",
          ],
        },
        community: {
          label: "Paaji Fitness",
          statLabel: "Community",
          statValue: "Roorkee & Digital",
          title: "Paaji Fitness Club Roorkee",
          desc: "Inspiring youth and fitness enthusiasts to embrace active lifestyles, sports participation, and healthy living.",
          items: [
            "Active fitness coaching and workout content",
            "Promoting youth participation in sports and athletics",
            "Building an inspiring, supportive fitness community",
          ],
        },
      },
      footerTag: "Official Athlete Brand Profile",
      footerBtn: "Partner on the Journey",
    },
    socials: {
      badge: "OFFICIAL CHANNELS",
      headline: "LET'S CONNECT",
      description: "Follow my journey and stay connected with me across social media platforms.",
      activeTitle: "Active & Verified Channels",
      visitInstagram: "Follow on Instagram",
      connectFacebook: "Connect on Facebook",
      subscribeYoutube: "Subscribe on YouTube",
      officialBadge: "Official Profile",
      subscribersLabel: "Paaji Fitness Club Roorkee",
    },
    collaboration: {
      badge: "WORK TOGETHER",
      headline: "Let's Create Something Together.",
      description:
        "Have an exciting idea, brand partnership, sponsorship opportunity, or creative project? Let's connect and make it happen.",
      inquireBtn: "Inquire About This",
      mainCta: "START A COLLABORATION",
      ctaSubtext: "Direct response within 24-48 business hours",
      cards: {
        brand: {
          title: "Brand Collaborations",
          subtitle: "Creative partnerships & promotions",
          desc: "Work with brands on creative promotions and campaigns. High-impact content creation for social platforms showcasing authentic use of fitness apparel, equipment, and lifestyle products.",
          deliverables: ["Sponsored Social Content", "Product Endorsements", "Campaign Features"],
        },
        sponsorship: {
          title: "Sponsorship Opportunities",
          subtitle: "Sports & athletic partnerships",
          desc: "Explore sponsorship and sports-related partnerships. Direct support for rugby competition kits, training gear, nutrition, and tournament representation with dedicated brand visibility.",
          deliverables: ["Jersey & Kit Branding", "Exclusive Athlete Ambassadorship", "Tournament Representation"],
        },
        events: {
          title: "Events & Appearances",
          subtitle: "Sports activities & appearances",
          desc: "Connect for events, activities and appearances. Guest appearances at athletic tournaments, fitness gym openings, youth sports clinics, workshops, and sports brand activations.",
          deliverables: ["Gym Openings & Expos", "Fitness Workshops", "Guest Athlete Appearance"],
        },
        creative: {
          title: "Creative Partnerships",
          subtitle: "Interesting ideas & projects",
          desc: "Work together on interesting ideas and projects. Open to sports documentaries, fitness photography shoots, cross-discipline athlete showcases, and bespoke collaborative merchandise.",
          deliverables: ["Editorial Photoshoots", "Podcast & Video Features", "Co-created Fitness Campaigns"],
        },
      },
    },
    contact: {
      badge: "START A CONVERSATION",
      headline: "GET IN TOUCH",
      description: "Have a project, collaboration opportunity, or just want to say hello? Feel free to reach out.",
      directTitle: "Direct Channels",
      directSubtitle: "Prefer direct messaging or email? Feel free to reach out on any platform below.",
      emailLabel: "Direct Email",
      instagramLabel: "Instagram DM",
      facebookLabel: "Facebook Profile",
      youtubeLabel: "YouTube Channel",
      statusTitle: "Availability Status",
      statusText:
        "Currently accepting proposals for sports sponsorships, brand partnerships, and fitness events for the 2026 athletic calendar.",
      labels: {
        fullName: "Full Name",
        email: "Email Address",
        subject: "Subject",
        collabType: "Collaboration Type",
        message: "Message",
        submitBtn: "Submit Collaboration Proposal",
        sendingBtn: "Sending Proposal...",
      },
      placeholders: {
        fullName: "e.g. John Doe",
        email: "e.g. john@brand.com",
        subject: "e.g. Brand Sponsorship Proposal",
        message: "Tell Akash about your proposal, brand, timeline, or idea...",
      },
      options: {
        brand: "Brand Collaboration",
        sponsorship: "Sponsorship",
        events: "Events & Appearances",
        creative: "Creative Partnership",
        general: "General Enquiry",
      },
      errors: {
        nameRequired: "Full Name is required.",
        nameInvalid: "Please enter a valid full name.",
        emailRequired: "Email address is required.",
        emailInvalid: "Please provide a valid email address.",
        subjectRequired: "Subject is required.",
        typeRequired: "Please select a collaboration category.",
        msgRequired: "Message content cannot be empty.",
        msgShort: "Message should be at least 10 characters.",
      },
      notifications: {
        unconfiguredTitle: "Backend Setup Notice",
        unconfiguredDesc:
          "To enable direct web form delivery, set VITE_FORMSPREE_KEY in .env.local. Your inquiry is ready to send directly via email below:",
        unconfiguredEmailPrompt: "Click to open your mail app with all details pre-filled:",
        emailClientBtn: "Send via Email Client",
        successTitle: "Proposal Sent Successfully!",
        successDesc: "Thank you for reaching out. Akash will review your inquiry and respond shortly.",
        errorTitle: "Submission Error",
        directEmailInstead: "Send via direct email instead →",
      },
    },
    footer: {
      tagline: "Passion. Dedication. Performance. Representing the athletic spirit on and off the field.",
      navHeading: "Navigation",
      collabTag: "Collaborations & Bookings",
      collabTitle: "Let's Build Something Together",
      collabDesc: "Open for brand sponsorships, athletic training partnerships, and event appearances.",
      collabBtn: "Explore Opportunities",
      backToTop: "Back to top",
      copyright: "© 2026 Akash Singh. All Rights Reserved.",
    },
  },
  hi: {
    nav: {
      home: "Home",
      about: "About",
      journey: "Sports Journey",
      socials: "Socials",
      collaboration: "Collaboration",
      contact: "Contact",
      letsConnect: "Connect Karein",
    },
    hero: {
      badge: "PERSONAL BRAND | SPORTS & FITNESS",
      headlineFirst: "AKASH",
      headlineSecond: "SINGH",
      subheading: "Passion. Dedication. Performance.",
      description:
        "Meri personal website par aapka swagat hai. Meri journey dekhiye, mujhse connect kijiye, aur aaiye saath mein kuch impactful create karte hain.",
      btnJourney: "Meri Journey Dekhein",
      btnCollab: "Saath Kaam Karein",
      scrollDown: "Neeche Scroll Karein",
      pillarRugby: "Rugby Competitor",
      pillarDiscipline: "Daily Conditioning",
      pillarCollab: "Collaborations Ke Liye Open",
    },
    about: {
      badge: "A LITTLE ABOUT ME",
      headline: "Beyond The Game.",
      description:
        "Hey, main hoon Akash Singh. Meri personal website par aapka swagat hai. Yahan main apni sports journey, passion, aur brand collaborations share karta hoon.",
      extended:
        "Sports aur fitness mere liye sirf ek game nahi, balki discipline, physical strength aur continuous growth ka rasta hai. Rugby pitch se lekar daily workouts tak, main har challenge mein poora dedication deta hoon.",
      philosophyTitle: "Athletic Philosophy",
      philosophyText:
        "Asli taqat rozana ki mehnat aur dedication se banti hai. Chahe rugby competition ki preparation ho ya daily fitness training, har kadam focus aur imaandari ke saath aage badhta hai.",
      athleteTag: "Rugby & Fitness Athlete",
      highlightCards: {
        journey: {
          title: "Personal Journey",
          subtitle: "Mehnat aur Hausla",
          desc: "Har training session character build karta hai. Apne fitness goals aur authentic athlete lifestyle ke prati dedicated.",
          tag: "Focus",
        },
        sports: {
          title: "Sports & Fitness",
          subtitle: "Rugby & Athletic Power",
          desc: "Rugby player aur fitness athlete, dedicated to speed, tactical agility, aur full physical power.",
          tag: "Discipline",
        },
        community: {
          title: "Community",
          subtitle: "Paaji Fitness Club",
          desc: "Roorkee aur online platforms par aspiring athletes aur fitness lovers ke saath lagatar connect rehna.",
          tag: "Impact",
        },
        collab: {
          title: "Brand Collaborations",
          subtitle: "Partnerships with Purpose",
          desc: "Fitness brands, sports apparel, aur nutrition brands ke saath milkar authentic campaigns karna.",
          tag: "Synergy",
        },
      },
      collabBannerTitle: "Kya aap collaborate karna chahte hain?",
      collabBannerDesc: "Sports sponsorships, brand campaigns, aur event appearances ke liye available.",
      collabBannerBtn: "Options Dekhein",
    },
    journey: {
      badge: "ATHLETIC FOUNDATION",
      headline: "SPORTS JOURNEY",
      subtitle:
        "Wo core pillars jo athletic mindset, rugby discipline, aur continuous daily improvement ko drive karte hain.",
      tabs: {
        rugby: {
          label: "Rugby Play",
          statLabel: "Specialty",
          statValue: "Rugby Competitor",
          title: "Rugby & Pitch Strategy",
          desc: "Rugby poori mental focus, body ki taqat aur fearless spirit maangti hai. Ground par har tackle teamwork aur himmat se jeeti jaati hai.",
          items: [
            "Tactical game awareness aur tezi se decision making",
            "Contact sports discipline aur physical resilience",
            "Speed endurance aur complete team coordination",
          ],
        },
        strength: {
          label: "Conditioning",
          statLabel: "Standard",
          statValue: "Daily Training",
          title: "Athletic Power & Conditioning",
          desc: "Rugby ke level ki taqat functional workouts, power lifting aur high-intensity conditioning se banti hai.",
          items: [
            "Athletic power aur explosiveness ke liye structured training",
            "Joint mobility aur injury prevention exercises",
            "High-intensity match play ke liye cardiovascular endurance",
          ],
        },
        mindset: {
          label: "Mindset",
          statLabel: "Ethos",
          statValue: "Relentless Grit",
          title: "The Athlete Mindset",
          desc: "Jeet ki taiyari pitch par aane se pehle shuru hoti hai. Consistency, recovery, aur discipline hi asli success dete hain.",
          items: [
            "Daily healthy habits aur consistent lifestyle discipline",
            "Proper recovery, sleep aur clean nutrition",
            "Pressure aur fatigue ke beech calm reh kar focus banana",
          ],
        },
        community: {
          label: "Paaji Fitness",
          statLabel: "Community",
          statValue: "Roorkee & Digital",
          title: "Paaji Fitness Club Roorkee",
          desc: "Youth aur fitness lovers ko motivate karna taaki wo sports aur healthy lifestyle ko apnayein.",
          items: [
            "Authentic fitness tips aur gym training content",
            "Youth ko sports aur fitness mein aage badhane ki prerna",
            "Ek strong, positive aur helpful fitness community create karna",
          ],
        },
      },
      footerTag: "Official Athlete Profile",
      footerBtn: "Journey Mein Partner Banein",
    },
    socials: {
      badge: "OFFICIAL CHANNELS",
      headline: "LET'S CONNECT",
      description: "Meri journey ko follow karein aur social media platforms par mujhse judey rahein.",
      activeTitle: "Active & Verified Profiles",
      visitInstagram: "Instagram Par Follow Karein",
      connectFacebook: "Facebook Par Connect Karein",
      subscribeYoutube: "YouTube Par Subscribe Karein",
      officialBadge: "Official Profile",
      subscribersLabel: "Paaji Fitness Club Roorkee",
    },
    collaboration: {
      badge: "WORK TOGETHER",
      headline: "Let's Create Something Together.",
      description:
        "Kya aapke paas koi brand partnership, sports sponsorship, ya creative idea hai? Aaiye connect karte hain aur saath mein kaam karte hain.",
      inquireBtn: "Is Baare Mein Baat Karein",
      mainCta: "START A COLLABORATION",
      ctaSubtext: "24-48 business hours ke andar direct response",
      cards: {
        brand: {
          title: "Brand Collaborations",
          subtitle: "Creative promotions aur campaigns",
          desc: "Brands ke saath milkar creative campaigns aur social media promotions karna. Fitness apparel, gym equipment aur sports nutrition products ka authentic showcase.",
          deliverables: ["Sponsored Social Content", "Product Endorsements", "Brand Campaign Shoot"],
        },
        sponsorship: {
          title: "Sponsorship Opportunities",
          subtitle: "Sports & athlete partnerships",
          desc: "Sports sponsorships aur athlete partnerships explore karein. Rugby competition kits, fitness training support aur tournaments mein dedicated brand visibility.",
          deliverables: ["Jersey & Kit Branding", "Exclusive Athlete Ambassadorship", "Tournaments Representation"],
        },
        events: {
          title: "Events & Appearances",
          subtitle: "Sports activities aur appearances",
          desc: "Sports events, gym openings, workshops aur tournaments ke liye guest appearance aur athlete engagement.",
          deliverables: ["Gym Openings & Sports Expos", "Fitness Workshops", "Special Guest Appearance"],
        },
        creative: {
          title: "Creative Partnerships",
          subtitle: "Naye ideas aur interesting projects",
          desc: "Interesting creative projects par milkar kaam karein. Sports documentaries, fitness photography shoots, aur collaborative athlete series.",
          deliverables: ["Editorial Photoshoots", "Podcast & Video Series", "Collaborative Fitness Projects"],
        },
      },
    },
    contact: {
      badge: "START A CONVERSATION",
      headline: "GET IN TOUCH",
      description: "Koi collaboration opportunity ho ya sirf baat karni ho, freely reach out karein.",
      directTitle: "Direct Channels",
      directSubtitle: "Aap direct social media messaging ya email ke zariye bhi contact kar sakte hain.",
      emailLabel: "Direct Email",
      instagramLabel: "Instagram DM",
      facebookLabel: "Facebook Profile",
      youtubeLabel: "YouTube Channel",
      statusTitle: "Current Status",
      statusText:
        "Abhi sports sponsorships, fitness brand campaigns aur event appearances ke proposals open hain.",
      labels: {
        fullName: "Aapka Poora Naam",
        email: "Email Address",
        subject: "Subject",
        collabType: "Collaboration Type",
        message: "Message",
        submitBtn: "Proposal Submit Karein",
        sendingBtn: "Proposal Bheja Jaa Raha Hai...",
      },
      placeholders: {
        fullName: "Jaise: Rahul Sharma",
        email: "Jaise: rahul@company.com",
        subject: "Jaise: Brand Sponsorship Proposal",
        message: "Apne proposal, brand, ya idea ke baare mein Akash ko batayein...",
      },
      options: {
        brand: "Brand Collaboration",
        sponsorship: "Sponsorship",
        events: "Events & Appearances",
        creative: "Creative Partnership",
        general: "General Enquiry",
      },
      errors: {
        nameRequired: "Kripya apna poora naam enter karein.",
        nameInvalid: "Kripya sahi naam enter karein.",
        emailRequired: "Email address required hai.",
        emailInvalid: "Kripya ek valid email address enter karein.",
        subjectRequired: "Subject likhna zaroori hai.",
        typeRequired: "Collaboration category select karein.",
        msgRequired: "Message khali nahi ho sakta.",
        msgShort: "Message kam se kam 10 characters ka hona chahiye.",
      },
      notifications: {
        unconfiguredTitle: "Backend Setup Information",
        unconfiguredDesc:
          "Web form delivery activate karne ke liye .env.local mein VITE_FORMSPREE_KEY set karein. Neeche diye gaye button se aap direct email app se bhej sakte hain:",
        unconfiguredEmailPrompt: "Click karke direct email open karein with pre-filled details:",
        emailClientBtn: "Email Client Se Bhejein",
        successTitle: "Proposal Successfully Send Ho Gaya!",
        successDesc: "Connect karne ke liye shukriya. Akash aur unki team jald hi aapse contact karegi.",
        errorTitle: "Submission Error",
        directEmailInstead: "Direct email ke zariye bhejein →",
      },
    },
    footer: {
      tagline: "Passion. Dedication. Performance. Ground par aur life mein athletic spirit ko represent karna.",
      navHeading: "Navigation",
      collabTag: "Collaborations & Bookings",
      collabTitle: "Aaiye Saath Milkar Kuch Create Karein",
      collabDesc: "Brand sponsorships, athletic training partnerships aur event appearances ke liye open.",
      collabBtn: "Opportunities Dekhein",
      backToTop: "Upar Jayein",
      copyright: "© 2026 Akash Singh. All Rights Reserved.",
    },
  },
};
