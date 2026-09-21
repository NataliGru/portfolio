import { cn } from '@/shared';

interface ProjectTitleParagraphsBlockProps {
  title: string;
  number: string;
  paragraphs: string[];
  className?: string;
}

export const ProjectTitleParagraphsBlock = ({
  title,
  number,
  paragraphs,
  className,
}: ProjectTitleParagraphsBlockProps) => {
  return (
    <article className={cn('flex flex-col gap-5 rounded-2xl p-3', className)}>
      <div className='flex flex-row items-center gap-2 text-xl font-bold'>
        <p>{number}</p>
        <span className='bg-accent h-px w-10' />
        <h4>{title}</h4>
      </div>

      <ul className='flex flex-col gap-3 text-sm'>
        {paragraphs.map((paragraph, index) => (
          <li key={`${title}-${index}`} className='text-accent'>
            {paragraph}
          </li>
        ))}
      </ul>
    </article>
  );
};
