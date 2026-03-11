import { useState } from 'react';
import T8Navbar from './sections/T8Navbar';
import T8Hero from './sections/T8Hero';
import T8Stats from './sections/T8Stats';
import T8Locations from './sections/T8Locations';
import T8Videos from './sections/T8Videos';
import T8About from './sections/T8About';
import T8Programs from './sections/T8Programs';
import T8Testimonials from './sections/T8Testimonials';
import T8LeadSection from './sections/T8LeadSection';
import T8Footer from './sections/T8Footer';
import LocationModal from '../../components/LocationModal';
import type { Location } from '../../data/locations';

export default function Template8() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  return (
    <div className="min-h-screen bg-[#09090b] text-white overflow-hidden">
      <T8Navbar />
      <T8Hero />
      <T8Stats />
      <T8Locations onSelectLocation={setSelectedLocation} />
      <T8Videos />
      <T8About />
      <T8Programs />
      <T8Testimonials />
      <T8LeadSection />
      <T8Footer />
      {selectedLocation && (
        <LocationModal
          location={selectedLocation}
          onClose={() => setSelectedLocation(null)}
        />
      )}
    </div>
  );
}
