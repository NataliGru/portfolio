import { AboutExperienceProject as AboutExperienceProjectData } from '../../model/types';

interface AboutExperienceProjectProps {
  project: AboutExperienceProjectData;
}

export const AboutExperienceProject = ({
  project,
}: AboutExperienceProjectProps) => {
  return (
    <div className='not-last:border-card-background flex flex-col gap-3 not-first:pt-5 not-last:border-b not-last:pb-5'>
      <div>
        <h5 className='font-semibold'>{project.title}</h5>

        <p className='text-control-background mt-1 text-sm'>
          {project.description}
        </p>
      </div>

      <ul className='flex list-disc flex-col gap-2 px-5'>
        {project.details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>

      <p className='text-accent text-sm'>{project.techStack}</p>
    </div>
  );
};
