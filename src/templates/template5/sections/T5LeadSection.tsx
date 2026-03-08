import LeadForm from '../../../components/LeadForm';

export default function T5LeadSection() {
  return (
    <section id="contact" className="relative bg-white py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Massive text */}
          <div className="lg:col-span-5 xl:col-span-6">
            <span className="text-[10px] uppercase tracking-[0.4em] text-black/30 font-light">
              Get in Touch
            </span>

            <div className="mt-8 lg:mt-12">
              <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[6rem] xl:text-[8rem] font-black text-gray-100 leading-[0.9] tracking-tighter select-none">
                LET'S
                <br />
                <span className="text-[#0a0a0a]">TALK</span>
              </h2>
            </div>

            {/* Description */}
            <div className="mt-8 lg:mt-12 max-w-sm">
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Take the first step towards your international education journey.
                Fill out the form and our team will help you find the perfect
                program and destination.
              </p>
            </div>

            {/* Decorative elements */}
            <div className="hidden lg:block mt-16">
              <div className="flex items-center gap-4">
                <div className="w-16 h-[2px] bg-secondary" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-black/30 font-light">
                  Since 1938
                </span>
              </div>
            </div>
          </div>

          {/* Right: Lead form */}
          <div className="lg:col-span-7 xl:col-span-6">
            <div className="bg-white border border-black/10 p-8 sm:p-10 lg:p-12 relative">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-secondary" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-secondary" />

              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#0a0a0a] tracking-tight">
                  Request Information
                </h3>
                <p className="mt-2 text-sm text-gray-400 font-light">
                  Free consultation, no commitment
                </p>
              </div>

              <LeadForm variant="light" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
