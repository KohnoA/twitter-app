import { memo } from 'react';

import { Footer } from '../Footer';

import { RightSidebarFooter, RightSidebarWrapper } from './styled';

export const RightSidebar = memo(() => (
  <RightSidebarWrapper>
    <p style={{ marginBottom: '40px' }}>Elastic Search</p>

    <p style={{ marginBottom: '40px' }}>Recommendations</p>

    <RightSidebarFooter>
      <Footer />
    </RightSidebarFooter>
  </RightSidebarWrapper>
));
