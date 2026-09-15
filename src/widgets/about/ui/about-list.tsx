import { getTranslations } from 'next-intl/server';

import { AboutCard } from './about-card';

type AboutTimelineItem = {
  number: string;
  title: string;
  period: string;
  paragraphs: string[];
};

export const AboutList = async () => {
  const t = await getTranslations('about');

  const timeline = t.raw('timeline') as AboutTimelineItem[];

  return (
    <ul className='flex flex-col lg:flex-row gap-5'>
      {timeline.map((line, index) => (
        <AboutCard
          key={line.number}
          title={line.title}
          number={line.number}
          period={line.period}
          paragraphs={line.paragraphs}
          className={index % 2 ? 'bg-section-background' : undefined}
        />
      ))}
    </ul>
  );
};
