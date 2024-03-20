import { memo, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { SearchBarByTweets, SearchBarByUsers } from '@/components';
import { AppRoutes } from '@/constants';

import { Footer } from '../Footer';

import {
  RecommendationsStyled,
  RightSidebarFooter,
  RightSidebarSearchWrapper,
  RightSidebarWrapper,
} from './styled';

interface RightSidebarProps {
  className?: string;
}

export const RightSidebar = memo(({ className }: RightSidebarProps) => {
  const { pathname } = useLocation();

  const currentSearchBar = useMemo(() => {
    switch (pathname) {
      case AppRoutes.HOME:
        return <SearchBarByTweets />;

      default:
        return <SearchBarByUsers />;
    }
  }, [pathname]);

  return (
    <RightSidebarWrapper className={className}>
      <RightSidebarSearchWrapper>{currentSearchBar}</RightSidebarSearchWrapper>

      <RecommendationsStyled />

      <RightSidebarFooter>
        <Footer />
      </RightSidebarFooter>
    </RightSidebarWrapper>
  );
});
