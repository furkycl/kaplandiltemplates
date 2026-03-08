import { siteContent } from '../../../data/siteContent';
import { t } from '../../../utils/i18n';
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  MapPin,
  Mail,
  Phone,
  type LucideIcon,
} from 'lucide-react';

const socialIcons: Record<string, LucideIcon> = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  twitter: Twitter,
  linkedin: Linkedin,
};

const quickLinks = [
  { label: () => t('nav.home'), href: '#' },
  { label: () => t('nav.locations'), href: '#locations' },
  { label: () => t('nav.videos'), href: '#videos' },
  { label: () => t('nav.about'), href: '#about' },
  { label: () => t('nav.programs'), href: '#programs' },
  { label: () => t('nav.contact'), href: '#contact' },
];

const topLocations = [
  'London',
  'New York',
  'Toronto',
  'Cambridge',
  'Dublin',
  'Sydney',
];

export default function T3Footer() {
  return (
    <footer className="relative bg-black pt-16 pb-8">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="inline-block mb-5">
              <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white via-purple-300 to-accent bg-clip-text text-transparent">
                KaplanTV
              </span>
            </a>
            <p className="text-sm text-white/35 leading-relaxed mb-6 max-w-xs">
              {siteContent.footer.description}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {siteContent.footer.socialLinks.map((link) => {
                const Icon = socialIcons[link.platform];
                if (!Icon) return null;
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
                    aria-label={link.platform}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-5">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/35 hover:text-white/80 transition-colors duration-200"
                  >
                    {link.label()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-5">
              {t('footer.locations')}
            </h4>
            <ul className="space-y-3">
              {topLocations.map((city) => (
                <li key={city}>
                  <a
                    href="#locations"
                    className="text-sm text-white/35 hover:text-white/80 transition-colors duration-200 flex items-center gap-2"
                  >
                    <MapPin className="w-3 h-3 text-white/20" />
                    {city}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-5">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@kaplantv.com"
                  className="flex items-center gap-3 text-sm text-white/35 hover:text-white/80 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 text-white/20 flex-shrink-0" />
                  info@kaplantv.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+442071234567"
                  className="flex items-center gap-3 text-sm text-white/35 hover:text-white/80 transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 text-white/20 flex-shrink-0" />
                  +44 (0) 207 123 4567
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-white/35">
                  <MapPin className="w-4 h-4 text-white/20 flex-shrink-0 mt-0.5" />
                  2 Portland Place, London W1B 1PR, United Kingdom
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            {siteContent.footer.copyright}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-white/25 hover:text-white/60 transition-colors duration-200"
            >
              {t('footer.privacy')}
            </a>
            <a
              href="#"
              className="text-xs text-white/25 hover:text-white/60 transition-colors duration-200"
            >
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
