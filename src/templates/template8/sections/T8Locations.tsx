import { useState, useRef } from 'react';
import { MapPin, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { locationGroups, type Location } from '../../../data/locations';
import { t } from '../../../utils/i18n';

interface T8LocationsProps {
  onSelectLocation: (location: Location) => void;
}

export default function T8Locations({ onSelectLocation }: T8LocationsProps) {
  const [activeRegion, setActiveRegion] = useState<string>('all');
  const scrollRef = useRef<HTMLDivElement>(null);

  const allLocations = locationGroups.flatMap((g) => g.locations);

  const filteredLocations =
    activeRegion === 'all'
      ? allLocations.slice(0, 12)
      : locationGroups.find((g) => g.region === activeRegion)?.locations || [];

  const scrollFilters = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section id="locations" className="relative py-24 sm:py-32">
      {/* Background accent blobs */}
      <div className="absolute top-0 left-[10%] w-[40%] h-[40%] rounded-full bg-purple-600/[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-[10%] w-[30%] h-[30%] rounded-full bg-blue-600/[0.04] blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[11px] uppercase tracking-[0.3em] text-purple-400/70 font-medium mb-4">
            {t('locations.globalNetwork')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent">
              {t('locations.title')}
            </span>
          </h2>
          <p className="mt-4 text-white/40 max-w-xl mx-auto text-base leading-relaxed">
            {t('locations.subtitle')}
          </p>
        </div>

        {/* Filter Chips */}
        <div className="relative mb-10">
          {/* Scroll Arrows */}
          <button
            onClick={() => scrollFilters('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-[#09090b]/80 border border-white/[0.08] rounded-full flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-all duration-200 -ml-2 hidden sm:flex"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollFilters('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-[#09090b]/80 border border-white/[0.08] rounded-full flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-all duration-200 -mr-2 hidden sm:flex"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-2 overflow-x-auto scrollbar-hide px-2 sm:px-8 pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* All chip */}
            <button
              onClick={() => setActiveRegion('all')}
              className={`shrink-0 px-4 py-2 rounded-xl text-[13px] font-medium transition-all duration-300 border ${
                activeRegion === 'all'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 border-transparent text-white shadow-lg shadow-purple-500/20'
                  : 'bg-white/[0.03] border-white/[0.08] text-white/50 hover:text-white hover:border-white/[0.15] hover:bg-white/[0.06]'
              }`}
            >
              {t('locations.viewAll')}
            </button>
            {locationGroups.map((group) => (
              <button
                key={group.region}
                onClick={() => setActiveRegion(group.region)}
                className={`shrink-0 px-4 py-2 rounded-xl text-[13px] font-medium transition-all duration-300 border ${
                  activeRegion === group.region
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 border-transparent text-white shadow-lg shadow-purple-500/20'
                    : 'bg-white/[0.03] border-white/[0.08] text-white/50 hover:text-white hover:border-white/[0.15] hover:bg-white/[0.06]'
                }`}
              >
                <span className="mr-1.5">{group.flag}</span>
                {group.region}
              </button>
            ))}
          </div>
        </div>

        {/* Location Cards - Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredLocations.map((location, index) => {
            const isLarge = index === 0 || index === 3;
            return (
              <button
                key={location.id}
                onClick={() => onSelectLocation(location)}
                className={`group relative text-left overflow-hidden rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-purple-500/30 backdrop-blur-sm transition-all duration-500 hover:scale-[1.01] hover:shadow-xl hover:shadow-purple-500/5 ${
                  isLarge ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/30 to-transparent" />

                  {/* Flag badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur-md border border-white/[0.1] text-[12px] text-white/80">
                    <span className="mr-1">{location.flag}</span>
                    {location.country}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-purple-200 transition-colors duration-300">
                        {location.name}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-1 text-[12px] text-white/30">
                        <MapPin className="w-3 h-3" />
                        <span>{location.region}</span>
                      </div>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:border-transparent transition-all duration-300">
                      <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setActiveRegion('all')}
            className="inline-flex items-center gap-2 text-[13px] text-white/40 hover:text-purple-300 transition-colors duration-300 group"
          >
            <span>{t('locations.viewAllDestinations')}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
