import { memo, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { AppThemes, ICONS, NAVIGATION_LIST } from '@/constants';
import { useTheme } from '@/hooks';

import { BurgerButton, HeaderWrapper, PageTitle, SearchInputStyled, SwitchStyled } from './styled';

const { BurgerIcon } = ICONS;

interface HeaderProps {
  onClickBurger: () => void;
}

export const Header = memo(({ onClickBurger }: HeaderProps) => {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();

  const pageTitle = useMemo(
    () => NAVIGATION_LIST.find(({ link }) => pathname.includes(link))?.title,
    [pathname],
  );

  return (
    <HeaderWrapper>
      <BurgerButton onClick={onClickBurger}>
        <BurgerIcon width={35} height={35} />
      </BurgerButton>

      <PageTitle $size="xl3">{pageTitle}</PageTitle>

      <SearchInputStyled />

      <SwitchStyled isToggled={theme === AppThemes.DARK} onChange={toggleTheme} />
    </HeaderWrapper>
  );
});
