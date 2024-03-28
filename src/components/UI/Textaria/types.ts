import { UseFormRegisterReturn } from 'react-hook-form';

export interface TextariaProps {
  className?: string;
  register: UseFormRegisterReturn;
  placeholder?: string;
  label?: string;
  error?: string;
  'data-testid'?: string;
}

export interface TextariaStyledProps {
  $isError?: boolean;
}
