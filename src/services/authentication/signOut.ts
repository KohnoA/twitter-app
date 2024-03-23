import { signOut as signOutFirebase } from 'firebase/auth';

import { auth } from '@/firebase';

export function signOut() {
  signOutFirebase(auth);
}
