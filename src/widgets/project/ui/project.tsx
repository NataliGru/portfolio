import { getTranslations } from 'next-intl/server';

import { ProjectHeader } from './project-header';
import { ProjectKeyFeaturesList } from './project-key-features-list';
import { ProjectTitleParagraphsBlock } from './project-title-paragraphs-block';

interface ProjectProps {
  slug: string;
}
export const Project = async ({ slug }: ProjectProps) => {
  const t = await getTranslations(`projects.items.${slug}`);

  const technologyList: string[] = t.raw('technologies.items');
  const overviewParagraphs: string[] = t.raw('overview.paragraphs');
  const featuresParagraphs: string[] = t.raw('features.items');
  const challengeParagraphs: string[] = t.raw('challenge.paragraphs');
  const implementationParagraphs: string[] = t.raw('implementation.paragraphs');

  return (
    <section className='flex flex-col gap-5 p-10'>
      <ProjectHeader
        title={t('title')}
        description={t('description')}
        technologyList={technologyList}
        listAriaLabel={t('technologies.title')}
        siteUrl={t('siteUrl')}
        sourceUrl={t('sourceUrl')}
      />

      <div className='border-accent/20 border-t' />

      <div className='flex flex-col gap-5 md:flex-row'>
        <ProjectTitleParagraphsBlock
          title={t('overview.title')}
          paragraphs={overviewParagraphs}
          number='01'
          className='flex-1'
        />

        <ProjectKeyFeaturesList
          title={t('features.title')}
          features={featuresParagraphs}
          number='02'
        />
      </div>

      <div className='border-accent/20 border-t' />

      <div className='flex flex-col gap-5 md:flex-row'>
        <ProjectTitleParagraphsBlock
          title={t('challenge.title')}
          paragraphs={challengeParagraphs}
          number='03'
          className='flex-1'
        />

        <ProjectTitleParagraphsBlock
          title={t('implementation.title')}
          paragraphs={implementationParagraphs}
          number='04'
          className='flex-1'
        />
      </div>
    </section>
  );
};
