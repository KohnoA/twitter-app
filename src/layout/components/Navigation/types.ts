export interface NavigationProps {
  isActiveBurger: boolean;
  onCloseBurger: () => void;
}

export interface NavigationWrapperProps {
  $isActiveBurger: boolean;
}

export interface BackdropProps {
  $show?: boolean;
}
