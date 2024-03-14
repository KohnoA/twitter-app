import { useLocation } from 'react-router-dom';

import { UserCard } from '@/components';
import { Button } from '@/components/UI';
import { ICONS, NAVIGATION_LIST } from '@/constants';
import { signOut } from '@/services';

import {
  Backdrop,
  CrossButton,
  LogoutButton,
  NavigationLink,
  NavigationList,
  NavigationListWrapper,
  NavigationWrapper,
  TwitterIconStyled,
} from './styled';
import { NavigationProps } from './types';

const { CrossIcon } = ICONS;

export const Navigation = ({ isActiveBurger, onCloseBurger }: NavigationProps) => {
  const { pathname } = useLocation();

  const handleSignOut = () => signOut();

  return (
    <>
      <Backdrop $show={isActiveBurger} onClick={onCloseBurger} />
      <NavigationWrapper $isActiveBurger={isActiveBurger}>
        <CrossButton onClick={onCloseBurger}>
          <CrossIcon width={40} height={40} />
        </CrossButton>

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
    </>
  );
};
