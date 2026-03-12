import { useState, useEffect, useRef, type FormEvent, type ChangeEvent } from 'react';
import { Send, CheckCircle2, CheckCircle } from 'lucide-react';
import { t } from '../../../utils/i18n';

export default function T10LeadSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    destination: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log('Lead form submitted:', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const benefits = [
    'Personalized course recommendations',
    'Visa guidance and support',
    'Accommodation options',
    'No commitment required',
  ];

  const inputClass =
    'w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#E31837]/30 focus:border-[#E31837] transition-colors duration-200';

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
              className="opacity-0 translate-y-6 transition-all duration-600 delay-300 mt-10"
            >
              <div className="relative rounded-2xl overflow-hidden">
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
              <h3 className="text-xl font-bold text-[#0F1A3C] mb-6">
                {t('hero.ctaRequestInfo')}
              </h3>

              {isSuccess ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
                  <p className="text-xl font-semibold text-gray-900">{t('form.success')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Full Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder={`${t('form.firstName')} *`}
                      required
                      className={inputClass}
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={`${t('form.email')} *`}
                      required
                      className={inputClass}
                    />
                  </div>

                  {/* Row 2: Phone + Destination */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t('form.phone')}
                      className={inputClass}
                    />
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Preferred Destination</option>
                      <option value="london">London, UK</option>
                      <option value="newyork">New York, USA</option>
                      <option value="toronto">Toronto, Canada</option>
                      <option value="dublin">Dublin, Ireland</option>
                      <option value="sydney">Sydney, Australia</option>
                      <option value="paris">Paris, France</option>
                    </select>
                  </div>

                  {/* Textarea */}
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('form.notes')}
                    rows={4}
                    className={inputClass}
                  />

                  {/* RED Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2.5 bg-[#E31837] hover:bg-[#c71430] text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 disabled:opacity-60 disabled:cursor-not-allowed text-[15px]"
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? t('form.sending') : t('hero.freeConsultation')}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
