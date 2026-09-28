'use client';

import { useTranslations } from 'next-intl';
import { MoveUpRight } from 'lucide-react';

import { Link, trackEvent } from '@/shared';
import { CONTACTS } from '@/shared/constants';

interface ContactInfoItemProps {
  contactData: (typeof CONTACTS)[keyof typeof CONTACTS];
}

export const ContactInfoItem = ({ contactData }: ContactInfoItemProps) => {
  const t = useTranslations('contacts.contact.socials');
  const Icon = contactData.icon;
  const isEmail = contactData?.contactType === 'email';

  return (
    <Link
      href={isEmail ? `mailto:${contactData.link}` : contactData.link}
      target={isEmail ? undefined : '_blank'}
      onClick={() =>
        trackEvent(`${contactData.contactType as keyof typeof CONTACTS}_click`)
      }
      className='focus-ring transition-all-300 hover:border-control-background group border-control-background/20 flex items-center justify-between gap-2 rounded-2xl border p-2 sm:gap-4'
    >
      <div className='flex items-center gap-2 sm:gap-4'>
        <span className='bg-section-background flex items-center gap-2 rounded-full p-2 sm:p-4'>
          <Icon className='text-control-background scale-125 sm:scale-150' />
        </span>

        <div className='flex flex-col gap-1'>
          <span className='font-semibold'>{t(contactData.contactType)}</span>
          <span className='text-xs text-wrap sm:text-sm'>
            {contactData.label}
          </span>
        </div>
      </div>

      <MoveUpRight className='size-4' />
    </Link>
  );
};
