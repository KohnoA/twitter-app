import { memo, useId, useState } from 'react';

import { ErrorMessage } from '../ErrorMessage';

import {
  DEFAULT_INPUT_TYPE,
  DEFAULT_SHOW_PASSWORD_VALUE,
  UnvisibleIcon,
  VisibleIcon,
} from './constants';
import { InputStyled, InputWrapper, PositionInputWrapper, VisibilityButton } from './styled';
import { InputProps } from './types';

export const Input = memo((props: InputProps) => {
  const { label, type = DEFAULT_INPUT_TYPE, placeholder, error, register } = props;

  const [showPassword, setShowPassword] = useState<boolean>(DEFAULT_SHOW_PASSWORD_VALUE);
  const id = useId();
  const isPasswordInput = type === 'password';

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
          <VisibilityButton
            data-testid="toggle-password-visibility"
            type="button"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <VisibleIcon /> : <UnvisibleIcon />}
          </VisibilityButton>
        )}
      </PositionInputWrapper>

      {error && <ErrorMessage data-testid="input-error">{error}</ErrorMessage>}
    </InputWrapper>
  );
});
