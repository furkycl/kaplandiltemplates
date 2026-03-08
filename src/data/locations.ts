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

const createLocation = (
  name: string,
  country: string,
  region: string,
  flag: string
): Location => ({
  id: `${country.toLowerCase().replace(/\s+/g, '-')}-${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
  name,
  country,
  region,
  flag,
  image: `https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop`,
  video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  description: `Study English at our ${name} school. Experience world-class language education in one of the most vibrant cities. Our ${name} campus offers modern facilities, experienced teachers, and a diverse international student community.`,
  features: [
    'Modern classrooms with interactive technology',
    'Experienced and certified teachers',
    'International student community',
    'Cultural activities and excursions',
    'Accommodation assistance',
    'Certificate upon completion',
  ],
});

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
