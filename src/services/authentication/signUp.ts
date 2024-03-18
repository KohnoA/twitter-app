import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import { FirestoreDocKeys } from '@/constants';
import { auth, db } from '@/firebase';
import { UserDataType } from '@/types';

export async function signUp(data: Omit<UserDataType, 'id' | 'avatar'>) {
  const { email, password, ...otherData } = data;

  const {
    user: { uid, photoURL },
  } = await createUserWithEmailAndPassword(auth, email, password);

  const newUser = {
    id: uid,
    avatar: photoURL,
    email,
    ...otherData,
  };

  await setDoc(doc(db, FirestoreDocKeys.USERS, uid), newUser);

  return newUser;
}
