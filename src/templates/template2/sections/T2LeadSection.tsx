import { CheckCircle, GraduationCap, Headphones, FileCheck, Globe } from 'lucide-react';
import LeadForm from '../../../components/LeadForm';
import { t } from '../../../utils/i18n';

export default function T2LeadSection() {
  const benefits = [
    {
      icon: Headphones,
      text: 'Free consultation with education advisors',
    },
    {
      icon: FileCheck,
      text: 'Personalized program recommendations',
    },
    {
      icon: Globe,
      text: 'Visa and accommodation guidance',
    },
    {
      icon: GraduationCap,
      text: 'Scholarship and pricing information',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Form */}
          <div>
            <LeadForm variant="card" />
          </div>

          {/* Right - Benefits & Info */}
          <div className="lg:pt-4">
            <div className="inline-block bg-primary-light/60 text-primary text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-sm mb-4">
              Get Started
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('form.title')}
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              {t('form.subtitle')}. Take the first step towards your international education journey. Our advisors are ready to help you find the perfect program and destination.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white border border-gray-100 rounded-lg px-5 py-4"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm">
                    {benefit.text}
                  </span>
                  <CheckCircle className="w-5 h-5 text-green-500 ml-auto shrink-0" />
                </div>
              ))}
            </div>

            {/* Trust indicators */}
            <div className="bg-primary/5 border border-primary/10 rounded-lg p-5">
              <p className="text-sm text-gray-600 leading-relaxed">
                <span className="font-semibold text-gray-900">No commitment required.</span>{' '}
                Our education advisors will contact you within 24 hours to discuss your goals and recommend the best program for your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
