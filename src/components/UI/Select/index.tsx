import { memo, useId } from 'react';

import { ErrorMessage } from '../ErrorMessage';

import { ArrowIconStyled, PositionWrapper, SelectStyled } from './styled';
import { SelectProps } from './types';

export const Select = memo((props: SelectProps) => {
  const { label, options, placeholder, register, error } = props;

  const id = useId();

  return (
    <div>
      <PositionWrapper>
        {label && <label htmlFor={id}>{label}</label>}

        <SelectStyled $hasError={!!error} id={id} defaultValue="" {...register}>
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}

          {options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </SelectStyled>

        <ArrowIconStyled />
      </PositionWrapper>

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
});
