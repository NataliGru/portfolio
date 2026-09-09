import { ProjectGrid } from './project-grid';
import { ProjectsHeader } from './projects-header';

export const Projects = () => {
  return (
    <section className='px-5 py-20 flex flex-col gap-10 items-center justify-center w-full'>
      <ProjectsHeader />

      <ProjectGrid />
    </section>
  );
};
