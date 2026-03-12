import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, Phone, Mail } from 'lucide-react';
import { t, getSupportedLocales, setLocale, getLocale } from '../../../utils/i18n';

export default function T10Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const locales = getSupportedLocales();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: t('nav.home'), href: '#hero' },
    { label: t('nav.destinations'), href: '#locations' },
    { label: t('about.whyKaplan'), href: '#about' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-[#0F1A3C] text-white text-[13px] hidden sm:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-10">
          <div className="flex items-center gap-6">
            <a href="tel:+441234567890" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>+44 123 456 789</span>
            </a>
            <a href="mailto:info@kaplaninternational.tv" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>info@kaplaninternational.tv</span>
            </a>
          </div>
          <span className="text-white/60 text-[12px]">Operated by Academia United</span>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
              <img
                src="/kaplanlogo.png"
                alt="Kaplan International Languages"
                className="h-20 sm:h-24 lg:h-28 w-auto"
                style={{ filter: 'brightness(0) saturate(100%) invert(8%) sepia(40%) saturate(5000%) hue-rotate(215deg) brightness(90%) contrast(105%)' }}
              />
              <span className="bg-[#E31837] text-white text-[12px] font-bold px-2.5 py-1 rounded">
                TV
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-[15px] text-[#0F1A3C]/70 hover:text-[#0F1A3C] font-medium transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right: Language + CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1.5 text-[#0F1A3C]/60 hover:text-[#0F1A3C] transition-colors"
                  aria-label={t('language.switchLabel')}
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-[12px] font-semibold uppercase">{getLocale()}</span>
                </button>
                {langOpen && (
                  <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden min-w-[160px] z-50">
                    {locales.map((locale) => (
                      <button
                        key={locale.code}
                        onClick={() => {
                          setLocale(locale.code);
                          setLangOpen(false);
                          window.location.reload();
                        }}
                        className={`w-full text-left px-4 py-2.5 text-[13px] transition-colors duration-200 ${
                          getLocale() === locale.code
                            ? 'text-[#E31837] bg-red-50 font-medium'
                            : 'text-gray-600 hover:text-[#0F1A3C] hover:bg-gray-50'
                        }`}
                      >
                        {locale.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* CTA */}
              <button
                onClick={() => handleNavClick('#contact')}
                className="hidden sm:inline-flex items-center px-6 py-2.5 bg-[#E31837] hover:bg-[#c71430] text-white text-[14px] font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20"
              >
                {t('hero.freeConsultation')}
              </button>

              {/* Mobile Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-[#0F1A3C]"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-400 ${
            mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white border-t border-gray-100 px-6 py-6 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="flex items-center w-full text-left py-3 text-[16px] text-[#0F1A3C]/70 hover:text-[#0F1A3C] font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-2">
              {locales.map((locale) => (
                <button
                  key={locale.code}
                  onClick={() => {
                    setLocale(locale.code);
                    window.location.reload();
                  }}
                  className={`text-[12px] font-medium px-3 py-1.5 rounded-lg transition-colors ${
                    getLocale() === locale.code
                      ? 'text-[#E31837] bg-red-50'
                      : 'text-gray-400 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {locale.code.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              onClick={() => handleNavClick('#contact')}
              className="w-full mt-4 py-3 bg-[#E31837] text-white text-[14px] font-semibold rounded-lg"
            >
              {t('hero.freeConsultation')}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
