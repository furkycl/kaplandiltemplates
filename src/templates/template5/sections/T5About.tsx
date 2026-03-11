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

export default function T5About() {
  const { about } = siteContent;

  return (
    <section id="about" className="bg-white py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section label */}
        <div className="mb-6">
          <span className="text-[10px] uppercase tracking-[0.4em] text-black/30 font-light">
            {t('about.whyChooseUs')}
          </span>
        </div>

        {/* Massive heading spanning full width */}
        <div className="mb-20 lg:mb-28">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-black text-[#0a0a0a] tracking-tighter leading-[0.9]">
            {t('about.whyKaplanQuestion').split('\n')[0] || t('about.whyKaplanQuestion')}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
              {t('about.whyKaplanQuestion').split('\n')[1] || ''}
            </span>
          </h2>
          <p className="mt-8 max-w-2xl text-base sm:text-lg text-gray-500 font-light leading-relaxed">
            {about.description}
          </p>
        </div>

        {/* Features - numbered editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 xl:gap-x-24 gap-y-16 lg:gap-y-20">
          {about.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Globe;
            return (
              <div key={index} className="relative group">
                {/* Large background number */}
                <span className="absolute -top-6 -left-2 text-[7rem] sm:text-[8rem] lg:text-[9rem] font-black text-gray-100 leading-none select-none pointer-events-none">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Content overlay */}
                <div className="relative pt-12 sm:pt-16">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-black/10 group-hover:border-secondary group-hover:bg-secondary/5 transition-all duration-300">
                      <IconComponent className="w-5 h-5 text-[#0a0a0a] group-hover:text-secondary transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#0a0a0a] tracking-tight mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-500 font-light leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom line */}
                <div className="mt-8 h-[1px] bg-black/5 group-hover:bg-secondary/30 transition-colors duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
