import { siteContent } from '../../../data/siteContent';
import { t } from '../../../utils/i18n';

export default function T9Stats() {
  const { stats } = siteContent;

  const statItems = [
    { value: stats.students, label: t('stats.students') },
    { value: stats.countries, label: t('stats.nationalities') },
    { value: stats.schools, label: t('stats.schoolsGlobally') },
    { value: stats.years, label: t('stats.yearsExcellence') },
  ];

  return (
    <section className="bg-[#1a1a1a] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section label */}
        <div className="text-center mb-12">
          <span className="text-orange-400 uppercase tracking-[0.3em] text-[10px] font-medium">
            {t('stats.theNumbers')}
          </span>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center items-center gap-y-10">
          {statItems.map((stat, i) => (
            <div key={i} className="flex items-center">
              {/* Stat */}
              <div className="text-center px-6 sm:px-10 lg:px-14">
                <span className="block font-serif text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="block text-stone-500 text-xs sm:text-sm mt-2 tracking-wide">
                  {stat.label}
                </span>
              </div>

              {/* Separator - not after last item */}
              {i < statItems.length - 1 && (
                <div className="hidden sm:block w-px h-12 bg-stone-700" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
