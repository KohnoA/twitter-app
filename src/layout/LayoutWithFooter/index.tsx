import { ReactNode } from 'react';

import { Footer } from '../components';

import { PageContainer } from './styled';

interface LayoutWithFooterProps {
  children: ReactNode;
}

export const LayoutWithFooter = ({ children }: LayoutWithFooterProps) => (
  <PageContainer>
    {children}

    <Footer />
  </PageContainer>
);
