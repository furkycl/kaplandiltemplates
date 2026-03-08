import { siteContent } from '../../../data/siteContent';
import { t } from '../../../utils/i18n';
import { Quote, Star } from 'lucide-react';

const borderGradients = [
  'from-purple-500 via-pink-500 to-purple-500',
  'from-blue-500 via-cyan-400 to-blue-500',
  'from-secondary via-orange-500 to-secondary',
];

export default function T3Testimonials() {
  const testimonials = siteContent.testimonials;

  return (
    <section className="relative py-20 sm:py-28 bg-gray-950 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-900/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-secondary/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4">
            <span className="bg-gradient-to-r from-white via-purple-200 to-accent bg-clip-text text-transparent">
              {t('testimonials.title')}
            </span>
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => {
            const gradient = borderGradients[index % borderGradients.length];

            return (
              <div key={index} className="group relative">
                {/* Gradient border */}
                <div
                  className={`absolute -inset-px rounded-2xl bg-gradient-to-b ${gradient} opacity-20 group-hover:opacity-50 transition-opacity duration-500`}
                />

                {/* Card */}
                <div className="relative h-full rounded-2xl bg-gray-900/95 backdrop-blur-sm p-7 flex flex-col">
                  {/* Quote icon */}
                  <div className="mb-6">
                    <Quote className="w-10 h-10 text-white/10" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Quote text */}
                  <blockquote className="text-white/60 leading-relaxed mb-8 flex-1 text-sm">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-5 border-t border-white/5">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-white/10"
                    />
                    <div>
                      <div className="font-semibold text-white text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-white/40">
                        {testimonial.program}
                      </div>
                      <div className="text-xs text-white/25 mt-0.5">
                        {testimonial.country}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
