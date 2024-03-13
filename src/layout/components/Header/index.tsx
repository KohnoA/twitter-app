import { memo, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Switch } from '@/components/UI';
import { NAVIGATION_LIST } from '@/constants';

import { HeaderWrapper, PageTitle } from './styled';

export const Header = memo(() => {
  const { pathname } = useLocation();
  const [isActiveSwitch, setIsActiveSwitch] = useState(false);

  const pageTitle = useMemo(
    () => NAVIGATION_LIST.find(({ link }) => link === pathname)?.title,
    [pathname],
  );

  return (
    <HeaderWrapper>
      <PageTitle $size="xl3">{pageTitle}</PageTitle>

      <Switch isToggled={isActiveSwitch} onChange={() => setIsActiveSwitch(!isActiveSwitch)} />
    </HeaderWrapper>
  );
});
