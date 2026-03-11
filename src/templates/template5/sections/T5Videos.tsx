import { useState } from 'react';
import { Play, X, Clock } from 'lucide-react';
import { videos } from '../../../data/videos';
import { t } from '../../../utils/i18n';

export default function T5Videos() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const featured = videos[featuredIndex];
  const thumbnails = videos.filter((_, i) => i !== featuredIndex);

  return (
    <section id="videos" className="bg-[#111111] py-24 sm:py-32 lg:py-40">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-light">
              {t('videos.watch')}
            </span>
            <h2 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-none">
              {t('videos.media')}
            </h2>
          </div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-light">
            {videos.length} {t('videos.films')}
          </span>
        </div>

        {/* Featured video - full width */}
        <div className="relative group cursor-pointer mb-8" onClick={() => setActiveVideo(featured.embedUrl)}>
          <div className="relative aspect-video overflow-hidden bg-black">
            <img
              src={featured.thumbnail}
              alt={featured.title}
              className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-white/40 flex items-center justify-center group-hover:border-secondary group-hover:scale-110 transition-all duration-500">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1" />
              </div>
            </div>

            {/* Info */}
            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] uppercase tracking-[0.3em] text-secondary font-light">
                  {featured.category}
                </span>
                <span className="w-8 h-[1px] bg-white/20" />
                <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-white/40 font-light">
                  <Clock className="w-3 h-3" />
                  {featured.duration}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                {featured.title}
              </h3>
              <p className="mt-2 text-sm text-white/50 font-light max-w-xl hidden sm:block">
                {featured.description}
              </p>
            </div>
          </div>
        </div>

        {/* Thumbnail row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {thumbnails.map((video) => {
            const originalIndex = videos.findIndex((v) => v.id === video.id);
            return (
              <button
                key={video.id}
                onClick={() => setFeaturedIndex(originalIndex)}
                className="group relative aspect-video overflow-hidden bg-black"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play className="w-6 h-6 text-white fill-white" />
                </div>
                {/* Title */}
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-[9px] sm:text-[10px] text-white/70 font-light truncate">
                    {video.title}
                  </p>
                  <p className="text-[8px] text-white/30 font-light">
                    {video.duration}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`${activeVideo}?autoplay=1`}
              title="Video"
              className="w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
