import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '@/firebase';

export async function signIn(email: string, password: string) {
  const { user } = await signInWithEmailAndPassword(auth, email, password);

  return user;
}
