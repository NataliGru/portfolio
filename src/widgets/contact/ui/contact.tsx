import { ContactForm } from '@/features';

import { ContactInfo } from './contact-info';

export const Contact = () => {
  return (
    <section id='contacts' className='w-full px-5 py-10 md:px-12 md:py-20'>
      <div className='bg-section-background/50 flex flex-col items-center justify-center gap-10 rounded-2xl px-5 py-10 md:flex-row md:gap-20 md:px-12 md:py-20'>
        <ContactInfo />

        <ContactForm />
      </div>
    </section>
  );
};
