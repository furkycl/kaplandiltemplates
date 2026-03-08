import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';
import { siteContent } from '../../../data/siteContent';

const socialIcons: Record<string, React.ElementType> = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  twitter: Twitter,
  linkedin: Linkedin,
};

export default function T5Footer() {
  const { footer } = siteContent;

  const footerLinks = [
    { label: 'Schools', href: '#locations' },
    { label: 'Programs', href: '#programs' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'Privacy', href: '#' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#') && href !== '#') {
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#0a0a0a]">
      {/* Main footer */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          {/* Brand */}
          <div className="flex-shrink-0">
            <Link to="/">
              <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">
                K.
              </span>
            </Link>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center gap-8 sm:gap-10">
            {footerLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-[11px] uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors duration-300 font-light"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-5">
            {footer.socialLinks.map((social) => {
              const IconComponent = socialIcons[social.platform];
              if (!IconComponent) return null;
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-secondary transition-colors duration-300"
                  aria-label={social.platform}
                >
                  <IconComponent className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[10px] text-white/20 font-light tracking-wider">
              {footer.copyright}
            </p>
            <p className="text-[10px] text-white/20 font-light tracking-wider">
              Kaplan International Languages
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
