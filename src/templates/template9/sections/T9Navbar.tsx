import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { t, getSupportedLocales, setLocale, getLocale } from '../../../utils/i18n';

export default function T9Navbar() {
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
    { label: t('nav.locations'), href: '#locations' },
    { label: t('nav.videos'), href: '#videos' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.programs'), href: '#programs' },
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#FAFAF8]/95 backdrop-blur-lg border-b border-stone-200/50 shadow-sm'
          : 'bg-[#FAFAF8]/80 backdrop-blur-md'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-700 flex items-center justify-center">
              <span className="text-white font-bold text-sm tracking-tight">K</span>
            </div>
            <div className="hidden sm:block">
              <span className="block text-[#1a1a1a] font-semibold text-sm tracking-tight leading-none">
                Kaplan International
              </span>
              <span className="block text-stone-400 text-[10px] tracking-wide mt-0.5">
                Languages
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-stone-600 hover:text-orange-700 text-sm transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-stone-500 hover:text-stone-700 transition-colors duration-300"
                aria-label={t('language.switchLabel')}
              >
                <Globe className="w-4 h-4" />
                <span className="text-xs font-medium uppercase">{getLocale()}</span>
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white border border-stone-200 shadow-lg rounded-xl overflow-hidden min-w-[140px]">
                  {locales.map((locale) => (
                    <button
                      key={locale.code}
                      onClick={() => {
                        setLocale(locale.code);
                        setLangOpen(false);
                        window.location.reload();
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors duration-200 ${
                        getLocale() === locale.code
                          ? 'text-orange-700 bg-orange-50'
                          : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
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
              className="bg-orange-700 hover:bg-orange-800 text-white text-sm font-medium rounded-full px-6 py-2.5 transition-all duration-300 hover:shadow-lg hover:shadow-orange-700/20"
            >
              {t('nav.applyNow')}
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[#1a1a1a]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#FAFAF8] border-t border-stone-200/50">
          <div className="max-w-7xl mx-auto px-6 py-6 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="flex items-center w-full text-left py-3 text-stone-600 hover:text-orange-700 transition-colors duration-300"
              >
                <span className="text-[15px]">{link.label}</span>
              </button>
            ))}
            <div className="pt-4 mt-2 border-t border-stone-200/50 flex items-center gap-4">
              <button
                onClick={() => handleNavClick('#contact')}
                className="bg-orange-700 hover:bg-orange-800 text-white text-sm font-medium rounded-full px-6 py-2.5 transition-all duration-300"
              >
                {t('nav.applyNow')}
              </button>
              <div className="flex items-center gap-2">
                {locales.map((locale) => (
                  <button
                    key={locale.code}
                    onClick={() => {
                      setLocale(locale.code);
                      window.location.reload();
                    }}
                    className={`text-xs font-medium px-2 py-1 rounded transition-colors duration-200 ${
                      getLocale() === locale.code
                        ? 'text-orange-700 bg-orange-50'
                        : 'text-stone-400 hover:text-stone-600'
                    }`}
                  >
                    {locale.code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
