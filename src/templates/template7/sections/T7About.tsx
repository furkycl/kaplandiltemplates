import { useEffect, useRef } from 'react';
import { Globe, BookOpen, Users, Award, Home, TrendingUp } from 'lucide-react';
import { siteContent } from '../../../data/siteContent';
import { t } from '../../../utils/i18n';

export default function T7About() {
  const { about, stats } = siteContent;
  const sectionRef = useRef<HTMLElement>(null);

  const iconMap: Record<string, React.ReactNode> = {
    globe: <Globe className="w-5 h-5" />,
    'book-open': <BookOpen className="w-5 h-5" />,
    users: <Users className="w-5 h-5" />,
    award: <Award className="w-5 h-5" />,
    home: <Home className="w-5 h-5" />,
    'trending-up': <TrendingUp className="w-5 h-5" />,
  };

  const featuredFeatures = about.features.slice(0, 4);

  const badges = [
    { label: 'British Council Accredited', color: 'text-blue-400' },
    { label: 'ACCET Certified', color: 'text-emerald-400' },
    { label: 'Languages Canada', color: 'text-amber-400' },
    { label: t('about.studentSatisfaction'), color: 'text-[#FF6B7A]' },
  ];

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
    <section ref={sectionRef} id="about" className="relative bg-[#1A1A1A] py-24 sm:py-32 overflow-hidden">
      {/* Subtle gradient accent */}
      <div
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.03] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #C8102E 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left column: features */}
          <div>
            <div data-animate className="opacity-0 translate-y-8 transition-all duration-700">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C8102E] font-semibold">
                {t('about.whyKaplanQuestion')}
              </span>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
                {t('about.title')}
              </h2>
              <p className="mt-5 text-white/40 font-light leading-relaxed text-base">
                {t('about.description')}
              </p>
            </div>

            {/* Feature cards */}
            <div className="mt-12 space-y-4">
              {featuredFeatures.map((feature, index) => (
                <div
                  key={index}
                  data-animate
                  className={`opacity-0 translate-y-8 transition-all duration-700 group flex gap-5 p-5 rounded-xl border border-white/[0.04] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#C8102E]/10 border border-[#C8102E]/20 flex items-center justify-center text-[#C8102E] group-hover:bg-[#C8102E]/15 transition-colors duration-300">
                    {iconMap[feature.icon] || <Globe className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-white/90 tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] text-white/35 font-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: visual panel */}
          <div
            data-animate
            className="opacity-0 translate-y-8 transition-all duration-700 delay-300"
          >
            <div className="relative rounded-2xl border border-white/[0.06] bg-gradient-to-br from-[#1E1E1E] to-[#141414] p-10 sm:p-14 overflow-hidden">
              {/* Background decorative gradient */}
              <div
                className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full opacity-[0.06] pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, #C8102E 0%, transparent 70%)',
                }}
              />

              {/* Big serif number */}
              <div className="relative">
                <span className="font-serif text-7xl sm:text-8xl md:text-9xl text-white/[0.08] leading-none select-none block">
                  {stats.years}
                </span>
                <div className="mt-4">
                  <h3 className="font-serif text-2xl sm:text-3xl text-white leading-snug">
                    {stats.years}
                  </h3>
                  <p className="mt-2 text-white/40 font-light text-base leading-relaxed">
                    {t('about.yearsShaping')}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-white/[0.06] my-10" />

              {/* Badges */}
              <div className="space-y-3.5">
                {badges.map((badge, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${badge.color.replace('text-', 'bg-')}`} />
                    <span className="text-[12px] text-white/50 tracking-wide">
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Decorative stat boxes */}
              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.04] text-center">
                  <span className="font-serif text-2xl text-[#C8102E]">97%</span>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/30">
                    {t('about.studentSatisfaction')}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.04] text-center">
                  <span className="font-serif text-2xl text-[#FF6B7A]">{stats.countries}</span>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/30">
                    {t('stats.nationalities')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
