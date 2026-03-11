import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, GraduationCap, Globe, ChevronDown } from 'lucide-react';
import { t, getSupportedLocales, setLocale, getLocale } from '../../../utils/i18n';

export default function T2Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const locales = getSupportedLocales();

  const navLinks = [
    { label: t('nav.home'), href: '#hero' },
    { label: t('nav.locations'), href: '#locations' },
    { label: t('nav.videos'), href: '#videos' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.programs'), href: '#programs' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40">
      {/* Top colored strip */}
      <div className="bg-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-8">
          <span className="text-xs tracking-wide opacity-80">
            Established 1938 &middot; Accredited Worldwide
          </span>
          <div className="hidden sm:flex items-center gap-4 text-xs opacity-80">
            <span>info@kaplaninternational.com</span>
            <span>+44 20 7045 5000</span>
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 hover:opacity-100 transition-opacity"
              >
                <Globe className="w-3 h-3" />
                <span>{getLocale().toUpperCase()}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 bg-white text-gray-900 shadow-lg border border-gray-200 rounded-md min-w-[120px] py-1 z-50">
                  {locales.map((locale) => (
                    <button
                      key={locale.code}
                      onClick={() => {
                        setLocale(locale.code);
                        setLangOpen(false);
                        window.location.reload();
                      }}
                      className="block w-full text-left px-4 py-2 text-xs hover:bg-primary-light hover:text-primary transition-colors"
                    >
                      {locale.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo / Brand */}
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-primary rounded-md flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <span className="block font-bold text-base text-gray-900 tracking-tight">
                  Kaplan International
                </span>
                <span className="block text-[10px] uppercase tracking-[0.15em] text-primary font-semibold">
                  Languages
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - center */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-primary px-3 py-2 rounded-md hover:bg-primary-light/50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA - right */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-6 py-2.5 rounded-md transition-colors shadow-sm"
              >
                {t('nav.applyNow')}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-primary"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 hover:text-primary hover:bg-primary-light/30 font-medium py-2.5 px-3 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-gray-100">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block bg-primary text-white text-center font-semibold px-5 py-3 rounded-md"
                >
                  {t('nav.applyNow')}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
