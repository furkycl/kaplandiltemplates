import { t } from '../../../utils/i18n';
import LeadForm from '../../../components/LeadForm';

export default function T7LeadSection() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden" style={{ background: '#0A0A0A' }}>
      {/* Radial red glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(200,16,46,0.12) 0%, transparent 65%)'
        }} />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#C8102E] mb-4">
          {t('cta.getStarted')}
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-5 leading-[1.08]">
          {t('cta.title')}
        </h2>
        <p className="text-[17px] text-[#8A8A8A] max-w-md mx-auto mb-12 font-light leading-relaxed">
          {t('cta.description')}
        </p>

        <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 sm:p-10 text-left">
          <LeadForm variant="dark" />
        </div>

        <p className="text-xs text-white/20 mt-4">
          {t('cta.freeConsultation')}
        </p>
      </div>
    </section>
  );
}
