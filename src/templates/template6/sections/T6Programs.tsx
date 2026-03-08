import { useState } from 'react';
import { MessageCircle, Zap, Briefcase, FileText, Calendar, Monitor } from 'lucide-react';
import { siteContent } from '../../../data/siteContent';

export default function T6Programs() {
  const { programs } = siteContent;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const iconMap: Record<string, React.ReactNode> = {
    'message-circle': <MessageCircle className="w-5 h-5" />,
    zap: <Zap className="w-5 h-5" />,
    briefcase: <Briefcase className="w-5 h-5" />,
    'file-text': <FileText className="w-5 h-5" />,
    calendar: <Calendar className="w-5 h-5" />,
    monitor: <Monitor className="w-5 h-5" />,
  };

  return (
    <section id="programs" className="bg-stone-50 py-28 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-amber-600/40" />
            <div className="w-1.5 h-1.5 rotate-45 border border-amber-600/40" />
            <div className="w-12 h-px bg-amber-600/40" />
          </div>

          <span className="text-[11px] uppercase tracking-[0.4em] text-amber-700/70 font-light">
            {programs.subtitle}
          </span>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl text-stone-800 leading-tight">
            {programs.title}
          </h2>

          <p className="mt-5 text-stone-500 font-light max-w-2xl mx-auto leading-relaxed">
            Each programme has been meticulously designed to meet the unique needs of every learner,
            from conversational fluency to professional mastery.
          </p>
        </div>

        {/* Programs List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {programs.items.map((program, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group flex items-start gap-6 sm:gap-8 py-8 px-6 sm:px-8 bg-white rounded-lg border border-stone-200/80 hover:border-amber-600/30 transition-all duration-500 hover:shadow-sm"
            >
              {/* Left accent line */}
              <div
                className={`hidden sm:block flex-shrink-0 w-0.5 self-stretch rounded-full transition-all duration-500 ${
                  hoveredIndex === index
                    ? 'bg-amber-600 w-1'
                    : 'bg-stone-200'
                }`}
              />

              {/* Icon */}
              <div
                className={`flex-shrink-0 mt-1 transition-colors duration-300 ${
                  hoveredIndex === index ? 'text-amber-600' : 'text-stone-400'
                }`}
              >
                {iconMap[program.icon] || <MessageCircle className="w-5 h-5" />}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-xl sm:text-2xl text-stone-800 group-hover:text-amber-800 transition-colors duration-300">
                  {program.title}
                </h3>
                <p className="mt-3 text-stone-500 font-light leading-relaxed">
                  {program.description}
                </p>
              </div>

              {/* Index number */}
              <div className="hidden md:block flex-shrink-0 text-right">
                <span
                  className={`font-serif text-3xl transition-colors duration-300 ${
                    hoveredIndex === index ? 'text-amber-600/40' : 'text-stone-200'
                  }`}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
