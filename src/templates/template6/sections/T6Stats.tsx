import { siteContent } from '../../../data/siteContent';

export default function T6Stats() {
  const { stats } = siteContent;

  const statItems = [
    { value: stats.students, label: 'Students Worldwide' },
    { value: stats.countries, label: 'Nationalities' },
    { value: stats.schools, label: 'Destinations' },
    { value: stats.years, label: 'Years of Excellence' },
  ];

  return (
    <section className="bg-[#2C2C2C]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {statItems.map((stat, index) => (
            <div
              key={index}
              className={`py-16 md:py-20 text-center ${
                index < statItems.length - 1
                  ? 'border-r border-amber-600/20'
                  : ''
              } ${index === 1 ? 'border-r-0 md:border-r' : ''}`}
            >
              <div className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-wide">
                {stat.value}
              </div>
              <div className="mt-3 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-stone-400 font-light">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
