import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '@/firebase';
import { getUserById } from '@/services/firestore';
import { setIsAuth, setIsNotAuth } from '@/store/slices';

import { useAppDispatch } from './redux';

export function useAuth() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userData = await getUserById(user.uid);

        dispatch(setIsAuth(userData));
      } else {
        dispatch(setIsNotAuth());
      }

      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  return { isLoading };
}
