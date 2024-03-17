import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

import { FirestoreDocKeys } from '@/constants';
import { auth, db } from '@/firebase';
import { setIsAuth, setIsNotAuth } from '@/store/slices';
import { UserDataType } from '@/types';

import { useAppDispatch } from './redux';

export function useAuth() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, FirestoreDocKeys.USERS, user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data() as UserDataType;

          dispatch(setIsAuth(userData));
        }
      } else {
        dispatch(setIsNotAuth());
      }

      setIsLoading(false);
    });

    return unsubscribe;
  }, [dispatch]);

  return { isLoading };
}
