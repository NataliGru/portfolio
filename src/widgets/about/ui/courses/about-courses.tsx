import { BookOpenText } from 'lucide-react';

import { AboutEducationItem } from '../../model/types';
import { AboutEntryCardHeader } from '../about-entry-card-header';
import { AboutEntryList } from '../about-entry-list';
import { AboutSectionTitle } from '../about-experience-section-title';

export const AboutCourses = () => {
  return (
    <section
      className='flex flex-[1.5] flex-col gap-4'
      aria-labelledby='courses'
    >
      <AboutSectionTitle icon={<BookOpenText />} translationKey='courses' />

      <AboutEntryList<AboutEducationItem>
        translationKey='courses'
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
