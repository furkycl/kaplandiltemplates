import { useEffect, useRef } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { t } from '../../../utils/i18n';
import LeadForm from '../../../components/LeadForm';

export default function T10LeadSection() {
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
      { threshold: 0.05 }
    );
    const elements = sectionRef.current?.querySelectorAll('[data-animate]');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const benefits = [
    'Personalized course recommendations',
    'Visa guidance and support',
    'Accommodation options',
    'No commitment required',
  ];

  return (
    <section ref={sectionRef} id="contact" className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          {/* Left Side - Info */}
          <div>
            <h2
              data-animate
              className="opacity-0 translate-y-6 transition-all duration-600 text-3xl sm:text-4xl font-bold text-[#0F1A3C] leading-tight"
            >
              {t('form.title')}
            </h2>
            <p
              data-animate
              className="opacity-0 translate-y-6 transition-all duration-600 delay-100 mt-4 text-gray-500 text-[16px] leading-relaxed"
            >
              {t('cta.requestInfoSubtitle')}
            </p>

            {/* Benefits checklist */}
            <div
              data-animate
              className="opacity-0 translate-y-6 transition-all duration-600 delay-200 mt-8 space-y-4"
            >
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-[15px] text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>

            {/* London image */}
            <div
              data-animate
              className="opacity-0 translate-y-6 transition-all duration-600 delay-300 mt-10 rounded-2xl overflow-hidden"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=700&h=350&fit=crop"
                  alt="London skyline"
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />
                <span className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-[#0F1A3C] text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-lg">
                  London: Study Abroad Adventure
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div
            data-animate
            className="opacity-0 translate-y-6 transition-all duration-600 delay-200"
          >
            <div className="bg-[#F5F7FA] rounded-2xl p-8 sm:p-10 border border-gray-100">
              <h3 className="text-xl font-bold text-[#0F1A3C] mb-6 flex items-center gap-2">
                <Send className="w-5 h-5 text-[#E31837]" />
                {t('hero.ctaRequestInfo')}
              </h3>
              <LeadForm variant="light" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
