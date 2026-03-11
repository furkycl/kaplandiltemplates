import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight, Globe, ChevronDown } from 'lucide-react';
import { t, getSupportedLocales, setLocale, getLocale } from '../../../utils/i18n';

export default function T5Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [langOpen, setLangOpen] = useState(false);
  const locales = getSupportedLocales();

  const navLinks = [
    { label: t('nav.home'), href: '#hero' },
    { label: t('nav.schools'), href: '#locations' },
    { label: t('nav.media'), href: '#videos' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.contact'), href: '#contact' },
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] border-b border-white/10">
      <nav className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <span className="text-3xl font-black text-white tracking-tight">
              K.
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-[11px] font-light uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA + Language Switcher */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNavClick('#contact')}
              className="hidden sm:flex items-center gap-2 text-[11px] font-light uppercase tracking-[0.3em] text-white/60 hover:text-secondary transition-colors duration-300 group"
            >
              <span>{t('nav.letsTalk')}</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-[11px] font-light uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors duration-300"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{getLocale().toUpperCase()}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 bg-[#0a0a0a] border border-white/10 min-w-[120px] z-50">
                  {locales.map((locale) => (
                    <button
                      key={locale.code}
                      onClick={() => {
                        setLocale(locale.code as 'en' | 'tr');
                        setLangOpen(false);
                        window.location.reload();
                      }}
                      className={`block w-full text-left px-4 py-2.5 text-[11px] uppercase tracking-[0.3em] font-light transition-colors duration-200 ${
                        getLocale() === locale.code
                          ? 'text-secondary'
                          : 'text-white/60 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {locale.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white p-1"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-white/10">
          <div className="px-6 py-8 space-y-1">
            {navLinks.map((link, index) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="flex items-center gap-4 w-full text-left py-4 group"
              >
                <span className="text-[10px] font-light text-white/30 tracking-widest">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-lg font-light uppercase tracking-[0.2em] text-white/70 group-hover:text-secondary transition-colors duration-300">
                  {link.label}
                </span>
              </button>
            ))}
            <div className="pt-6 border-t border-white/10">
              <button
                onClick={() => handleNavClick('#contact')}
                className="flex items-center gap-2 text-sm font-light uppercase tracking-[0.2em] text-secondary"
              >
                <span>{t('nav.letsTalk')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
