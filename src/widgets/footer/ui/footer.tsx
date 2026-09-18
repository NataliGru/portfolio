import { cn } from '@/shared';

import { FooterAbout } from './footer-about';
import { FooterContacts } from './footer-contacts';
import { FooterCopyright } from './footer-copyright';

export const Footer = () => {
  return (
    <footer
      className={cn(
        'bg-card-background/10 shadow-1 border-t-card-background rounded-t-2xl border-t-2',
        'flex flex-col gap-10 px-5 py-10 lg:px-10',
      )}
      id='footer'
    >
      <div className='flex flex-col justify-between gap-5 md:flex-row md:items-center lg:gap-20'>
        <FooterAbout />

        <FooterContacts />
      </div>

      <FooterCopyright />
    </footer>
  );
};
