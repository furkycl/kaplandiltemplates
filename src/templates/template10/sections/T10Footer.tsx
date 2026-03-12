import { Phone, Mail, MapPin } from 'lucide-react';
import { t } from '../../../utils/i18n';

export default function T10Footer() {
  const quickLinks = [
    { label: t('nav.home'), href: '#hero' },
    { label: t('nav.destinations'), href: '#locations' },
    { label: t('about.whyKaplan'), href: '#about' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  const destinations = [
    'London, UK',
    'New York, USA',
    'Toronto, Canada',
    'Sydney, Australia',
    'Dublin, Ireland',
  ];

  const handleClick = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F1A3C] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/kaplanlogo.png"
                alt="Kaplan International Languages"
                className="h-14 w-auto brightness-0 invert"
              />
              <span className="bg-[#E31837] text-white text-[11px] font-bold px-2 py-0.5 rounded">
                TV
              </span>
            </div>
            <p className="text-[14px] text-white/50 leading-relaxed max-w-[260px]">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[14px] font-semibold text-white mb-5">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-[14px] text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Destinations */}
          <div>
            <h4 className="text-[14px] font-semibold text-white mb-5">
              {t('footer.locations')}
            </h4>
            <ul className="space-y-3">
              {destinations.map((dest, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleClick('#locations')}
                    className="text-[14px] text-white/50 hover:text-white transition-colors"
                  >
                    {dest}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[14px] font-semibold text-white mb-5">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-white/40 flex-shrink-0" />
                <span className="text-[14px] text-white/50">+44 123 456 789</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-white/40 flex-shrink-0" />
                <span className="text-[14px] text-white/50">info@kaplaninternational.tv</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-white/40 flex-shrink-0" />
                <span className="text-[14px] text-white/50">AcademiaUnited.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border border-white/10 rounded-xl p-5 mb-8">
          <p className="text-[12px] text-white/40 leading-relaxed">
            <span className="font-semibold text-white/60">Disclaimer:</span> This website is for marketing purposes only and is operated by Academia United, an authorized reseller agency for Kaplan International. This website is not the official Kaplan International website. For official information, please visit kaplaninternational.com.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-white/30">
            © 2026 kaplaninternational.tv — Operated by Academia United. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-[12px] text-white/30 hover:text-white/60 transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-[12px] text-white/30 hover:text-white/60 transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
