import { useRef } from 'react';
import { t } from '../../../utils/i18n';
import { locationGroups, type Location } from '../../../data/locations';
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

interface T3LocationsProps {
  onSelectLocation: (location: Location) => void;
}

function ScrollRow({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.6;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative group/row">
      {/* Scroll buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/70 backdrop-blur-sm border border-white/10 text-white/80 hover:text-white hover:bg-black/90 flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-all duration-300 -translate-x-1/2"
        aria-label={`Scroll ${label} left`}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/70 backdrop-blur-sm border border-white/10 text-white/80 hover:text-white hover:bg-black/90 flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-all duration-300 translate-x-1/2"
        aria-label={`Scroll ${label} right`}
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {children}
      </div>
    </div>
  );
}

export default function T3Locations({ onSelectLocation }: T3LocationsProps) {
  return (
    <section id="locations" className="relative py-20 sm:py-28 bg-gray-950">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-purple-900/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4">
            <span className="bg-gradient-to-r from-white via-purple-200 to-accent bg-clip-text text-transparent">
              {t('locations.title')}
            </span>
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            {t('locations.subtitle')}
          </p>
        </div>

        {/* Location rows by country */}
        <div className="space-y-10">
          {locationGroups.map((group) => (
            <div key={group.region}>
              {/* Region header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{group.flag}</span>
                <h3 className="text-xl font-bold text-white/90">
                  {group.region}
                </h3>
                <div className="flex-1 h-px bg-white/5" />
                <span className="text-sm text-white/30">
                  {group.locations.length} {group.locations.length === 1 ? 'school' : 'schools'}
                </span>
              </div>

              <ScrollRow label={group.region}>
                {group.locations.map((location) => (
                  <button
                    key={location.id}
                    onClick={() => onSelectLocation(location)}
                    className="group flex-shrink-0 w-56 sm:w-64 rounded-xl overflow-hidden bg-white/[0.03] border border-white/[0.06] hover:border-purple-500/30 hover:bg-white/[0.06] transition-all duration-500 hover:scale-[1.03] hover:shadow-xl hover:shadow-purple-500/10 text-left"
                  >
                    {/* Image */}
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <img
                        src={location.image}
                        alt={location.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      {/* Flag badge */}
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-sm">
                        {location.flag}
                      </div>
                      {/* Location name on image */}
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                          <span className="text-sm font-semibold text-white truncate">
                            {location.name}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="p-3">
                      <p className="text-xs text-white/40 line-clamp-2">
                        {location.description.slice(0, 80)}...
                      </p>
                    </div>
                  </button>
                ))}
              </ScrollRow>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
