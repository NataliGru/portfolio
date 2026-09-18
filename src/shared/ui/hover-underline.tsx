import { ReactNode } from 'react';

import { cn } from '../lib';

interface HoverUnderlineProps {
  children: ReactNode;
  className?: string;
  lineClassName?: string;
}

export const HoverUnderline = ({
  children,
  className,
  lineClassName,
}: HoverUnderlineProps) => {
  return (
    <span className={cn('block w-fit', className)}>
      {children}

      <span
        className={cn(
          'bg-foreground transition-all-300 block h-px w-0',
          'group-hover:w-full group-focus-visible:w-full',
          '2xl:h-1',
          lineClassName,
        )}
      />
    </span>
  );
};
