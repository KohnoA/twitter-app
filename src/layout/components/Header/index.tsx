import { memo, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { Switch } from '@/components/UI';
import { AppThemes, ICONS, NAVIGATION_LIST } from '@/constants';
import { useTheme } from '@/hooks';

import { BurgerButton, HeaderWrapper, LeftWrapper, PageTitle } from './styled';

const { BurgerIcon } = ICONS;

export const Header = memo(() => {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();

  const pageTitle = useMemo(
    () => NAVIGATION_LIST.find(({ link }) => link === pathname)?.title,
    [pathname],
  );

  return (
    <HeaderWrapper>
      <LeftWrapper>
        <BurgerButton>
          <BurgerIcon width={35} height={35} />
        </BurgerButton>

        <PageTitle $size="xl3">{pageTitle}</PageTitle>
      </LeftWrapper>

      <Switch isToggled={theme === AppThemes.DARK} onChange={toggleTheme} />
    </HeaderWrapper>
  );
});
