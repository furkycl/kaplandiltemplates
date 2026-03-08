import { siteContent } from '../../../data/siteContent';
import { t } from '../../../utils/i18n';
import {
  Globe,
  BookOpen,
  Users,
  Award,
  Home,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  globe: Globe,
  'book-open': BookOpen,
  users: Users,
  award: Award,
  home: Home,
  'trending-up': TrendingUp,
};

const gradients = [
  'from-purple-500 to-pink-500',
  'from-blue-500 to-cyan-400',
  'from-secondary to-orange-500',
  'from-green-500 to-emerald-400',
  'from-violet-500 to-purple-500',
  'from-rose-500 to-red-500',
];

export default function T3About() {
  const { features } = siteContent.about;

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-gray-950 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-900/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4">
            <span className="bg-gradient-to-r from-white via-purple-200 to-accent bg-clip-text text-transparent">
              {t('about.title')}
            </span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto mb-4">
            {t('about.subtitle')}
          </p>
          <p className="text-base text-white/35 max-w-3xl mx-auto leading-relaxed">
            {siteContent.about.description}
          </p>
        </div>

        {/* Feature cards - staggered grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Globe;
            const gradient = gradients[index % gradients.length];

            return (
              <div
                key={index}
                className={`group relative rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] p-7 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/5 ${
                  index % 3 === 1 ? 'lg:translate-y-6' : ''
                }`}
              >
                {/* Gradient border glow on hover */}
                <div
                  className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 blur-sm`}
                />

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} mb-5 shadow-lg`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/45 leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom gradient line */}
                <div
                  className={`absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
