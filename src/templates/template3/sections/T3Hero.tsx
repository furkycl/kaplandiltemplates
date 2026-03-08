import { useState } from 'react';
import { siteContent } from '../../../data/siteContent';
import { t } from '../../../utils/i18n';
import { Play, X } from 'lucide-react';

export default function T3Hero() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-purple-950">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s', animationDuration: '4s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s', animationDuration: '6s' }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm font-medium text-white/70">
            {t('hero.subtitle')}
          </span>
        </div>

        {/* Massive title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-8">
          <span className="bg-gradient-to-r from-white via-purple-200 to-accent bg-clip-text text-transparent">
            {siteContent.hero.title}
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/60 leading-relaxed mb-12">
          {siteContent.hero.description}
        </p>

        {/* Play button */}
        <button
          onClick={() => setShowVideo(true)}
          className="group relative inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-12 hover:bg-white/20 hover:scale-110 transition-all duration-500"
          aria-label="Play featured video"
        >
          <div className="absolute inset-0 rounded-full bg-white/5 animate-ping" style={{ animationDuration: '3s' }} />
          <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1 group-hover:scale-110 transition-transform duration-300" />
        </button>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 text-base font-semibold text-white rounded-full bg-gradient-to-r from-secondary to-orange-500 hover:from-secondary-dark hover:to-orange-600 transition-all duration-300 shadow-xl shadow-secondary/30 hover:shadow-secondary/50 hover:scale-105"
          >
            Start Your Journey
          </a>
          <a
            href="#videos"
            className="inline-flex items-center px-8 py-4 text-base font-semibold text-white rounded-full bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
          >
            <Play className="w-4 h-4 mr-2" />
            Watch Stories
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent" />

      {/* Video modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-6 right-6 p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Close video"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="w-full max-w-4xl mx-4 aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20">
            <iframe
              src={siteContent.hero.backgroundVideo + '?autoplay=1'}
              title="Featured Video"
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
