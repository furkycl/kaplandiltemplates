import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Play } from 'lucide-react';
import { locationGroups } from '../../../data/locations';
import { t } from '../../../utils/i18n';

const featuredCities = ['London', 'New York', 'Toronto', 'Dublin', 'Sydney', 'Paris-Passy'];

export default function T10Locations() {
  const sectionRef = useRef<HTMLElement>(null);
  const allLocations = locationGroups.flatMap((g) => g.locations);

  const featured = featuredCities
    .map((name) => allLocations.find((l) => l.name === name))
    .filter(Boolean) as typeof allLocations;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-6');
          }
        });
      },
      { threshold: 0.05 }
    );
    const elements = sectionRef.current?.querySelectorAll('[data-animate]');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return (
    <section ref={sectionRef} id="locations" className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div data-animate className="opacity-0 translate-y-6 transition-all duration-600 text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#0F1A3C] leading-tight">
            {t('locations.ourDestinations')}
          </h2>
          <p className="mt-4 text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {t('locations.subtitle')}
          </p>
        </div>

        {/* Destination Grid - 3x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((loc, i) => (
            <Link
              key={loc.id}
              to={`/template10/destinations/${toSlug(loc.name)}`}
              data-animate
              className="opacity-0 translate-y-6 transition-all duration-600 group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-gray-200/60 hover:-translate-y-1 block"
              style={{ transitionDelay: `${150 + i * 80}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Country badge */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-[#0F1A3C] text-[12px] font-medium px-3 py-1 rounded-full">
                  <MapPin className="w-3 h-3" />
                  {loc.country}
                </div>

                {/* Play button on last card */}
                {i === featured.length - 1 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#E31837] flex items-center justify-center shadow-lg">
                      <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#0F1A3C]">
                  {loc.name === 'Paris-Passy' ? 'Paris' : loc.name}
                </h3>
                <p className="mt-2 text-gray-500 text-[14px] leading-relaxed line-clamp-2">
                  {loc.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[#E31837] text-[14px] font-semibold group-hover:gap-2.5 transition-all duration-200">
                  {t('locations.learnMore')}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div data-animate className="opacity-0 translate-y-6 transition-all duration-600 delay-500 text-center mt-12">
          <Link
            to="/template10/destinations"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#0F1A3C] text-[#0F1A3C] text-[14px] font-semibold rounded-lg hover:bg-[#0F1A3C] hover:text-white transition-all duration-300"
          >
            {t('locations.viewAllDestinations')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
