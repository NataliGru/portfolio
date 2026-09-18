import { ReactNode } from 'react';

import { Footer } from '@/widgets';
import { Header } from '@/widgets/header';

interface AppShellProps {
  children: ReactNode;
}

export const AppShell = ({ children }: AppShellProps) => {
  return (
    <div className='bg-background text-foreground flex h-full min-h-dvh w-full flex-col justify-between'>
      <Header />

      <div id='page-content' className='flex flex-1 flex-col'>
        <main className='relative z-0 flex-1 pt-20'>{children}</main>

        <Footer />
      </div>
    </div>
  );
};
