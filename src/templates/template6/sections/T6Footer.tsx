import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';
import { siteContent } from '../../../data/siteContent';

export default function T6Footer() {
  const { footer } = siteContent;

  const socialIcons: Record<string, React.ReactNode> = {
    facebook: <Facebook className="w-4 h-4" />,
    instagram: <Instagram className="w-4 h-4" />,
    youtube: <Youtube className="w-4 h-4" />,
    twitter: <Twitter className="w-4 h-4" />,
    linkedin: <Linkedin className="w-4 h-4" />,
  };

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerColumns = [
    {
      title: 'Explore',
      links: [
        { label: 'Our Story', href: '#about' },
        { label: 'Programmes', href: '#programs' },
        { label: 'Student Stories', href: '#videos' },
        { label: 'Testimonials', href: '#testimonials' },
      ],
    },
    {
      title: 'Destinations',
      links: [
        { label: 'United Kingdom', href: '#locations' },
        { label: 'United States', href: '#locations' },
        { label: 'Canada', href: '#locations' },
        { label: 'Europe', href: '#locations' },
      ],
    },
    {
      title: 'Programmes',
      links: [
        { label: 'General English', href: '#programs' },
        { label: 'Intensive English', href: '#programs' },
        { label: 'Business English', href: '#programs' },
        { label: 'Exam Preparation', href: '#programs' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { label: 'Enquire Now', href: '#contact' },
        { label: 'Speak to an Advisor', href: '#contact' },
        { label: 'Visit Us', href: '#locations' },
        { label: 'Partner With Us', href: '#contact' },
      ],
    },
  ];

  return (
    <footer className="bg-stone-900">
      {/* Top: Brand */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-14">
        <div className="text-center">
          <Link to="/" className="inline-block">
            <span className="font-serif text-2xl tracking-[0.3em] uppercase text-white">
              KAPLAN
            </span>
            <span className="block text-[9px] tracking-[0.5em] uppercase mt-1 text-stone-500">
              International Languages
            </span>
          </Link>

          <p className="mt-6 text-stone-500 font-light text-sm leading-relaxed max-w-md mx-auto">
            {footer.description}
          </p>

          {/* Social Icons */}
          <div className="mt-8 flex items-center justify-center gap-5">
            {footer.socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-500 hover:text-amber-500 transition-colors duration-300"
                aria-label={social.platform}
              >
                {socialIcons[social.platform]}
              </a>
            ))}
          </div>
        </div>

        {/* Thin separator line */}
        <div className="w-full h-px bg-stone-800 mt-14 mb-14" />

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="text-[10px] uppercase tracking-[0.35em] text-white font-normal mb-6">
                {column.title}
              </h4>
              <ul className="space-y-3.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-sm text-stone-500 hover:text-amber-500 transition-colors duration-300 font-light"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-stone-600 font-light tracking-wider">
            {footer.copyright}
          </p>
          <div className="flex items-center gap-6">
            <button className="text-[11px] text-stone-600 hover:text-stone-400 font-light tracking-wider transition-colors duration-300">
              Privacy Policy
            </button>
            <button className="text-[11px] text-stone-600 hover:text-stone-400 font-light tracking-wider transition-colors duration-300">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
