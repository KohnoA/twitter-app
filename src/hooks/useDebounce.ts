import { useRef } from 'react';

const DEFAULT_DELAY_VALUE = 500;

export function useDebounce(delay = DEFAULT_DELAY_VALUE) {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const debounce = (callback: () => void) => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(callback, delay);
  };

  return debounce;
}
