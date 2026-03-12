import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { siteContent } from '../../../data/siteContent';
import { t } from '../../../utils/i18n';

export default function T10Hero() {
  const { stats } = siteContent;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-6');
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
    { value: stats.years, label: t('stats.yearsExcellence') },
    { value: '30+', label: t('locations.destinations') },
    { value: '150+', label: t('stats.nationalities') },
    { value: stats.students, label: t('stats.students') },
  ];

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-[90vh] flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://mgx-backend-cdn.metadl.com/generate/images/999826/2026-03-10/08af3730-5e31-48dd-b12d-809e6a53e426.png"
          alt="Students"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0F1A3C]/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-8">
        {/* Badge */}
        <div
          data-animate
          className="opacity-0 translate-y-6 transition-all duration-600 delay-100 mb-6"
        >
          <span className="inline-flex items-center gap-2 text-white/80 text-[13px] font-medium">
            <span className="w-2 h-2 rounded-full bg-white/60" />
            30+ {t('locations.destinations')}
          </span>
        </div>

        {/* Heading */}
        <h1
          data-animate
          className="opacity-0 translate-y-6 transition-all duration-600 delay-200 text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] max-w-3xl"
        >
          {t('hero.title').split(' ').slice(0, 2).join(' ')}{' '}
          <span className="block">
            {t('hero.title').split(' ').slice(2).join(' ')}
          </span>
        </h1>

        {/* Subtitle */}
        <p
          data-animate
          className="opacity-0 translate-y-6 transition-all duration-600 delay-300 mt-6 text-white/75 text-base sm:text-lg max-w-xl leading-relaxed"
        >
          {t('hero.description')}
        </p>

        {/* CTAs */}
        <div
          data-animate
          className="opacity-0 translate-y-6 transition-all duration-600 delay-[400ms] mt-10 flex flex-wrap gap-4"
        >
          <button
            onClick={() => handleScroll('locations')}
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#E31837] hover:bg-[#c71430] text-white text-[15px] font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-red-600/25"
          >
            {t('hero.ctaSecondary')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={() => handleScroll('contact')}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-[15px] font-medium rounded-lg border border-white/30 hover:border-white/50 transition-all duration-300"
          >
            {t('hero.freeConsultation')}
          </button>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-10 bg-[#0F1A3C]/90 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {heroStats.map((stat, i) => (
              <div key={i} className="py-6 md:py-8 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</div>
                <div className="mt-1.5 text-[12px] sm:text-[13px] text-white/60 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
