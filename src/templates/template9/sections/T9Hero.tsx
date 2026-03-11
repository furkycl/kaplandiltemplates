import { ArrowRight } from 'lucide-react';
import { siteContent } from '../../../data/siteContent';
import { t } from '../../../utils/i18n';

export default function T9Hero() {
  const { stats } = siteContent;

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const miniStats = [
    { value: stats.students, label: t('stats.students') },
    { value: stats.countries, label: t('stats.nationalities') },
    { value: stats.schools, label: t('stats.schoolsGlobally') },
    { value: stats.years, label: t('stats.yearsExcellence') },
  ];

  return (
    <section id="hero" className="relative min-h-screen bg-[#FAFAF8] pt-20 lg:pt-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[90vh]">
          {/* LEFT SIDE - Text Content */}
          <div className="pt-12 lg:pt-0 order-2 lg:order-1">
            {/* Overline */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-orange-700" />
              <span className="text-orange-700 uppercase tracking-widest text-xs font-medium">
                {t('hero.subtitle')}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-[#1a1a1a]">
              {t('hero.title')}
            </h1>

            {/* Description */}
            <p className="mt-6 text-stone-500 text-lg leading-relaxed max-w-lg">
              {t('hero.description')}
            </p>

            {/* Dual CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => handleScroll('contact')}
                className="inline-flex items-center gap-2 bg-orange-700 hover:bg-orange-800 text-white font-medium rounded-full px-8 py-3.5 text-sm transition-all duration-300 hover:shadow-xl hover:shadow-orange-700/20 group"
              >
                <span>{t('hero.ctaPrimary')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
              </button>
              <button
                onClick={() => handleScroll('locations')}
                className="inline-flex items-center gap-2 border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white font-medium rounded-full px-8 py-3.5 text-sm transition-all duration-300"
              >
                <span>{t('hero.ctaSecondary')}</span>
              </button>
            </div>

            {/* Trust line */}
            <p className="mt-8 text-xs text-stone-400 tracking-wide">
              {t('hero.trustedBy')}
            </p>
          </div>

          {/* RIGHT SIDE - Visual */}
          <div className="relative order-1 lg:order-2 pt-8 lg:pt-0">
            {/* Decorative circles */}
            <div className="absolute -top-6 -right-6 w-28 h-28 lg:w-36 lg:h-36 rounded-full bg-orange-100 opacity-70 pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-lime-100 opacity-70 pointer-events-none" />

            {/* Main container */}
            <div className="relative bg-stone-100 rounded-3xl p-6 sm:p-8 lg:p-10">
              {/* Decorative small shapes */}
              <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-orange-300" />
              <div className="absolute bottom-8 left-8 w-2 h-2 rounded-full bg-lime-400" />

              {/* Hero Image */}
              <div className="relative rounded-2xl overflow-hidden mb-8 aspect-[16/10]">
                <img
                  src={siteContent.hero.backgroundImage}
                  alt="Students around the world"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-[#1a1a1a] text-xs font-medium px-3 py-1.5 rounded-full">
                    {t('hero.countriesSchools')}
                  </span>
                </div>
              </div>

              {/* Mini Stat Cards Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {miniStats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl shadow-sm p-4 sm:p-5 border border-stone-100 hover:shadow-md transition-shadow duration-300"
                  >
                    <span className="block font-serif text-2xl sm:text-3xl text-[#1a1a1a] tracking-tight">
                      {stat.value}
                    </span>
                    <span className="block text-stone-400 text-xs mt-1 leading-snug">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
