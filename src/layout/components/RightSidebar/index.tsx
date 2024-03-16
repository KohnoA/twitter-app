import { memo, useCallback } from 'react';

import { Footer } from '../Footer';

import { RightSidebarFooter, RightSidebarSearch, RightSidebarWrapper } from './styled';

export const RightSidebar = memo(() => {
  const handleSearch = useCallback((value: string) => {
    // eslint-disable-next-line no-console
    console.log(value);
  }, []);

  return (
    <RightSidebarWrapper>
      <RightSidebarSearch onChange={handleSearch} />

      <p style={{ marginBottom: '40px' }}>Recommendations</p>

      <RightSidebarFooter>
        <Footer />
      </RightSidebarFooter>
    </RightSidebarWrapper>
  );
});
