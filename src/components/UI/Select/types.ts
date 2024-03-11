import { UseFormRegisterReturn } from 'react-hook-form';

export interface SelectStyledProps {
  $hasError?: boolean;
}

export interface SelectProps {
  register: UseFormRegisterReturn;
  label?: string;
  options: string[];
  placeholder?: string;
  error?: string;
}
