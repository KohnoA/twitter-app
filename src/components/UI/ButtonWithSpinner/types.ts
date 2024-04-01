import { ButtonHTMLAttributes, ReactNode } from 'react';

import { ButtonProps } from '../Button/types';

export interface ButtonWithSpinnerProps
  extends ButtonProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  children: ReactNode;
  className?: string;
}

export interface ChildrenWapperProps {
  $hidden?: boolean;
}

export interface SpinnerStyledProps extends Pick<ButtonProps, '$view'> {}
