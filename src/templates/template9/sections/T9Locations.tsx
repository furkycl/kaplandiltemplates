import { useRef } from 'react';
import { locationGroups, type Location } from '../../../data/locations';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { t } from '../../../utils/i18n';

interface T9LocationsProps {
  onSelectLocation: (location: Location) => void;
}

export default function T9Locations({ onSelectLocation }: T9LocationsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Pick featured locations across different countries
  const featuredLocations: Location[] = [];
  const targetNames = [
    'London', 'New York', 'Toronto', 'Edinburgh', 'San Francisco',
    'Bath', 'Dublin', 'Berlin', 'Vancouver', 'Cambridge',
  ];

  for (const group of locationGroups) {
    for (const loc of group.locations) {
      if (targetNames.includes(loc.name) && featuredLocations.length < 10) {
        featuredLocations.push(loc);
      }
    }
  }

  // Fallback
  if (featuredLocations.length < 8) {
    for (const group of locationGroups) {
      for (const loc of group.locations) {
        if (!featuredLocations.find((f) => f.id === loc.id) && featuredLocations.length < 10) {
          featuredLocations.push(loc);
        }
      }
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  // Gradient color sets for card headers
  const gradients = [
    'from-orange-600 to-orange-500',
    'from-lime-700 to-lime-600',
    'from-stone-700 to-stone-600',
    'from-orange-700 to-amber-600',
    'from-lime-800 to-emerald-700',
    'from-stone-600 to-stone-500',
    'from-orange-600 to-red-600',
    'from-lime-600 to-green-600',
    'from-stone-800 to-stone-700',
    'from-orange-500 to-amber-500',
  ];

  return (
    <section id="locations" className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Split header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-orange-700" />
              <span className="text-orange-700 uppercase tracking-widest text-xs font-medium">
                {t('locations.ourDestinations')}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1a1a1a] tracking-tight">
              {t('locations.title')}
            </h2>
            <p className="mt-3 text-stone-500 text-base max-w-lg">
              {t('locations.subtitle')}
            </p>
          </div>
          <button
            onClick={scrollRight}
            className="flex items-center gap-2 text-orange-700 hover:text-orange-800 text-sm font-medium transition-colors duration-300 group flex-shrink-0"
          >
            <span>{t('locations.viewAll')}</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pl-6 lg:pl-[max(1.5rem,calc((100vw-1280px)/2+2.5rem))] pr-6 pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {featuredLocations.map((location, i) => (
          <button
            key={location.id}
            onClick={() => onSelectLocation(location)}
            className="flex-shrink-0 w-72 sm:w-80 snap-start text-left group"
          >
            <div className="bg-stone-50 border border-stone-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-stone-300 transition-all duration-400 h-full flex flex-col">
              {/* Gradient Header with city name */}
              <div className={`relative bg-gradient-to-br ${gradients[i % gradients.length]} px-6 py-10`}>
                <span className="block text-white/60 text-xs uppercase tracking-widest mb-1">
                  {location.country}
                </span>
                <h3 className="text-white font-serif text-2xl tracking-tight">
                  {location.name}
                </h3>
                {/* Decorative circle */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10" />
              </div>

              {/* Card body */}
              <div className="p-5 flex flex-col flex-1">
                {/* Flag + Country */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">{location.flag}</span>
                  <span className="text-stone-500 text-sm">{location.country}</span>
                </div>

                {/* Description (truncated) */}
                <p className="text-stone-400 text-sm leading-relaxed line-clamp-3 flex-1">
                  {location.description}
                </p>

                {/* Learn More link */}
                <div className="mt-4 pt-3 border-t border-stone-200/70">
                  <span className="inline-flex items-center gap-1.5 text-orange-700 text-sm font-medium group-hover:gap-2.5 transition-all duration-300">
                    {t('locations.learnMore')}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
