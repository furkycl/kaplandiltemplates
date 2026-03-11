import { Sparkles } from 'lucide-react';
import { t } from '../../../utils/i18n';

export default function T8Footer() {
  const columns = [
    {
      title: t('footer.destinations'),
      links: [
        { label: 'United Kingdom', href: '#locations' },
        { label: 'United States', href: '#locations' },
        { label: 'Canada', href: '#locations' },
        { label: 'Australia', href: '#locations' },
        { label: 'Ireland', href: '#locations' },
      ],
    },
    {
      title: t('footer.programs'),
      links: [
        { label: 'General English', href: '#programs' },
        { label: 'IELTS Preparation', href: '#programs' },
        { label: 'Business English', href: '#programs' },
        { label: 'Cambridge Exam', href: '#programs' },
      ],
    },
    {
      title: t('footer.resources'),
      links: [
        { label: t('footer.privacy'), href: '#' },
        { label: t('footer.terms'), href: '#' },
        { label: t('footer.cookiePolicy'), href: '#' },
        { label: t('footer.accessibility'), href: '#' },
      ],
    },
  ];

  return (
    <footer className="border-t border-white/[0.06]" style={{ background: '#050507' }}>
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Kaplan<span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">TV</span>
              </span>
            </div>
            <p className="text-sm text-white/30 leading-relaxed max-w-[240px]">
              {t('footer.description')}
            </p>
          </div>

          {/* Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-sm text-white/40 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/15">
            {t('footer.description')}
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[11px] text-white/20 hover:text-white/50 transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="text-[11px] text-white/20 hover:text-white/50 transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
