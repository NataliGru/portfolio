import { SectionHeader } from '@/shared';

import { SkillsHeader } from './skills-header';
import { SkillsList } from './skills-list';

export const Skills = () => {
  return (
    <section className='bg-section-background w-full rounded-2xl px-5 py-20 flex flex-col gap-5'>
      <SectionHeader translationSection='skills' />

      <SkillsList />
    </section>
  );
};
