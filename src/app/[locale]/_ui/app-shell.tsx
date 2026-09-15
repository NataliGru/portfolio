import { ReactNode } from 'react';

import { Footer } from '@/widgets';
import { Header } from '@/widgets/header';

interface AppShellProps {
  children: ReactNode;
}

export const AppShell = ({ children }: AppShellProps) => {
  return (
    <div className='bg-background text-foreground min-h-dvh flex flex-col justify-between h-full w-full'>
      <Header />

      <main className='relative z-0 flex-1 pt-20 '>{children}</main>

      <Footer />
    </div>
  );
};
