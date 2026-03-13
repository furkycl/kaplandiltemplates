export interface Location {
  id: string;
  name: string;
  country: string;
  region: string;
  image: string;
  video: string;
  description: string;
  features: string[];
  flag: string;
}

export interface LocationGroup {
  region: string;
  flag: string;
  locations: Location[];
}

// City-specific Unsplash images for professional presentation
const cityImages: Record<string, string> = {
  // United States
  'Boston': 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&h=400&fit=crop',
  'Chicago': 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=600&h=400&fit=crop',
  'Los Angeles': 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=600&h=400&fit=crop',
  'New York': 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop',
  'New York 30+': 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=600&h=400&fit=crop',
  'San Francisco': 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop',
  'Santa Barbara': 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop',
  // Canada
  'Toronto': 'https://images.unsplash.com/photo-1517090504332-eeb4037bc1c3?w=600&h=400&fit=crop',
  'Toronto 30+': 'https://images.unsplash.com/photo-1541981479-d4af38be3991?w=600&h=400&fit=crop',
  'Vancouver': 'https://images.unsplash.com/photo-1559511260-66a68e0c5e5e?w=600&h=400&fit=crop',
  // United Kingdom
  'Bath': 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=600&h=400&fit=crop',
  'Bournemouth': 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=600&h=400&fit=crop',
  'Bournemouth 30+': 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=600&h=400&fit=crop',
  'Cambridge': 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop',
  'Edinburgh': 'https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=600&h=400&fit=crop',
  'Liverpool': 'https://images.unsplash.com/photo-1560435079-10a5e0e3d11d?w=600&h=400&fit=crop',
  'Liverpool 30+': 'https://images.unsplash.com/photo-1560435079-10a5e0e3d11d?w=600&h=400&fit=crop',
  'London': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop',
  'London 30+': 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=600&h=400&fit=crop',
  'Manchester': 'https://images.unsplash.com/photo-1515586838455-8f8045940b76?w=600&h=400&fit=crop',
  'Oxford': 'https://images.unsplash.com/photo-1590060436520-bf38d3c4ab99?w=600&h=400&fit=crop',
  'Torquay': 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop',
  'Ardingly': 'https://images.unsplash.com/photo-1543935377-5e2f0633e70c?w=600&h=400&fit=crop',
  'Brighton': 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&h=400&fit=crop',
  'London Central': 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=600&h=400&fit=crop',
  'London City': 'https://images.unsplash.com/photo-1448906654166-444d494666b3?w=600&h=400&fit=crop',
  'London Woldingham': 'https://images.unsplash.com/photo-1543935377-5e2f0633e70c?w=600&h=400&fit=crop',
  // France
  'Lyon': 'https://images.unsplash.com/photo-1524396309943-e03f5249f002?w=600&h=400&fit=crop',
  'Nice': 'https://images.unsplash.com/photo-1491166617655-0723a0999cfc?w=600&h=400&fit=crop',
  'Biarritz': 'https://images.unsplash.com/photo-1558626999-1cebdb4dcad4?w=600&h=400&fit=crop',
  'Nice Host Family': 'https://images.unsplash.com/photo-1491166617655-0723a0999cfc?w=600&h=400&fit=crop',
  'Nice Shared': 'https://images.unsplash.com/photo-1491166617655-0723a0999cfc?w=600&h=400&fit=crop',
  'Nice Single Ensuite': 'https://images.unsplash.com/photo-1491166617655-0723a0999cfc?w=600&h=400&fit=crop',
  'Paris-Igny (Groups Only)': 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop',
  'Paris-Passy': 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&h=400&fit=crop',
  // Germany
  'Berlin': 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=600&h=400&fit=crop',
  'Freiburg': 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?w=600&h=400&fit=crop',
  'Berlin-Wannsee': 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=600&h=400&fit=crop',
  'Frankfurt-Lahntal': 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop',
  'Heidelberg': 'https://images.unsplash.com/photo-1575986767340-5d17ae767ab0?w=600&h=400&fit=crop',
  // Switzerland
  'Montreux': 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=600&h=400&fit=crop',
  'Engelberg': 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=400&fit=crop',
  'Leysin': 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=600&h=400&fit=crop',
  'Riviera': 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=600&h=400&fit=crop',
  // Ireland
  'Dublin': 'https://images.unsplash.com/photo-1549918864-48ac978761a4?w=600&h=400&fit=crop',
  // Online
  'Online Courses': 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&h=400&fit=crop',
};

// City-specific descriptions for professional cards
const cityDescriptions: Record<string, string> = {
  'London': 'The world\'s most iconic city. Study English at the heart of global culture, history, and opportunity.',
  'Edinburgh': 'Scotland\'s majestic capital. A UNESCO City of Literature with dramatic castles and cobblestone streets.',
  'Manchester': 'A vibrant northern powerhouse famous for music, sport and innovation.',
  'Oxford': 'The city of dreaming spires. Study in one of the world\'s most prestigious academic environments.',
  'Cambridge': 'Historic university city with stunning architecture and a rich academic tradition.',
  'Bath': 'An elegant Georgian city with Roman heritage and stunning limestone architecture.',
  'Brighton': 'A seaside gem with bohemian spirit and a thriving cultural scene.',
  'Liverpool': 'A port city with legendary culture, music heritage, and passionate locals.',
  'Torquay': 'The English Riviera — a charming coastal town with palm-lined promenades.',
  'New York': 'The city that never sleeps. Immerse yourself in American English at the centre of the world.',
  'San Francisco': 'Bay views, tech innovation and diverse culture in the innovation capital.',
  'Los Angeles': 'Sun-soaked beaches, Hollywood glamour and an unbeatable Californian lifestyle.',
  'Boston': 'America\'s walking city with world-class universities and rich colonial history.',
  'Chicago': 'Architectural marvel on Lake Michigan with world-class arts and culture.',
  'Santa Barbara': 'The American Riviera — red-tiled roofs, sandy beaches and mountain backdrops.',
  'Toronto': 'Canada\'s multicultural powerhouse. Safe, diverse, and world-class.',
  'Vancouver': 'Ocean meets mountains. An extraordinary Pacific Coast lifestyle.',
  'Dublin': 'Friendly locals, literary heritage and a world-famous pub culture.',
  'Berlin': 'Europe\'s creative capital. History, art and nightlife in an affordable world city.',
  'Heidelberg': 'A romantic university town on the Neckar River with a famous castle.',
  'Freiburg': 'Germany\'s sunniest city, nestled at the edge of the Black Forest.',
  'Lyon': 'France\'s gastronomic capital with Renaissance architecture and vibrant culture.',
  'Nice': 'The jewel of the French Riviera with azure waters and year-round sunshine.',
  'Biarritz': 'An elegant Atlantic surf town where Basque culture meets French chic.',
  'Montreux': 'A lakeside resort town surrounded by Swiss Alps and vineyards.',
  'Engelberg': 'An alpine paradise in central Switzerland with stunning mountain scenery.',
  'Leysin': 'A charming mountain village in the Swiss Alps above Lake Geneva.',
};

const defaultImage = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop';

const createLocation = (
  name: string,
  country: string,
  region: string,
  flag: string
): Location => {
  // Find a matching image - check exact name first, then base city name
  const baseName = name.replace(/ 30\+$/, '').replace(/ Host Family$/, '').replace(/ Shared$/, '').replace(/ Single Ensuite$/, '');
  const image = cityImages[name] || cityImages[baseName] || defaultImage;
  const description = cityDescriptions[name] || cityDescriptions[baseName] ||
    `Study at our ${name} school. Experience world-class language education in one of the most vibrant destinations.`;

  return {
    id: `${country.toLowerCase().replace(/\s+/g, '-')}-${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    name,
    country,
    region,
    flag,
    image,
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description,
    features: [
      'Modern classrooms with interactive technology',
      'Experienced and certified teachers',
      'International student community',
      'Cultural activities and excursions',
      'Accommodation assistance',
      'Certificate upon completion',
    ],
  };
};

export const locationGroups: LocationGroup[] = [
  {
    region: 'United States',
    flag: '🇺🇸',
    locations: [
      createLocation('Boston', 'United States', 'North America', '🇺🇸'),
      createLocation('Chicago', 'United States', 'North America', '🇺🇸'),
      createLocation('Los Angeles', 'United States', 'North America', '🇺🇸'),
      createLocation('New York', 'United States', 'North America', '🇺🇸'),
      createLocation('New York 30+', 'United States', 'North America', '🇺🇸'),
      createLocation('San Francisco', 'United States', 'North America', '🇺🇸'),
      createLocation('Santa Barbara', 'United States', 'North America', '🇺🇸'),
    ],
  },
  {
    region: 'Canada',
    flag: '🇨🇦',
    locations: [
      createLocation('Toronto', 'Canada', 'North America', '🇨🇦'),
      createLocation('Toronto 30+', 'Canada', 'North America', '🇨🇦'),
      createLocation('Vancouver', 'Canada', 'North America', '🇨🇦'),
    ],
  },
  {
    region: 'United Kingdom',
    flag: '🇬🇧',
    locations: [
      createLocation('Bath', 'United Kingdom', 'Europe', '🇬🇧'),
      createLocation('Bournemouth', 'United Kingdom', 'Europe', '🇬🇧'),
      createLocation('Bournemouth 30+', 'United Kingdom', 'Europe', '🇬🇧'),
      createLocation('Cambridge', 'United Kingdom', 'Europe', '🇬🇧'),
      createLocation('Edinburgh', 'United Kingdom', 'Europe', '🇬🇧'),
      createLocation('Liverpool', 'United Kingdom', 'Europe', '🇬🇧'),
      createLocation('Liverpool 30+', 'United Kingdom', 'Europe', '🇬🇧'),
      createLocation('London', 'United Kingdom', 'Europe', '🇬🇧'),
      createLocation('London 30+', 'United Kingdom', 'Europe', '🇬🇧'),
      createLocation('Manchester', 'United Kingdom', 'Europe', '🇬🇧'),
      createLocation('Oxford', 'United Kingdom', 'Europe', '🇬🇧'),
      createLocation('Torquay', 'United Kingdom', 'Europe', '🇬🇧'),
      createLocation('Ardingly', 'United Kingdom', 'Europe', '🇬🇧'),
      createLocation('Brighton', 'United Kingdom', 'Europe', '🇬🇧'),
      createLocation('London Central', 'United Kingdom', 'Europe', '🇬🇧'),
      createLocation('London City', 'United Kingdom', 'Europe', '🇬🇧'),
      createLocation('London Woldingham', 'United Kingdom', 'Europe', '🇬🇧'),
    ],
  },
  {
    region: 'France',
    flag: '🇫🇷',
    locations: [
      createLocation('Lyon', 'France', 'Europe', '🇫🇷'),
      createLocation('Nice', 'France', 'Europe', '🇫🇷'),
      createLocation('Biarritz', 'France', 'Europe', '🇫🇷'),
      createLocation('Nice Host Family', 'France', 'Europe', '🇫🇷'),
      createLocation('Nice Shared', 'France', 'Europe', '🇫🇷'),
      createLocation('Nice Single Ensuite', 'France', 'Europe', '🇫🇷'),
      createLocation('Paris-Igny (Groups Only)', 'France', 'Europe', '🇫🇷'),
      createLocation('Paris-Passy', 'France', 'Europe', '🇫🇷'),
    ],
  },
  {
    region: 'Germany',
    flag: '🇩🇪',
    locations: [
      createLocation('Berlin', 'Germany', 'Europe', '🇩🇪'),
      createLocation('Freiburg', 'Germany', 'Europe', '🇩🇪'),
      createLocation('Berlin-Wannsee', 'Germany', 'Europe', '🇩🇪'),
      createLocation('Frankfurt-Lahntal', 'Germany', 'Europe', '🇩🇪'),
      createLocation('Heidelberg', 'Germany', 'Europe', '🇩🇪'),
    ],
  },
  {
    region: 'Switzerland',
    flag: '🇨🇭',
    locations: [
      createLocation('Montreux', 'Switzerland', 'Europe', '🇨🇭'),
      createLocation('Engelberg', 'Switzerland', 'Europe', '🇨🇭'),
      createLocation('Leysin', 'Switzerland', 'Europe', '🇨🇭'),
      createLocation('Riviera', 'Switzerland', 'Europe', '🇨🇭'),
    ],
  },
  {
    region: 'Ireland',
    flag: '🇮🇪',
    locations: [
      createLocation('Dublin', 'Ireland', 'Europe', '🇮🇪'),
    ],
  },
  {
    region: 'Online Courses',
    flag: '🌐',
    locations: [
      createLocation('Online Courses', 'Online', 'Online', '🌐'),
    ],
  },
];

export const allLocations: Location[] = locationGroups.flatMap(
  (group) => group.locations
);

export const countries = locationGroups.map((group) => group.region);
