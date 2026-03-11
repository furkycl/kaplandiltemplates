import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { siteContent } from '../../../data/siteContent';
import { t } from '../../../utils/i18n';

export default function T7Testimonials() {
  const { testimonials } = siteContent;
  const sectionRef = useRef<HTMLElement>(null);

  // Gradient colors for avatar circles
  const avatarGradients = [
    'from-[#C8102E] to-[#FF6B7A]',
    'from-[#6366F1] to-[#A5B4FC]',
    'from-[#059669] to-[#34D399]',
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.05 }
    );

    const elements = sectionRef.current?.querySelectorAll('[data-animate]');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="testimonials" className="relative bg-[#1A1A1A] py-24 sm:py-32 overflow-hidden">
      {/* Subtle gradient background accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.03] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #C8102E 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        {/* Section header */}
        <div data-animate className="opacity-0 translate-y-8 transition-all duration-700 text-center mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#C8102E] font-semibold">
            {t('testimonials.stories')}
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            {t('testimonials.whatStudentsSay')}
          </h2>
          <p className="mt-5 text-white/40 font-light max-w-xl mx-auto text-base leading-relaxed">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonial cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-animate
              className={`opacity-0 translate-y-8 transition-all duration-700 group relative rounded-xl border border-white/[0.06] bg-[#1E1E1E] p-7 sm:p-8 hover:border-white/[0.1] hover:bg-[#222222] transition-all`}
              style={{ transitionDelay: `${150 + index * 120}ms` }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-[#C8102E] fill-[#C8102E]"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mb-8">
                <p className="font-serif text-base sm:text-lg text-white/70 leading-relaxed italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/[0.06]">
                {/* Avatar with gradient circle */}
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-br ${
                    avatarGradients[index % avatarGradients.length]
                  } flex items-center justify-center flex-shrink-0`}
                >
                  <span className="text-white font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>

                <div>
                  <p className="text-[13px] font-semibold text-white/90 tracking-wide">
                    {testimonial.name}
                  </p>
                  <p className="text-[11px] text-white/30 tracking-wider mt-0.5">
                    {testimonial.country}
                  </p>
                  <p className="text-[10px] text-[#C8102E]/60 tracking-wide mt-0.5">
                    {testimonial.program}
                  </p>
                </div>
              </div>

              {/* Subtle top accent */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#C8102E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
