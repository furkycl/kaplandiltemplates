import { siteContent } from '../../../data/siteContent';
import { t } from '../../../utils/i18n';

export default function T4Stats() {
  const { stats } = siteContent;

  const statItems = [
    { value: stats.students, label: t('stats.students') },
    { value: stats.countries, label: t('stats.countries') },
    { value: stats.schools, label: t('stats.schoolsGlobally') },
    { value: stats.years, label: t('stats.yearsExcellence') },
  ];

  return (
    <section className="bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {statItems.map((stat, idx) => (
            <div
              key={idx}
              className="border-l-4 border-primary pl-6 py-2"
            >
              <div className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400 mt-1 uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
