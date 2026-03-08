import { Quote } from 'lucide-react';
import { siteContent } from '../../../data/siteContent';
import { t } from '../../../utils/i18n';

export default function T1Testimonials() {
  const { testimonials } = siteContent;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-gray-600 leading-relaxed mb-6">"{testimonial.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.program}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
