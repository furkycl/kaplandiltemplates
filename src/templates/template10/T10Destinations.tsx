import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, ArrowRight } from 'lucide-react';
import { allLocations } from '../../data/locations';
import { t } from '../../utils/i18n';
import T10Navbar from './sections/T10Navbar';
import T10Footer from './sections/T10Footer';

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

export default function T10Destinations() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('');

  const filtered = useMemo(() => {
    let locs = allLocations;
    if (activeTab) locs = locs.filter((l) => l.country === activeTab);
    if (search.trim()) {
      const q = search.toLowerCase();
      locs = locs.filter(
        (l) =>
          l.name.toLowerCase().includes(q) ||
          l.country.toLowerCase().includes(q)
      );
    }
    return locs;
  }, [search, activeTab]);

  const getCount = (filter: string) =>
    filter ? allLocations.filter((l) => l.country === filter).length : allLocations.length;

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-[#0F1A3C]">
      <T10Navbar />

      {/* Hero */}
      <section className="bg-[#0F1A3C] pt-10 pb-14 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t('locations.viewAllDestinations')}
          </h1>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed">
            {t('locations.directorySubtitle')}
          </p>

          {/* Search */}
          <div className="mt-8 relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t('locations.searchPlaceholder')}
              className="w-full pl-12 pr-5 py-3.5 rounded-full border border-white/20 bg-white/10 text-white placeholder-white/40 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#E31837]/50 focus:border-transparent backdrop-blur-sm"
            />
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex flex-wrap gap-2">
          {regionTabs.map((tab) => (
            <button
              key={tab.filter}
              onClick={() => setActiveTab(tab.filter)}
              className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 ${
                activeTab === tab.filter
                  ? 'bg-[#0F1A3C] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.label} ({getCount(tab.filter)})
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <p className="text-[14px] text-gray-400 mb-6">
          {t('locations.showing')} {filtered.length} {t('locations.destinations').toLowerCase()}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((loc) => (
            <Link
              key={loc.id}
              to={`/template10/destinations/${loc.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-gray-200/60 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-[#0F1A3C] text-[11px] font-medium px-2.5 py-1 rounded-full">
                  <MapPin className="w-3 h-3" />
                  {loc.country}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-[16px] font-bold text-[#0F1A3C]">{loc.name}</h3>
                <p className="mt-1.5 text-[13px] text-gray-500 leading-relaxed line-clamp-2">
                  {loc.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-[#E31837] text-[13px] font-semibold">
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F1A3C] py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Can't Decide? We'll Help You Choose
          </h2>
          <p className="text-white/60 text-base mb-8">
            Our education advisors can help you find the perfect destination based on your goals, budget, and preferences.
          </p>
          <button
            onClick={() => handleScroll('contact')}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#E31837] hover:bg-[#c71430] text-white text-[15px] font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-red-600/25"
          >
            {t('hero.freeConsultation')}
          </button>
        </div>
      </section>

      <T10Footer />
    </div>
  );
}
