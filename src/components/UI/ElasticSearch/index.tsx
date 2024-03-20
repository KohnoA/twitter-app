import { ChangeEvent, FormEvent, memo, useEffect, useState } from 'react';

import { useDebounce } from '@/hooks';

import {
  DEFAULT_EMPTY_MESSAGE,
  DEFAULT_PLACEHOLDER,
  INITIAL_VALUE,
  SpinnerIcon,
} from './constants';
import {
  CrossButton,
  CrossIconStyled,
  ElasticSearchContainer,
  ElasticSearchForm,
  EmptyMessage,
  ResultsContainer,
  SearchIconStyled,
  SearchInputStyled,
  SearchLoader,
} from './styled';
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
    <ElasticSearchContainer className={className}>
      <ElasticSearchForm onSubmit={onSubmit}>
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
      </ElasticSearchForm>

      {showClearButton && (
        <ResultsContainer onClick={onClear}>
          {isLoading ? (
            <SearchLoader>
              <SpinnerIcon width={30} height={30} />
            </SearchLoader>
          ) : (
            children
          )}

          {showEmptyMessage && <EmptyMessage>{emptyMessage ?? DEFAULT_EMPTY_MESSAGE}</EmptyMessage>}
        </ResultsContainer>
      )}
    </ElasticSearchContainer>
  );
});
