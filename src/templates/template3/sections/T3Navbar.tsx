import { useState } from 'react';
import { t, getSupportedLocales, setLocale, getLocale } from '../../../utils/i18n';
import { Menu, X, Globe } from 'lucide-react';

const navLinks = [
  { label: () => t('nav.home'), href: '#' },
  { label: () => t('nav.locations'), href: '#locations' },
  { label: () => t('nav.videos'), href: '#videos' },
  { label: () => t('nav.about'), href: '#about' },
  { label: () => t('nav.programs'), href: '#programs' },
  { label: () => t('nav.contact'), href: '#contact' },
];

export default function T3Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const locales = getSupportedLocales();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white via-purple-300 to-accent bg-clip-text text-transparent">
              KaplanTV
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                {link.label()}
              </a>
            ))}
          </div>

          {/* CTA + Language */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-secondary to-orange-500 hover:from-secondary-dark hover:to-orange-600 transition-all duration-300 shadow-lg shadow-secondary/25 hover:shadow-secondary/40 hover:scale-105"
            >
              {t('cta.getStarted')}
            </a>
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors px-2 py-1.5 rounded-lg hover:bg-white/5"
              >
                <Globe className="w-4 h-4" />
                <span className="text-xs font-medium">{getLocale().toUpperCase()}</span>
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 bg-gray-900 shadow-lg border border-white/10 rounded-lg min-w-[120px] py-1 z-50">
                  {locales.map((locale) => (
                    <button
                      key={locale.code}
                      onClick={() => {
                        setLocale(locale.code);
                        setLangOpen(false);
                        window.location.reload();
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      {locale.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-xl border-t border-white/5">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
              >
                {link.label()}
              </a>
            ))}
            <div className="pt-3 px-4">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-5 py-3 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-secondary to-orange-500 hover:from-secondary-dark hover:to-orange-600 transition-all duration-300"
              >
                {t('cta.getStarted')}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
