import { useState } from 'react';
import T4Navbar from './sections/T4Navbar';
import T4Hero from './sections/T4Hero';
import T4Stats from './sections/T4Stats';
import T4Locations from './sections/T4Locations';
import T4Videos from './sections/T4Videos';
import T4About from './sections/T4About';
import T4Programs from './sections/T4Programs';
import T4Testimonials from './sections/T4Testimonials';
import T4LeadSection from './sections/T4LeadSection';
import T4Footer from './sections/T4Footer';
import LocationModal from '../../components/LocationModal';
import type { Location } from '../../data/locations';

export default function Template4() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <T4Navbar />
      <T4Hero />
      <T4Stats />
      <T4Locations onSelectLocation={setSelectedLocation} />
      <T4Videos />
      <T4About />
      <T4Programs />
      <T4Testimonials />
      <T4LeadSection />
      <T4Footer />

      {selectedLocation && (
        <LocationModal
          location={selectedLocation}
          onClose={() => setSelectedLocation(null)}
        />
      )}
    </div>
  );
}
