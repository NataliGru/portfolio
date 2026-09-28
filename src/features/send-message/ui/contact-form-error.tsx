import { useTranslations } from 'next-intl';
import { CircleAlert } from 'lucide-react';

export const ContactFormError = () => {
  const t = useTranslations('contacts.form.error');
  return (
    <div className='flex items-center gap-2 rounded-2xl bg-red-100 p-2'>
      <span className='rounded-full bg-red-300 p-2'>
        <CircleAlert className='text-red-700' />
      </span>

      <div className='flex flex-col gap-2'>
        <h4 className='font-bold text-red-900'>{t('title')}</h4>

        <p className='text-sm text-red-800'>{t('description')}</p>
      </div>
    </div>
  );
};
