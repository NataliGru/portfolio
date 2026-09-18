import { getTranslations } from 'next-intl/server';

import { AboutTimelineCard } from './about-timeline-card';

type AboutTimelineItem = {
  number: string;
  title: string;
  period: string;
  paragraphs: string[];
};

export const AboutTimelineList = async () => {
  const t = await getTranslations('about');

  const timeline = t.raw('timeline') as AboutTimelineItem[];

  return (
    <ul className='flex flex-col gap-5 lg:flex-row'>
      {timeline.map((line, index) => (
        <AboutTimelineCard
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
