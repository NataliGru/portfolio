'use client';

import { useTranslations } from 'next-intl';

import { CONTACTS } from '@/shared/constants';

import { ContactInfoItem } from './contact-info-item';

export const ContactInfo = () => {
  const t = useTranslations('contacts');
  return (
    <div className='flex flex-1 flex-col gap-4'>
      <div className='flex flex-col'>
        <h3 className='text-4xl'>{t('contact.title')}</h3>
        <p className='text-sm'>{t('description')}</p>
      </div>

      <div className='bg-section-background flex flex-col gap-3 rounded-2xl p-10'>
        <p>{t('contact.description')}</p>

        <ContactInfoItem contactData={CONTACTS.email} />

        <div className='border-accent/20 w-full border-t-[0.5px]' />

        <div className='flex flex-col gap-3'>
          <span>{t('contact.socials.title')}</span>

          <div className='flex flex-col gap-3 px-4'>
            <ContactInfoItem contactData={CONTACTS.linkedin} />
            <ContactInfoItem contactData={CONTACTS.github} />
          </div>
        </div>
      </div>
    </div>
  );
};
