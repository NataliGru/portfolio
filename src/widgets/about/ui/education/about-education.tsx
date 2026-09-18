import { GraduationCap } from 'lucide-react';

import { AboutEducationItem } from '../../model/types';
import { AboutEntryCardHeader } from '../about-entry-card-header';
import { AboutEntryList } from '../about-entry-list';
import { AboutSectionTitle } from '../about-experience-section-title';

export const AboutEducation = () => {
  return (
    <section className='flex flex-col gap-4' aria-labelledby='education'>
      <AboutSectionTitle icon={<GraduationCap />} translationKey='education' />

      <AboutEntryList<AboutEducationItem>
        translationKey='education'
        getKey={(item) => `${item.institution}-${item.period}`}
        renderItem={(item) => (
          <AboutEntryCardHeader
            title={item.institution}
            subtitle={item.degree || item.program}
            period={item.period}
          />
        )}
      />
    </section>
  );
};
