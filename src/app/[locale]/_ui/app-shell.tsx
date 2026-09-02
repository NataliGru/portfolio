import { ReactNode } from 'react';

import { Header } from '@/widgets/header';

interface AppShellProps {
  children: ReactNode;
}

export const AppShell = ({ children }: AppShellProps) => {
  return (
    <div className='bg-background text-foreground flex min-h-dvh flex-col'>
      <Header />
      <main className='relative z-0 flex-1 pt-20'>{children}</main>
      {/* <Footer /> */}

      {/* <ScrollToTop />
      <ServiceWorkerRegistration /> */}
    </div>
  );
};
