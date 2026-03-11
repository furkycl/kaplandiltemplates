import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { t, getSupportedLocales, setLocale, getLocale } from '../../../utils/i18n';

export default function T6Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const locales = getSupportedLocales();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const leftLinks = [
    { label: t('nav.destinations'), href: '#locations' },
    { label: t('nav.programmes'), href: '#programs' },
    { label: t('nav.stories'), href: '#videos' },
  ];

  const rightLinks = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.testimonials'), href: '#testimonials' },
    { label: t('nav.enquire'), href: '#contact' },
  ];

  const allLinks = [...leftLinks, ...rightLinks];

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
          ? 'bg-[#FFFBF0]/95 backdrop-blur-sm border-b border-stone-200 shadow-sm'
          : 'bg-transparent border-b border-white/10'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Left Links - Desktop */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-end pr-12">
            {leftLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                  scrolled
                    ? 'text-stone-500 hover:text-stone-900'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Center Logo */}
          <Link to="/" className="flex-shrink-0 text-center">
            <span
              className={`block font-serif text-2xl tracking-[0.3em] uppercase transition-colors duration-300 ${
                scrolled ? 'text-stone-800' : 'text-white'
              }`}
            >
              KAPLAN
            </span>
            <span
              className={`block text-[9px] tracking-[0.5em] uppercase mt-0.5 transition-colors duration-300 ${
                scrolled ? 'text-stone-400' : 'text-white/50'
              }`}
            >
              International Languages
            </span>
          </Link>

          {/* Right Links - Desktop */}
          <div className="hidden lg:flex items-center gap-8 flex-1 pl-12">
            {rightLinks.slice(0, 2).map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                  scrolled
                    ? 'text-stone-500 hover:text-stone-900'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className={`text-[11px] uppercase tracking-[0.2em] px-5 py-2 border transition-all duration-300 ${
                scrolled
                  ? 'border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white'
                  : 'border-white/60 text-white/80 hover:bg-white hover:text-stone-900'
              }`}
            >
              {t('nav.enquire')}
            </button>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-1.5 text-[11px] uppercase tracking-[0.15em] transition-colors duration-300 ${
                  scrolled
                    ? 'text-stone-400 hover:text-stone-700'
                    : 'text-white/50 hover:text-white/80'
                }`}
                aria-label="Select language"
              >
                <Globe className="w-3.5 h-3.5" />
                <span className="font-serif">{getLocale().toUpperCase()}</span>
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-3 bg-[#FFFBF0] border border-stone-200 shadow-lg rounded-sm overflow-hidden min-w-[120px]">
                  {locales.map((locale) => (
                    <button
                      key={locale.code}
                      onClick={() => {
                        setLocale(locale.code);
                        setLangOpen(false);
                        window.location.reload();
                      }}
                      className={`w-full text-left px-4 py-2.5 text-[11px] tracking-wider font-serif transition-colors duration-200 ${
                        getLocale() === locale.code
                          ? 'text-amber-700 bg-amber-50/50'
                          : 'text-stone-500 hover:text-stone-800 hover:bg-stone-50'
                      }`}
                    >
                      {locale.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-1 transition-colors duration-300 ${
              scrolled ? 'text-stone-800' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#FFFBF0] border-t border-stone-200">
          <div className="max-w-7xl mx-auto px-6 py-10 space-y-1">
            {allLinks.map((link, index) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="flex items-center gap-5 w-full text-left py-3.5 group"
              >
                <span className="text-[10px] text-stone-300 tracking-widest font-light">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-serif text-lg text-stone-600 group-hover:text-amber-700 transition-colors duration-300">
                  {link.label}
                </span>
              </button>
            ))}
            <div className="pt-6 mt-4 border-t border-stone-200">
              <button
                onClick={() => handleNavClick('#contact')}
                className="text-[11px] uppercase tracking-[0.2em] px-6 py-3 border border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white transition-all duration-300"
              >
                {t('hero.ctaBeginJourney')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
