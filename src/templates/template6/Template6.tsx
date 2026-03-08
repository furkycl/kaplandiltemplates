import { useState } from 'react';
import T6Navbar from './sections/T6Navbar';
import T6Hero from './sections/T6Hero';
import T6Stats from './sections/T6Stats';
import T6Locations from './sections/T6Locations';
import T6Videos from './sections/T6Videos';
import T6About from './sections/T6About';
import T6Programs from './sections/T6Programs';
import T6Testimonials from './sections/T6Testimonials';
import T6LeadSection from './sections/T6LeadSection';
import T6Footer from './sections/T6Footer';
import LocationModal from '../../components/LocationModal';
import type { Location } from '../../data/locations';

export default function Template6() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <T6Navbar />
      <T6Hero />
      <T6Stats />
      <T6Locations onSelectLocation={setSelectedLocation} />
      <T6Videos />
      <T6About />
      <T6Programs />
      <T6Testimonials />
      <T6LeadSection />
      <T6Footer />

      {selectedLocation && (
        <LocationModal
          location={selectedLocation}
          onClose={() => setSelectedLocation(null)}
        />
      )}
    </div>
  );
}
