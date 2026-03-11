import { Globe, BookOpen, Users, Award, Home, TrendingUp } from 'lucide-react';
import { siteContent } from '../../../data/siteContent';
import { t } from '../../../utils/i18n';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  globe: Globe,
  'book-open': BookOpen,
  users: Users,
  award: Award,
  home: Home,
  'trending-up': TrendingUp,
};

export default function T4About() {
  const { about } = siteContent;

  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
              {t('about.whyKaplan')}
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
            {about.title}
          </h2>
          <p className="text-slate-600 mt-3 max-w-2xl">
            {about.description}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Numbered Features */}
          <div className="space-y-8">
            {about.features.map((feature, idx) => {
              const IconComponent = iconMap[feature.icon] || Globe;
              const number = String(idx + 1).padStart(2, '0');

              return (
                <div key={idx} className="group flex gap-6">
                  {/* Number */}
                  <div className="flex-shrink-0">
                    <span className="text-5xl font-bold text-slate-200 group-hover:text-primary/20 transition-colors duration-300">
                      {number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-bold text-slate-900">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                    {/* Separator */}
                    {idx < about.features.length - 1 && (
                      <div className="mt-8 h-px bg-slate-200" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right - Image & Infographic */}
          <div className="relative">
            <div className="sticky top-32">
              {/* Main Image */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop"
                  alt="Kaplan students in class"
                  className="w-full aspect-[4/3] object-cover rounded-none"
                />
                {/* Overlay Stats Card */}
                <div className="absolute -bottom-6 -left-6 bg-slate-900 p-6">
                  <div className="text-3xl font-bold text-white">97%</div>
                  <div className="text-sm text-slate-400 mt-1">
                    {t('about.studentSatisfaction')}
                  </div>
                </div>
              </div>

              {/* Info Bar */}
              <div className="mt-12 grid grid-cols-2 gap-4">
                <div className="border-l-4 border-primary pl-4 py-2">
                  <div className="text-2xl font-bold text-slate-900">85+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="border-l-4 border-primary pl-4 py-2">
                  <div className="text-2xl font-bold text-slate-900">150+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Nationalities</div>
                </div>
              </div>

              {/* Accreditation Note */}
              <div className="mt-8 p-6 bg-slate-50 border border-slate-200">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">
                  {t('about.qualityAssurance')}
                </p>
                <p className="text-sm text-slate-600">
                  All Kaplan International schools are accredited by leading educational bodies, ensuring the highest quality standards in language education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
