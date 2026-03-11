import { useState, useEffect, useRef } from 'react';
import { Play } from 'lucide-react';
import { videos, videoCategories } from '../../../data/videos';
import { t } from '../../../utils/i18n';

export default function T7Videos() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);

  const filteredVideos =
    activeCategory === 'all'
      ? videos.filter((v) => v.id !== activeVideo.id)
      : videos.filter((v) => v.category === activeCategory && v.id !== activeVideo.id);

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
    <section ref={sectionRef} id="videos" className="relative bg-[#111111] py-24 sm:py-32">
      {/* Subtle top gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        {/* Section header */}
        <div data-animate className="opacity-0 translate-y-8 transition-all duration-700 mb-12">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#C8102E] font-semibold">
            {t('videos.media')}
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            {t('videos.experienceJourney')}
          </h2>
          <p className="mt-4 text-white/40 font-light max-w-xl text-base leading-relaxed">
            {t('videos.subtitle')}
          </p>
        </div>

        {/* Category filters */}
        <div
          data-animate
          className="opacity-0 translate-y-8 transition-all duration-700 delay-100 flex flex-wrap gap-2 mb-10"
        >
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-1.5 rounded-full text-[11px] font-medium tracking-wide border transition-all duration-300 ${
              activeCategory === 'all'
                ? 'border-[#C8102E] bg-[#C8102E]/10 text-[#FF6B7A]'
                : 'border-white/10 text-white/40 hover:border-white/20 hover:text-white/60'
            }`}
          >
            {t('videos.allVideos')}
          </button>
          {videoCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-[11px] font-medium tracking-wide border transition-all duration-300 ${
                activeCategory === cat
                  ? 'border-[#C8102E] bg-[#C8102E]/10 text-[#FF6B7A]'
                  : 'border-white/10 text-white/40 hover:border-white/20 hover:text-white/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured video */}
        <div data-animate className="opacity-0 translate-y-8 transition-all duration-700 delay-200 mb-10">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-[#1A1A1A] border border-white/[0.06]">
            <iframe
              src={activeVideo.embedUrl}
              title={activeVideo.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="mt-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-[#C8102E]/70 font-semibold bg-[#C8102E]/5 px-3 py-1 rounded-full">
                {activeVideo.category}
              </span>
              <h3 className="mt-3 font-serif text-xl sm:text-2xl text-white">
                {activeVideo.title}
              </h3>
              <p className="mt-2 text-white/40 font-light leading-relaxed max-w-2xl">
                {activeVideo.description}
              </p>
            </div>
            <span className="text-[12px] text-[#8A8A8A] tracking-wider flex-shrink-0">
              {activeVideo.duration}
            </span>
          </div>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredVideos.map((video, index) => (
            <button
              key={video.id}
              data-animate
              onClick={() => setActiveVideo(video)}
              className={`opacity-0 translate-y-8 transition-all duration-700 group text-left`}
              style={{ transitionDelay: `${300 + index * 80}ms` }}
            >
              <div className="relative aspect-video rounded-lg overflow-hidden bg-[#1A1A1A] border border-white/[0.06] hover:border-white/10 transition-all duration-500">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-90"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm flex items-center justify-center group-hover:border-[#C8102E]/50 group-hover:bg-[#C8102E]/20 group-hover:scale-110 transition-all duration-300">
                    <Play className="w-4 h-4 text-white/80 ml-0.5" />
                  </div>
                </div>

                {/* Duration badge */}
                <div className="absolute bottom-2.5 right-2.5 text-[10px] tracking-wider text-white/70 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded">
                  {video.duration}
                </div>
              </div>

              <div className="mt-3.5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C8102E]/50 font-medium">
                  {video.category}
                </span>
                <h4 className="mt-1 font-serif text-base sm:text-lg text-white/80 group-hover:text-white transition-colors duration-300 leading-snug">
                  {video.title}
                </h4>
                <p className="mt-1.5 text-[12px] text-white/25 font-light line-clamp-2">
                  {video.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
