import { useState } from 'react';
import T2Navbar from './sections/T2Navbar';
import T2Hero from './sections/T2Hero';
import T2Stats from './sections/T2Stats';
import T2Locations from './sections/T2Locations';
import T2Videos from './sections/T2Videos';
import T2About from './sections/T2About';
import T2Programs from './sections/T2Programs';
import T2Testimonials from './sections/T2Testimonials';
import T2LeadSection from './sections/T2LeadSection';
import T2Footer from './sections/T2Footer';
import LocationModal from '../../components/LocationModal';
import type { Location } from '../../data/locations';

export default function Template2() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <T2Navbar />
      <T2Hero />
      <T2Stats />
      <T2Locations onSelectLocation={setSelectedLocation} />
      <T2Videos />
      <T2About />
      <T2Programs />
      <T2Testimonials />
      <T2LeadSection />
      <T2Footer />

      {selectedLocation && (
        <LocationModal
          location={selectedLocation}
          onClose={() => setSelectedLocation(null)}
        />
      )}
    </div>
  );
}
