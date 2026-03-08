import { useState } from 'react';
import T5Navbar from './sections/T5Navbar';
import T5Hero from './sections/T5Hero';
import T5Stats from './sections/T5Stats';
import T5Locations from './sections/T5Locations';
import T5Videos from './sections/T5Videos';
import T5About from './sections/T5About';
import T5Programs from './sections/T5Programs';
import T5Testimonials from './sections/T5Testimonials';
import T5LeadSection from './sections/T5LeadSection';
import T5Footer from './sections/T5Footer';
import LocationModal from '../../components/LocationModal';
import type { Location } from '../../data/locations';

export default function Template5() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <T5Navbar />
      <T5Hero />
      <T5Stats />
      <T5Locations onSelectLocation={setSelectedLocation} />
      <T5Videos />
      <T5About />
      <T5Programs />
      <T5Testimonials />
      <T5LeadSection />
      <T5Footer />

      {selectedLocation && (
        <LocationModal
          location={selectedLocation}
          onClose={() => setSelectedLocation(null)}
        />
      )}
    </div>
  );
}
