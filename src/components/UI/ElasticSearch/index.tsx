import { ChangeEvent, FormEvent, memo, useEffect, useState } from 'react';

import { useDebounce } from '@/hooks';

import {
  DEFAULT_EMPTY_MESSAGE,
  DEFAULT_PLACEHOLDER,
  INITIAL_VALUE,
  SpinnerIcon,
} from './constants';
import * as S from './styled';
import { ElasticSearchProps } from './types';

export const ElasticSearch = memo((props: ElasticSearchProps) => {
  const {
    children,
    className,
    placeholder,
    isLoading,
    isEmpty,
    emptyMessage,
    onChange: innerOnChange,
  } = props;

  const [value, setValue] = useState<string>(INITIAL_VALUE);
  const debouncedValue = useDebounce(value);
  const showEmptyMessage = !isLoading && !!debouncedValue && isEmpty;
  const showClearButton = !!value.length;

  useEffect(() => {
    if (innerOnChange && debouncedValue) innerOnChange(debouncedValue);
  }, [debouncedValue, innerOnChange]);

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

  return (
    <S.ElasticSearchContainer className={className}>
      <S.ElasticSearchForm onSubmit={onSubmit}>
        <S.SearchIconStyled />

        <S.SearchInputStyled
          value={value}
          onChange={onChange}
          type="text"
          placeholder={placeholder ?? DEFAULT_PLACEHOLDER}
        />

        {showClearButton && (
          <S.CrossButton onClick={onClear}>
            <S.CrossIconStyled />
          </S.CrossButton>
        )}
      </S.ElasticSearchForm>

      {showClearButton && (
        <S.ResultsContainer onClick={onClear}>
          {isLoading ? (
            <S.SearchLoader>
              <SpinnerIcon />
            </S.SearchLoader>
          ) : (
            children
          )}

          {showEmptyMessage && (
            <S.EmptyMessage as="p">{emptyMessage ?? DEFAULT_EMPTY_MESSAGE}</S.EmptyMessage>
          )}
        </S.ResultsContainer>
      )}
    </S.ElasticSearchContainer>
  );
});
