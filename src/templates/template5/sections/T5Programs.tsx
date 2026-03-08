import { MessageCircle, Zap, Briefcase, FileText, Calendar, Monitor, ArrowRight } from 'lucide-react';
import { siteContent } from '../../../data/siteContent';

const iconMap: Record<string, React.ElementType> = {
  'message-circle': MessageCircle,
  zap: Zap,
  briefcase: Briefcase,
  'file-text': FileText,
  calendar: Calendar,
  monitor: Monitor,
};

export default function T5Programs() {
  const { programs } = siteContent;

  return (
    <section id="programs" className="bg-[#0a0a0a] py-24 sm:py-32 lg:py-40">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section header */}
        <div className="mb-20 lg:mb-28">
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-light">
            What We Offer
          </span>
          <h2 className="mt-6 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tighter leading-none">
            PROGRAMS
          </h2>
        </div>

        {/* Programs as editorial rows */}
        <div>
          {programs.items.map((program, index) => {
            const IconComponent = iconMap[program.icon] || MessageCircle;
            return (
              <div
                key={index}
                className="group border-t border-white/10 hover:bg-white/[0.02] transition-colors duration-500"
              >
                <div className="grid grid-cols-12 items-center gap-4 sm:gap-6 py-8 sm:py-10 lg:py-12">
                  {/* Number */}
                  <div className="col-span-2 sm:col-span-1">
                    <span className="text-sm sm:text-base font-light text-white/20 tracking-widest group-hover:text-secondary transition-colors duration-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Icon - hidden on small */}
                  <div className="hidden sm:flex col-span-1 items-center justify-center">
                    <IconComponent className="w-5 h-5 text-white/30 group-hover:text-secondary transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <div className="col-span-7 sm:col-span-4 lg:col-span-3">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                      {program.title}
                    </h3>
                  </div>

                  {/* Description - hidden on small */}
                  <div className="hidden lg:block col-span-5">
                    <p className="text-sm text-white/40 font-light leading-relaxed pr-8">
                      {program.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="col-span-3 sm:col-span-2 flex justify-end">
                    <ArrowRight className="w-5 h-5 text-white/20 transform group-hover:translate-x-2 group-hover:text-secondary transition-all duration-300" />
                  </div>
                </div>

                {/* Mobile description */}
                <div className="lg:hidden pb-6 pl-[calc(16.666%+1rem)] sm:pl-[calc(16.666%)]">
                  <p className="text-xs text-white/30 font-light leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            );
          })}
          {/* Bottom border */}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
