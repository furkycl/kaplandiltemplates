import { useState } from 'react';
import T9Navbar from './sections/T9Navbar';
import T9Hero from './sections/T9Hero';
import T9Stats from './sections/T9Stats';
import T9Locations from './sections/T9Locations';
import T9Videos from './sections/T9Videos';
import T9About from './sections/T9About';
import T9Programs from './sections/T9Programs';
import T9Testimonials from './sections/T9Testimonials';
import T9LeadSection from './sections/T9LeadSection';
import T9Footer from './sections/T9Footer';
import LocationModal from '../../components/LocationModal';
import type { Location } from '../../data/locations';

export default function Template9() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1a1a1a]">
      <T9Navbar />
      <T9Hero />
      <T9Stats />
      <T9Locations onSelectLocation={setSelectedLocation} />
      <T9Videos />
      <T9About />
      <T9Programs />
      <T9Testimonials />
      <T9LeadSection />
      <T9Footer />
      {selectedLocation && (
        <LocationModal
          location={selectedLocation}
          onClose={() => setSelectedLocation(null)}
        />
      )}
    </div>
  );
}
