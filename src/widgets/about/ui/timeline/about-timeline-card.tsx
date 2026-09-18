import { cn } from '@/shared';

interface AboutTimelineCardProps {
  number: string;
  title: string;
  period: string;
  paragraphs: string[];
  className?: string;
}

export const AboutTimelineCard = ({
  number,
  title,
  period,
  paragraphs,
  className,
}: AboutTimelineCardProps) => {
  return (
    <li
      className={cn(
        'bg-background/80 flex flex-1 flex-col gap-2 rounded-2xl p-4 shadow-md',
        className,
      )}
    >
      <h3 className='mb-2 text-2xl font-bold uppercase'>
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
