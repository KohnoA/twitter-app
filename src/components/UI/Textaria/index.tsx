import { useId } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { TextariaLabelStyled, TextariaStyled } from './styled';

interface TextariaProps {
  className?: string;
  register: UseFormRegisterReturn;
  placeholder?: string;
  label?: string;
}

export const Textaria = ({ className, register, label, ...otherProps }: TextariaProps) => {
  const id = useId();

  return (
    <>
      {label && <TextariaLabelStyled htmlFor={id}>{label}</TextariaLabelStyled>}
      <TextariaStyled id={id} className={className} rows={3} {...register} {...otherProps} />
    </>
  );
};
