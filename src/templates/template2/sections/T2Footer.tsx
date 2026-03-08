import { Link } from 'react-router-dom';
import {
  Facebook, Instagram, Youtube, Twitter, Linkedin,
  GraduationCap, Mail, Phone, MapPin,
} from 'lucide-react';
import { siteContent } from '../../../data/siteContent';
import { t } from '../../../utils/i18n';

const socialIcons: Record<string, React.ElementType> = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  twitter: Twitter,
  linkedin: Linkedin,
};

export default function T2Footer() {
  const { footer } = siteContent;

  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-white/10 rounded-md flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <span className="block font-bold text-base text-white tracking-tight">
                  Kaplan International
                </span>
                <span className="block text-[10px] uppercase tracking-[0.15em] text-white/60 font-semibold">
                  Languages
                </span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              {footer.description}
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              {t('footer.quickLinks')}
            </h4>
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
                  className="block text-sm text-white/50 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Locations Column */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              {t('footer.locations')}
            </h4>
            <div className="space-y-3">
              {['London', 'New York', 'Toronto', 'Dublin', 'Vancouver', 'Cambridge'].map((city) => (
                <span key={city} className="block text-sm text-white/50">
                  {city}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              {t('footer.contact')}
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-white/50">
                <Mail className="w-4 h-4 shrink-0 text-white/40" />
                <span>info@kaplantv.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <Phone className="w-4 h-4 shrink-0 text-white/40" />
                <span>+44 20 7045 5000</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <MapPin className="w-4 h-4 shrink-0 text-white/40" />
                <span>London, United Kingdom</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons + Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-white/40">
            {footer.copyright}
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {footer.socialLinks.map((link) => {
              const Icon = socialIcons[link.platform];
              return Icon ? (
                <a
                  key={link.platform}
                  href={link.url}
                  className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-md flex items-center justify-center transition-colors"
                  aria-label={link.platform}
                >
                  <Icon className="w-4 h-4 text-white/70" />
                </a>
              ) : null;
            })}
          </div>

          {/* Legal Links */}
          <div className="flex gap-5">
            <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
