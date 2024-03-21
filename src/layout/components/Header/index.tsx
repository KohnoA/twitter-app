import { memo, useMemo } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { Switch } from '@/components/UI';
import { AppThemes, ICONS, NAVIGATION_LIST } from '@/constants';
import { useTheme } from '@/hooks';

import {
  BackButton,
  BurgerButton,
  HeaderWrapper,
  LeftContainer,
  PageTitle,
  RightContainer,
  SearchInputStyled,
} from './styled';

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

  const handleHistoryBack = () => navigate(-1);

  const pageTitle = useMemo(
    () => NAVIGATION_LIST.find(({ link }) => pathname.includes(link))?.title,
    [pathname],
  );

  return (
    <HeaderWrapper>
      <LeftContainer>
        {showBackButton && (
          <BackButton onClick={handleHistoryBack}>
            <BackIcon width={30} height={30} />
          </BackButton>
        )}

        <BurgerButton onClick={onClickBurger}>
          <BurgerIcon width={35} height={35} />
        </BurgerButton>

        <PageTitle $size="xl3">{pageTitle}</PageTitle>
      </LeftContainer>

      <RightContainer>
        <SearchInputStyled />

        <Switch isToggled={theme === AppThemes.DARK} onChange={toggleTheme} />
      </RightContainer>
    </HeaderWrapper>
  );
});
