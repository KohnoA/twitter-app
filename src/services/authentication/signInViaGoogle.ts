import { signInWithPopup } from 'firebase/auth';

// import { store } from '@/store';
// import { setIsAuth } from '@/store/slices';
import { auth, provider } from '@/firebase';

import { setUserById } from '../firestore';

export async function signInViaGoogle() {
  try {
    const {
      user: { uid, photoURL, email, phoneNumber, displayName },
    } = await signInWithPopup(auth, provider);
    if (!email) return;

    const newUser = {
      id: uid,
      email,
      avatar: photoURL,
      phone: phoneNumber ?? 'Indefined',
      name: displayName ?? 'Unknown',
      birthday: new Date(Date.now()).toISOString(),
    };

    await setUserById(uid, newUser);
    // store.dispatch(setIsAuth(newUser));
  } catch (error) {
    console.error(error);
  }
}
