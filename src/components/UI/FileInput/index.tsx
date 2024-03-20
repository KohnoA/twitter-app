import { memo } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { ICONS } from '@/constants';

import { FileInputStyled, ImageButton } from './styled';

const { ImageIcon } = ICONS;

interface FileInputProps {
  className?: string;
  register: UseFormRegisterReturn;
}

export const FileInput = memo(({ className, register }: FileInputProps) => (
  <ImageButton className={className}>
    <ImageIcon />
    <FileInputStyled type="file" {...register} />
  </ImageButton>
));
