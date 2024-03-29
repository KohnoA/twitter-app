import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

import { storage } from '@/firebase';

export async function addUserAvatar(userId: string, file: FileList) {
  const ext = file[0].name.split('.').pop();
  const imageRef = ref(storage, `avatars/${userId}/${v4()}.${ext}`);
  await uploadBytes(imageRef, file[0]);
}
