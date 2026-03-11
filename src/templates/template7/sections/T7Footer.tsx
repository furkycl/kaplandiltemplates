import { t } from '../../../utils/i18n';

const footerLinks = {
  destinations: [
    { label: 'United Kingdom', href: '#locations' },
    { label: 'United States', href: '#locations' },
    { label: 'Canada', href: '#locations' },
    { label: 'Australia', href: '#locations' },
    { label: 'Ireland', href: '#locations' },
  ],
  programmes: [
    { label: 'General English', href: '#contact' },
    { label: 'IELTS Preparation', href: '#contact' },
    { label: 'Business English', href: '#contact' },
    { label: 'Cambridge Exam', href: '#contact' },
    { label: 'Junior Summer', href: '#contact' },
  ],
  support: [
    { label: () => t('cta.button'), href: '#contact' },
    { label: () => t('footer.privacy'), href: '#' },
    { label: () => t('footer.terms'), href: '#' },
    { label: () => t('footer.cookiePolicy'), href: '#' },
  ],
};

export default function T7Footer() {
  return (
    <footer className="border-t border-white/[0.06]" style={{ background: '#050505' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <img
                src="/kaplanlogo.png"
                alt="Kaplan International Languages"
                className="h-24 sm:h-28 w-auto brightness-0 invert opacity-80"
              />
            </div>
            <p className="text-sm text-white/35 leading-relaxed font-light max-w-[260px]">
              {t('footer.description')}
            </p>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.1em] uppercase text-white/40 mb-4">
              {t('footer.destinations')}
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.destinations.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/45 hover:text-white font-light transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.1em] uppercase text-white/40 mb-4">
              {t('footer.programs')}
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.programmes.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/45 hover:text-white font-light transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.1em] uppercase text-white/40 mb-4">
              {t('footer.resources')}
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-sm text-white/45 hover:text-white font-light transition-colors">
                    {link.label()}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-7 border-t border-white/[0.05]">
          <p className="text-[11px] text-white/20 leading-relaxed font-light">
            {t('footer.description')}
          </p>
        </div>
      </div>
    </footer>
  );
}
