import { ReactNode, useEffect, useState } from 'react';

import { Header, Navigation } from '../components';

import {
  FooterStyled,
  MainContent,
  MainLayoutWrapper,
  PageWrapper,
  RightSidebarStyled,
} from './styled';

const BURGER_MENU_INITIAL_VISIBILITY = false;

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [showBurger, setShowBurger] = useState<boolean>(BURGER_MENU_INITIAL_VISIBILITY);

  const toggleBurgerMenu = () => setShowBurger(!showBurger);

  useEffect(() => {
    const closeBurger = () => setShowBurger(BURGER_MENU_INITIAL_VISIBILITY);

    window.addEventListener('resize', closeBurger);

    return () => {
      window.removeEventListener('resize', closeBurger);
    };
  }, []);

  return (
    <MainLayoutWrapper>
      <Navigation isActiveBurger={showBurger} onCloseBurger={toggleBurgerMenu} />

      <PageWrapper>
        <Header onClickBurger={toggleBurgerMenu} />

        <MainContent>{children}</MainContent>

        <FooterStyled />
      </PageWrapper>

      <RightSidebarStyled />
    </MainLayoutWrapper>
  );
};
