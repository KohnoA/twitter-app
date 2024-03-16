import { memo, useCallback } from 'react';

import { Footer } from '../Footer';

import { RightSidebarFooter, RightSidebarSearch, RightSidebarWrapper } from './styled';

interface RightSidebarProps {
  className?: string;
}

export const RightSidebar = memo(({ className }: RightSidebarProps) => {
  const handleSearch = useCallback((value: string) => {
    // eslint-disable-next-line no-console
    console.log(value);
  }, []);

  return (
    <RightSidebarWrapper className={className}>
      <RightSidebarSearch onChange={handleSearch} />

      <p style={{ marginBottom: '40px' }}>Recommendations</p>

      <RightSidebarFooter>
        <Footer />
      </RightSidebarFooter>
    </RightSidebarWrapper>
  );
});
