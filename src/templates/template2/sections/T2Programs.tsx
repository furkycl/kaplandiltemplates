import {
  MessageCircle, Zap, Briefcase, FileText, Calendar, Monitor, ArrowRight,
} from 'lucide-react';
import { siteContent } from '../../../data/siteContent';
import { t } from '../../../utils/i18n';

const iconMap: Record<string, React.ElementType> = {
  'message-circle': MessageCircle,
  zap: Zap,
  briefcase: Briefcase,
  'file-text': FileText,
  calendar: Calendar,
  monitor: Monitor,
};

export default function T2Programs() {
  const { programs } = siteContent;

  return (
    <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-block bg-primary-light/60 text-primary text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-sm mb-4">
            Academic Programs
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t('programs.title')}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t('programs.subtitle')}
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.items.map((program, index) => {
            const Icon = iconMap[program.icon] || MessageCircle;
            return (
              <div
                key={index}
                className="group bg-white rounded-lg border border-gray-200 hover:border-primary/30 p-7 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Top bar accent */}
                <div className="w-full h-1 bg-gray-100 group-hover:bg-primary rounded-full mb-6 transition-colors" />

                <div className="w-12 h-12 bg-primary-light/60 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                  <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {program.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {program.description}
                </p>

                <div className="flex items-center gap-1 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
