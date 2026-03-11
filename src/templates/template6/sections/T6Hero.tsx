import { ChevronDown } from 'lucide-react';
import { siteContent } from '../../../data/siteContent';
import { t } from '../../../utils/i18n';

export default function T6Hero() {
  const { hero } = siteContent;

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={hero.backgroundImage}
          alt="Luxury language experience"
          className="w-full h-full object-cover"
        />
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
      </div>

      {/* Content - positioned at bottom left */}
      <div className="absolute inset-0 flex items-end">
        <div className="max-w-7xl w-full mx-auto px-6 lg:px-12 pb-28 sm:pb-32">
          {/* Thin decorative line */}
          <div className="w-16 h-px bg-amber-500/60 mb-8" />

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] max-w-3xl">
            {hero.title}
          </h1>

          <p className="mt-5 text-base sm:text-lg text-white/60 font-light tracking-wide max-w-xl">
            {hero.subtitle}
          </p>

          <button
            onClick={() => handleScroll('contact')}
            className="mt-10 inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.25em] text-white/90 border border-white/40 px-8 py-4 hover:bg-white hover:text-stone-900 transition-all duration-500 group"
          >
            <span>{t('hero.ctaBeginJourney')}</span>
            <ChevronDown className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/40">
          {t('hero.scroll')}
        </span>
        <ChevronDown className="w-5 h-5 text-white/40 animate-bounce" />
      </div>
    </section>
  );
}
