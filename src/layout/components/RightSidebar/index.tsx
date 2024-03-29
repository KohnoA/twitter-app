import { memo, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { SearchBarByTweets, SearchBarByUsers } from '@/components';
import { AppRoutes } from '@/constants';

import { Footer } from '../Footer';

import * as S from './styled';
import { RightSidebarProps } from './types';

export const RightSidebar = memo(({ className }: RightSidebarProps) => {
  const [hideRecommendations, setHideRecommendations] = useState<boolean>(false);
  const { pathname } = useLocation();

  const handleRecommendationShow = () => setHideRecommendations((prev) => !prev);

  const currentSearchBar = useMemo(() => {
    switch (true) {
      case pathname.includes(AppRoutes.HOME):
        return <SearchBarByTweets onOpen={handleRecommendationShow} />;
      default:
        return <SearchBarByUsers onOpen={handleRecommendationShow} />;
    }
  }, [pathname]);

  return (
    <S.RightSidebarWrapper className={className}>
      <S.RightSidebarSearchWrapper>{currentSearchBar}</S.RightSidebarSearchWrapper>

      <S.RecommendationsStyled $isHidden={hideRecommendations} />

      <S.RightSidebarFooter>
        <Footer />
      </S.RightSidebarFooter>
    </S.RightSidebarWrapper>
  );
});
