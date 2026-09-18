import { SectionHeader } from '@/shared';

import { AboutCourses } from './courses/about-courses';
import { AboutEducation } from './education/about-education';
import { AboutExperience } from './experience/about-experience';

export const AboutExperienceAndEducation = () => {
  return (
    <section
      className='bg-section-background flex flex-col gap-6 rounded-2xl p-5'
      aria-labelledby='about-experience-and-education'
    >
      <SectionHeader
        translationSection='about.experienceAndEducation'
        className='items-start'
        headingId='about-experience-and-education'
      />

      <div className='flex flex-col gap-10 md:flex-row'>
        <AboutExperience />

        <div className='flex flex-2 flex-col gap-10'>
          <AboutEducation />

          <AboutCourses />
        </div>
      </div>
    </section>
  );
};
