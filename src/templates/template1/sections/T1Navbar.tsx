import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { t } from '../../../utils/i18n';

export default function T1Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: t('nav.home'), href: '#hero' },
    { label: t('nav.locations'), href: '#locations' },
    { label: t('nav.videos'), href: '#videos' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.programs'), href: '#programs' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg" />
            <span className="font-bold text-lg text-gray-900">Kaplan<span className="text-primary">TV</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              {t('nav.applyNow')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="px-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-600 hover:text-primary font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block bg-primary text-white text-center font-semibold px-5 py-3 rounded-lg"
            >
              {t('nav.applyNow')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
