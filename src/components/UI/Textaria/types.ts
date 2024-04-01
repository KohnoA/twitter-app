import { TextareaHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface TextariaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
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
