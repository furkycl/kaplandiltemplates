import { useState } from 'react';

export interface LeadFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  notes: string;
}

const initialFormData: LeadFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  country: '',
  notes: '',
};

export function useLeadForm() {
  const [formData, setFormData] = useState<LeadFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof LeadFormData, string>> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'required';
    if (!formData.lastName.trim()) newErrors.lastName = 'required';
    if (!formData.email.trim()) {
      newErrors.email = 'required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'invalidEmail';
    }
    if (!formData.phone.trim()) newErrors.phone = 'required';
    if (!formData.country.trim()) newErrors.country = 'required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof LeadFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Lead Form Submission:', formData);

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData(initialFormData);
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    handleChange,
    handleSubmit,
  };
}
