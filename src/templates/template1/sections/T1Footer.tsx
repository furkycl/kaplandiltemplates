import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Twitter, Linkedin, MapPin, Mail, Phone } from 'lucide-react';
import { siteContent } from '../../../data/siteContent';
import { t } from '../../../utils/i18n';

const socialIcons: Record<string, React.ElementType> = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  twitter: Twitter,
  linkedin: Linkedin,
};

export default function T1Footer() {
  const { footer } = siteContent;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg" />
              <span className="font-bold text-lg">Kaplan<span className="text-primary">TV</span></span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">{footer.description}</p>
            <div className="flex gap-3 mt-6">
              {footer.socialLinks.map((link) => {
                const Icon = socialIcons[link.platform];
                return Icon ? (
                  <a
                    key={link.platform}
                    href={link.url}
                    className="w-9 h-9 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ) : null;
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <div className="space-y-3">
              {[
                { label: t('nav.home'), href: '#hero' },
                { label: t('nav.locations'), href: '#locations' },
                { label: t('nav.videos'), href: '#videos' },
                { label: t('nav.about'), href: '#about' },
                { label: t('nav.programs'), href: '#programs' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Top Locations */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.locations')}</h4>
            <div className="space-y-3">
              {['London', 'New York', 'Toronto', 'Dublin', 'Vancouver', 'Cambridge'].map((city) => (
                <span key={city} className="block text-sm text-gray-400">
                  {city}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.contact')}</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 shrink-0" />
                <span>info@kaplantv.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+44 20 7045 5000</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>London, United Kingdom</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">{footer.copyright}</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
