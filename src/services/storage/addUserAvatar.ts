import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

import { storage } from '@/firebase';

export async function addUserAvatar(userId: string, file: FileList | File) {
  const currentFile = file instanceof FileList ? file[0] : file;
  const ext = currentFile.name.split('.').pop();
  const imageRef = ref(storage, `avatars/${userId}/${v4()}.${ext}`);
  await uploadBytes(imageRef, currentFile);
}
