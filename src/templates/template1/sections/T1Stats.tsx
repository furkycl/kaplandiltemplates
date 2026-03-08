import { Users, Globe, School, Clock } from 'lucide-react';
import { siteContent } from '../../../data/siteContent';
import { t } from '../../../utils/i18n';

export default function T1Stats() {
  const { stats } = siteContent;

  const items = [
    { value: stats.students, label: t('stats.students'), icon: Users },
    { value: stats.countries, label: t('stats.countries'), icon: Globe },
    { value: stats.schools, label: t('stats.schools'), icon: School },
    { value: stats.years, label: t('stats.years'), icon: Clock },
  ];

  return (
    <section className="relative -mt-16 z-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {items.map((item) => (
              <div key={item.label} className="text-center">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">
                  {item.value}
                </div>
                <div className="text-sm text-gray-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
