import { useState } from 'react';
import T7Navbar from './sections/T7Navbar';
import T7Hero from './sections/T7Hero';
import T7Stats from './sections/T7Stats';
import T7Locations from './sections/T7Locations';
import T7Videos from './sections/T7Videos';
import T7About from './sections/T7About';
import T7Programs from './sections/T7Programs';
import T7Testimonials from './sections/T7Testimonials';
import T7LeadSection from './sections/T7LeadSection';
import T7Footer from './sections/T7Footer';
import LocationModal from '../../components/LocationModal';
import type { Location } from '../../data/locations';

export default function Template7() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <T7Navbar />
      <T7Hero />
      <T7Stats />
      <T7Locations onSelectLocation={setSelectedLocation} />
      <T7Videos />
      <T7About />
      <T7Programs />
      <T7Testimonials />
      <T7LeadSection />
      <T7Footer />

      {selectedLocation && (
        <LocationModal
          location={selectedLocation}
          onClose={() => setSelectedLocation(null)}
        />
      )}
    </div>
  );
}
