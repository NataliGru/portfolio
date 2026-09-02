import { ReactNode } from 'react';

import { Header } from '@/widgets/header';

interface AppShellProps {
  children: ReactNode;
}

export const AppShell = ({ children }: AppShellProps) => {
  return (
    <div className='bg-background text-foreground flex min-h-dvh flex-col'>
      <Header />
      <div className='relative z-0 flex-1 pt-16'>{children}</div>
      {/* <Footer /> */}

      {/* <ScrollToTop />
      <ServiceWorkerRegistration /> */}
    </div>
  );
};
