import { Users, Globe, School, Clock } from 'lucide-react';
import { siteContent } from '../../../data/siteContent';
import { t } from '../../../utils/i18n';

export default function T2Stats() {
  const { stats } = siteContent;

  const items = [
    { value: stats.students, label: t('stats.students'), icon: Users },
    { value: stats.countries, label: t('stats.countries'), icon: Globe },
    { value: stats.schools, label: t('stats.schools'), icon: School },
    { value: stats.years, label: t('stats.years'), icon: Clock },
  ];

  return (
    <section className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {items.map((item, index) => (
            <div
              key={item.label}
              className="text-center relative"
            >
              {/* Vertical divider between items (desktop only) */}
              {index > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/20" />
              )}
              <item.icon className="w-7 h-7 text-white/70 mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {item.value}
              </div>
              <div className="text-sm text-white/70 font-medium uppercase tracking-wider">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
