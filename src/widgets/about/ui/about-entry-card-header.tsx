import { ReactNode } from 'react';

interface AboutEntryCardHeaderProps {
  title: string;
  subtitle: string;
  period: string;
  action?: ReactNode;
}

export const AboutEntryCardHeader = ({
  title,
  subtitle,
  period,
  action,
}: AboutEntryCardHeaderProps) => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex items-start justify-between gap-3'>
        <h4 className='min-w-0 font-semibold'>{title}</h4>

        {action && <div className='shrink-0'>{action}</div>}
      </div>

      <div className='flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between'>
        <p className='text-control-background min-w-0'>{subtitle}</p>

        <span className='text-accent shrink-0 text-sm text-nowrap'>
          {period}
        </span>
      </div>
    </div>
  );
};
