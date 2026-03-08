import { Play, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { siteContent } from '../../../data/siteContent';
import { t } from '../../../utils/i18n';

export default function T1Hero() {
  const [showVideo, setShowVideo] = useState(false);
  const { hero } = siteContent;

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-dark to-primary-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,180,216,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,94,184,0.2),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-white/80">35+ Schools in 8 Countries</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              {t('hero.title')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
                {t('hero.subtitle')}
              </span>
            </h1>

            <p className="text-lg text-white/70 mb-10 max-w-xl leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-secondary/30 hover:shadow-xl hover:shadow-secondary/40"
              >
                {t('hero.ctaPrimary')}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#locations"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-white/20"
              >
                {t('hero.ctaSecondary')}
              </a>
            </div>
          </div>

          {/* Video / Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
              {showVideo ? (
                <div className="aspect-video">
                  <iframe
                    src={hero.backgroundVideo + '?autoplay=1'}
                    title="Kaplan International"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="relative aspect-video cursor-pointer group" onClick={() => setShowVideo(true)}>
                  <img
                    src={hero.backgroundImage}
                    alt="Kaplan International"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/90 group-hover:bg-white rounded-full flex items-center justify-center shadow-xl transition-all group-hover:scale-110">
                      <Play className="w-8 h-8 text-primary ml-1" />
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
