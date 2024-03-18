import { getDownloadURL, ref } from 'firebase/storage';

import { storage } from '@/firebase';

export async function getUserAvatar(userId: string) {
  const imageRef = ref(storage, `avatars/${userId}`);
  const url = await getDownloadURL(imageRef);

  return url;
}
