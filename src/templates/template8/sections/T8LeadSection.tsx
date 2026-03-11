import { t } from '../../../utils/i18n';
import LeadForm from '../../../components/LeadForm';

export default function T8LeadSection() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden" style={{ background: '#09090b' }}>
      {/* Gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <p className="text-sm font-medium bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-3">
          {t('cta.getStarted')}
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          {t('cta.title')}
        </h2>
        <p className="text-lg text-white/40 max-w-md mx-auto mb-12">
          {t('cta.requestInfoSubtitle')}
        </p>

        <div className="relative group">
          {/* Gradient border glow */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 rounded-3xl opacity-30 group-hover:opacity-50 blur-[1px] transition-opacity" />
          <div className="relative bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 sm:p-10">
            <LeadForm variant="dark" />
          </div>
        </div>

        <p className="text-xs text-white/20 mt-5">
          {t('cta.freeConsultation')}
        </p>
      </div>
    </section>
  );
}
