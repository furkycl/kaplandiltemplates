import { ArrowRight } from 'lucide-react';
import { t } from '../../../utils/i18n';

export default function T10CTA() {
  const handleScroll = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&h=500&fit=crop"
          alt="Students"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0F1A3C]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white italic leading-snug">
          {t('cta.title')}
        </h2>
        <p className="mt-4 text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          {t('cta.description')}
        </p>
        <button
          onClick={handleScroll}
          className="mt-8 group inline-flex items-center gap-2.5 px-8 py-4 bg-[#E31837] hover:bg-[#c71430] text-white text-[15px] font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-red-600/30"
        >
          {t('hero.freeConsultation')}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
}
