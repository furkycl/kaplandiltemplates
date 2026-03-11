import { useState } from 'react';
import { ChevronRight, Search, MapPin } from 'lucide-react';
import { locationGroups, type Location } from '../../../data/locations';
import { t } from '../../../utils/i18n';

interface T4LocationsProps {
  onSelectLocation: (location: Location) => void;
}

export default function T4Locations({ onSelectLocation }: T4LocationsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedRegions, setExpandedRegions] = useState<string[]>(
    locationGroups.map((g) => g.region)
  );

  const toggleRegion = (region: string) => {
    setExpandedRegions((prev) =>
      prev.includes(region) ? prev.filter((r) => r !== region) : [...prev, region]
    );
  };

  const filteredGroups = locationGroups
    .map((group) => ({
      ...group,
      locations: group.locations.filter(
        (loc) =>
          loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          loc.country.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((group) => group.locations.length > 0);

  return (
    <section id="locations" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-primary" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                {t('locations.globalNetwork')}
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              {t('locations.schoolDirectory')}
            </h2>
            <p className="text-slate-600 mt-2">
              {t('locations.directorySubtitle')}
            </p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={t('locations.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-none text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>
        </div>

        {/* Directory Table */}
        <div className="border border-slate-200">
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-12 bg-slate-100 border-b border-slate-200 px-6 py-3">
            <div className="col-span-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
              {t('locations.location')}
            </div>
            <div className="col-span-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
              {t('locations.country')}
            </div>
            <div className="col-span-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
              {t('locations.region')}
            </div>
            <div className="col-span-2 text-xs font-semibold uppercase tracking-wider text-slate-500 text-right">
              {t('locations.action')}
            </div>
          </div>

          {filteredGroups.map((group) => (
            <div key={group.region}>
              {/* Region Header */}
              <button
                onClick={() => toggleRegion(group.region)}
                className="w-full flex items-center justify-between px-6 py-3 bg-slate-50 border-b border-slate-200 hover:bg-slate-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{group.flag}</span>
                  <span className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                    {group.region}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    ({group.locations.length} {group.locations.length === 1 ? t('locations.school') : t('locations.schools')})
                  </span>
                </div>
                <ChevronRight
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    expandedRegions.includes(group.region) ? 'rotate-90' : ''
                  }`}
                />
              </button>

              {/* Location Rows */}
              {expandedRegions.includes(group.region) &&
                group.locations.map((location, idx) => (
                  <button
                    key={location.id}
                    onClick={() => onSelectLocation(location)}
                    className={`w-full grid grid-cols-1 md:grid-cols-12 items-center px-6 py-3.5 border-b border-slate-100 text-left transition-colors duration-150 hover:bg-blue-50 group ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
                    }`}
                  >
                    <div className="md:col-span-4 flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-slate-400 group-hover:text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-slate-900 group-hover:text-primary">
                        {location.name}
                      </span>
                    </div>
                    <div className="md:col-span-3">
                      <span className="text-sm text-slate-600">{location.country}</span>
                    </div>
                    <div className="md:col-span-3">
                      <span className="text-sm text-slate-500">{location.region}</span>
                    </div>
                    <div className="md:col-span-2 flex items-center justify-end gap-1">
                      <span className="text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        {t('locations.viewDetails')}
                      </span>
                      <ChevronRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </button>
                ))}
            </div>
          ))}

          {filteredGroups.length === 0 && (
            <div className="px-6 py-12 text-center">
              <p className="text-sm text-slate-500">{t('locations.noResults')}</p>
            </div>
          )}
        </div>

        {/* Summary */}
        <div className="mt-6 flex items-center justify-between text-xs text-slate-400">
          <span>
            Showing {filteredGroups.reduce((acc, g) => acc + g.locations.length, 0)} locations across{' '}
            {filteredGroups.length} regions
          </span>
          <span>Last updated: {new Date().toLocaleDateString()}</span>
        </div>
      </div>
    </section>
  );
}
