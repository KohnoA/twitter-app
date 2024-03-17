import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { UserCard } from '@/components';
import { Button, Title } from '@/components/UI';
import { ICONS, NAVIGATION_LIST } from '@/constants';
import { signOut } from '@/services';
import { Backdrop } from '@/styles';

import {
  CrossButton,
  LogoutButton,
  ModalStyled,
  NavigationLink,
  NavigationList,
  NavigationListWrapper,
  NavigationWrapper,
  NewTweetStyled,
  TwitterIconStyled,
} from './styled';
import { NavigationProps } from './types';

const { CrossIcon } = ICONS;

export const Navigation = ({ isActiveBurger, onCloseBurger }: NavigationProps) => {
  const [newTweetModal, setNewTweetModal] = useState<boolean>(false);
  const { pathname } = useLocation();

  const handleTweetModal = () => setNewTweetModal(!newTweetModal);

  const handleSignOut = () => signOut();

  return (
    <>
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

          <Button onClick={handleTweetModal}>Tweet</Button>
        </NavigationListWrapper>

        <UserCard />

        <LogoutButton $view="primary" onClick={handleSignOut}>
          Log out
        </LogoutButton>
      </NavigationWrapper>

      <ModalStyled isActive={newTweetModal} onClose={handleTweetModal}>
        <Title $size="xl3">New Tweet</Title>
        <NewTweetStyled />
      </ModalStyled>

      <Backdrop $show={isActiveBurger} onClick={onCloseBurger} />
    </>
  );
};
