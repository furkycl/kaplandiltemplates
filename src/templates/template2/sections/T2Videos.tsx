import { useState } from 'react';
import { Play, X, Clock } from 'lucide-react';
import { videos } from '../../../data/videos';
import { t } from '../../../utils/i18n';

export default function T2Videos() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="videos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-block bg-primary-light/60 text-primary text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-sm mb-4">
            Media Library
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t('videos.title')}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t('videos.subtitle')}
          </p>
        </div>

        {/* Embedded Player Area */}
        {activeVideo && (
          <div className="mb-10 max-w-4xl mx-auto">
            <div className="relative rounded-lg overflow-hidden shadow-xl border border-gray-200 aspect-video bg-black">
              <iframe
                src={activeVideo + '?autoplay=1'}
                title="Video Player"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-3 right-3 bg-black/70 hover:bg-black/90 text-white rounded-md p-1.5 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video.embedUrl)}
              className="group cursor-pointer bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-primary/40 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Play overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 bg-primary/90 group-hover:bg-primary rounded-full flex items-center justify-center shadow-lg opacity-80 group-hover:opacity-100 transition-all group-hover:scale-110">
                    <Play className="w-6 h-6 text-white ml-0.5" />
                  </div>
                </div>
                {/* Duration badge */}
                <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-black/75 text-white text-xs font-medium px-2 py-1 rounded">
                  <Clock className="w-3 h-3" />
                  {video.duration}
                </div>
                {/* Category badge */}
                <div className="absolute top-2 left-2 bg-primary text-white text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded">
                  {video.category}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors mb-2">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
