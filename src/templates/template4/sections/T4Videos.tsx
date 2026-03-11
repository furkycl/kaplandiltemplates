import { useState } from 'react';
import { Play, X, Clock, Tag } from 'lucide-react';
import { videos } from '../../../data/videos';
import { t } from '../../../utils/i18n';

export default function T4Videos() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const currentVideo = videos.find((v) => v.id === activeVideo);

  return (
    <section id="videos" className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
              {t('videos.mediaLibrary')}
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
            {t('videos.videosResources')}
          </h2>
          <p className="text-slate-600 mt-2">
            {t('videos.videosSubtitle')}
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <button
              key={video.id}
              onClick={() => setActiveVideo(video.id)}
              className="group text-left bg-white border border-slate-200 hover:border-primary transition-colors duration-200"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/50 transition-colors duration-200 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/90 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                    <Play className="w-6 h-6 text-slate-900 group-hover:text-white ml-1" />
                  </div>
                </div>
                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-slate-900/80 px-2 py-1 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-white" />
                  <span className="text-xs text-white font-medium">{video.duration}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-1.5 mb-2">
                  <Tag className="w-3 h-3 text-primary" />
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                    {video.category}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                  {video.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && currentVideo && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/90 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="bg-slate-900 w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700">
              <div>
                <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                  {currentVideo.category}
                </span>
                <h3 className="text-white font-bold">{currentVideo.title}</h3>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="text-slate-400 hover:text-white transition-colors p-2"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {/* Video Player */}
            <div className="aspect-video">
              <iframe
                src={currentVideo.embedUrl}
                title={currentVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
