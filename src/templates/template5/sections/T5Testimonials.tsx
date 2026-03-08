import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { siteContent } from '../../../data/siteContent';

export default function T5Testimonials() {
  const [current, setCurrent] = useState(0);
  const testimonials = siteContent.testimonials;
  const testimonial = testimonials[current];

  const goNext = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const goPrev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="bg-white py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section label */}
        <div className="mb-16 lg:mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-black/30 font-light">
            Stories
          </span>
        </div>

        <div className="relative">
          {/* Massive decorative quote mark */}
          <span
            className="absolute -top-16 sm:-top-20 lg:-top-24 -left-2 sm:-left-4 text-[10rem] sm:text-[14rem] lg:text-[18rem] font-black text-gray-100 leading-none select-none pointer-events-none"
            aria-hidden="true"
          >
            &ldquo;
          </span>

          {/* Content */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Quote - takes 8 cols */}
            <div className="lg:col-span-8 xl:col-span-7">
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.75rem] font-light text-[#0a0a0a] leading-snug tracking-tight">
                {testimonial.text}
              </blockquote>

              {/* Attribution */}
              <div className="mt-10 sm:mt-14 flex items-center gap-5">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover grayscale"
                />
                <div>
                  <p className="text-sm font-bold text-[#0a0a0a] tracking-tight">
                    {testimonial.name}
                  </p>
                  <p className="text-[11px] text-gray-400 font-light uppercase tracking-[0.2em]">
                    {testimonial.program}
                  </p>
                  <p className="text-[10px] text-gray-300 font-light uppercase tracking-[0.2em] mt-0.5">
                    {testimonial.country}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation + counter on right */}
            <div className="lg:col-span-4 xl:col-span-5 flex lg:flex-col items-center lg:items-end gap-8">
              {/* Counter */}
              <div className="text-right">
                <span className="text-6xl sm:text-7xl lg:text-8xl font-black text-[#0a0a0a] leading-none tracking-tighter">
                  {String(current + 1).padStart(2, '0')}
                </span>
                <span className="text-2xl sm:text-3xl font-light text-gray-300 mx-2">/</span>
                <span className="text-lg font-light text-gray-300">
                  {String(testimonials.length).padStart(2, '0')}
                </span>
              </div>

              {/* Nav arrows */}
              <div className="flex items-center gap-3">
                <button
                  onClick={goPrev}
                  className="w-14 h-14 border border-black/10 flex items-center justify-center hover:bg-[#0a0a0a] hover:text-white hover:border-[#0a0a0a] transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goNext}
                  className="w-14 h-14 border border-black/10 flex items-center justify-center hover:bg-[#0a0a0a] hover:text-white hover:border-[#0a0a0a] transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Progress dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-[2px] transition-all duration-500 ${
                      index === current
                        ? 'w-10 bg-secondary'
                        : 'w-4 bg-black/15 hover:bg-black/30'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
