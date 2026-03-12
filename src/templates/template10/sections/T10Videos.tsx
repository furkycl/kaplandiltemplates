import { useEffect, useRef } from 'react';
import { videos } from '../../../data/videos';
import { t } from '../../../utils/i18n';

export default function T10Videos() {
  const sectionRef = useRef<HTMLElement>(null);
  const featuredVideo = videos[0];

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
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll('[data-animate]');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="videos" className="bg-[#F5F7FA] py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div data-animate className="opacity-0 translate-y-6 transition-all duration-600 text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#0F1A3C] italic">
            {t('videos.title')}
          </h2>
          <p className="mt-4 text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            {t('videos.subtitle')}
          </p>
        </div>

        {/* Video Embed */}
        <div
          data-animate
          className="opacity-0 translate-y-6 transition-all duration-600 delay-200"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-300/40 aspect-video bg-black">
            <iframe
              src={featuredVideo.embedUrl}
              title={featuredVideo.title}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
