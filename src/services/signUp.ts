import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';

import { auth, db } from '@/firebase';
import { UserDataType } from '@/types';

/* eslint-disable */

export async function signUp(data: UserDataType) {
  const { email, password, ...otherData } = data;

  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    const docRef = await addDoc(collection(db, 'users'), {
      email,
      ...otherData,
    });

    console.log(user);
    console.log(docRef);
  } catch (error) {
    console.log(error);
  }
}
