import { Star, Quote } from 'lucide-react';
import { siteContent } from '../../../data/siteContent';
import { t } from '../../../utils/i18n';

export default function T2Testimonials() {
  const { testimonials } = siteContent;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-block bg-primary-light/60 text-primary text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-sm mb-4">
            Student Voices
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonial Cards - Horizontal layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-100 rounded-lg p-7 hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Star rating (decorative) */}
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/20 mb-3" />

              {/* Quote text */}
              <p className="text-gray-600 leading-relaxed mb-6 flex-1 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Student info */}
              <div className="flex items-center gap-4 pt-5 border-t border-gray-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-primary font-medium">
                    {testimonial.program}
                  </p>
                  <p className="text-xs text-gray-400">
                    {testimonial.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
