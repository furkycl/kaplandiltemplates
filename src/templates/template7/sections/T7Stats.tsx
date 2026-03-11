import { Shield, Award, GraduationCap, BadgeCheck } from 'lucide-react';
import { t } from '../../../utils/i18n';

export default function T7Stats() {
  const trustItems = [
    {
      icon: <Shield className="w-5 h-5" />,
      label: t('hero.accreditedBy'),
      detail: 'British Council',
    },
    {
      icon: <Award className="w-5 h-5" />,
      label: t('about.qualityAssurance'),
      detail: 'ACCET & CEA',
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      label: t('hero.trustedBy'),
      detail: '',
    },
    {
      icon: <BadgeCheck className="w-5 h-5" />,
      label: t('cta.since1938'),
      detail: t('stats.yearsExcellence'),
    },
  ];

  return (
    <section className="relative bg-[#0A0A0A] border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.04]">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center gap-3 py-8 md:py-10 text-center px-4 hover:bg-white/[0.02] transition-colors duration-500"
            >
              <div className="text-[#C8102E]/60 group-hover:text-[#C8102E] transition-colors duration-300">
                {item.icon}
              </div>
              <div>
                <p className="text-[11px] sm:text-[12px] text-white/70 tracking-wide font-medium">
                  {item.label}
                </p>
                {item.detail && (
                  <p className="text-[10px] text-[#8A8A8A] tracking-wider uppercase mt-0.5">
                    {item.detail}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
