import { useCallback } from 'react';

import { AppThemes } from '@/constants';
import { themeSelector } from '@/store/selectors';
import { changeTheme } from '@/store/slices';

import { useAppDispatch, useAppSelector } from './redux';

export function useTheme() {
  const { theme } = useAppSelector(themeSelector);
  const dispatch = useAppDispatch();

  const toggleTheme = useCallback(() => {
    dispatch(changeTheme(theme === AppThemes.LIGHT ? AppThemes.DARK : AppThemes.LIGHT));
  }, [theme]);

  return { theme, toggleTheme };
}
