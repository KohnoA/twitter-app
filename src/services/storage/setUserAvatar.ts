import { ref, uploadBytes } from 'firebase/storage';

import { storage } from '@/firebase';

export async function setUserAvatar(userId: string, file: FileList) {
  const imageRef = ref(storage, `avatars/${userId}`);
  await uploadBytes(imageRef, file[0]);
}
