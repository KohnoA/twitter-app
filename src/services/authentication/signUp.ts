import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '@/firebase';
import { UserDataType } from '@/types';

import { setUserById } from '../firestore';

export async function signUp(data: Omit<UserDataType, 'id' | 'avatar'>, password: string) {
  const { email, ...otherData } = data;

  const {
    user: { uid, photoURL },
  } = await createUserWithEmailAndPassword(auth, email, password);

  const newUser = {
    id: uid,
    avatar: photoURL,
    email,
    ...otherData,
  };

  await setUserById(uid, newUser);

  return newUser;
}
