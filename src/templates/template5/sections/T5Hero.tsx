import { ArrowRight } from 'lucide-react';
import { siteContent } from '../../../data/siteContent';

export default function T5Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#0a0a0a] flex flex-col justify-center overflow-hidden"
    >
      {/* Background subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative max-w-[1600px] w-full mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-end">
          {/* Left: Massive Typography */}
          <div className="lg:col-span-8">
            {/* Small label */}
            <div className="mb-8 lg:mb-12">
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-light">
                Kaplan International Languages
              </span>
            </div>

            {/* Massive text - bleeds off edge */}
            <div className="-ml-1 sm:-ml-2 lg:-ml-4">
              <h1
                className="text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] xl:text-[14rem] font-black leading-[0.85] tracking-tighter text-white select-none"
              >
                LEARN
              </h1>
              <h1
                className="text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] xl:text-[14rem] font-black leading-[0.85] tracking-tighter text-secondary select-none"
              >
                ENGLISH
              </h1>
            </div>

            {/* Subtitle */}
            <div className="mt-10 lg:mt-16 max-w-md">
              <p className="text-[11px] uppercase tracking-[0.3em] text-white/50 font-light leading-relaxed">
                {siteContent.hero.description}
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <button
                onClick={() => {
                  const el = document.getElementById('locations');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-3 text-white hover:text-secondary transition-colors duration-300"
              >
                <span className="text-sm uppercase tracking-[0.2em] font-light">
                  Explore Now
                </span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                <span className="block w-16 h-[1px] bg-secondary" />
              </button>
            </div>
          </div>

          {/* Right: Photo element */}
          <div className="lg:col-span-4 relative">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-secondary" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-secondary" />
              <img
                src={siteContent.hero.backgroundImage}
                alt="Students learning English"
                className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Overlay text */}
              <div className="absolute bottom-6 left-6">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/80 font-light bg-black/60 px-3 py-1.5">
                  8 Countries / 35+ Schools
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-light">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
