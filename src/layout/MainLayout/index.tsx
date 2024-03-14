import { ReactNode, useState } from 'react';

import { Header, Navigation, RightSidebar } from '../components';

import { MainLayoutWrapper } from './styled';

const BURGER_MENU_INITIAL_VISIBILITY = false;

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [showBurger, setShowBurger] = useState<boolean>(BURGER_MENU_INITIAL_VISIBILITY);

  const toggleBurgerMenu = () => setShowBurger(!showBurger);

  return (
    <MainLayoutWrapper>
      <Navigation isActiveBurger={showBurger} onCloseBurger={toggleBurgerMenu} />

      <div>
        <Header onClickBurger={toggleBurgerMenu} />
        {children}
      </div>

      <RightSidebar />
    </MainLayoutWrapper>
  );
};
