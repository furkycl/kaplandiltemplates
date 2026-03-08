import { useLeadForm } from '../hooks/useLeadForm';
import { t } from '../utils/i18n';
import { formCountries } from '../data/countries';
import { CheckCircle } from 'lucide-react';

interface LeadFormProps {
  variant?: 'light' | 'dark' | 'card';
  className?: string;
}

export default function LeadForm({ variant = 'light', className = '' }: LeadFormProps) {
  const { formData, errors, isSubmitting, isSuccess, handleChange, handleSubmit } = useLeadForm();

  const isDark = variant === 'dark';
  const isCard = variant === 'card';

  const inputBase = `w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
    isDark
      ? 'bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-white/40'
      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-primary'
  }`;

  const labelClass = `block text-sm font-medium mb-1.5 ${isDark ? 'text-white/80' : 'text-gray-700'}`;
  const errorClass = 'text-red-400 text-xs mt-1';

  if (isSuccess) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <CheckCircle className={`w-16 h-16 mx-auto mb-4 ${isDark ? 'text-green-400' : 'text-green-500'}`} />
        <p className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {t('form.success')}
        </p>
      </div>
    );
  }

  return (
    <div className={`${isCard ? 'bg-white rounded-2xl shadow-xl p-8' : ''} ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>{t('form.firstName')} *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder={t('form.firstName')}
              className={inputBase}
            />
            {errors.firstName && <p className={errorClass}>{t(`form.${errors.firstName}`)}</p>}
          </div>
          <div>
            <label className={labelClass}>{t('form.lastName')} *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder={t('form.lastName')}
              className={inputBase}
            />
            {errors.lastName && <p className={errorClass}>{t(`form.${errors.lastName}`)}</p>}
          </div>
        </div>

        <div>
          <label className={labelClass}>{t('form.email')} *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t('form.email')}
            className={inputBase}
          />
          {errors.email && <p className={errorClass}>{t(`form.${errors.email}`)}</p>}
        </div>

        <div>
          <label className={labelClass}>{t('form.phone')} *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={t('form.phone')}
            className={inputBase}
          />
          {errors.phone && <p className={errorClass}>{t(`form.${errors.phone}`)}</p>}
        </div>

        <div>
          <label className={labelClass}>{t('form.country')} *</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={inputBase}
          >
            <option value="">{t('form.selectCountry')}</option>
            {formCountries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          {errors.country && <p className={errorClass}>{t(`form.${errors.country}`)}</p>}
        </div>

        <div>
          <label className={labelClass}>{t('form.notes')}</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder={t('form.notes')}
            rows={3}
            className={inputBase}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-secondary hover:bg-secondary-dark text-white font-semibold py-3.5 px-6 rounded-lg transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? t('form.sending') : t('form.submit')}
        </button>
      </form>
    </div>
  );
}
