import { Footer } from '../Footer';

import { RightSidebarFooter, RightSidebarWrapper } from './styled';

export const RightSidebar = () => (
  <RightSidebarWrapper>
    <p style={{ marginBottom: '40px' }}>Elastic Search</p>

    <p style={{ marginBottom: '40px' }}>Recommendations</p>

    <RightSidebarFooter>
      <Footer />
    </RightSidebarFooter>
  </RightSidebarWrapper>
);
