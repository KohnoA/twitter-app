import { useEffect } from 'react';

import { userSelector } from '@/store/selectors';
import { clearUserStatus } from '@/store/slices';

import { useAppDispatch, useAppSelector } from './redux';

export function useUserFormStatus() {
  const { error, loading } = useAppSelector(userSelector);
  const dispatch = useAppDispatch();

  useEffect(
    () => () => {
      dispatch(clearUserStatus());
    },
    [dispatch],
  );

  return { error, loading };
}
