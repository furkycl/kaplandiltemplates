import { MessageCircle, Zap, Briefcase, FileText, Calendar, Monitor } from 'lucide-react';
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

const iconColors = [
  'bg-orange-100 text-orange-700',
  'bg-lime-100 text-lime-700',
  'bg-stone-200 text-stone-700',
  'bg-amber-100 text-amber-700',
  'bg-emerald-100 text-emerald-700',
  'bg-rose-100 text-rose-700',
];

export default function T9Programs() {
  const { programs } = siteContent;

  return (
    <section id="programs" className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-orange-700 mb-3">
            {t('programs.courseCatalog')}
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-[#1a1a1a] mb-4">
            {t('programs.title')}
          </h2>
          <p className="text-lg text-stone-500 max-w-lg mx-auto">
            {t('programs.subtitle')}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.items.map((program, i) => {
            const Icon = iconMap[program.icon] || MessageCircle;
            return (
              <div
                key={i}
                className="group bg-[#FAFAF8] border border-stone-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-2xl ${iconColors[i % iconColors.length]} flex items-center justify-center mb-5`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-2">
                  {program.title}
                </h3>
                <p className="text-stone-500 text-[15px] leading-relaxed mb-5">
                  {program.description}
                </p>
                <a
                  href="#contact"
                  className="text-sm font-medium text-orange-700 hover:text-orange-800 transition-colors"
                >
                  {t('programs.learnMore')} &rarr;
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-stone-600 font-medium mb-1">{t('programs.notSure')}</p>
          <p className="text-sm text-stone-400 mb-5">{t('programs.notSureDesc')}</p>
          <a
            href="#contact"
            className="inline-flex items-center px-7 py-3 rounded-full bg-orange-700 hover:bg-orange-800 text-white text-sm font-semibold transition-colors"
          >
            {t('programs.getFreeConsultation')}
          </a>
        </div>
      </div>
    </section>
  );
}
