import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import { storage } from '@/firebase';

export async function addUserAvatar(userId: string, file: FileList) {
  const imageRef = ref(storage, `avatars/${userId}`);
  await uploadBytes(imageRef, file[0]);
  const url = await getDownloadURL(imageRef);

  return url;
}
