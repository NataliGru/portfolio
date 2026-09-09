import Image from 'next/image';

import { DownloadCV } from '@/features';
import { HoverUnderline, Link } from '@/shared';

import { CONTACTS } from '../model/constants';

export const FooterContacts = () => {
  return (
    <ul className='flex flex-col gap-4'>
      {Object.entries(CONTACTS).map(([contactType, contactData]) => {
        const Icon = contactData.icon;
        const isEmail = contactType === 'email';

        return (
          <li key={contactType} className='group '>
            <Link
              href={isEmail ? `mailto:${contactData.link}` : contactData.link}
              target={isEmail ? undefined : '_blank'}
            >
              <HoverUnderline lineClassName='bg-control-background h-0.5 rounded-4xl'>
                <span className='flex gap-1 items-center'>
                  <Icon className='text-control-background' />
                  {contactData.label}
                </span>
              </HoverUnderline>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
