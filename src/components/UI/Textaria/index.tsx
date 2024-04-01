import { useId } from 'react';

import { ErrorMessage } from '../ErrorMessage';

import * as S from './styled';
import { TextariaProps } from './types';

export const Textaria = (props: TextariaProps) => {
  const { className, register, label, error, ...otherProps } = props;

  const id = useId();

  return (
    <S.TextariaWrapper>
      {label && <S.TextariaLabelStyled htmlFor={id}>{label}</S.TextariaLabelStyled>}
      <S.TextariaStyled id={id} className={className} rows={3} {...register} {...otherProps} />
      {error && <ErrorMessage data-testid="input-error">{error}</ErrorMessage>}
    </S.TextariaWrapper>
  );
};
