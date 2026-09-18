import { AboutExperienceProject as AboutExperienceProjectData } from '../../model/types';

import { AboutExperienceProject } from './about-experience-project';

interface AboutExperienceCardContentProps {
  projects?: AboutExperienceProjectData[];
  details?: string[];
}

export const AboutExperienceCardContent = ({
  projects,
  details,
}: AboutExperienceCardContentProps) => {
  return (
    <div className='pt-3'>
      <div className='border-card-background border-t-[0.5px] pt-3'>
        {projects?.map((project) => (
          <AboutExperienceProject key={project.title} project={project} />
        ))}

        {details && (
          <ul className='flex list-disc flex-col gap-2 px-5'>
            {details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
