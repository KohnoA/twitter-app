import { memo, useId } from 'react';

import { ErrorMessage } from '../ErrorMessage';

import { DEFAULT_INPUT_TYPE } from './constants';
import { InputStyled, InputWrapper } from './styled';
import { InputProps } from './types';

export const Input = memo((props: InputProps) => {
  const { label, type, placeholder, error, register } = props;

  const id = useId();

  return (
    <InputWrapper>
      {!!label && <label htmlFor={id}>{label}</label>}
      <InputStyled
        id={id}
        $hasError={!!error}
        type={type ?? DEFAULT_INPUT_TYPE}
        placeholder={placeholder}
        {...register}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
});
