import { useState, type FormEvent, type ChangeEvent } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, MapPin, Clock, Calendar, Play, CheckCircle2, Send, CheckCircle, ArrowRight } from 'lucide-react';
import { allLocations } from '../../data/locations';
import { t } from '../../utils/i18n';
import T10Navbar from './sections/T10Navbar';
import T10Footer from './sections/T10Footer';

const courses = [
  { title: 'General English', duration: '2-52 weeks', level: 'All levels' },
  { title: 'Intensive English', duration: '2-52 weeks', level: 'All levels' },
  { title: 'Business English', duration: '2-12 weeks', level: 'Intermediate+' },
  { title: 'Exam Preparation (IELTS/TOEFL)', duration: '4-16 weeks', level: 'Intermediate+' },
];

export default function T10CityPage() {
  const { citySlug } = useParams<{ citySlug: string }>();
  const location = allLocations.find(
    (l) => l.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === citySlug
  );

  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!location) {
    return (
      <div className="min-h-screen bg-white text-[#0F1A3C]">
        <T10Navbar />
        <div className="flex items-center justify-center py-40">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Destination not found</h1>
            <Link to="/template10/destinations" className="text-[#E31837] font-semibold">
              ← Back to All Destinations
            </Link>
          </div>
        </div>
        <T10Footer />
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

  return (
    <div className="min-h-screen bg-white text-[#0F1A3C]">
      <T10Navbar />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex items-center gap-1.5 text-[13px]">
          <Link to="/template10" className="text-gray-400 hover:text-[#0F1A3C] transition-colors">
            {t('nav.home')}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
          <Link to="/template10/destinations" className="text-gray-400 hover:text-[#0F1A3C] transition-colors">
            {t('nav.destinations')}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
          <span className="text-[#0F1A3C] font-medium">{location.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-[280px] sm:h-[340px] overflow-hidden">
        <img src={location.image} alt={location.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0F1A3C]/60" />
        <div className="absolute inset-0 flex flex-col justify-end pb-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-white/70" />
              <span className="text-white/70 text-[13px] font-medium">
                {location.country}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Study in {location.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - 2/3 */}
          <div className="lg:col-span-2 space-y-12">
            {/* Video */}
            <div>
              <h2 className="text-lg font-bold text-[#0F1A3C] mb-4 flex items-center gap-2">
                <Play className="w-5 h-5 text-[#E31837]" />
                Watch: {location.name} School Tour
              </h2>
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-video bg-black">
                <iframe
                  src={location.video}
                  title={`${location.name} School Tour`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* About */}
            <div>
              <h2 className="text-xl font-bold text-[#0F1A3C] mb-3">
                About {location.name}
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed">{location.description}</p>
            </div>

            {/* Why Study Here */}
            <div>
              <h2 className="text-xl font-bold text-[#0F1A3C] mb-4">
                Why Study in {location.name}?
              </h2>
              <div className="flex flex-wrap gap-3">
                {features.map((f, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 text-[13px] text-gray-700 px-4 py-2.5 rounded-lg"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Courses */}
            <div>
              <h2 className="text-xl font-bold text-[#0F1A3C] mb-4">Available Courses</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {courses.map((course, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-[15px] font-bold text-[#0F1A3C]">{course.title}</h3>
                    <p className="text-[13px] text-gray-500 mt-1.5">
                      Duration: {course.duration}
                    </p>
                    <p className="text-[13px] text-gray-500">Level: {course.level}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - 1/3 */}
          <div className="space-y-6">
            {/* Lead Form */}
            <div className="bg-[#F5F7FA] rounded-2xl p-6 border border-gray-100 sticky top-28">
              <h3 className="text-lg font-bold text-[#0F1A3C] mb-1">
                Interested in {location.name}?
              </h3>
              <p className="text-[13px] text-gray-500 mb-5">
                Get a free consultation about studying in {location.name}.
              </p>

              {isSuccess ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-12 h-12 mx-auto mb-3 text-green-500" />
                  <p className="font-semibold text-gray-900">{t('form.success')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder={`${t('form.firstName')} *`}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#E31837]/30"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={`${t('form.email')} *`}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#E31837]/30"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('form.phone')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#E31837]/30"
                  />
                  <div className="px-4 py-3 rounded-lg bg-gray-100 text-[14px] text-gray-500">
                    {location.name}, {location.country}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-[#E31837] hover:bg-[#c71430] text-white font-semibold py-3.5 rounded-lg transition-all duration-300 text-[14px] disabled:opacity-60"
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? t('form.sending') : 'Get Free Quote'}
                  </button>
                </form>
              )}
            </div>

            {/* Quick Facts */}
            <div className="bg-[#F5F7FA] rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0F1A3C] mb-4">Quick Facts</h3>
              <div className="space-y-3.5">
                {[
                  { label: 'Location', value: `${location.name}, ${location.country}` },
                  { label: 'Region', value: location.region },
                  { label: 'Min. Duration', value: '2 weeks' },
                  { label: 'Start Dates', value: 'Every Monday' },
                ].map((fact, i) => (
                  <div key={i} className="flex items-center justify-between text-[14px]">
                    <span className="text-gray-500 flex items-center gap-2">
                      {fact.label === 'Location' && <MapPin className="w-4 h-4" />}
                      {fact.label === 'Min. Duration' && <Clock className="w-4 h-4" />}
                      {fact.label === 'Start Dates' && <Calendar className="w-4 h-4" />}
                      {fact.label}
                    </span>
                    <span className="font-medium text-[#0F1A3C]">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Destinations */}
      {sameCountryLocations.length > 0 && (
        <section className="bg-[#F5F7FA] py-14">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="text-2xl font-bold text-[#0F1A3C] mb-8">
              More Destinations in {location.country}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {sameCountryLocations.map((loc) => (
                <Link
                  key={loc.id}
                  to={`/template10/destinations/${loc.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={loc.image}
                      alt={loc.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-[#0F1A3C]">{loc.name}</h3>
                    <span className="text-[#E31837] text-[13px] font-semibold mt-1 inline-flex items-center gap-1">
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
      <section className="bg-[#E31837] py-14 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Study in {location.name}?
          </h2>
          <p className="text-white/80 mb-8">
            Take the first step towards your language learning adventure. Get a free consultation today.
          </p>
          <Link
            to="/template10"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#E31837] font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 text-[15px]"
          >
            {t('hero.freeConsultation')}
          </Link>
        </div>
      </section>

      <T10Footer />
    </div>
  );
}
