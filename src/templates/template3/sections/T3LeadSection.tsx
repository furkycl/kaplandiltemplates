import { siteContent } from '../../../data/siteContent';
import { t } from '../../../utils/i18n';
import LeadForm from '../../../components/LeadForm';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function T3LeadSection() {
  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 bg-gradient-to-br from-purple-950 via-gray-900 to-black overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - compelling copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-white/70">
                {t('form.subtitle')}
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
              <span className="bg-gradient-to-r from-white via-purple-200 to-secondary bg-clip-text text-transparent">
                {siteContent.cta.title}
              </span>
            </h2>

            <p className="text-lg text-white/50 leading-relaxed mb-8 max-w-lg">
              {siteContent.cta.description}
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-8">
              {[
                'Free personalized consultation',
                'Expert guidance on programs & locations',
                'Help with visa & accommodation',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-orange-500 flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/60 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 text-white/30 text-sm">
              <div>
                <span className="text-2xl font-bold text-white block">{siteContent.stats.students}</span>
                {t('stats.students')}
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <span className="text-2xl font-bold text-white block">{siteContent.stats.countries}</span>
                {t('stats.countries')}
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <span className="text-2xl font-bold text-white block">{siteContent.stats.years}</span>
                {t('stats.years')}
              </div>
            </div>
          </div>

          {/* Right column - form */}
          <div className="relative">
            {/* Glow behind form */}
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/20 via-transparent to-secondary/20 rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-6">
                {t('form.title')}
              </h3>
              <LeadForm variant="dark" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
