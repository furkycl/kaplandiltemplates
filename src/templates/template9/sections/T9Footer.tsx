import { t } from '../../../utils/i18n';

export default function T9Footer() {
  const columns = [
    {
      title: t('footer.locations'),
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
        { label: 'Business English', href: '#programs' },
        { label: 'IELTS Preparation', href: '#programs' },
        { label: 'Academic Year', href: '#programs' },
      ],
    },
    {
      title: t('footer.contact'),
      links: [
        { label: t('cta.button'), href: '#contact' },
        { label: t('footer.privacy'), href: '#' },
        { label: t('footer.terms'), href: '#' },
        { label: t('footer.accessibility'), href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-[#1a1a1a] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-orange-700 flex items-center justify-center font-serif text-lg text-white">
                K
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Kaplan International
              </span>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed max-w-[240px]">
              {t('footer.description')}
            </p>
          </div>

          {/* Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-stone-500 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-sm text-stone-400 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-7 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-stone-600">
            {t('footer.description')}
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[11px] text-stone-600 hover:text-stone-300 transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="text-[11px] text-stone-600 hover:text-stone-300 transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
