import { ChangeEvent, FormEvent, memo, useEffect, useState } from 'react';

import { useDebounce } from '@/hooks';

import { DEFAULT_PLACEHOLDER, INITIAL_VALUE } from './constants';
import {
  CrossButton,
  CrossIconStyled,
  SearchIconStyled,
  SearchInputContainer,
  SearchInputStyled,
} from './styled';
import { ElasticSearchProps } from './types';

export const SearchInput = memo((props: ElasticSearchProps) => {
  const { className, placeholder, onChange: innerOnChange } = props;

  const [value, setValue] = useState<string>(INITIAL_VALUE);
  const debouncedValue = useDebounce(value);
  const showClearButton = !!value.length;

  const onSubmit = (event: FormEvent) => event.preventDefault();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    setValue(newValue);
    if (innerOnChange && !newValue.length) innerOnChange(INITIAL_VALUE);
  };

  const onClear = () => {
    setValue(INITIAL_VALUE);
    if (innerOnChange) innerOnChange(INITIAL_VALUE);
  };

  useEffect(() => {
    if (innerOnChange && debouncedValue) innerOnChange(debouncedValue);
  }, [debouncedValue, innerOnChange]);

  return (
    <SearchInputContainer className={className} onSubmit={onSubmit}>
      <SearchIconStyled />

      <SearchInputStyled
        value={value}
        onChange={onChange}
        type="text"
        placeholder={placeholder ?? DEFAULT_PLACEHOLDER}
      />

      {showClearButton && (
        <CrossButton onClick={onClear}>
          <CrossIconStyled />
        </CrossButton>
      )}
    </SearchInputContainer>
  );
});
