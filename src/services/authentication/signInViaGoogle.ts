import { signInWithPopup } from 'firebase/auth';

import { auth, provider } from '@/firebase';

import { setUserById } from '../firestore';

export async function signInViaGoogle() {
  try {
    const {
      user: { uid, photoURL, email, phoneNumber, displayName },
    } = await signInWithPopup(auth, provider);

    const newUser = {
      id: uid,
      email: email ?? `unknown${uid}@gmail.com`,
      avatar: photoURL,
      phone: phoneNumber ?? 'Unknown',
      name: displayName ?? 'Unknown',
      birthday: new Date(Date.now()).toISOString(),
    };

    await setUserById(uid, newUser);

    return newUser;
  } catch (error) {
    console.error(error);

    return null;
  }
}
