import { siteContent } from '../../../data/siteContent';
import { t } from '../../../utils/i18n';
import { Users, Globe, School, Clock } from 'lucide-react';

const statsData = [
  {
    key: 'students' as const,
    icon: Users,
    color: 'from-purple-500 to-pink-500',
    glow: 'shadow-purple-500/20',
  },
  {
    key: 'countries' as const,
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
    glow: 'shadow-blue-500/20',
  },
  {
    key: 'schools' as const,
    icon: School,
    color: 'from-secondary to-orange-500',
    glow: 'shadow-secondary/20',
  },
  {
    key: 'years' as const,
    icon: Clock,
    color: 'from-green-500 to-emerald-500',
    glow: 'shadow-green-500/20',
  },
];

export default function T3Stats() {
  return (
    <section className="relative py-20 bg-gray-950">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statsData.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.key}
                className={`group relative rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] p-6 sm:p-8 text-center hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500 shadow-xl ${stat.glow}`}
              >
                {/* Gradient line at top */}
                <div
                  className={`absolute top-0 left-1/2 -translate-x-1/2 w-16 h-0.5 rounded-full bg-gradient-to-r ${stat.color} opacity-40 group-hover:opacity-100 group-hover:w-24 transition-all duration-500`}
                />

                <div
                  className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${stat.color} mb-4 shadow-lg ${stat.glow}`}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>

                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2 tracking-tight">
                  {siteContent.stats[stat.key]}
                </div>

                <div className="text-sm sm:text-base text-white/50 font-medium">
                  {t(`stats.${stat.key}`)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
