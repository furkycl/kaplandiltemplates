import { useState } from 'react';
import { Play, X } from 'lucide-react';
import { videos } from '../../../data/videos';
import { t } from '../../../utils/i18n';

export default function T9Videos() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const featured = videos[0];
  const sideVideos = videos.slice(1, 3);

  return (
    <section id="videos" className="bg-[#FAFAF8] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header - Left aligned */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-orange-700" />
            <span className="text-orange-700 uppercase tracking-widest text-xs font-medium">
              {t('videos.media')}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1a1a1a] tracking-tight">
            {t('videos.title')}
          </h2>
          <p className="mt-3 text-stone-500 text-base max-w-lg">
            {t('videos.subtitle')}
          </p>
        </div>

        {/* 2-column layout: Featured + Stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Featured (large) - 3 cols */}
          <div className="lg:col-span-3">
            <div
              className="group relative rounded-2xl overflow-hidden bg-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
              onClick={() => setActiveVideo(featured.embedUrl)}
            >
              <div className="aspect-video">
                <img
                  src={featured.thumbnail}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-orange-700/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-700 transition-all duration-300 shadow-xl">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-white ml-1" />
                </div>
              </div>
              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full mb-3">
                  {featured.category}
                </span>
                <h3 className="text-white font-serif text-xl sm:text-2xl tracking-tight">
                  {featured.title}
                </h3>
                <p className="text-white/70 text-sm mt-2 line-clamp-2 max-w-md">
                  {featured.description}
                </p>
                <span className="text-white/50 text-xs mt-3 block">
                  {featured.duration}
                </span>
              </div>
            </div>
          </div>

          {/* Side videos - 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {sideVideos.map((video) => (
              <div
                key={video.id}
                className="group relative rounded-2xl overflow-hidden bg-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer flex-1"
                onClick={() => setActiveVideo(video.embedUrl)}
              >
                <div className="aspect-video lg:aspect-auto lg:h-full">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-orange-700/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-700 transition-all duration-300 shadow-lg">
                    <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                  </div>
                </div>
                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                  <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-[10px] font-medium px-2.5 py-0.5 rounded-full mb-2">
                    {video.category}
                  </span>
                  <h3 className="text-white font-serif text-base sm:text-lg tracking-tight">
                    {video.title}
                  </h3>
                  <span className="text-white/50 text-xs mt-1 block">
                    {video.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional videos row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-6">
          {videos.slice(3).map((video) => (
            <div
              key={video.id}
              className="group relative rounded-2xl overflow-hidden bg-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
              onClick={() => setActiveVideo(video.embedUrl)}
            >
              <div className="aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-11 h-11 rounded-full bg-orange-700/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-serif text-sm sm:text-base tracking-tight">
                  {video.title}
                </h3>
                <span className="text-white/50 text-xs mt-1 block">
                  {video.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors duration-300"
            >
              <X className="w-8 h-8" />
            </button>
            <iframe
              src={activeVideo}
              title="Video"
              className="w-full h-full rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
