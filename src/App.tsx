import { Routes, Route, Link } from 'react-router-dom'
import Template1 from './templates/template1/Template1'
import Template2 from './templates/template2/Template2'
import Template3 from './templates/template3/Template3'

function TemplatePicker() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        Kaplan International TV
      </h1>
      <p className="text-gray-400 text-lg mb-12 text-center max-w-2xl">
        Choose a template to preview. Each template is a unique design for the Kaplan International marketing website.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        <Link
          to="/template1"
          className="group relative rounded-2xl overflow-hidden bg-gray-800 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
        >
          <div className="aspect-video bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
            <span className="text-6xl">🚀</span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Template 1</h3>
            <p className="text-sm text-gray-400">Modern Startup Landing Page</p>
            <p className="text-xs text-gray-500 mt-2">Clean tech style, video heavy, large hero sections</p>
          </div>
        </Link>

        <Link
          to="/template2"
          className="group relative rounded-2xl overflow-hidden bg-gray-800 border border-gray-700 hover:border-emerald-500 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20"
        >
          <div className="aspect-video bg-gradient-to-br from-emerald-600 to-teal-500 flex items-center justify-center">
            <span className="text-6xl">🎓</span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Template 2</h3>
            <p className="text-sm text-gray-400">Education / University Style</p>
            <p className="text-xs text-gray-500 mt-2">Structured layout, location grid, informational sections</p>
          </div>
        </Link>

        <Link
          to="/template3"
          className="group relative rounded-2xl overflow-hidden bg-gray-800 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
        >
          <div className="aspect-video bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
            <span className="text-6xl">🎬</span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Template 3</h3>
            <p className="text-sm text-gray-400">Video-First Marketing Style</p>
            <p className="text-xs text-gray-500 mt-2">Big media sections, interactive cards, very visual</p>
          </div>
        </Link>
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
    </Routes>
  )
}
