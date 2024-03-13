import { ButtonHTMLAttributes, ReactNode } from 'react';

import { ButtonProps } from '../Button/types';

export interface ButtonWithSpinnerProps
  extends ButtonProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  children: ReactNode;
}

export interface ChildrenWapperProps {
  $hidden?: boolean;
}
