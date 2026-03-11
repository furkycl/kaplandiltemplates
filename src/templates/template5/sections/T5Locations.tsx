import { useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { locationGroups, type Location } from '../../../data/locations';
import { t } from '../../../utils/i18n';

interface T5LocationsProps {
  onSelectLocation: (location: Location) => void;
}

export default function T5Locations({ onSelectLocation }: T5LocationsProps) {
  const [expandedRegion, setExpandedRegion] = useState<string | null>(null);

  const toggleRegion = (region: string) => {
    setExpandedRegion(expandedRegion === region ? null : region);
  };

  return (
    <section id="locations" className="bg-[#0a0a0a] py-24 sm:py-32 lg:py-40">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section header */}
        <div className="mb-20 lg:mb-28">
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-light">
            {t('locations.destinations')}
          </span>
          <h2 className="mt-6 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tighter leading-none">
            {t('locations.whereTo').split('\n')[0] || t('locations.whereTo')}
            <br />
            <span className="text-secondary">{t('locations.whereTo').split('\n')[1] || ''}</span>
          </h2>
        </div>

        {/* Location list - typographic */}
        <div className="space-y-0">
          {locationGroups.map((group, groupIndex) => (
            <div
              key={group.region}
              className="border-t border-white/10 first:border-t-0"
            >
              {/* Country header */}
              <button
                onClick={() => toggleRegion(group.region)}
                className="w-full flex items-center justify-between py-8 sm:py-10 group cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <span className="text-[10px] font-light text-white/20 tracking-widest">
                    {String(groupIndex + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight group-hover:text-secondary transition-colors duration-300">
                    {group.region}
                  </h3>
                  <span className="text-sm text-white/30 font-light">
                    {group.locations.length} {group.locations.length === 1 ? t('locations.school') : t('locations.schools')}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{group.flag}</span>
                  <ArrowRight
                    className={`w-5 h-5 text-white/30 transform transition-transform duration-300 ${
                      expandedRegion === group.region ? 'rotate-90' : ''
                    } group-hover:text-secondary`}
                  />
                </div>
              </button>

              {/* Expanded locations */}
              {expandedRegion === group.region && (
                <div className="pb-10 pl-10 sm:pl-16 lg:pl-20">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-1">
                    {group.locations.map((location) => (
                      <button
                        key={location.id}
                        onClick={() => onSelectLocation(location)}
                        className="group flex items-center gap-3 py-3 text-left"
                      >
                        <MapPin className="w-3 h-3 text-white/20 group-hover:text-secondary transition-colors duration-300 flex-shrink-0" />
                        <span className="text-sm sm:text-base font-light text-white/60 group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                          {location.name}
                        </span>
                        <ArrowRight className="w-3 h-3 text-secondary opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
