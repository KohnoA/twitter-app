import { memo, useId, useState } from 'react';

import { ICONS } from '@/constants';

import { ErrorMessage } from '../ErrorMessage';

import { DEFAULT_INPUT_TYPE, DEFAULT_SHOW_PASSWORD_VALUE } from './constants';
import { InputStyled, InputWrapper, PositionInputWrapper, VisibilityButton } from './styled';
import { InputProps } from './types';

const { VisibleIcon, UnvisibleIcon } = ICONS;

export const Input = memo((props: InputProps) => {
  const { label, type = DEFAULT_INPUT_TYPE, placeholder, error, register } = props;
  const isPasswordInput = type === 'password';

  const [showPassword, setShowPassword] = useState<boolean>(DEFAULT_SHOW_PASSWORD_VALUE);
  const id = useId();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <InputWrapper>
      {!!label && <label htmlFor={id}>{label}</label>}

      <PositionInputWrapper>
        <InputStyled
          id={id}
          $hasError={!!error}
          type={isPasswordInput && showPassword ? 'text' : type}
          placeholder={placeholder}
          data-testid={props['data-testid']}
          {...register}
        />

        {isPasswordInput && (
          <VisibilityButton type="button" onClick={togglePasswordVisibility}>
            {showPassword ? <VisibleIcon /> : <UnvisibleIcon />}
          </VisibilityButton>
        )}
      </PositionInputWrapper>

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
});
