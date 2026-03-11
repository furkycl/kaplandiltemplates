import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, Sparkles } from 'lucide-react';
import { t, getSupportedLocales, setLocale, getLocale } from '../../../utils/i18n';

export default function T8Navbar() {
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
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav
        className={`max-w-6xl mx-auto rounded-2xl border transition-all duration-500 ${
          scrolled
            ? 'bg-[#09090b]/80 backdrop-blur-2xl border-white/[0.08] shadow-lg shadow-purple-500/5'
            : 'bg-white/[0.03] backdrop-blur-xl border-white/[0.06]'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-sm font-semibold tracking-tight text-white">
                Kaplan
              </span>
              <span className="text-sm font-light tracking-tight text-white/50 ml-1">
                International
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="relative px-3.5 py-2 text-[13px] text-white/60 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.05] group"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-4/5 transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-[12px] text-white/50 hover:text-white/80 transition-colors duration-200 rounded-lg hover:bg-white/[0.05]"
                aria-label={t('language.switchLabel')}
              >
                <Globe className="w-3.5 h-3.5" />
                <span className="uppercase font-medium">{getLocale()}</span>
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 bg-[#18181b]/95 backdrop-blur-xl border border-white/[0.08] rounded-xl overflow-hidden min-w-[140px] shadow-xl shadow-black/40">
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
                          ? 'text-purple-400 bg-purple-500/10'
                          : 'text-white/60 hover:text-white hover:bg-white/[0.05]'
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
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-white rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 hover:scale-[1.02]"
            >
              {t('nav.applyNow')}
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white/70 hover:text-white rounded-lg hover:bg-white/[0.05] transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${
            mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 pb-6 pt-2 border-t border-white/[0.06]">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="flex items-center w-full text-left px-3 py-3 text-[15px] text-white/70 hover:text-white hover:bg-white/[0.05] rounded-xl transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/[0.06]">
              <button
                onClick={() => handleNavClick('#contact')}
                className="w-full py-3 text-[14px] font-medium text-white rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
              >
                {t('nav.applyNow')}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
