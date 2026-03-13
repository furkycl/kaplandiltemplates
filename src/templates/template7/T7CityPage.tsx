import { useState, type FormEvent, type ChangeEvent } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, MapPin, Clock, Calendar, Play, CheckCircle2, Send, CheckCircle, ArrowRight } from 'lucide-react';
import { allLocations } from '../../data/locations';
import { t } from '../../utils/i18n';
import T7Navbar from './sections/T7Navbar';
import T7Footer from './sections/T7Footer';

const courses = [
  { title: 'General English', duration: '2-52 weeks', level: 'All levels' },
  { title: 'Intensive English', duration: '2-52 weeks', level: 'All levels' },
  { title: 'Business English', duration: '2-12 weeks', level: 'Intermediate+' },
  { title: 'Exam Preparation (IELTS/TOEFL)', duration: '4-16 weeks', level: 'Intermediate+' },
];

export default function T7CityPage() {
  const { citySlug } = useParams<{ citySlug: string }>();
  const location = allLocations.find(
    (l) => l.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === citySlug
  );

  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!location) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white">
        <T7Navbar />
        <div className="flex items-center justify-center py-40">
          <div className="text-center">
            <h1 className="font-serif text-3xl mb-4">Destination not found</h1>
            <Link to="/template7/destinations" className="text-[#C8102E] font-semibold">
              ← Back to All Destinations
            </Link>
          </div>
        </div>
        <T7Footer />
      </div>
    );
  }

  const sameCountryLocations = allLocations
    .filter((l) => l.country === location.country && l.id !== location.id)
    .slice(0, 3);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log('City lead:', { ...formData, city: location.name });
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const features = location.features.slice(0, 4);
  const inputClass =
    'w-full px-4 py-3 rounded-lg border border-white/10 bg-white/[0.04] text-white placeholder-white/30 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#C8102E]/40';

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <T7Navbar />

      {/* Breadcrumbs */}
      <div className="border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex items-center gap-1.5 text-[13px]">
          <Link to="/template7" className="text-white/30 hover:text-white/60 transition-colors">
            {t('nav.home')}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/20" />
          <Link to="/template7/destinations" className="text-white/30 hover:text-white/60 transition-colors">
            {t('nav.destinations')}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/20" />
          <span className="text-white/70 font-medium">{location.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-[280px] sm:h-[340px] overflow-hidden">
        <img src={location.image} alt={location.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0A0A0A]/70" />
        <div className="absolute inset-0 flex flex-col justify-end pb-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-white/50" />
              <span className="text-white/50 text-[13px]">{location.country}</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white">
              Study in {location.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left */}
          <div className="lg:col-span-2 space-y-12">
            {/* Video */}
            <div>
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Play className="w-5 h-5 text-[#C8102E]" />
                Watch: {location.name} School Tour
              </h2>
              <div className="rounded-xl overflow-hidden border border-white/[0.06] aspect-video bg-black">
                <iframe
                  src={location.video}
                  title={`${location.name} Tour`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* About */}
            <div>
              <h2 className="font-serif text-xl text-white mb-3">About {location.name}</h2>
              <p className="text-white/40 text-[15px] leading-relaxed">{location.description}</p>
            </div>

            {/* Why Study */}
            <div>
              <h2 className="font-serif text-xl text-white mb-4">Why Study in {location.name}?</h2>
              <div className="flex flex-wrap gap-3">
                {features.map((f, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.08] text-[13px] text-white/60 px-4 py-2.5 rounded-lg"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#C8102E]" />
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Courses */}
            <div>
              <h2 className="font-serif text-xl text-white mb-4">Available Courses</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {courses.map((course, i) => (
                  <div
                    key={i}
                    className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 hover:bg-white/[0.04] transition-colors"
                  >
                    <h3 className="text-[15px] font-semibold text-white/90">{course.title}</h3>
                    <p className="text-[13px] text-white/35 mt-1.5">Duration: {course.duration}</p>
                    <p className="text-[13px] text-white/35">Level: {course.level}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            {/* Form */}
            <div className="bg-[#1A1A1A] rounded-xl p-6 border border-white/[0.06] sticky top-28">
              <h3 className="text-lg font-semibold text-white mb-1">
                Interested in {location.name}?
              </h3>
              <p className="text-[13px] text-white/40 mb-5">
                Get a free consultation about studying in {location.name}.
              </p>

              {isSuccess ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-12 h-12 mx-auto mb-3 text-green-400" />
                  <p className="font-semibold text-white">{t('form.success')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder={`${t('form.firstName')} *`} required className={inputClass} />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={`${t('form.email')} *`} required className={inputClass} />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder={t('form.phone')} className={inputClass} />
                  <div className="px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[14px] text-white/40">
                    {location.name}, {location.country}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-[#C8102E] hover:bg-[#a50d25] text-white font-semibold py-3.5 rounded-full transition-all duration-300 text-[14px] disabled:opacity-60"
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? t('form.sending') : 'Get Free Quote'}
                  </button>
                </form>
              )}
            </div>

            {/* Quick Facts */}
            <div className="bg-[#1A1A1A] rounded-xl p-6 border border-white/[0.06]">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Facts</h3>
              <div className="space-y-3.5">
                {[
                  { icon: <MapPin className="w-4 h-4" />, label: 'Location', value: `${location.name}, ${location.country}` },
                  { icon: null, label: 'Region', value: location.region },
                  { icon: <Clock className="w-4 h-4" />, label: 'Min. Duration', value: '2 weeks' },
                  { icon: <Calendar className="w-4 h-4" />, label: 'Start Dates', value: 'Every Monday' },
                ].map((fact, i) => (
                  <div key={i} className="flex items-center justify-between text-[14px]">
                    <span className="text-white/35 flex items-center gap-2">
                      {fact.icon}
                      {fact.label}
                    </span>
                    <span className="font-medium text-white/70">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Destinations */}
      {sameCountryLocations.length > 0 && (
        <section className="border-t border-white/[0.06] py-14">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="font-serif text-2xl text-white mb-8">
              More Destinations in {location.country}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {sameCountryLocations.map((loc) => (
                <Link
                  key={loc.id}
                  to={`/template7/destinations/${loc.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="group rounded-xl border border-white/[0.06] overflow-hidden hover:border-white/[0.1] transition-all duration-300"
                >
                  <div className="h-40 overflow-hidden">
                    <img src={loc.image} alt={loc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-white/90">{loc.name}</h3>
                    <span className="text-[#C8102E] text-[13px] font-semibold mt-1 inline-flex items-center gap-1">
                      Explore <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-white/[0.06] py-14 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-2xl sm:text-3xl text-white mb-3">
            Ready to Study in {location.name}?
          </h2>
          <p className="text-white/40 mb-8">
            Take the first step towards your language learning adventure.
          </p>
          <Link
            to="/template7"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C8102E] hover:bg-[#a50d25] text-white font-semibold rounded-full transition-all duration-300 text-[15px]"
          >
            {t('hero.freeConsultation')}
          </Link>
        </div>
      </section>

      <T7Footer />
    </div>
  );
}
