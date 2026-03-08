import { X, MapPin, CheckCircle } from 'lucide-react';
import type { Location } from '../data/locations';
import { t } from '../utils/i18n';
import LeadForm from './LeadForm';

interface LocationModalProps {
  location: Location;
  onClose: () => void;
}

export default function LocationModal({ location, onClose }: LocationModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="relative">
          <div className="aspect-video w-full">
            <iframe
              src={location.video}
              title={location.name}
              className="w-full h-full rounded-t-2xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 md:p-8">
          {/* Location Info */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{location.flag}</span>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{location.name}</h2>
              <div className="flex items-center gap-1 text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>{location.country}</span>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed">{location.description}</p>

          {/* Features */}
          <div className="mb-8">
            <h3 className="font-semibold text-gray-900 mb-3">{t('locations.features')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {location.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Apply Form */}
          <div className="border-t pt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{t('form.title')}</h3>
            <p className="text-gray-500 mb-6">{t('form.subtitle')}</p>
            <LeadForm />
          </div>
        </div>
      </div>
    </div>
  );
}
