import { signInWithPopup } from 'firebase/auth';

import { auth, provider } from '@/firebase';
import { convertUrlToFileJpg } from '@/utils';

import { setUserById } from '../firestore';
import { addUserAvatar } from '../storage';

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

    if (photoURL) {
      const file = await convertUrlToFileJpg(photoURL);
      await addUserAvatar(uid, file);
    }

    await setUserById(uid, newUser);

    return newUser;
  } catch (error) {
    console.error(error);

    return null;
  }
}
