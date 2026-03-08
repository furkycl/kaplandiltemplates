import { useState } from 'react';
import { MapPin, ChevronRight } from 'lucide-react';
import { locationGroups, type Location } from '../../../data/locations';
import { t } from '../../../utils/i18n';

interface T1LocationsProps {
  onSelectLocation: (location: Location) => void;
}

export default function T1Locations({ onSelectLocation }: T1LocationsProps) {
  const [activeRegion, setActiveRegion] = useState(locationGroups[0].region);

  const activeGroup = locationGroups.find((g) => g.region === activeRegion);

  return (
    <section id="locations" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            {t('locations.title')}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t('locations.subtitle')}
          </p>
        </div>

        {/* Region Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {locationGroups.map((group) => (
            <button
              key={group.region}
              onClick={() => setActiveRegion(group.region)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeRegion === group.region
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <span>{group.flag}</span>
              <span>{group.region}</span>
            </button>
          ))}
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {activeGroup?.locations.map((location) => (
            <button
              key={location.id}
              onClick={() => onSelectLocation(location)}
              className="group bg-white rounded-xl p-5 border border-gray-200 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 text-left"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                      {location.name}
                    </h3>
                    <p className="text-sm text-gray-500">{location.country}</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
