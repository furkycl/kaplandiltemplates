import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { t, getSupportedLocales, setLocale, getLocale } from '../../../utils/i18n';

export default function T7Navbar() {
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
    { label: t('nav.destinations'), href: '#locations' },
    { label: t('about.whyKaplan'), href: '#about' },
    { label: t('nav.stories'), href: '#testimonials' },
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl shadow-black/20'
          : 'bg-black/40 backdrop-blur-md border-b border-white/[0.04]'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo - Actual Kaplan Logo */}
          <Link to="/" className="flex items-center flex-shrink-0 group">
            <img
              src="/kaplanlogo.png"
              alt="Kaplan International Languages"
              className="h-10 sm:h-12 w-auto brightness-0 invert transition-opacity duration-300 group-hover:opacity-80"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-[13px] text-white/60 hover:text-white transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right: CTA + Language + Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-white/40 hover:text-white/70 transition-colors duration-300"
                aria-label={t('language.switchLabel')}
              >
                <Globe className="w-4 h-4" />
                <span className="text-[11px] uppercase tracking-wider font-medium">
                  {getLocale().toUpperCase()}
                </span>
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 bg-[#1A1A1A] border border-white/10 rounded-lg shadow-2xl shadow-black/60 overflow-hidden min-w-[140px]">
                  {locales.map((locale) => (
                    <button
                      key={locale.code}
                      onClick={() => {
                        setLocale(locale.code);
                        setLangOpen(false);
                        window.location.reload();
                      }}
                      className={`w-full text-left px-4 py-2.5 text-[12px] tracking-wide transition-colors duration-200 ${
                        getLocale() === locale.code
                          ? 'text-[#C8102E] bg-white/5'
                          : 'text-white/60 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {locale.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => handleNavClick('#contact')}
              className="hidden lg:inline-flex items-center px-5 py-2 bg-[#C8102E] hover:bg-[#a50d25] text-white text-[12px] font-semibold tracking-wide rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-red-900/30"
            >
              {t('hero.freeConsultation')}
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-1.5 text-white/70 hover:text-white transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0A0A0A]/98 backdrop-blur-xl border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-5 py-8 space-y-1">
            {navLinks.map((link, index) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="flex items-center gap-4 w-full text-left py-3 group"
              >
                <span className="text-[10px] text-white/20 tracking-widest font-mono">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-lg text-white/70 group-hover:text-white transition-colors duration-300">
                  {link.label}
                </span>
              </button>
            ))}

            {/* Mobile Language Switcher */}
            <div className="pt-4 mt-3 border-t border-white/[0.06] flex items-center gap-4">
              <Globe className="w-4 h-4 text-white/30" />
              {locales.map((locale) => (
                <button
                  key={locale.code}
                  onClick={() => {
                    setLocale(locale.code);
                    setMobileOpen(false);
                    window.location.reload();
                  }}
                  className={`text-[12px] tracking-wide transition-colors duration-200 ${
                    getLocale() === locale.code
                      ? 'text-[#C8102E]'
                      : 'text-white/40 hover:text-white/70'
                  }`}
                >
                  {locale.name}
                </button>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => handleNavClick('#contact')}
                className="w-full py-3 bg-[#C8102E] hover:bg-[#a50d25] text-white text-[13px] font-semibold tracking-wide rounded-full transition-all duration-300"
              >
                {t('hero.freeConsultation')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
