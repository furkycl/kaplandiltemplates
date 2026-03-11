import { Globe, BookOpen, Users, Award, Home, TrendingUp } from 'lucide-react';
import { siteContent } from '../../../data/siteContent';
import { t } from '../../../utils/i18n';

const iconMap: Record<string, React.ElementType> = {
  globe: Globe,
  'book-open': BookOpen,
  users: Users,
  award: Award,
  home: Home,
  'trending-up': TrendingUp,
};

const gradients = [
  'from-purple-500 to-violet-500',
  'from-blue-500 to-indigo-500',
  'from-cyan-500 to-blue-500',
  'from-fuchsia-500 to-purple-500',
  'from-violet-500 to-indigo-500',
  'from-indigo-500 to-cyan-500',
];

export default function T8About() {
  const { about } = siteContent;

  return (
    <section id="about" className="relative py-24 sm:py-32">
      {/* Background accents */}
      <div className="absolute top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-purple-600/[0.03] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[35%] h-[35%] rounded-full bg-cyan-600/[0.03] blur-[80px] pointer-events-none" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-[11px] uppercase tracking-[0.3em] text-cyan-400/70 font-medium mb-4">
            {t('about.whyKaplanQuestion')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent">
              {t('about.title')}
            </span>
          </h2>
          <p className="mt-5 text-white/40 text-base sm:text-lg leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        {/* Bento Grid of Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {about.features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Globe;
            const gradient = gradients[index % gradients.length];

            return (
              <div
                key={index}
                className={`group relative bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-white/[0.12] rounded-2xl p-7 transition-all duration-500 hover:scale-[1.01] backdrop-blur-sm ${
                  index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Glow effect on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.03] blur-xl transition-opacity duration-500`}
                />

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 shadow-lg`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-[16px] font-semibold text-white group-hover:text-white/90 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] text-white/35 leading-relaxed group-hover:text-white/45 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Subtle corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${gradient} opacity-0 group-hover:opacity-[0.03] rounded-tr-2xl rounded-bl-[40px] transition-opacity duration-500`} />
              </div>
            );
          })}
        </div>

        {/* Bottom Highlight Bar */}
        <div className="mt-12 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-[15px] font-semibold text-white">
                {t('about.qualityAssurance')}
              </div>
              <div className="text-[13px] text-white/40">
                {t('about.subtitle')}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              97%
            </div>
            <div className="text-[13px] text-white/40 max-w-[120px] leading-tight">
              {t('about.studentSatisfaction')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
