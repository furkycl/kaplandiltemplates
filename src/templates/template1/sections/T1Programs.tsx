import {
  MessageCircle, Zap, Briefcase, FileText, Calendar, Monitor,
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

export default function T1Programs() {
  const { programs } = siteContent;

  return (
    <section id="programs" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            {t('programs.title')}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t('programs.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.items.map((program, index) => {
            const Icon = iconMap[program.icon] || MessageCircle;
            return (
              <div
                key={index}
                className="relative group bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 border border-gray-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full group-hover:bg-primary/10 transition-colors" />
                <Icon className="w-10 h-10 text-primary mb-5" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-500 leading-relaxed">{program.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
