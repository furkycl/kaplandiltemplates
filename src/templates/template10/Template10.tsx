import { useState } from 'react';
import T10Navbar from './sections/T10Navbar';
import T10Hero from './sections/T10Hero';
import T10Locations from './sections/T10Locations';
import T10About from './sections/T10About';
import T10Videos from './sections/T10Videos';
import T10Testimonials from './sections/T10Testimonials';
import T10CTA from './sections/T10CTA';
import T10LeadSection from './sections/T10LeadSection';
import T10Footer from './sections/T10Footer';
import LocationModal from '../../components/LocationModal';
import type { Location } from '../../data/locations';

export default function Template10() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  return (
    <div className="min-h-screen bg-white text-[#0F1A3C]">
      <T10Navbar />
      <T10Hero />
      <T10Locations onSelectLocation={setSelectedLocation} />
      <T10About />
      <T10Videos />
      <T10Testimonials />
      <T10CTA />
      <T10LeadSection />
      <T10Footer />

      {selectedLocation && (
        <LocationModal
          location={selectedLocation}
          onClose={() => setSelectedLocation(null)}
        />
      )}
    </div>
  );
}
