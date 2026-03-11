import { ArrowRight, ChevronDown, GraduationCap, Globe, Users } from 'lucide-react';
import { siteContent } from '../../../data/siteContent';
import { t } from '../../../utils/i18n';

export default function T8Hero() {
  const { stats } = siteContent;

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0">
        {/* Primary purple blob - top left */}
        <div className="absolute -top-[30%] -left-[20%] w-[70%] h-[70%] rounded-full bg-purple-600/20 blur-[120px]" />
        {/* Blue blob - center */}
        <div className="absolute top-[20%] left-[30%] w-[50%] h-[50%] rounded-full bg-blue-600/15 blur-[100px]" />
        {/* Cyan blob - bottom right */}
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-cyan-500/10 blur-[120px]" />
        {/* Subtle magenta accent */}
        <div className="absolute top-[50%] -left-[10%] w-[30%] h-[30%] rounded-full bg-fuchsia-600/10 blur-[80px]" />
      </div>

      {/* Dot grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Animated gradient border line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-28 pb-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 mb-8">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse" />
          <span className="text-[13px] font-medium bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
            {t('hero.trustedBy')}
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
          <span className="bg-gradient-to-r from-white via-purple-100 to-cyan-100 bg-clip-text text-transparent">
            {t('hero.title')}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg sm:text-xl text-purple-200/60 font-light">
          {t('hero.subtitle')}
        </p>

        {/* Description */}
        <p className="mt-6 text-base sm:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
          {t('hero.description')}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary CTA */}
          <button
            onClick={() => handleScroll('contact')}
            className="group relative inline-flex items-center gap-2.5 px-8 py-4 text-[15px] font-semibold text-white rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02]"
          >
            {t('hero.ctaPrimary')}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 -z-10" />
          </button>

          {/* Ghost CTA */}
          <button
            onClick={() => handleScroll('locations')}
            className="inline-flex items-center gap-2.5 px-8 py-4 text-[15px] font-medium text-white/80 hover:text-white rounded-xl bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2] backdrop-blur-sm transition-all duration-300"
          >
            {t('hero.ctaSecondary')}
          </button>
        </div>

        {/* Countries/Schools line */}
        <p className="mt-8 text-[13px] text-white/30 tracking-wide">
          {t('hero.countriesSchools')}
        </p>
      </div>

      {/* Floating Glass Stat Cards */}
      <div className="absolute bottom-12 left-6 hidden lg:block">
        <div className="bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] rounded-2xl px-5 py-4 transform -rotate-3 hover:rotate-0 transition-transform duration-500 shadow-xl shadow-black/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <div className="text-lg font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                {stats.students}
              </div>
              <div className="text-[11px] text-white/40">{t('stats.students')}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 right-8 hidden lg:block">
        <div className="bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] rounded-2xl px-5 py-4 transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-xl shadow-black/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
              <Globe className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <div className="text-lg font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                {stats.countries}
              </div>
              <div className="text-[11px] text-white/40">{t('stats.countries')}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-36 right-16 hidden xl:block">
        <div className="bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] rounded-2xl px-5 py-4 transform rotate-6 hover:rotate-0 transition-transform duration-500 shadow-xl shadow-black/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
              <Users className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <div className="text-lg font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                {stats.schools}
              </div>
              <div className="text-[11px] text-white/40">{t('stats.schools')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/25">
          {t('hero.scroll')}
        </span>
        <ChevronDown className="w-4 h-4 text-white/25 animate-bounce" />
      </div>
    </section>
  );
}
