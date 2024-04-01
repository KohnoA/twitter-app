import { signInWithPopup } from 'firebase/auth';
import { ref, uploadString } from 'firebase/storage';
import { v4 } from 'uuid';

import { auth, provider, storage } from '@/firebase';

import { setUserById } from '../firestore';

export async function signInViaGoogle() {
  try {
    const {
      user: { uid, photoURL, email, phoneNumber, displayName },
    } = await signInWithPopup(auth, provider);

    const newUser = {
      id: uid,
      email: email ?? `unknown${uid}@gmail.com`,
      phone: phoneNumber ?? 'Unknown',
      name: displayName ?? 'Unknown',
      birthday: new Date(Date.now()).toISOString(),
    };

    await setUserById(uid, newUser);

    if (photoURL) {
      const avatarRef = ref(storage, `avatars/${uid}/${v4()}`);
      await uploadString(avatarRef, photoURL);
    }

    return newUser;
  } catch (error) {
    console.error(error);

    return null;
  }
}
