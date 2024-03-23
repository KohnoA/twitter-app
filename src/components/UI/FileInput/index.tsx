import { memo } from 'react';

import { ICONS } from '@/constants';

import { FileInputStyled, ImageButton } from './styled';
import { FileInputProps } from './types';

const { ImageIcon } = ICONS;

export const FileInput = memo(({ className, register }: FileInputProps) => (
  <ImageButton className={className}>
    <ImageIcon />
    <FileInputStyled type="file" {...register} />
  </ImageButton>
));
