import { CheckCircle } from 'lucide-react';
import { t } from '../../../utils/i18n';
import LeadForm from '../../../components/LeadForm';

const trustPoints = [
  { icon: '🎓', label: 'Accredited Programmes' },
  { icon: '🌍', label: '35+ Schools Worldwide' },
  { icon: '📈', label: 'Guaranteed Progress' },
  { icon: '🏠', label: 'Accommodation Support' },
];

export default function T9LeadSection() {
  return (
    <section id="contact" className="bg-[#1a1a1a] text-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left - Info */}
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-orange-400 mb-4">
              {t('cta.getInTouch')}
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-white mb-5 leading-tight">
              {t('cta.title')}
            </h2>
            <p className="text-stone-400 text-lg leading-relaxed mb-10 max-w-md">
              {t('cta.requestInfoSubtitle')}
            </p>

            {/* Trust badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trustPoints.map((point, i) => (
                <div key={i} className="flex items-center gap-3 text-stone-300">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-sm">{point.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-3 text-stone-500 text-sm">
              <span>{t('cta.freeConsultation')}</span>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white/[0.06] border border-white/10 rounded-3xl p-8 sm:p-10">
            <LeadForm variant="dark" />
          </div>
        </div>
      </div>
    </section>
  );
}
