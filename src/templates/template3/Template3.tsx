import { useState } from 'react';
import T3Navbar from './sections/T3Navbar';
import T3Hero from './sections/T3Hero';
import T3Stats from './sections/T3Stats';
import T3Locations from './sections/T3Locations';
import T3Videos from './sections/T3Videos';
import T3About from './sections/T3About';
import T3Programs from './sections/T3Programs';
import T3Testimonials from './sections/T3Testimonials';
import T3LeadSection from './sections/T3LeadSection';
import T3Footer from './sections/T3Footer';
import LocationModal from '../../components/LocationModal';
import type { Location } from '../../data/locations';

export default function Template3() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <T3Navbar />
      <T3Hero />
      <T3Stats />
      <T3Locations onSelectLocation={setSelectedLocation} />
      <T3Videos />
      <T3About />
      <T3Programs />
      <T3Testimonials />
      <T3LeadSection />
      <T3Footer />

      {selectedLocation && (
        <LocationModal
          location={selectedLocation}
          onClose={() => setSelectedLocation(null)}
        />
      )}
    </div>
  );
}
