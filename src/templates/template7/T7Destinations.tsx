import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, ArrowRight } from 'lucide-react';
import { allLocations } from '../../data/locations';
import { t } from '../../utils/i18n';
import T7Navbar from './sections/T7Navbar';
import T7Footer from './sections/T7Footer';

const regionTabs = [
  { label: 'All', filter: '' },
  { label: 'UK', filter: 'United Kingdom' },
  { label: 'USA', filter: 'United States' },
  { label: 'Canada', filter: 'Canada' },
  { label: 'Ireland', filter: 'Ireland' },
  { label: 'France', filter: 'France' },
  { label: 'Germany', filter: 'Germany' },
  { label: 'Switzerland', filter: 'Switzerland' },
];

export default function T7Destinations() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('');

  const filtered = useMemo(() => {
    let locs = allLocations;
    if (activeTab) locs = locs.filter((l) => l.country === activeTab);
    if (search.trim()) {
      const q = search.toLowerCase();
      locs = locs.filter(
        (l) => l.name.toLowerCase().includes(q) || l.country.toLowerCase().includes(q)
      );
    }
    return locs;
  }, [search, activeTab]);

  const getCount = (filter: string) =>
    filter ? allLocations.filter((l) => l.country === filter).length : allLocations.length;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <T7Navbar />

      {/* Hero */}
      <section className="relative pt-10 pb-14 text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 50%, #C8102E 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            {t('locations.viewAllDestinations')}
          </h1>
          <p className="text-white/40 text-base sm:text-lg leading-relaxed">
            {t('locations.directorySubtitle')}
          </p>

          <div className="mt-8 relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t('locations.searchPlaceholder')}
              className="w-full pl-12 pr-5 py-3.5 rounded-full border border-white/10 bg-white/[0.04] text-white placeholder-white/30 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#C8102E]/40 focus:border-transparent backdrop-blur-sm"
            />
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex flex-wrap gap-2">
          {regionTabs.map((tab) => (
            <button
              key={tab.filter}
              onClick={() => setActiveTab(tab.filter)}
              className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 ${
                activeTab === tab.filter
                  ? 'bg-[#C8102E] text-white'
                  : 'bg-white/[0.04] text-white/50 hover:bg-white/[0.08] hover:text-white/80'
              }`}
            >
              {tab.label} ({getCount(tab.filter)})
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <p className="text-[14px] text-white/30 mb-6">
          {t('locations.showing')} {filtered.length} {t('locations.destinations').toLowerCase()}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((loc) => (
            <Link
              key={loc.id}
              to={`/template7/destinations/${loc.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              className="group rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.1] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
                  <MapPin className="w-3 h-3" />
                  {loc.country}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-[15px] font-semibold text-white/90">{loc.name}</h3>
                <p className="mt-1.5 text-[12px] text-white/35 leading-relaxed line-clamp-2">
                  {loc.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-[#C8102E] text-[12px] font-semibold">
                  Explore <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.06] py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-2xl sm:text-3xl text-white mb-3">
            Can't Decide? We'll Help You Choose
          </h2>
          <p className="text-white/40 text-base mb-8">
            Our education advisors can help you find the perfect destination.
          </p>
          <Link
            to="/template7"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C8102E] hover:bg-[#a50d25] text-white text-[14px] font-semibold rounded-full transition-all duration-300"
          >
            {t('hero.freeConsultation')}
          </Link>
        </div>
      </section>

      <T7Footer />
    </div>
  );
}
