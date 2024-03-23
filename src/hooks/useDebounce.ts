import { useEffect, useState } from 'react';

const DEFAULT_DELAY_VALUE = 500;

export function useDebounce<T>(value: T, delay = DEFAULT_DELAY_VALUE) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return debouncedValue;
}
