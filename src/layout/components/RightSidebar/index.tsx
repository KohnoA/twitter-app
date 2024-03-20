import { memo, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { SearchBarByUsers } from '@/components';
import { AppRoutes } from '@/constants';

import { Footer } from '../Footer';

import { RightSidebarFooter, RightSidebarSearch, RightSidebarWrapper } from './styled';

interface RightSidebarProps {
  className?: string;
}

export const RightSidebar = memo(({ className }: RightSidebarProps) => {
  const { pathname } = useLocation();

  const currentSearchBar = useMemo(() => {
    if (pathname === AppRoutes.HOME) return <SearchBarByUsers />;

    return <RightSidebarSearch />;
  }, [pathname]);

  return (
    <RightSidebarWrapper className={className}>
      {currentSearchBar}

      <p style={{ marginBottom: '40px' }}>Recommendations</p>

      <RightSidebarFooter>
        <Footer />
      </RightSidebarFooter>
    </RightSidebarWrapper>
  );
});
