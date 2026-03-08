import { Globe, BookOpen, Users } from 'lucide-react';
import { siteContent } from '../../../data/siteContent';

export default function T6About() {
  const { about } = siteContent;

  // Pick first 3 features and map icons
  const iconMap: Record<string, React.ReactNode> = {
    globe: <Globe className="w-6 h-6" />,
    'book-open': <BookOpen className="w-6 h-6" />,
    users: <Users className="w-6 h-6" />,
  };

  const featuredFeatures = about.features.slice(0, 3);

  return (
    <section id="about" className="bg-white py-28 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Centered narrow column */}
        <div className="max-w-3xl mx-auto text-center">
          {/* Decorative gold line */}
          <div className="w-16 h-px bg-amber-600/50 mx-auto mb-10" />

          <span className="text-[11px] uppercase tracking-[0.4em] text-amber-700/70 font-light">
            {about.subtitle}
          </span>

          <h2 className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl text-stone-800 leading-tight">
            {about.title}
          </h2>

          <p className="mt-8 text-stone-500 font-light leading-[1.9] text-base sm:text-lg">
            {about.description}
          </p>

          <p className="mt-6 text-stone-500 font-light leading-[1.9] text-base sm:text-lg">
            We believe that learning a language is not merely an academic pursuit -- it is a
            transformative journey that opens doors to new cultures, perspectives, and lifelong
            connections. Every destination we offer has been carefully curated to provide an
            environment where inspiration and education converge.
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 my-16">
            <div className="w-16 h-px bg-stone-200" />
            <div className="w-2 h-2 rotate-45 border border-amber-600/30" />
            <div className="w-16 h-px bg-stone-200" />
          </div>
        </div>

        {/* Feature highlights - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 max-w-5xl mx-auto">
          {featuredFeatures.map((feature, index) => (
            <div key={index} className="text-center group">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 mb-6 text-amber-600 group-hover:text-amber-700 transition-colors duration-300">
                {iconMap[feature.icon] || <Globe className="w-6 h-6" />}
              </div>

              <h3 className="font-serif text-xl text-stone-800 mb-3">
                {feature.title}
              </h3>

              <p className="text-stone-500 font-light leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
