import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';

import { auth, db } from '@/firebase';
import { UserDataType } from '@/types';

export async function signUp(data: UserDataType) {
  const { email, password, ...otherData } = data;

  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  const { id } = await addDoc(collection(db, 'users'), {
    email,
    ...otherData,
  });

  return { user, firestoreId: id };
}
