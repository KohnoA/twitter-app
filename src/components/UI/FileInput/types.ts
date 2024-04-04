import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  register: UseFormRegisterReturn;
}
