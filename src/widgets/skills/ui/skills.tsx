import { SectionHeader } from '@/shared';

import { SkillsList } from './skills-list';

export const Skills = () => {
  return (
    <section
      className='bg-section-background flex w-full flex-col gap-5 rounded-2xl px-5 py-20'
      aria-labelledby='skills-title'
    >
      <SectionHeader translationSection='skills' headingId='skills-title' />

      <SkillsList />
    </section>
  );
};
