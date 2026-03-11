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

const iconColors = [
  'bg-orange-100 text-orange-700',
  'bg-lime-100 text-lime-700',
  'bg-stone-100 text-stone-600',
  'bg-orange-100 text-orange-700',
  'bg-lime-100 text-lime-700',
  'bg-stone-100 text-stone-600',
];

export default function T9About() {
  const { about } = siteContent;

  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-orange-700 mb-3">
            {t('about.whyKaplan')}
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-[#1a1a1a] mb-4">
            {about.title}
          </h2>
          <p className="text-lg text-stone-500 max-w-xl mx-auto leading-relaxed">
            {about.subtitle}
          </p>
        </div>

        {/* Alternating Feature Blocks */}
        <div className="space-y-16 sm:space-y-24">
          {about.features.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Globe;
            const isReversed = i % 2 !== 0;

            return (
              <div
                key={i}
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${isReversed ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Text Side */}
                <div className="flex-1">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1a1a1a] mb-4 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-stone-500 leading-relaxed text-[17px]">
                    {feature.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center mt-5 text-sm font-medium text-orange-700 hover:text-orange-800 transition-colors"
                  >
                    {t('programs.learnMore')} &rarr;
                  </a>
                </div>

                {/* Visual Side */}
                <div className="flex-1 w-full">
                  <div className={`relative ${isReversed ? '' : ''}`}>
                    <div className={`w-full aspect-[4/3] rounded-3xl ${i % 2 === 0 ? 'bg-stone-50' : 'bg-orange-50/50'} flex items-center justify-center`}>
                      <div className={`w-24 h-24 rounded-2xl ${iconColors[i % iconColors.length]} flex items-center justify-center shadow-sm`}>
                        <Icon className="w-12 h-12" />
                      </div>
                    </div>
                    {/* Decorative circle */}
                    <div className={`absolute -z-10 w-24 h-24 rounded-full ${i % 2 === 0 ? 'bg-orange-100 -top-4 -right-4' : 'bg-lime-100 -bottom-4 -left-4'}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
