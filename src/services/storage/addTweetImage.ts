import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import { storage } from '@/firebase';

export async function addTweetImage(tweetId: string, file: FileList) {
  const currentFile = file[0];
  const imageRef = ref(storage, `tweets/${tweetId}`);
  await uploadBytes(imageRef, currentFile);
  const url = await getDownloadURL(imageRef);

  return url;
}
