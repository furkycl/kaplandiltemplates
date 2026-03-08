export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  embedUrl: string;
  category: string;
  duration: string;
}

export const videos: Video[] = [
  {
    id: 'v1',
    title: 'Why Study with Kaplan International?',
    description: 'Discover why thousands of students choose Kaplan International Languages every year to achieve their language learning goals.',
    thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=340&fit=crop',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'About Kaplan',
    duration: '3:45',
  },
  {
    id: 'v2',
    title: 'Student Life in London',
    description: 'Experience a day in the life of a Kaplan student studying English in London.',
    thumbnail: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=340&fit=crop',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'Student Life',
    duration: '5:20',
  },
  {
    id: 'v3',
    title: 'Learning English in New York',
    description: 'See what it is like to study English at our New York campus.',
    thumbnail: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=340&fit=crop',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'Destinations',
    duration: '4:15',
  },
  {
    id: 'v4',
    title: 'Kaplan K+ Learning System',
    description: 'Learn about our exclusive K+ learning system that combines classroom teaching with online and social learning.',
    thumbnail: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=340&fit=crop',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'Programs',
    duration: '2:50',
  },
  {
    id: 'v5',
    title: 'Study Abroad: Toronto Experience',
    description: 'Follow international students as they explore Toronto while studying English at Kaplan.',
    thumbnail: 'https://images.unsplash.com/photo-1517090504332-af2e14678c68?w=600&h=340&fit=crop',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'Destinations',
    duration: '6:00',
  },
  {
    id: 'v6',
    title: 'Success Stories: From Student to Professional',
    description: 'Hear from Kaplan alumni who transformed their careers through language education.',
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=340&fit=crop',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'Success Stories',
    duration: '7:30',
  },
];

export const videoCategories = [...new Set(videos.map((v) => v.category))];
