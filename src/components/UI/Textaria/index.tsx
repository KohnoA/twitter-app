import { useId } from 'react';

import { TextariaLabelStyled, TextariaStyled } from './styled';
import { TextariaProps } from './types';

export const Textaria = ({ className, register, label, ...otherProps }: TextariaProps) => {
  const id = useId();

  return (
    <>
      {label && <TextariaLabelStyled htmlFor={id}>{label}</TextariaLabelStyled>}
      <TextariaStyled id={id} className={className} rows={3} {...register} {...otherProps} />
    </>
  );
};
