import { ArrowRight, ChevronRight, Shield } from 'lucide-react';
import { siteContent } from '../../../data/siteContent';
import { t } from '../../../utils/i18n';

export default function T2Hero() {
  const { hero } = siteContent;

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center pt-24 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={hero.backgroundImage}
          alt="Students studying abroad"
          className="w-full h-full object-cover"
        />
        {/* Left-side gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/85 to-gray-900/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
        <div className="max-w-2xl">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm px-4 py-2 mb-8">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-sm text-white/90 font-medium">
              Trusted by 1M+ students from 150+ countries
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            {t('hero.title')}
          </h1>

          <p className="text-xl text-white/80 font-light mb-3">
            {t('hero.subtitle')}
          </p>

          <p className="text-base text-white/60 mb-10 max-w-xl leading-relaxed">
            {t('hero.description')}
          </p>

          {/* Two CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-md transition-all duration-200 shadow-lg"
            >
              {t('hero.ctaPrimary')}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#locations"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-md transition-all duration-200 border-2 border-white/40 hover:border-white/70"
            >
              {t('hero.ctaSecondary')}
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom decorative bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
    </section>
  );
}
