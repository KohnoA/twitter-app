import { UseFormRegisterReturn } from 'react-hook-form';

export interface TextariaProps {
  className?: string;
  register: UseFormRegisterReturn;
  placeholder?: string;
  label?: string;
  'data-testid'?: string;
}
