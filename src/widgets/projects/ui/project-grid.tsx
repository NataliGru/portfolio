import { PROJECTS_LIST } from '../model/constants';
import { ProjectCard } from './project-card';

export const ProjectGrid = () => {
  return (
    <ul className='w-full'>
      {PROJECTS_LIST.map((project) => (
        <li key={project.projectKey}>
          <ProjectCard
            projectKey={project.projectKey}
            projectURL={project.siteUrl}
          />
        </li>
      ))}
    </ul>
  );
};
