import { ReactNode } from 'react';

import { Header, Navigation } from '../components';

import { MainLayoutWrapper } from './styled';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => (
  <MainLayoutWrapper>
    <Navigation />

    <div>
      <Header />

      {children}
    </div>
  </MainLayoutWrapper>
);
