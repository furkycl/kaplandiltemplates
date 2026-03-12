import { useEffect, useRef } from 'react';
import { Award, Users, Globe, BookOpen } from 'lucide-react';
import { siteContent } from '../../../data/siteContent';
import { t } from '../../../utils/i18n';

export default function T10About() {
  const { stats } = siteContent;
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

  const features = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Accredited Schools',
      desc: 'All schools are accredited by leading education bodies',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Teachers',
      desc: 'Qualified native-speaking teachers with years of experience',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Network',
      desc: "30+ schools in the world's most exciting destinations",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Proven Methods',
      desc: 'Innovative teaching methods with guaranteed progress',
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="bg-[#F5F7FA] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left - Text Content */}
          <div>
            <h2
              data-animate
              className="opacity-0 translate-y-6 transition-all duration-600 text-3xl sm:text-4xl md:text-[42px] font-bold text-[#0F1A3C] leading-tight"
            >
              {t('cta.whyChooseKaplan')}
            </h2>
            <p
              data-animate
              className="opacity-0 translate-y-6 transition-all duration-600 delay-100 mt-5 text-gray-500 text-[16px] leading-relaxed"
            >
              {t('about.description')}
            </p>

            {/* Feature Grid 2x2 */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <div
                  key={i}
                  data-animate
                  className="opacity-0 translate-y-6 transition-all duration-600 flex items-start gap-4"
                  style={{ transitionDelay: `${200 + i * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0F1A3C]/5 flex items-center justify-center text-[#0F1A3C]/70">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-[#0F1A3C]">{feature.title}</h3>
                    <p className="mt-1 text-[13px] text-gray-500 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image with badge */}
          <div
            data-animate
            className="opacity-0 translate-y-6 transition-all duration-600 delay-300 relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=700&h=500&fit=crop"
                alt="Kaplan classroom"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-2 sm:right-6 bg-[#E31837] text-white rounded-2xl px-7 py-5 shadow-xl shadow-red-600/20">
              <div className="text-3xl sm:text-4xl font-bold">{stats.years}</div>
              <div className="text-[13px] font-medium text-white/90 mt-0.5">
                {t('stats.yearsExcellence')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
