import { SKILLS } from '../model/constants';
import { SkillsListItem } from './skills-list-item';

export const SkillsList = () => {
  return (
    // <ul className='flex flex-col gap-5 px-10 py-5 rounded-2xl bg-card-background'>
    <ul className='grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-10 2xl:gap-20 px-10 py-5 rounded-2xl bg-card-background'>
      {SKILLS.map((skillItem) => (
        <SkillsListItem key={skillItem.titleKey} skillItem={skillItem} />
      ))}
    </ul>
  );
};
