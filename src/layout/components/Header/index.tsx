import { memo, useMemo } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { SearchBarByTweets, SearchBarByUsers } from '@/components';
import { Switch } from '@/components/UI';
import { AppRoutes, AppThemes, ICONS, NAVIGATION_LIST } from '@/constants';
import { useTheme } from '@/hooks';

import * as S from './styled';

const { BurgerIcon, BackIcon } = ICONS;

interface HeaderProps {
  onClickBurger: () => void;
}

export const Header = memo(({ onClickBurger }: HeaderProps) => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const params = useParams();
  const showBackButton = !!Object.keys(params).length;

  const handleHistoryBack = () => navigate(AppRoutes.HOME);

  const pageTitle = useMemo(
    () => NAVIGATION_LIST.find(({ link }) => pathname.includes(link))?.title,
    [pathname],
  );

  const currentSearchBar = useMemo(() => {
    switch (true) {
      case pathname.includes(AppRoutes.HOME):
        return <SearchBarByTweets />;

      default:
        return <SearchBarByUsers />;
    }
  }, [pathname]);

  return (
    <S.HeaderWrapper>
      <S.SideContainer>
        {showBackButton && (
          <S.BackButton onClick={handleHistoryBack}>
            <BackIcon width={30} height={30} />
          </S.BackButton>
        )}

        <S.BurgerButton onClick={onClickBurger}>
          <BurgerIcon width={35} height={35} />
        </S.BurgerButton>

        <S.PageTitle $size="xl3">{pageTitle}</S.PageTitle>
      </S.SideContainer>

      <S.RightContainer>
        <S.SearchContainer>{currentSearchBar}</S.SearchContainer>

        <Switch
          data-testid="toggle-theme-switch"
          isToggled={theme === AppThemes.DARK}
          onChange={toggleTheme}
        />
      </S.RightContainer>
    </S.HeaderWrapper>
  );
});
