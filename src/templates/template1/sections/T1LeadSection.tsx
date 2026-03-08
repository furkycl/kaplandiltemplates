import LeadForm from '../../../components/LeadForm';
import { t } from '../../../utils/i18n';

export default function T1LeadSection() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-dark via-gray-900 to-primary-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,94,184,0.15),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              {t('form.title')}
            </h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              {t('form.subtitle')}
            </p>

            <div className="space-y-4">
              {[
                'Free consultation with education advisors',
                'Personalized program recommendations',
                'Visa and accommodation guidance',
                'No commitment required',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80">
                  <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
