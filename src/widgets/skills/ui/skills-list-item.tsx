import { useTranslations } from 'next-intl';

import { SkillGroup } from '../model/constants';

interface SkillsListItemProps {
  skillItem: SkillGroup;
}
export const SkillsListItem = ({ skillItem }: SkillsListItemProps) => {
  const t = useTranslations('skills');

  const Icon = skillItem.icon;

  return (
    <li className='flex flex-col gap-3 bg-background/80 rounded-2xl p-4'>
      <h5 className='font-bold flex items-center gap-1 text-accent '>
        <Icon />
        {t(`groups.${skillItem.titleKey}`)}:
      </h5>

      <div className='flex flex-row gap-2 flex-wrap'>
        {skillItem.items.map((item) => (
          <span
            key={item}
            className='px-2 py-0.5 rounded-2xl bg-card-background '
          >
            {item}
          </span>
        ))}
      </div>
    </li>
  );
};
