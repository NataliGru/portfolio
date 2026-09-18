import { PROJECTS_LIST } from '../model/constants';

import { ProjectCard } from './project-card';

export const ProjectGrid = () => {
  return (
    <ul className='xs:grid-cols-[repeat(auto-fit,335px)] grid w-full min-w-0 justify-center gap-10 md:justify-start'>
      {PROJECTS_LIST.map((project) => (
        <li key={project.projectKey} className='w-full min-w-0'>
          <ProjectCard
            projectKey={project.projectKey}
            slug={project.slug}
            projectURL={project.siteUrl}
            technologyKeys={project.technologyKeys}
            categoryKeys={project.categoryKeys}
          />
        </li>
      ))}
    </ul>
  );
};
