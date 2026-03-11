import { useState, useEffect, useRef } from 'react';
import { Play, ArrowUpRight } from 'lucide-react';
import { locationGroups, type Location } from '../../../data/locations';
import { t } from '../../../utils/i18n';

interface T7LocationsProps {
  onSelectLocation: (location: Location) => void;
}

export default function T7Locations({ onSelectLocation }: T7LocationsProps) {
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);

  // Get unique regions for filter tabs
  const regions = locationGroups
    .filter((g) => g.region !== 'Online Courses')
    .map((g) => g.region);

  // Get filtered locations
  const filteredLocations = (() => {
    if (activeFilter === 'all') {
      // Show a curated selection
      const targetNames = ['London', 'New York', 'Toronto', 'Bath', 'San Francisco', 'Edinburgh', 'Dublin', 'Berlin', 'Paris-Passy'];
      const curated: Location[] = [];
      for (const group of locationGroups) {
        for (const loc of group.locations) {
          if (targetNames.includes(loc.name)) {
            curated.push(loc);
          }
        }
      }
      return curated.slice(0, 6);
    }
    const group = locationGroups.find((g) => g.region === activeFilter);
    return group ? group.locations.slice(0, 6) : [];
  })();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.05 }
    );

    const elements = sectionRef.current?.querySelectorAll('[data-animate]');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeFilter]);

  return (
    <section ref={sectionRef} id="locations" className="relative bg-[#0A0A0A] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        {/* Section header */}
        <div data-animate className="opacity-0 translate-y-8 transition-all duration-700 mb-14">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#C8102E] font-semibold">
            {t('locations.ourDestinations')}
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-3xl">
            {t('locations.whereWillYourStory')}
          </h2>
          <p className="mt-5 text-white/40 font-light max-w-xl text-base sm:text-lg leading-relaxed">
            {t('locations.subtitle')}
          </p>
        </div>

        {/* Filter tabs */}
        <div
          data-animate
          className="opacity-0 translate-y-8 transition-all duration-700 delay-100 flex flex-wrap gap-2 mb-12"
        >
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-5 py-2 rounded-full text-[12px] font-medium tracking-wide border transition-all duration-300 ${
              activeFilter === 'all'
                ? 'border-[#C8102E] bg-[#C8102E]/10 text-[#FF6B7A]'
                : 'border-white/10 text-white/40 hover:border-white/20 hover:text-white/60'
            }`}
          >
            {t('locations.viewAll')}
          </button>
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setActiveFilter(region)}
              className={`px-5 py-2 rounded-full text-[12px] font-medium tracking-wide border transition-all duration-300 ${
                activeFilter === region
                  ? 'border-[#C8102E] bg-[#C8102E]/10 text-[#FF6B7A]'
                  : 'border-white/10 text-white/40 hover:border-white/20 hover:text-white/60'
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Location cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLocations.map((location, index) => (
            <button
              key={location.id}
              data-animate
              onClick={() => onSelectLocation(location)}
              className={`opacity-0 translate-y-8 transition-all duration-700 group text-left rounded-xl border border-white/[0.06] bg-[#111111] hover:border-[#C8102E]/30 hover:shadow-xl hover:shadow-red-900/5 hover:-translate-y-1`}
              style={{ transitionDelay: `${150 + index * 80}ms` }}
            >
              {/* Video placeholder / image */}
              <div className="relative aspect-video overflow-hidden rounded-t-xl bg-[#1A1A1A]">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-100 scale-90">
                    <Play className="w-4 h-4 text-white ml-0.5" />
                  </div>
                </div>
                {/* Duration tag */}
                <div className="absolute top-3 right-3 text-[10px] tracking-wider text-white/70 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md">
                  {location.flag} {location.country}
                </div>
              </div>

              {/* Card body */}
              <div className="p-5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A8A8A] font-medium">
                  {location.country}
                </span>
                <h3 className="mt-1.5 font-serif text-xl sm:text-2xl text-white group-hover:text-[#FF6B7A] transition-colors duration-300">
                  {location.name}
                </h3>
                <p className="mt-2 text-[13px] text-white/30 leading-relaxed line-clamp-2">
                  {location.description}
                </p>
              </div>

              {/* Card footer */}
              <div className="px-5 pb-5 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.15em] text-[#C8102E]/60 font-medium bg-[#C8102E]/5 px-3 py-1 rounded-full">
                  {t('locations.learnMore')}
                </span>
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-[#C8102E] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
