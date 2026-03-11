import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';
import { siteContent } from '../../../data/siteContent';
import { t } from '../../../utils/i18n';

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  twitter: Twitter,
  linkedin: Linkedin,
};

export default function T4Footer() {
  const { footer } = siteContent;

  const footerLinks = {
    programs: [
      { label: 'General English', href: '#' },
      { label: 'Intensive English', href: '#' },
      { label: 'Business English', href: '#' },
      { label: 'Exam Preparation', href: '#' },
      { label: 'Academic Year', href: '#' },
      { label: 'Online Courses', href: '#' },
    ],
    locations: [
      { label: 'United States', href: '#' },
      { label: 'United Kingdom', href: '#' },
      { label: 'Canada', href: '#' },
      { label: 'Ireland', href: '#' },
      { label: 'France', href: '#' },
      { label: 'Germany', href: '#' },
    ],
    resources: [
      { label: 'Blog', href: '#' },
      { label: 'Student Stories', href: '#' },
      { label: 'Brochure Download', href: '#' },
      { label: 'Visa Information', href: '#' },
      { label: 'Accommodation', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
    contact: [
      { label: '+44 207 045 5000', href: 'tel:+44-207-045-5000' },
      { label: 'info@kaplan.com', href: 'mailto:info@kaplan.com' },
      { label: 'London, United Kingdom', href: '#' },
    ],
  };

  const legalLinks = [
    { label: t('footer.privacy'), href: '#' },
    { label: t('footer.terms'), href: '#' },
    { label: t('footer.cookiePolicy'), href: '#' },
    { label: t('footer.accessibility'), href: '#' },
    { label: t('footer.sitemap'), href: '#' },
  ];

  return (
    <footer className="bg-slate-950">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-sm font-bold tracking-widest uppercase text-white">
                KAPLAN INTERNATIONAL
              </span>
            </Link>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              {footer.description}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {footer.socialLinks.map((social) => {
                const Icon = socialIcons[social.platform];
                if (!Icon) return null;
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    className="w-8 h-8 border border-slate-800 flex items-center justify-center text-slate-500 hover:text-white hover:border-primary transition-colors duration-200"
                    aria-label={social.platform}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Programs Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              {t('footer.programs')}
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-slate-500 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              {t('footer.locations')}
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.locations.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-slate-500 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              {t('footer.resources')}
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-slate-500 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-slate-500 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-600">
              {footer.copyright}
            </p>
            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-slate-600 hover:text-slate-400 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
