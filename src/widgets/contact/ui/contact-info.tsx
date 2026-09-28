'use client';

import { useTranslations } from 'next-intl';

import { CONTACTS } from '@/shared/constants';

import { ContactInfoItem } from './contact-info-item';

export const ContactInfo = () => {
  const t = useTranslations('contacts');
  return (
    <div className='flex flex-1 flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <h3 className='text-2xl font-bold sm:text-4xl md:text-6xl'>
          {t('contact.title')}
        </h3>
        <p className='sm:text-lg'>{t('description')}</p>
      </div>

      <div className='border-accent/20 w-full border-t-[0.5px]' />
      {/* <div className='bg-section-background flex flex-col gap-3 rounded-2xl p-10'> */}
      <ContactInfoItem contactData={CONTACTS.email} />

      <ContactInfoItem contactData={CONTACTS.linkedin} />
      <ContactInfoItem contactData={CONTACTS.github} />
      <p>{t('contact.description')}</p>

      <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-3'></div>
      </div>
      {/* </div> */}
    </div>
  );
};
