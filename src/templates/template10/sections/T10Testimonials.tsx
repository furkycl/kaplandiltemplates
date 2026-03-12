import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { t } from '../../../utils/i18n';

const testimonials = [
  {
    quote:
      'Studying at Kaplan London was the best decision I ever made. The teachers were incredible and I made friends from all over the world.',
    name: 'Maria Santos',
    origin: 'From Brazil',
    location: 'Studied in London',
  },
  {
    quote:
      'New York was an amazing experience. Kaplan helped me improve my English so much that I got accepted into a US university!',
    name: 'Yuki Tanaka',
    origin: 'From Japan',
    location: 'Studied in New York',
  },
  {
    quote:
      'Canada is such a welcoming country. The Kaplan school in Toronto had excellent facilities and the staff were very supportive.',
    name: 'Ahmed Hassan',
    origin: 'From Egypt',
    location: 'Studied in Toronto',
  },
];

export default function T10Testimonials() {
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

  return (
    <section ref={sectionRef} id="testimonials" className="bg-[#F5F7FA] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div data-animate className="opacity-0 translate-y-6 transition-all duration-600 text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#0F1A3C] italic">
            {t('testimonials.whatStudentsSay')}
          </h2>
          <p className="mt-4 text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div
              key={i}
              data-animate
              className="opacity-0 translate-y-6 transition-all duration-600 bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${150 + i * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[15px] text-gray-600 leading-relaxed italic">
                "{item.quote}"
              </p>

              {/* Author */}
              <div className="mt-6">
                <div className="text-[15px] font-bold text-[#0F1A3C]">{item.name}</div>
                <div className="text-[13px] text-gray-400 mt-0.5">
                  {item.origin} • {item.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
