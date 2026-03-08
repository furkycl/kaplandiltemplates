import { CheckCircle, ArrowRight, Download } from 'lucide-react';
import { siteContent } from '../../../data/siteContent';

export default function T4Hero() {
  const { hero } = siteContent;

  const benefits = [
    'Accredited programs in 35+ schools worldwide',
    'Exclusive K+ Learning System for faster results',
    'Personalized study plans with certified instructors',
    'Flexible start dates and course durations',
  ];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-white pt-24 lg:pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 min-h-[560px]">
          {/* Left Content - 60% */}
          <div className="lg:col-span-3 flex flex-col justify-center py-12 lg:py-20 lg:pr-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-primary" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                Trusted by 1M+ Students Worldwide
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              {hero.title}
            </h1>

            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              {hero.description}
            </p>

            <ul className="space-y-3 mb-10">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleScrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-none transition-colors duration-200 text-sm"
              >
                Request Information
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-semibold px-8 py-4 rounded-none transition-colors duration-200 text-sm">
                <Download className="w-4 h-4" />
                Download Brochure
              </button>
            </div>
          </div>

          {/* Right Image - 40% */}
          <div className="lg:col-span-2 relative">
            <div className="h-full min-h-[400px] lg:min-h-full">
              <img
                src={hero.backgroundImage}
                alt="Students studying abroad"
                className="w-full h-full object-cover rounded-none"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Partner Logos Bar */}
      <div className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between gap-8">
            <span className="text-xs text-slate-400 uppercase tracking-wider font-medium whitespace-nowrap">
              Accredited by
            </span>
            <div className="flex items-center gap-8 overflow-hidden">
              {['British Council', 'ACCET', 'Languages Canada', 'EAQUALS', 'ALTO'].map((name) => (
                <div
                  key={name}
                  className="flex-shrink-0 h-8 px-6 bg-slate-200 flex items-center justify-center"
                >
                  <span className="text-xs font-medium text-slate-500 tracking-wide">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
