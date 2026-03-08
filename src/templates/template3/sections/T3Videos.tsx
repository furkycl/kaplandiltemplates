import { useState, useRef } from 'react';
import { videos, videoCategories } from '../../../data/videos';
import { t } from '../../../utils/i18n';
import { Play, X, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

export default function T3Videos() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [featuredVideo, setFeaturedVideo] = useState(videos[0]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.6;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="videos" className="relative py-20 sm:py-28 bg-gray-950">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-secondary/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4">
            <span className="bg-gradient-to-r from-white via-purple-200 to-accent bg-clip-text text-transparent">
              {t('videos.title')}
            </span>
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            {t('videos.subtitle')}
          </p>
        </div>

        {/* Featured video hero */}
        <div className="relative mb-12 rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.06] group">
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Video area */}
            <div className="lg:col-span-3 relative aspect-video">
              {activeVideo === featuredVideo.id ? (
                <iframe
                  src={featuredVideo.embedUrl + '?autoplay=1'}
                  title={featuredVideo.title}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              ) : (
                <>
                  <img
                    src={featuredVideo.thumbnail}
                    alt={featuredVideo.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <button
                    onClick={() => setActiveVideo(featuredVideo.id)}
                    className="absolute inset-0 flex items-center justify-center"
                    aria-label={`Play ${featuredVideo.title}`}
                  >
                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </button>
                </>
              )}
            </div>

            {/* Featured info */}
            <div className="lg:col-span-2 p-6 lg:p-8 flex flex-col justify-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-semibold mb-4 w-fit">
                {featuredVideo.category}
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                {featuredVideo.title}
              </h3>
              <p className="text-white/50 leading-relaxed mb-4">
                {featuredVideo.description}
              </p>
              <div className="flex items-center gap-2 text-white/30 text-sm">
                <Clock className="w-4 h-4" />
                <span>{featuredVideo.duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Category pills */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
          <span className="text-sm font-semibold text-white/40 mr-2 flex-shrink-0">Browse:</span>
          {videoCategories.map((cat) => (
            <button
              key={cat}
              className="flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Scrollable video row */}
        <div className="relative group/row">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/70 backdrop-blur-sm border border-white/10 text-white/80 hover:text-white hover:bg-black/90 flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-all duration-300 -translate-x-1/2"
            aria-label="Scroll videos left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/70 backdrop-blur-sm border border-white/10 text-white/80 hover:text-white hover:bg-black/90 flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-all duration-300 translate-x-1/2"
            aria-label="Scroll videos right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {videos.map((video) => (
              <button
                key={video.id}
                onClick={() => {
                  setFeaturedVideo(video);
                  setActiveVideo(null);
                  window.scrollTo({
                    top: (document.getElementById('videos')?.offsetTop ?? 0) + 100,
                    behavior: 'smooth',
                  });
                }}
                className={`group/card flex-shrink-0 w-72 sm:w-80 rounded-xl overflow-hidden text-left transition-all duration-500 hover:scale-[1.03] hover:shadow-xl hover:shadow-purple-500/10 ${
                  featuredVideo.id === video.id
                    ? 'bg-white/[0.08] border-2 border-purple-500/40'
                    : 'bg-white/[0.03] border border-white/[0.06] hover:border-purple-500/20'
                }`}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover/card:bg-black/50 transition-colors duration-300" />

                  {/* Play overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                      <Play className="w-6 h-6 text-white ml-0.5" />
                    </div>
                  </div>

                  {/* Duration badge */}
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm text-xs font-medium text-white/90">
                    {video.duration}
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-purple-500/30 backdrop-blur-sm text-xs font-medium text-purple-200">
                    {video.category}
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h4 className="text-sm font-semibold text-white/90 mb-1 line-clamp-1">
                    {video.title}
                  </h4>
                  <p className="text-xs text-white/40 line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen video modal (for direct play) */}
      {activeVideo && activeVideo !== featuredVideo.id && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Close video"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="w-full max-w-5xl mx-4 aspect-video rounded-2xl overflow-hidden">
            <iframe
              src={
                (videos.find((v) => v.id === activeVideo)?.embedUrl ?? '') +
                '?autoplay=1'
              }
              title="Video"
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
