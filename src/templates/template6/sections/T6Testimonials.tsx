import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { siteContent } from '../../../data/siteContent';

export default function T6Testimonials() {
  const { testimonials } = siteContent;
  const [current, setCurrent] = useState(0);

  const goTo = (index: number) => {
    if (index < 0) {
      setCurrent(testimonials.length - 1);
    } else if (index >= testimonials.length) {
      setCurrent(0);
    } else {
      setCurrent(index);
    }
  };

  const testimonial = testimonials[current];

  return (
    <section id="testimonials" className="bg-white py-28 sm:py-32">
      {/* Top decorative border */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="border-t border-stone-200 pt-28 sm:pt-32">
          <div className="max-w-4xl mx-auto text-center relative">
            {/* Large decorative quotation mark */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              <span className="font-serif text-[120px] sm:text-[160px] leading-none text-amber-600/10 select-none">
                &ldquo;
              </span>
            </div>

            {/* Section label */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="w-12 h-px bg-amber-600/40" />
              <span className="text-[11px] uppercase tracking-[0.4em] text-amber-700/70 font-light">
                Voices of Experience
              </span>
              <div className="w-12 h-px bg-amber-600/40" />
            </div>

            {/* Quote text */}
            <blockquote className="relative z-10">
              <p className="font-serif text-xl sm:text-2xl md:text-3xl text-stone-700 leading-relaxed md:leading-relaxed font-light italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </blockquote>

            {/* Student info */}
            <div className="mt-12 flex flex-col items-center">
              {/* Photo with gold border */}
              <div className="w-20 h-20 rounded-full border-2 border-amber-600/30 p-1">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              <div className="mt-5">
                <p className="text-xs uppercase tracking-[0.3em] text-stone-800 font-medium">
                  {testimonial.name}
                </p>
                <p className="mt-1.5 text-[11px] uppercase tracking-[0.2em] text-stone-400 font-light">
                  {testimonial.country}
                </p>
                <p className="mt-1 text-[11px] tracking-wider text-amber-700/70 font-light">
                  {testimonial.program}
                </p>
              </div>
            </div>

            {/* Navigation */}
            {testimonials.length > 1 && (
              <div className="mt-14 flex items-center justify-center gap-6">
                <button
                  onClick={() => goTo(current - 1)}
                  className="w-10 h-10 border border-stone-300 flex items-center justify-center hover:border-amber-600 hover:text-amber-700 text-stone-400 transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goTo(index)}
                      className={`transition-all duration-300 ${
                        index === current
                          ? 'w-8 h-px bg-amber-600'
                          : 'w-4 h-px bg-stone-300 hover:bg-stone-400'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => goTo(current + 1)}
                  className="w-10 h-10 border border-stone-300 flex items-center justify-center hover:border-amber-600 hover:text-amber-700 text-stone-400 transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Bottom decorative border */}
          <div className="border-b border-stone-200 mt-28 sm:mt-32" />
        </div>
      </div>
    </section>
  );
}
