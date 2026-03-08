export interface SiteContent {
  brand: {
    name: string;
    tagline: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    backgroundVideo: string;
    backgroundImage: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    features: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  programs: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  stats: {
    students: string;
    countries: string;
    schools: string;
    years: string;
  };
  testimonials: {
    name: string;
    country: string;
    text: string;
    image: string;
    program: string;
  }[];
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
  footer: {
    description: string;
    copyright: string;
    socialLinks: {
      platform: string;
      url: string;
    }[];
  };
}

export const siteContent: SiteContent = {
  brand: {
    name: 'Kaplan International TV',
    tagline: 'Your Journey to Global English Starts Here',
  },
  hero: {
    title: 'Learn English Around the World',
    subtitle: 'with Kaplan International Languages',
    description:
      'Explore our language schools across 8 countries. Watch student experiences, discover destinations, and start your international education journey today.',
    ctaPrimary: 'Apply Now',
    ctaSecondary: 'Explore Schools',
    backgroundVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    backgroundImage:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop',
  },
  about: {
    title: 'Why Study with Kaplan?',
    subtitle: 'World-Class Language Education Since 1938',
    description:
      'For over 80 years, Kaplan has been helping students achieve their goals through language education. With schools in the most exciting cities worldwide, we combine quality teaching with unforgettable cultural experiences.',
    features: [
      {
        icon: 'globe',
        title: 'Study in 8+ Countries',
        description:
          'Choose from over 35 schools across the USA, UK, Canada, Ireland, France, Germany, and Switzerland.',
      },
      {
        icon: 'book-open',
        title: 'K+ Learning System',
        description:
          'Our exclusive K+ learning system integrates classroom teaching with online tools and social learning.',
      },
      {
        icon: 'users',
        title: 'International Community',
        description:
          'Join students from 150+ nationalities and build a global network of friends and contacts.',
      },
      {
        icon: 'award',
        title: 'Accredited Programs',
        description:
          'All our schools are accredited by leading educational bodies ensuring the highest quality standards.',
      },
      {
        icon: 'home',
        title: 'Accommodation Options',
        description:
          'Choose from homestays, student residences, or apartments to suit your lifestyle and budget.',
      },
      {
        icon: 'trending-up',
        title: 'Proven Results',
        description:
          '97% of students recommend Kaplan. Our teaching methodology is designed for real-world language use.',
      },
    ],
  },
  programs: {
    title: 'Our Programs',
    subtitle: 'Find the Perfect Course for You',
    items: [
      {
        title: 'General English',
        description:
          'Improve your overall English skills with our most popular course. Focus on communication, vocabulary, and grammar.',
        icon: 'message-circle',
      },
      {
        title: 'Intensive English',
        description:
          'Accelerate your learning with additional lessons and focused study time. Perfect for fast progress.',
        icon: 'zap',
      },
      {
        title: 'Business English',
        description:
          'Develop professional communication skills for the global workplace.',
        icon: 'briefcase',
      },
      {
        title: 'Exam Preparation',
        description:
          'Prepare for IELTS, TOEFL, or Cambridge exams with specialized courses and practice tests.',
        icon: 'file-text',
      },
      {
        title: 'Academic Year',
        description:
          'Long-term study programs for deep language immersion. 5 to 9 months of intensive study abroad.',
        icon: 'calendar',
      },
      {
        title: 'Online Courses',
        description:
          'Learn from anywhere with our live online classes. Same quality teaching with flexible scheduling.',
        icon: 'monitor',
      },
    ],
  },
  stats: {
    students: '1M+',
    countries: '150+',
    schools: '35+',
    years: '85+',
  },
  testimonials: [
    {
      name: 'Maria Garcia',
      country: 'Spain',
      text: 'Studying at Kaplan London completely changed my life. I improved my English dramatically and made friends from all over the world.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      program: 'Intensive English - London',
    },
    {
      name: 'Takeshi Yamamoto',
      country: 'Japan',
      text: 'The K+ learning system is amazing. My IELTS score went from 5.5 to 7.0 in just 3 months at Kaplan Cambridge.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      program: 'IELTS Preparation - Cambridge',
    },
    {
      name: 'Ana Silva',
      country: 'Brazil',
      text: 'New York was the perfect city to study English. Kaplan organized incredible cultural activities and I got to experience the real NYC lifestyle.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      program: 'Academic Year - New York',
    },
  ],
  cta: {
    title: 'Ready to Start Your Journey?',
    description:
      'Take the first step towards your international education. Apply now and our team will help you find the perfect program and destination.',
    buttonText: 'Get Free Consultation',
  },
  footer: {
    description:
      'Kaplan International TV showcases Kaplan language schools worldwide. Discover destinations, watch student stories, and start your English learning journey.',
    copyright: `© ${new Date().getFullYear()} Kaplan International TV. All rights reserved.`,
    socialLinks: [
      { platform: 'facebook', url: '#' },
      { platform: 'instagram', url: '#' },
      { platform: 'youtube', url: '#' },
      { platform: 'twitter', url: '#' },
      { platform: 'linkedin', url: '#' },
    ],
  },
};
