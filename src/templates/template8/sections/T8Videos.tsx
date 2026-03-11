import { useState } from 'react';
import { Play, Clock } from 'lucide-react';
import { videos, videoCategories } from '../../../data/videos';
import { t } from '../../../utils/i18n';

export default function T8Videos() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [playingId, setPlayingId] = useState<string | null>(null);

  const filteredVideos =
    activeCategory === 'all'
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  return (
    <section id="videos" className="relative py-24 sm:py-32">
      {/* Background accent */}
      <div className="absolute top-[20%] right-0 w-[40%] h-[40%] rounded-full bg-blue-600/[0.03] blur-[100px] pointer-events-none" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block text-[11px] uppercase tracking-[0.3em] text-blue-400/70 font-medium mb-4">
              {t('videos.media')}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                {t('videos.title')}
              </span>
            </h2>
            <p className="mt-3 text-white/40 max-w-lg text-base">
              {t('videos.subtitle')}
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-[12px] font-medium transition-all duration-300 border ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 border-transparent text-white'
                  : 'bg-white/[0.03] border-white/[0.08] text-white/50 hover:text-white hover:border-white/[0.15]'
              }`}
            >
              {t('videos.allVideos')}
            </button>
            {videoCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-[12px] font-medium transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 border-transparent text-white'
                    : 'bg-white/[0.03] border-white/[0.08] text-white/50 hover:text-white hover:border-white/[0.15]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="group relative bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/30 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/5"
            >
              {/* Thumbnail / Player */}
              <div className="relative aspect-video overflow-hidden">
                {playingId === video.id ? (
                  <iframe
                    src={`${video.embedUrl}?autoplay=1`}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent" />

                    {/* Play Button */}
                    <button
                      onClick={() => setPlayingId(video.id)}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:border-transparent group-hover:scale-110 transition-all duration-300">
                        <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                      </div>
                    </button>

                    {/* Duration badge */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-md bg-black/50 backdrop-blur-sm text-[11px] text-white/70">
                      <Clock className="w-3 h-3" />
                      {video.duration}
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Category tag */}
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/20 text-[11px] text-purple-300 font-medium mb-3">
                  {video.category}
                </span>

                <h3 className="text-[15px] font-semibold text-white group-hover:text-blue-200 transition-colors duration-300 line-clamp-1">
                  {video.title}
                </h3>

                <p className="mt-2 text-[13px] text-white/35 line-clamp-2 leading-relaxed">
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
