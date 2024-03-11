import { HTMLInputTypeAttribute } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface InputStyledProps {
  $hasError?: boolean;
}

export interface InputProps {
  register: UseFormRegisterReturn;
  label?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  error?: string;
}
