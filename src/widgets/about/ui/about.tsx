import { AboutHeader } from './about-header';
import { AboutList } from './about-list';

export const About = () => {
  return (
    <section className='flex flex-col p-10 bg-section-background/50 overflow-x-hidden'>
      <AboutHeader />

      <AboutList />
    </section>
  );
};
