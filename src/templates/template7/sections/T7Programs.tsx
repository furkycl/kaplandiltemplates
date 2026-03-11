import { useEffect, useRef } from 'react';
import {
  MessageCircle,
  Zap,
  Briefcase,
  FileText,
  Calendar,
  Monitor,
  ArrowUpRight,
} from 'lucide-react';
import { siteContent } from '../../../data/siteContent';
import { t } from '../../../utils/i18n';

export default function T7Programs() {
  const { programs } = siteContent;
  const sectionRef = useRef<HTMLElement>(null);

  const iconMap: Record<string, React.ReactNode> = {
    'message-circle': <MessageCircle className="w-5 h-5" />,
    zap: <Zap className="w-5 h-5" />,
    briefcase: <Briefcase className="w-5 h-5" />,
    'file-text': <FileText className="w-5 h-5" />,
    calendar: <Calendar className="w-5 h-5" />,
    monitor: <Monitor className="w-5 h-5" />,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.05 }
    );

    const elements = sectionRef.current?.querySelectorAll('[data-animate]');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="programs" className="relative bg-[#0A0A0A] py-24 sm:py-32">
      {/* Top edge line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        {/* Section header */}
        <div data-animate className="opacity-0 translate-y-8 transition-all duration-700 text-center mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#C8102E] font-semibold">
            {t('programs.whatWeOffer')}
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            {programs.title}
          </h2>
          <p className="mt-5 text-white/40 font-light max-w-2xl mx-auto text-base leading-relaxed">
            {programs.subtitle}
          </p>
        </div>

        {/* Program cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.items.map((program, index) => (
            <div
              key={index}
              data-animate
              className={`opacity-0 translate-y-8 transition-all duration-700 group relative rounded-xl border border-white/[0.06] bg-[#111111] p-7 hover:border-[#C8102E]/20 hover:bg-[#131313] transition-all cursor-pointer`}
              style={{ transitionDelay: `${100 + index * 80}ms` }}
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[#8A8A8A] group-hover:text-[#C8102E] group-hover:border-[#C8102E]/20 group-hover:bg-[#C8102E]/5 transition-all duration-300">
                {iconMap[program.icon] || <MessageCircle className="w-5 h-5" />}
              </div>

              {/* Content */}
              <h3 className="mt-5 font-serif text-lg sm:text-xl text-white group-hover:text-[#FF6B7A] transition-colors duration-300">
                {program.title}
              </h3>
              <p className="mt-3 text-[13px] text-white/30 font-light leading-relaxed">
                {program.description}
              </p>

              {/* Hover arrow */}
              <div className="mt-5 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                <span className="text-[11px] text-[#C8102E] tracking-wide font-medium">
                  {t('programs.learnMore')}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C8102E]" />
              </div>

              {/* Corner accent line on hover */}
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C8102E] to-transparent group-hover:w-full transition-all duration-500 rounded-t-xl" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          data-animate
          className="opacity-0 translate-y-8 transition-all duration-700 delay-500 mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 sm:p-8 rounded-xl border border-white/[0.06] bg-[#111111]">
            <p className="text-[13px] text-white/40">
              {t('programs.notSure')}
            </p>
            <button
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-2.5 bg-[#C8102E] hover:bg-[#a50d25] text-white text-[12px] font-semibold tracking-wide rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-red-900/20"
            >
              {t('programs.getFreeConsultation')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
