import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, Globe, ChevronDown } from 'lucide-react';
import { t } from '../../../utils/i18n';
import { getSupportedLocales, setLocale, getLocale } from '../../../utils/i18n';

export default function T4Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const locales = getSupportedLocales();

  const navLinks = [
    { label: t('nav.programs'), href: '#programs' },
    { label: t('nav.locations'), href: '#locations' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.videos'), href: '#videos' },
    { label: t('nav.testimonials'), href: '#testimonials' },
  ];

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Utility Bar */}
      <div className="bg-slate-900 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-8">
          <div className="flex items-center gap-6">
            <a href="tel:+44-207-045-5000" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3 h-3" />
              <span>+44 207 045 5000</span>
            </a>
            <a href="mailto:info@kaplan.com" className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3 h-3" />
              <span>info@kaplan.com</span>
            </a>
          </div>
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Globe className="w-3 h-3" />
              <span>{getLocale().toUpperCase()}</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-white text-slate-900 shadow-lg border border-slate-200 rounded-none min-w-[120px]">
                {locales.map((locale) => (
                  <button
                    key={locale.code}
                    onClick={() => {
                      setLocale(locale.code);
                      setLangOpen(false);
                      window.location.reload();
                    }}
                    className="block w-full text-left px-4 py-2 text-xs hover:bg-slate-100 transition-colors"
                  >
                    {locale.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white border-b-2 border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <span className="text-lg font-bold tracking-widest uppercase text-slate-900">
                KAPLAN INTERNATIONAL
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-5 text-sm font-medium text-slate-700 border-b-2 border-transparent hover:border-primary hover:text-primary transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleNavClick('#contact')}
                className="hidden sm:inline-flex bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-6 py-2.5 rounded-none transition-colors duration-200"
              >
                Request Information
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden text-slate-700 p-2"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-primary border-l-2 border-transparent hover:border-primary transition-all"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 border-t border-slate-200">
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-6 py-3 rounded-none transition-colors"
                >
                  Request Information
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
