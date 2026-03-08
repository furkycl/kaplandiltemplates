import { MapPin } from 'lucide-react';
import { locationGroups, type Location } from '../../../data/locations';
import { t } from '../../../utils/i18n';

interface T2LocationsProps {
  onSelectLocation: (location: Location) => void;
}

export default function T2Locations({ onSelectLocation }: T2LocationsProps) {
  return (
    <section id="locations" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-block bg-primary-light/60 text-primary text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-sm mb-4">
            Global Campuses
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t('locations.title')}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t('locations.subtitle')}
          </p>
        </div>

        {/* Country Sections */}
        <div className="space-y-10">
          {locationGroups.map((group) => (
            <div key={group.region}>
              {/* Country Header */}
              <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-primary/20">
                <span className="text-2xl">{group.flag}</span>
                <h3 className="text-xl font-bold text-gray-900">
                  {group.region}
                </h3>
                <span className="text-sm text-gray-400 font-medium">
                  ({group.locations.length} {group.locations.length === 1 ? 'school' : 'schools'})
                </span>
              </div>

              {/* Location Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                {group.locations.map((location) => (
                  <button
                    key={location.id}
                    onClick={() => onSelectLocation(location)}
                    className="group bg-gray-50 hover:bg-primary hover:text-white rounded-md px-4 py-3 border border-gray-200 hover:border-primary text-left transition-all duration-200"
                  >
                    <div className="flex items-center gap-2.5">
                      <MapPin className="w-4 h-4 text-primary group-hover:text-white shrink-0 transition-colors" />
                      <div className="min-w-0">
                        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-white truncate transition-colors">
                          {location.name}
                        </h4>
                        <p className="text-xs text-gray-400 group-hover:text-white/70 transition-colors">
                          {location.country}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
