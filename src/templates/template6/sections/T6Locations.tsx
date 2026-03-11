import { useState } from 'react';
import { locationGroups, type Location } from '../../../data/locations';
import { MapPin } from 'lucide-react';
import { t } from '../../../utils/i18n';

interface T6LocationsProps {
  onSelectLocation: (location: Location) => void;
}

export default function T6Locations({ onSelectLocation }: T6LocationsProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Select 6 featured locations across different countries
  const featuredLocations: Location[] = [];
  const targetNames = ['London', 'New York', 'Toronto', 'Bath', 'San Francisco', 'Edinburgh', 'Dublin', 'Berlin'];

  for (const group of locationGroups) {
    for (const loc of group.locations) {
      if (targetNames.includes(loc.name) && featuredLocations.length < 6) {
        featuredLocations.push(loc);
      }
    }
  }

  // Fallback: if we didn't get enough, grab from the beginning
  if (featuredLocations.length < 6) {
    for (const group of locationGroups) {
      for (const loc of group.locations) {
        if (!featuredLocations.find((f) => f.id === loc.id) && featuredLocations.length < 6) {
          featuredLocations.push(loc);
        }
      }
    }
  }

  const handleScrollToLocations = () => {
    const el = document.getElementById('locations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="locations" className="bg-[#FFFBF0] py-28 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* Decorative line above */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-amber-600/40" />
            <div className="w-1.5 h-1.5 rotate-45 border border-amber-600/40" />
            <div className="w-12 h-px bg-amber-600/40" />
          </div>

          <span className="text-[11px] uppercase tracking-[0.4em] text-amber-700/70 font-light">
            {t('locations.ourDestinations')}
          </span>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl text-stone-800 leading-tight">
            {t('locations.whereWillYourStory')}
          </h2>

          <p className="mt-5 text-stone-500 font-light max-w-2xl mx-auto leading-relaxed">
            {t('locations.subtitle')}
          </p>

          {/* Decorative line below */}
          <div className="w-16 h-px bg-amber-600/30 mx-auto mt-8" />
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredLocations.map((location) => (
            <button
              key={location.id}
              onClick={() => onSelectLocation(location)}
              onMouseEnter={() => setHoveredId(location.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group text-left"
            >
              {/* Image Container */}
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-lg border-2 transition-all duration-500 ${
                  hoveredId === location.id
                    ? 'border-amber-600/50 shadow-lg'
                    : 'border-transparent'
                }`}
              >
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />

                {/* Location pin icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <MapPin className="w-4 h-4 text-amber-700" />
                </div>
              </div>

              {/* Text Content */}
              <div className="mt-5">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-lg">{location.flag}</span>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-stone-400 font-light">
                    {location.country}
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-stone-800 group-hover:text-amber-800 transition-colors duration-300">
                  {location.name}
                </h3>
              </div>
            </button>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-16 text-center">
          <button
            onClick={handleScrollToLocations}
            className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-stone-600 hover:text-amber-800 transition-colors duration-300 group"
          >
            <div className="w-8 h-px bg-stone-300 group-hover:bg-amber-600 group-hover:w-12 transition-all duration-300" />
            <span>{t('locations.viewAllDestinations')}</span>
            <div className="w-8 h-px bg-stone-300 group-hover:bg-amber-600 group-hover:w-12 transition-all duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
