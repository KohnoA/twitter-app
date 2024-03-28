import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { UserCard } from '@/components';
import { Button, Title } from '@/components/UI';
import { ICONS, NAVIGATION_LIST } from '@/constants';
import { useAppSelector } from '@/hooks';
import { signOut } from '@/services';
import { userSelector } from '@/store/selectors';
import { Backdrop } from '@/styles';

import * as S from './styled';
import { NavigationProps } from './types';

const { CrossIcon } = ICONS;

export const Navigation = ({ isActiveBurger, onCloseBurger }: NavigationProps) => {
  const [newTweetModal, setNewTweetModal] = useState<boolean>(false);
  const { data } = useAppSelector(userSelector);
  const { pathname } = useLocation();

  const handleTweetModal = () => {
    setNewTweetModal(!newTweetModal);
    onCloseBurger();
  };

  const handleSignOut = () => signOut();

  return (
    <>
      <S.NavigationWrapper $isActiveBurger={isActiveBurger}>
        <S.CrossButton onClick={onCloseBurger}>
          <CrossIcon width={40} height={40} />
        </S.CrossButton>

        <S.NavigationListWrapper>
          <S.TwitterIconStyled />

          <S.NavigationList>
            {NAVIGATION_LIST.map(({ link, OutlineIcon, FillIcon, title }) => (
              <li key={link}>
                <S.NavigationLink to={link}>
                  {pathname === link ? <FillIcon /> : <OutlineIcon />} {title}
                </S.NavigationLink>
              </li>
            ))}
          </S.NavigationList>

          <Button onClick={handleTweetModal}>Tweet</Button>
        </S.NavigationListWrapper>

        <UserCard user={data} />

        <S.LogoutButton $view="primary" onClick={handleSignOut}>
          Log out
        </S.LogoutButton>
      </S.NavigationWrapper>

      <S.ModalStyled isActive={newTweetModal} onClose={handleTweetModal}>
        <Title $size="xl3">New Tweet</Title>
        <S.NewTweetStyled onSuccess={handleTweetModal} />
      </S.ModalStyled>

      <Backdrop $show={isActiveBurger} onClick={onCloseBurger} />
    </>
  );
};
