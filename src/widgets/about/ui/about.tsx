import { AboutTimelineList } from './timeline/about-timeline-list';
import { AboutExperienceAndEducation } from './about-experience-and-education';
import { AboutHeader } from './about-header';

export const About = () => {
  return (
    <section
      className='bg-section-background/50 flex flex-col gap-6 overflow-x-hidden p-10'
      aria-labelledby='about-title'
    >
      <AboutExperienceAndEducation />

      <AboutHeader />
      <AboutTimelineList />
    </section>
  );
};
