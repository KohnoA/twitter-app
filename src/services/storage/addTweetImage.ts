import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import { storage } from '@/firebase';

export async function addTweetImage(file: FileList) {
  const imageRef = ref(storage, 'tweets');
  await uploadBytes(imageRef, file[0]);
  const url = await getDownloadURL(imageRef);

  return url;
}
