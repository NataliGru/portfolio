import { ProjectPreview, ProjectShortDescriptionBlock } from '@/entities';

import { ProjectHeaderCTA } from './project-header-cta';

interface ProjectHeaderProps {
  title: string;
  description: string;
  technologyList: string[];
  listAriaLabel: string;
  siteUrl: string;
  sourceUrl: string;
}
export const ProjectHeader = async ({
  title,
  description,
  technologyList,
  listAriaLabel,
  siteUrl,
  sourceUrl,
}: ProjectHeaderProps) => {
  return (
    <div className='grid grid-cols-1 gap-3 md:grid-cols-3 md:grid-rows-1'>
      <div className='col-span-2 flex w-full flex-col gap-4'>
        <ProjectShortDescriptionBlock
          title={title}
          description={description}
          technologyList={technologyList}
          listAriaLabel={listAriaLabel}
        />

        <ProjectHeaderCTA
          siteUrl={siteUrl}
          title={title}
          sourceUrl={sourceUrl}
        />
      </div>

      <div className=''>
        <ProjectPreview projectURL={siteUrl} projectTitle={title} />
      </div>
    </div>
  );
};
