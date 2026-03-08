import { useState } from 'react';
import T1Navbar from './sections/T1Navbar';
import T1Hero from './sections/T1Hero';
import T1Stats from './sections/T1Stats';
import T1Locations from './sections/T1Locations';
import T1Videos from './sections/T1Videos';
import T1About from './sections/T1About';
import T1Programs from './sections/T1Programs';
import T1Testimonials from './sections/T1Testimonials';
import T1LeadSection from './sections/T1LeadSection';
import T1Footer from './sections/T1Footer';
import LocationModal from '../../components/LocationModal';
import type { Location } from '../../data/locations';

export default function Template1() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <T1Navbar />
      <T1Hero />
      <T1Stats />
      <T1Locations onSelectLocation={setSelectedLocation} />
      <T1Videos />
      <T1About />
      <T1Programs />
      <T1Testimonials />
      <T1LeadSection />
      <T1Footer />

      {selectedLocation && (
        <LocationModal
          location={selectedLocation}
          onClose={() => setSelectedLocation(null)}
        />
      )}
    </div>
  );
}
