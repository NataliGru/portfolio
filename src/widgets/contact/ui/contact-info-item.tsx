'use client';

import { MoveUpRight } from 'lucide-react';

import { Link, trackEvent } from '@/shared';
import { CONTACTS } from '@/shared/constants';

interface ContactInfoItemProps {
  contactData: (typeof CONTACTS)[keyof typeof CONTACTS];
}

export const ContactInfoItem = ({ contactData }: ContactInfoItemProps) => {
  const Icon = contactData.icon;
  const isEmail = contactData?.contactType === 'email';
  return (
    <Link
      href={isEmail ? `mailto:${contactData.link}` : contactData.link}
      target={isEmail ? undefined : '_blank'}
      onClick={() =>
        trackEvent(`${contactData.contactType as keyof typeof CONTACTS}_click`)
      }
      className='focus-ring transition-all-300 hover:border-control-background group flex items-center gap-4 rounded-2xl border border-transparent p-2'
    >
      <span className='flex items-center gap-2'>
        <Icon className='text-control-background scale-125' />
        {contactData.label}
      </span>
      <MoveUpRight className='size-4' />
    </Link>
  );
};
