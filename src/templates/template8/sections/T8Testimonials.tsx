import { Star } from 'lucide-react';
import { siteContent } from '../../../data/siteContent';
import { t } from '../../../utils/i18n';

const borderGradients = [
  'from-purple-500 via-violet-500 to-blue-500',
  'from-blue-500 via-cyan-500 to-teal-500',
  'from-violet-500 via-purple-500 to-pink-500',
];

export default function T8Testimonials() {
  const { testimonials } = siteContent;

  return (
    <section id="testimonials" className="py-24 sm:py-32 px-6" style={{ background: '#0c0c0f' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-3">
            {t('testimonials.studentTestimonials')}
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            {t('testimonials.whatStudentsSay')}
          </h2>
          <p className="text-lg text-white/40 max-w-lg mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="relative group"
            >
              {/* Gradient border effect */}
              <div className={`absolute -inset-[1px] bg-gradient-to-b ${borderGradients[i % borderGradients.length]} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[0.5px]`} />
              <div className="relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-7 h-full flex flex-col group-hover:border-transparent transition-colors">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-purple-400 text-purple-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[15px] text-white/60 leading-relaxed italic flex-1 mb-6">
                  "{item.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white text-sm font-semibold ring-2 ring-purple-500/20">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{item.name}</p>
                    <p className="text-xs text-white/40">{item.country} &middot; {item.program}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
