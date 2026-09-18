import { SectionHeader } from '@/shared';

import { ProjectGrid } from './project-grid';

export const Projects = () => {
  return (
    <section
      id='projects'
      aria-labelledby='projects-title'
      className='flex w-full flex-col items-center justify-center gap-10 px-5 py-20'
    >
      <SectionHeader translationSection='projects' headingId='projects-title' />

      <ProjectGrid />
    </section>
  );
};
