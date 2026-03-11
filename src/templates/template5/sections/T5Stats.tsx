import { siteContent } from '../../../data/siteContent';
import { t } from '../../../utils/i18n';

export default function T5Stats() {
  const stats = [
    { value: siteContent.stats.students, label: t('stats.students') },
    { value: siteContent.stats.countries, label: t('stats.nationalities') },
    { value: siteContent.stats.schools, label: t('stats.schoolsGlobally') },
    { value: siteContent.stats.years, label: t('stats.yearsExcellence') },
  ];

  return (
    <section className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section label */}
        <div className="mb-16 lg:mb-24">
          <span className="text-[10px] uppercase tracking-[0.4em] text-black/30 font-light">
            {t('stats.theNumbers')}
          </span>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative ${
                index < stats.length - 1
                  ? 'lg:border-r lg:border-black/10'
                  : ''
              } ${index < 2 ? 'border-b lg:border-b-0 border-black/10 pb-12 lg:pb-0' : 'pt-12 lg:pt-0'}`}
            >
              <div className={`${index > 0 ? 'lg:pl-12 xl:pl-16' : ''} ${index % 2 !== 0 ? 'pl-8 sm:pl-12 lg:pl-12 xl:pl-16' : ''}`}>
                {/* Number */}
                <div className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-[#0a0a0a] leading-none tracking-tighter">
                  {stat.value}
                </div>
                {/* Label */}
                <div className="mt-4 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-gray-400 font-light">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
