import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { siteContent } from '../../../data/siteContent';
import { t } from '../../../utils/i18n';

export default function T7Hero() {
  const { stats } = siteContent;
  const sectionRef = useRef<HTMLElement>(null);

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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('[data-animate]');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const heroStats = [
    { value: '40+', label: t('locations.destinations') },
    { value: '50', label: t('stats.nationalities') },
    { value: '500k+', label: t('stats.students') },
    { value: stats.years, label: t('stats.yearsExcellence') },
  ];

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Radial gradient red glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-[0.08] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #C8102E 0%, transparent 70%)',
        }}
      />

      {/* Secondary subtle glow top-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.04] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #FF6B7A 0%, transparent 70%)',
        }}
      />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 text-center pt-32 pb-8">
        {/* Pulsing badge */}
        <div
          data-animate
          className="opacity-0 translate-y-8 transition-all duration-700 delay-100 inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8102E] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C8102E]" />
          </span>
          <span className="text-[11px] uppercase tracking-[0.2em] text-white/60 font-medium">
            Official Kaplan International Partner
          </span>
        </div>

        {/* Main heading */}
        <h1
          data-animate
          className="opacity-0 translate-y-8 transition-all duration-700 delay-200 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight"
        >
          {t('hero.title')}
          <br />
          <em className="text-[#C8102E] not-italic font-serif italic">
            {t('hero.subtitle')}
          </em>
        </h1>

        {/* Subtitle */}
        <p
          data-animate
          className="opacity-0 translate-y-8 transition-all duration-700 delay-300 mt-7 text-base sm:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed font-light"
        >
          {t('hero.description')}
        </p>

        {/* Dual CTAs */}
        <div
          data-animate
          className="opacity-0 translate-y-8 transition-all duration-700 delay-[400ms] mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => handleScroll('contact')}
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#C8102E] hover:bg-[#a50d25] text-white text-[13px] font-semibold tracking-wide rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-red-900/25"
          >
            <span>{t('hero.ctaPrimary')}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>

          <button
            onClick={() => handleScroll('locations')}
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 border border-white/20 hover:border-white/40 text-white/80 hover:text-white text-[13px] font-medium tracking-wide rounded-full transition-all duration-300 hover:bg-white/[0.04]"
          >
            <span>{t('hero.ctaSecondary')}</span>
          </button>
        </div>
      </div>

      {/* Stats bar at bottom */}
      <div className="relative z-10 w-full mt-auto">
        <div className="border-t border-white/[0.06]">
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {heroStats.map((stat, index) => (
                <div
                  key={index}
                  className={`py-8 md:py-10 text-center ${
                    index < heroStats.length - 1
                      ? 'border-r border-white/[0.06]'
                      : ''
                  } ${index === 1 ? 'border-r-0 md:border-r' : ''}`}
                >
                  <div className="font-serif text-2xl sm:text-3xl md:text-4xl text-white tracking-wide">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#8A8A8A] font-light">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/50">
          {t('hero.scroll')}
        </span>
        <ChevronDown className="w-4 h-4 text-white/50 animate-bounce" />
      </div>
    </section>
  );
}
