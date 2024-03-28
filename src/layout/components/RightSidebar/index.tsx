import { memo, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { SearchBarByTweets, SearchBarByUsers } from '@/components';
import { AppRoutes } from '@/constants';

import { Footer } from '../Footer';

import * as S from './styled';

interface RightSidebarProps {
  className?: string;
}

export const RightSidebar = memo(({ className }: RightSidebarProps) => {
  const { pathname } = useLocation();

  const currentSearchBar = useMemo(() => {
    switch (true) {
      case pathname.includes(AppRoutes.HOME):
        return <SearchBarByTweets />;

      default:
        return <SearchBarByUsers />;
    }
  }, [pathname]);

  return (
    <S.RightSidebarWrapper className={className}>
      <S.RightSidebarSearchWrapper>{currentSearchBar}</S.RightSidebarSearchWrapper>

      <S.RecommendationsStyled />

      <S.RightSidebarFooter>
        <Footer />
      </S.RightSidebarFooter>
    </S.RightSidebarWrapper>
  );
});
