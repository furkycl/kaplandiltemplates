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

const gradients = [
  'from-purple-500 to-violet-600',
  'from-blue-500 to-cyan-500',
  'from-indigo-500 to-purple-500',
  'from-cyan-500 to-blue-500',
  'from-violet-500 to-indigo-500',
  'from-blue-600 to-violet-600',
];

export default function T8Programs() {
  const { programs } = siteContent;

  return (
    <section id="programs" className="py-24 sm:py-32 px-6" style={{ background: '#09090b' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-3">
            {t('programs.courseCatalog')}
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            {t('programs.title')}
          </h2>
          <p className="text-lg text-white/40 max-w-lg mx-auto">
            {t('programs.subtitle')}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.items.map((program, i) => {
            const Icon = iconMap[program.icon] || MessageCircle;
            return (
              <div
                key={i}
                className="group relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-7 transition-all duration-300 hover:border-purple-500/30 hover:bg-white/[0.06] hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center mb-5 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {program.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {program.description}
                </p>
                <div className="mt-5">
                  <span className="text-xs font-medium text-purple-400 group-hover:text-purple-300 transition-colors">
                    {t('programs.learnMore')} &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 sm:p-10">
          <p className="text-white font-medium mb-2">{t('programs.notSure')}</p>
          <p className="text-sm text-white/40 mb-5 max-w-md mx-auto">{t('programs.notSureDesc')}</p>
          <a
            href="#contact"
            className="inline-block px-7 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all shadow-lg shadow-purple-500/20"
          >
            {t('programs.getFreeConsultation')}
          </a>
        </div>
      </div>
    </section>
  );
}
