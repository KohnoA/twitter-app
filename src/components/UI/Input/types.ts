import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface InputStyledProps {
  $hasError?: boolean;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
  label?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  error?: string;
  'data-testid'?: string;
}
