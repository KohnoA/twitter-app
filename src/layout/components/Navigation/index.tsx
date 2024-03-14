import { useLocation } from 'react-router-dom';

import { UserCard } from '@/components';
import { Button } from '@/components/UI';
import { NAVIGATION_LIST } from '@/constants';
import { signOut } from '@/services';

import {
  LogoutButton,
  NavigationLink,
  NavigationList,
  NavigationListWrapper,
  NavigationWrapper,
  TwitterIconStyled,
} from './styled';

export const Navigation = () => {
  const { pathname } = useLocation();

  const handleSignOut = () => signOut();

  return (
    <NavigationWrapper>
      <NavigationListWrapper>
        <TwitterIconStyled />

        <NavigationList>
          {NAVIGATION_LIST.map(({ link, OutlineIcon, FillIcon, title }) => (
            <li key={link}>
              <NavigationLink to={link}>
                {pathname === link ? <FillIcon /> : <OutlineIcon />} {title}
              </NavigationLink>
            </li>
          ))}
        </NavigationList>

        <Button>Tweet</Button>
      </NavigationListWrapper>

      <UserCard />

      <LogoutButton $view="primary" onClick={handleSignOut}>
        Log out
      </LogoutButton>
    </NavigationWrapper>
  );
};
