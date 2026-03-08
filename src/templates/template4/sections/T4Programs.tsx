import { MessageCircle, Zap, Briefcase, FileText, Calendar, Monitor, ArrowRight } from 'lucide-react';
import { siteContent } from '../../../data/siteContent';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'message-circle': MessageCircle,
  zap: Zap,
  briefcase: Briefcase,
  'file-text': FileText,
  calendar: Calendar,
  monitor: Monitor,
};

export default function T4Programs() {
  const { programs } = siteContent;

  return (
    <section id="programs" className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
              Course Catalog
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                {programs.title}
              </h2>
              <p className="text-slate-600 mt-2">
                {programs.subtitle}
              </p>
            </div>
            <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors">
              View All Programs
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Programs Grid - 2x3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.items.map((program, idx) => {
            const IconComponent = iconMap[program.icon] || MessageCircle;

            return (
              <div
                key={idx}
                className="group bg-white border border-slate-200 border-t-4 border-t-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-slate-100 group-hover:bg-primary/10 flex items-center justify-center mb-5 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Action */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-200">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 p-8 bg-white border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Not sure which program is right for you?</h3>
            <p className="text-sm text-slate-600 mt-1">
              Our education advisors can help you find the perfect course based on your goals and level.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex-shrink-0 bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-8 py-3 rounded-none transition-colors"
          >
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
