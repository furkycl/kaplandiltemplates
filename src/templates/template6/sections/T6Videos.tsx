import { useState } from 'react';
import { Play } from 'lucide-react';
import { videos } from '../../../data/videos';
import { t } from '../../../utils/i18n';

export default function T6Videos() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const remainingVideos = videos.filter((v) => v.id !== activeVideo.id);

  return (
    <section id="videos" className="bg-stone-100 py-28 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-amber-600/40" />
            <div className="w-1.5 h-1.5 rotate-45 border border-amber-600/40" />
            <div className="w-12 h-px bg-amber-600/40" />
          </div>

          <span className="text-[11px] uppercase tracking-[0.4em] text-amber-700/70 font-light">
            {t('videos.visualStories')}
          </span>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl text-stone-800 leading-tight">
            {t('videos.experienceJourney')}
          </h2>

          <p className="mt-5 text-stone-500 font-light max-w-2xl mx-auto leading-relaxed">
            {t('videos.subtitle')}
          </p>
        </div>

        {/* Featured Video */}
        <div className="mb-12">
          <div className="relative aspect-video rounded-lg overflow-hidden border border-stone-200 shadow-lg bg-stone-900">
            <iframe
              src={activeVideo.embedUrl}
              title={activeVideo.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="mt-6 max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-700/70 font-light">
              {activeVideo.category}
            </span>
            <h3 className="mt-2 font-serif text-2xl text-stone-800">
              {activeVideo.title}
            </h3>
            <p className="mt-2 text-stone-500 font-light leading-relaxed">
              {activeVideo.description}
            </p>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {remainingVideos.map((video) => (
            <button
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="group text-left"
            >
              <div className="relative aspect-video rounded-lg overflow-hidden border border-stone-200 hover:border-amber-600/40 transition-all duration-500">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full border border-white/40 flex items-center justify-center group-hover:border-white/70 group-hover:scale-110 transition-all duration-300 bg-black/20 backdrop-blur-sm">
                    <Play className="w-5 h-5 text-white/80 ml-0.5" />
                  </div>
                </div>

                {/* Duration */}
                <div className="absolute bottom-3 right-3 text-[10px] tracking-wider text-white/80 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded">
                  {video.duration}
                </div>
              </div>

              <div className="mt-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-amber-700/60 font-light">
                  {video.category}
                </span>
                <h4 className="mt-1.5 font-serif text-lg text-stone-700 group-hover:text-amber-800 transition-colors duration-300 leading-snug">
                  {video.title}
                </h4>
                <p className="mt-1.5 text-sm text-stone-400 font-light line-clamp-2">
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
