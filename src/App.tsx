import { Routes, Route, Link } from 'react-router-dom'
import Template1 from './templates/template1/Template1'
import Template2 from './templates/template2/Template2'
import Template3 from './templates/template3/Template3'
import Template4 from './templates/template4/Template4'
import Template5 from './templates/template5/Template5'
import Template6 from './templates/template6/Template6'
import Template7 from './templates/template7/Template7'
import T7Destinations from './templates/template7/T7Destinations'
import T7CityPage from './templates/template7/T7CityPage'
import Template8 from './templates/template8/Template8'
import Template9 from './templates/template9/Template9'
import Template10 from './templates/template10/Template10'
import T10Destinations from './templates/template10/T10Destinations'
import T10CityPage from './templates/template10/T10CityPage'

const templates = [
  {
    path: '/template1',
    title: 'Template 1',
    subtitle: 'Modern Startup Landing Page',
    description: 'Clean tech style, video heavy, large hero sections',
    emoji: '🚀',
    gradient: 'from-blue-600 to-cyan-500',
    border: 'hover:border-blue-500',
    shadow: 'hover:shadow-blue-500/20',
  },
  {
    path: '/template2',
    title: 'Template 2',
    subtitle: 'Education / University Style',
    description: 'Structured layout, location grid, informational sections',
    emoji: '🎓',
    gradient: 'from-emerald-600 to-teal-500',
    border: 'hover:border-emerald-500',
    shadow: 'hover:shadow-emerald-500/20',
  },
  {
    path: '/template3',
    title: 'Template 3',
    subtitle: 'Video-First Marketing',
    description: 'Big media sections, interactive cards, very visual',
    emoji: '🎬',
    gradient: 'from-purple-600 to-pink-500',
    border: 'hover:border-purple-500',
    shadow: 'hover:shadow-purple-500/20',
  },
  {
    path: '/template4',
    title: 'Template 4',
    subtitle: 'Corporate Enterprise',
    description: 'Professional, trust-focused, data-driven corporate design',
    emoji: '🏢',
    gradient: 'from-slate-700 to-blue-900',
    border: 'hover:border-slate-400',
    shadow: 'hover:shadow-slate-400/20',
  },
  {
    path: '/template5',
    title: 'Template 5',
    subtitle: 'Creative Agency / Bold',
    description: 'Bold typography, asymmetric layouts, award-winning aesthetic',
    emoji: '🎨',
    gradient: 'from-yellow-500 to-red-600',
    border: 'hover:border-yellow-500',
    shadow: 'hover:shadow-yellow-500/20',
  },
  {
    path: '/template6',
    title: 'Template 6',
    subtitle: 'Luxury Travel Premium',
    description: 'Elegant serif fonts, warm tones, high-end boutique feel',
    emoji: '✨',
    gradient: 'from-amber-600 to-yellow-800',
    border: 'hover:border-amber-500',
    shadow: 'hover:shadow-amber-500/20',
  },
  {
    path: '/template7',
    title: 'Template 7',
    subtitle: 'Dark Editorial',
    description: 'Kaplan Red accent, serif headings, grain texture, cinematic dark editorial',
    emoji: '🔴',
    gradient: 'from-red-700 to-rose-900',
    border: 'hover:border-red-500',
    shadow: 'hover:shadow-red-500/20',
  },
  {
    path: '/template8',
    title: 'Template 8',
    subtitle: 'Glassmorphism SaaS',
    description: 'Glass cards, gradient mesh backgrounds, modern purple-blue aesthetic',
    emoji: '💎',
    gradient: 'from-violet-600 to-blue-600',
    border: 'hover:border-violet-500',
    shadow: 'hover:shadow-violet-500/20',
  },
  {
    path: '/template9',
    title: 'Template 9',
    subtitle: 'Split-Screen Storytelling',
    description: 'Warm tones, asymmetric layouts, Apple-inspired clean storytelling',
    emoji: '📖',
    gradient: 'from-orange-600 to-amber-700',
    border: 'hover:border-orange-500',
    shadow: 'hover:shadow-orange-500/20',
  },
  {
    path: '/template10',
    title: 'Template 10',
    subtitle: 'Corporate Institutional',
    description: 'Navy & red, corporate layout, trust-focused, clean institutional design',
    emoji: '🏛️',
    gradient: 'from-blue-900 to-red-700',
    border: 'hover:border-blue-400',
    shadow: 'hover:shadow-blue-400/20',
  },
]

function TemplatePicker() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Kaplan International TV
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Choose a template to preview. Each template is a unique design for the Kaplan International marketing website.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {templates.map((t) => (
          <Link
            key={t.path}
            to={t.path}
            className={`group relative rounded-2xl overflow-hidden bg-gray-800/80 border border-gray-700/50 ${t.border} transition-all duration-300 hover:shadow-2xl ${t.shadow} hover:-translate-y-1`}
          >
            <div className={`aspect-video bg-gradient-to-br ${t.gradient} flex items-center justify-center`}>
              <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{t.emoji}</span>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold mb-1">{t.title}</h3>
              <p className="text-sm text-gray-400">{t.subtitle}</p>
              <p className="text-xs text-gray-500 mt-2">{t.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<TemplatePicker />} />
      <Route path="/template1" element={<Template1 />} />
      <Route path="/template2" element={<Template2 />} />
      <Route path="/template3" element={<Template3 />} />
      <Route path="/template4" element={<Template4 />} />
      <Route path="/template5" element={<Template5 />} />
      <Route path="/template6" element={<Template6 />} />
      <Route path="/template7" element={<Template7 />} />
      <Route path="/template7/destinations" element={<T7Destinations />} />
      <Route path="/template7/destinations/:citySlug" element={<T7CityPage />} />
      <Route path="/template8" element={<Template8 />} />
      <Route path="/template9" element={<Template9 />} />
      <Route path="/template10" element={<Template10 />} />
      <Route path="/template10/destinations" element={<T10Destinations />} />
      <Route path="/template10/destinations/:citySlug" element={<T10CityPage />} />
    </Routes>
  )
}
