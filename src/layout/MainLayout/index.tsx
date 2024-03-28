import { ReactNode, useCallback, useEffect, useState } from 'react';

import { Header, Navigation } from '../components';

import * as S from './styled';

const BURGER_MENU_INITIAL_VISIBILITY = false;

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [showBurger, setShowBurger] = useState<boolean>(BURGER_MENU_INITIAL_VISIBILITY);

  const toggleBurgerMenu = useCallback(() => setShowBurger((prev) => !prev), []);

  useEffect(() => {
    const closeBurger = () => setShowBurger(BURGER_MENU_INITIAL_VISIBILITY);

    window.addEventListener('resize', closeBurger);

    return () => {
      window.removeEventListener('resize', closeBurger);
    };
  }, []);

  return (
    <S.MainLayoutWrapper>
      <Navigation isActiveBurger={showBurger} onCloseBurger={toggleBurgerMenu} />

      <S.PageWrapper>
        <Header onClickBurger={toggleBurgerMenu} />

        <S.MainContent>{children}</S.MainContent>

        <S.FooterStyled />
      </S.PageWrapper>

      <S.RightSidebarStyled />
    </S.MainLayoutWrapper>
  );
};
