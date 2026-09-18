import { BriefcaseBusiness } from 'lucide-react';

import { AboutExperienceItem } from '../../model/types';
import { AboutEntryList } from '../about-entry-list';
import { AboutSectionTitle } from '../about-experience-section-title';

import { AboutExperienceCard } from './about-experience-card';

export const AboutExperience = () => {
  return (
    <section
      className='flex flex-3 flex-col gap-4'
      aria-labelledby='experience'
    >
      <AboutSectionTitle
        icon={<BriefcaseBusiness />}
        translationKey='experience'
      />

      <AboutEntryList<AboutExperienceItem>
        translationKey='experience'
        getKey={(item) => `${item.company}-${item.period}`}
        renderItem={(item) => <AboutExperienceCard {...item} />}
      />
    </section>
  );
};
