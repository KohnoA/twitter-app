import { ReactNode } from 'react';

import { Navigation } from '../components';

import { MainLayoutWrapper } from './styled';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => (
  <MainLayoutWrapper>
    <Navigation />

    {children}
  </MainLayoutWrapper>
);
