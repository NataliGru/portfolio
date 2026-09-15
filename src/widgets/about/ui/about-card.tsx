import { p } from 'motion/react-client';

import { cn } from '@/shared';

interface AboutCardProps {
  number: string;
  title: string;
  period: string;
  paragraphs: string[];
  className?: string;
}

export const AboutCard = ({
  number,
  title,
  period,
  paragraphs,
  className,
}: AboutCardProps) => {
  return (
    <li
      className={cn(
        'flex-1 bg-background rounded-2xl flex flex-col gap-2 p-4 shadow-md',
        className,
      )}
    >
      <h3 className='uppercase font-bold text-2xl mb-2'>
        {number} - {title}
      </h3>

      <span className='text-control-background font-bold'>{period}</span>

      {paragraphs.map((paragraph) => (
        <p className='text-control-background' key={paragraph}>
          {paragraph}
        </p>
      ))}
    </li>
  );
};
