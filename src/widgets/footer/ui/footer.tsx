import { cn } from '@/shared';

import { FooterAbout } from './footer-about';
import { FooterContacts } from './footer-contacts';
import { FooterCopyright } from './footer-copyright';

export const Footer = () => {
  return (
    <footer
      className={cn(
        'bg-card-background/10 shadow-1 border-t-2 border-t-card-background rounded-t-2xl',
        'flex flex-col gap-10 px-5 py-10 lg:px-10',
      )}
      id='footer'
    >
      <div className='flex flex-col md:flex-row md:items-center justify-between gap-5 lg:gap-20'>
        <FooterAbout />

        <FooterContacts />
      </div>

      <FooterCopyright />
    </footer>
  );
};
