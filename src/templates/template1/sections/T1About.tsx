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

export default function T1About() {
  const { about } = siteContent;

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            {about.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {about.features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Globe;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
