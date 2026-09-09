import { ReactNode } from 'react';

import clsx from 'clsx';

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
    <span className={cn('group block w-fit', className)}>
      {children}

      <span
        className={cn(
          'block h-px w-0 bg-foreground transition-all-300',
          'group-hover:w-full',
          '2xl:h-1',
          lineClassName,
        )}
      />
    </span>
  );
};
