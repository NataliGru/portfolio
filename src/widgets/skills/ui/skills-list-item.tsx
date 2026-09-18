import { useTranslations } from 'next-intl';

import { SkillGroup } from '../model/constants';

interface SkillsListItemProps {
  skillItem: SkillGroup;
}
export const SkillsListItem = ({ skillItem }: SkillsListItemProps) => {
  const t = useTranslations('skills');

  const Icon = skillItem.icon;

  return (
    <li className='bg-background/80 flex flex-col gap-3 rounded-2xl p-4'>
      <h3 className='text-accent flex items-center gap-1 font-bold'>
        <Icon />
        {t(`groups.${skillItem.titleKey}`)}:
      </h3>

      <div className='flex flex-row flex-wrap gap-2'>
        {skillItem.items.map((item) => (
          <span
            key={item}
            className='bg-card-background rounded-2xl px-2 py-0.5'
          >
            {item}
          </span>
        ))}
      </div>
    </li>
  );
};
