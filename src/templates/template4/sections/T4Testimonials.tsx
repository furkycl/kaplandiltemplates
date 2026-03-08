import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { siteContent } from '../../../data/siteContent';

export default function T4Testimonials() {
  const { testimonials } = siteContent;
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (idx: number) => {
    if (idx < 0) setActiveIndex(testimonials.length - 1);
    else if (idx >= testimonials.length) setActiveIndex(0);
    else setActiveIndex(idx);
  };

  const active = testimonials[activeIndex];

  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
              Student Testimonials
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
            What Our Students Say
          </h2>
        </div>

        {/* Main Testimonial */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Photo */}
          <div className="lg:col-span-4">
            <div className="relative">
              <img
                src={active.image}
                alt={active.name}
                className="w-full aspect-square object-cover rounded-none max-w-xs mx-auto lg:max-w-none"
              />
              {/* Decorative element */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-primary -z-10" />
            </div>
          </div>

          {/* Quote */}
          <div className="lg:col-span-8">
            <div className="border-l-4 border-primary pl-8 lg:pl-12">
              <Quote className="w-10 h-10 text-slate-200 mb-6" />
              <blockquote className="text-xl lg:text-2xl text-slate-800 leading-relaxed font-light mb-8">
                {active.text}
              </blockquote>

              <div className="mb-8">
                <div className="text-base font-bold text-slate-900">
                  {active.name}
                </div>
                <div className="text-sm text-slate-500">
                  {active.country}
                </div>
                <div className="text-sm text-primary font-medium mt-1">
                  {active.program}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => goTo(activeIndex - 1)}
                  className="w-10 h-10 border border-slate-300 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => goTo(activeIndex + 1)}
                  className="w-10 h-10 border border-slate-300 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Dots */}
                <div className="flex items-center gap-2 ml-4">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-1 transition-all duration-200 ${
                        idx === activeIndex
                          ? 'w-8 bg-primary'
                          : 'w-4 bg-slate-300 hover:bg-slate-400'
                      }`}
                      aria-label={`Go to testimonial ${idx + 1}`}
                    />
                  ))}
                </div>

                <span className="text-xs text-slate-400 ml-auto">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* All testimonials mini cards (below main) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`text-left p-6 border transition-all duration-200 ${
                idx === activeIndex
                  ? 'border-primary bg-primary/5'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 object-cover rounded-none"
                />
                <div>
                  <div className="text-sm font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-xs text-slate-500">{testimonial.country}</div>
                </div>
              </div>
              <p className="text-xs text-slate-600 line-clamp-2">{testimonial.text}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
