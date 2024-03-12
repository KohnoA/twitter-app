import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '@/firebase';

/* eslint-disable */

export async function signInUser(email: string, password: string) {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    console.log(user);
  } catch (error) {
    console.log(error);
  }
}
