import { useState } from 'react';
import { Play, X } from 'lucide-react';
import { videos } from '../../../data/videos';
import { t } from '../../../utils/i18n';

export default function T1Videos() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="videos" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            {t('videos.title')}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t('videos.subtitle')}
          </p>
        </div>

        {/* Featured Video */}
        <div className="mb-10">
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video max-w-4xl mx-auto">
            {activeVideo ? (
              <div className="relative w-full h-full">
                <iframe
                  src={activeVideo + '?autoplay=1'}
                  title="Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <button
                  onClick={() => setActiveVideo(null)}
                  className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <div
                className="relative w-full h-full cursor-pointer group"
                onClick={() => setActiveVideo(videos[0].embedUrl)}
              >
                <img
                  src={videos[0].thumbnail}
                  alt={videos[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/90 group-hover:bg-white rounded-full flex items-center justify-center shadow-xl transition-all group-hover:scale-110">
                    <Play className="w-8 h-8 text-primary ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold text-white mb-1">{videos[0].title}</h3>
                  <p className="text-white/70 text-sm">{videos[0].description}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.slice(1).map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video.embedUrl)}
              className="group cursor-pointer rounded-xl overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                    <Play className="w-5 h-5 text-primary ml-0.5" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {video.category}
                </span>
                <h3 className="font-semibold text-gray-900 mt-1 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
