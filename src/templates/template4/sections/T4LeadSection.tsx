import { Phone, Mail, MapPin, CheckCircle, Shield, Award, Users } from 'lucide-react';
import LeadForm from '../../../components/LeadForm';

export default function T4LeadSection() {
  const benefits = [
    'Personalized program recommendations',
    'Visa and accommodation guidance',
    'Flexible payment plans available',
    'No application fees',
    'Dedicated student support team',
  ];

  return (
    <section id="contact" className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
              Get Started
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Request Information
          </h2>
          <p className="text-slate-400 mt-2 max-w-xl">
            Complete the form below and our education advisors will contact you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Form */}
          <div>
            <LeadForm variant="dark" />
          </div>

          {/* Right - Contact Info & Trust */}
          <div className="space-y-10">
            {/* Why Choose Kaplan */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">
                Why Choose Kaplan International?
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary/20 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-slate-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div className="border-t border-slate-700 pt-8">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
                Contact Us Directly
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+44-207-045-5000"
                  className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 border border-slate-700 group-hover:border-primary flex items-center justify-center transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">Phone</div>
                    <div className="text-sm font-medium">+44 207 045 5000</div>
                  </div>
                </a>
                <a
                  href="mailto:info@kaplan.com"
                  className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 border border-slate-700 group-hover:border-primary flex items-center justify-center transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">Email</div>
                    <div className="text-sm font-medium">info@kaplan.com</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 border border-slate-700 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">Head Office</div>
                    <div className="text-sm font-medium">London, United Kingdom</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="border-t border-slate-700 pt-8">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
                Certifications & Accreditations
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Shield, label: 'British Council' },
                  { icon: Award, label: 'ACCET Accredited' },
                  { icon: Users, label: 'Languages Canada' },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-2 p-4 border border-slate-700 bg-slate-800/50"
                  >
                    <Icon className="w-6 h-6 text-slate-500" />
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider text-center font-medium">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
