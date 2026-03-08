import { siteContent } from '../../../data/siteContent';
import { t } from '../../../utils/i18n';
import {
  MessageCircle,
  Zap,
  Briefcase,
  FileText,
  Calendar,
  Monitor,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  'message-circle': MessageCircle,
  zap: Zap,
  briefcase: Briefcase,
  'file-text': FileText,
  calendar: Calendar,
  monitor: Monitor,
};

const cardGradients = [
  { border: 'from-purple-500 via-pink-500 to-purple-500', bg: 'from-purple-500/10 to-pink-500/5' },
  { border: 'from-yellow-400 via-orange-500 to-yellow-400', bg: 'from-yellow-500/10 to-orange-500/5' },
  { border: 'from-blue-500 via-cyan-400 to-blue-500', bg: 'from-blue-500/10 to-cyan-500/5' },
  { border: 'from-green-400 via-emerald-500 to-green-400', bg: 'from-green-500/10 to-emerald-500/5' },
  { border: 'from-violet-500 via-purple-500 to-violet-500', bg: 'from-violet-500/10 to-purple-500/5' },
  { border: 'from-rose-500 via-red-500 to-rose-500', bg: 'from-rose-500/10 to-red-500/5' },
];

export default function T3Programs() {
  const { items } = siteContent.programs;

  return (
    <section id="programs" className="relative py-20 sm:py-28 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-900/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4">
            <span className="bg-gradient-to-r from-white via-purple-200 to-accent bg-clip-text text-transparent">
              {t('programs.title')}
            </span>
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            {t('programs.subtitle')}
          </p>
        </div>

        {/* Program cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((program, index) => {
            const Icon = iconMap[program.icon] || Zap;
            const colors = cardGradients[index % cardGradients.length];

            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Animated gradient border */}
                <div
                  className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${colors.border} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]`}
                />

                {/* Card */}
                <div className="relative h-full rounded-2xl bg-gray-900/90 backdrop-blur-sm border border-white/[0.06] p-7 group-hover:border-transparent transition-all duration-500">
                  {/* Subtle gradient bg on hover */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                      <Icon className="w-7 h-7 text-white/70 group-hover:text-white transition-colors duration-300" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3">
                      {program.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed mb-5">
                      {program.description}
                    </p>

                    {/* Learn more link */}
                    <div className="flex items-center gap-2 text-sm font-medium text-white/30 group-hover:text-white/70 transition-colors duration-300">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
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
