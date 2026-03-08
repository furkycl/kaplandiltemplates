import {
  Globe, BookOpen, Users, Award, Home, TrendingUp,
} from 'lucide-react';
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

export default function T2About() {
  const { about } = siteContent;

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left side - Text content */}
          <div className="lg:sticky lg:top-32">
            <div className="inline-block bg-primary-light/60 text-primary text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-sm mb-4">
              Why Kaplan
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {t('about.title')}
            </h2>
            <p className="text-lg text-primary font-medium mb-4">
              {t('about.subtitle')}
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              {about.description}
            </p>

            {/* Decorative element */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-1 bg-primary rounded-full" />
              <div className="w-6 h-1 bg-primary/50 rounded-full" />
              <div className="w-3 h-1 bg-primary/25 rounded-full" />
            </div>
          </div>

          {/* Right side - Feature grid 2x3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {about.features.map((feature, index) => {
              const Icon = iconMap[feature.icon] || Globe;
              return (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-100 rounded-lg p-6 hover:bg-primary-light/20 hover:border-primary/20 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
