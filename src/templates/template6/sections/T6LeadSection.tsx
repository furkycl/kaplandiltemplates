import { Diamond } from 'lucide-react';
import LeadForm from '../../../components/LeadForm';
import { t } from '../../../utils/i18n';

export default function T6LeadSection() {
  const benefits = [
    'Personalised programme recommendations',
    'Exclusive accommodation arrangements',
    'Visa and travel guidance',
    'Airport transfer coordination',
    'Cultural immersion activities',
    'Dedicated student support',
  ];

  return (
    <section id="contact" className="bg-stone-800 py-28 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Elegant copy */}
          <div className="lg:pt-4">
            {/* Decorative gold line */}
            <div className="w-16 h-px bg-amber-600/60 mb-10" />

            <span className="text-[11px] uppercase tracking-[0.4em] text-amber-600/70 font-light">
              {t('cta.getInTouch')}
            </span>

            <h2 className="mt-5 font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              {t('cta.beginYourJourney')}
            </h2>

            <p className="mt-6 text-stone-400 font-light leading-relaxed text-base sm:text-lg max-w-lg">
              Allow our dedicated team of advisors to craft a bespoke language learning experience
              tailored to your aspirations. Every detail, thoughtfully considered.
            </p>

            {/* Benefits with gold diamond markers */}
            <div className="mt-10 space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Diamond className="w-3 h-3 text-amber-600/60 flex-shrink-0" />
                  <span className="text-stone-400 font-light text-sm tracking-wide">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Decorative element */}
            <div className="mt-14 flex items-center gap-4">
              <div className="w-12 h-px bg-stone-600" />
              <div className="w-1.5 h-1.5 rotate-45 border border-amber-600/40" />
              <div className="w-12 h-px bg-stone-600" />
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-stone-700/40 border border-stone-600/30 rounded-lg p-8 sm:p-10">
            <div className="mb-8">
              <h3 className="font-serif text-2xl text-white">
                {t('cta.enquireNow')}
              </h3>
              <p className="mt-2 text-stone-400 font-light text-sm">
                Complete the form below and a member of our team will be in touch within 24 hours.
              </p>
            </div>

            <LeadForm variant="dark" />
          </div>
        </div>
      </div>
    </section>
  );
}
