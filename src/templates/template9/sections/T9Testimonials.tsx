import { Star } from 'lucide-react';
import { siteContent } from '../../../data/siteContent';
import { t } from '../../../utils/i18n';

export default function T9Testimonials() {
  const { testimonials } = siteContent;

  return (
    <section id="testimonials" className="bg-[#FAFAF8] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-orange-700 mb-3">
            {t('testimonials.studentTestimonials')}
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-[#1a1a1a]">
            {t('testimonials.whatStudentsSay')}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm border-l-4 border-orange-700 p-8 transition-all duration-300 hover:shadow-lg"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-orange-500 text-orange-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-stone-600 text-lg leading-relaxed mb-6 italic">
                "{item.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-stone-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white text-sm font-semibold">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1a1a1a]">{item.name}</p>
                  <p className="text-xs text-stone-400">{item.country} &middot; {item.program}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
