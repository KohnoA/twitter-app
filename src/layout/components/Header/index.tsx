import { memo, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { Switch } from '@/components/UI';
import { AppThemes, NAVIGATION_LIST } from '@/constants';
import { useTheme } from '@/hooks';

import { HeaderWrapper, PageTitle } from './styled';

export const Header = memo(() => {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();

  const pageTitle = useMemo(
    () => NAVIGATION_LIST.find(({ link }) => link === pathname)?.title,
    [pathname],
  );

  return (
    <HeaderWrapper>
      <PageTitle $size="xl3">{pageTitle}</PageTitle>

      <Switch isToggled={theme === AppThemes.DARK} onChange={toggleTheme} />
    </HeaderWrapper>
  );
});
