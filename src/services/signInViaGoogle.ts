import { FirebaseError } from 'firebase/app';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { auth, provider } from '@/firebase';

/* eslint-disable */

export async function signInViaGoogle() {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;

    console.log(token, user);
  } catch (error) {
    if (error instanceof FirebaseError) {
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.log(credential);
    }

    console.error(error);
  }
}
