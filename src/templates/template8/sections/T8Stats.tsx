import { GraduationCap, Globe, Building2, Clock } from 'lucide-react';
import { siteContent } from '../../../data/siteContent';
import { t } from '../../../utils/i18n';

export default function T8Stats() {
  const { stats } = siteContent;

  const statItems = [
    {
      value: stats.students,
      label: t('stats.students'),
      icon: GraduationCap,
      gradient: 'from-purple-500 to-violet-500',
      glow: 'purple',
    },
    {
      value: stats.countries,
      label: t('stats.nationalities'),
      icon: Globe,
      gradient: 'from-blue-500 to-indigo-500',
      glow: 'blue',
    },
    {
      value: stats.schools,
      label: t('stats.schoolsGlobally'),
      icon: Building2,
      gradient: 'from-cyan-500 to-blue-500',
      glow: 'cyan',
    },
    {
      value: stats.years,
      label: t('stats.yearsExcellence'),
      icon: Clock,
      gradient: 'from-fuchsia-500 to-purple-500',
      glow: 'fuchsia',
    },
  ];

  return (
    <section className="relative py-20 sm:py-28">
      {/* Subtle gradient divider at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="text-center mb-14">
          <span className="text-[11px] uppercase tracking-[0.3em] text-white/30 font-medium">
            {t('stats.theNumbers')}
          </span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-xl border border-white/[0.06] hover:border-white/[0.12] rounded-2xl p-6 sm:p-8 text-center transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Glow behind card on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.04] blur-xl transition-opacity duration-500`}
                />

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} bg-opacity-10 mb-5`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>

                {/* Value */}
                <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                  {item.value}
                </div>

                {/* Label */}
                <div className="mt-2 text-[13px] text-white/40 font-medium">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Subtle gradient divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    </section>
  );
}
