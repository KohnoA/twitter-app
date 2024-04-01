import { getDownloadURL, listAll, ref } from 'firebase/storage';

import { storage } from '@/firebase';

export async function getUserAvatar(userId: string) {
  const avatarRef = ref(storage, `avatars/${userId}`);
  const listData = await listAll(avatarRef);
  const avatarIsExist = listData.items.length;

  if (avatarIsExist) {
    const url = await getDownloadURL(ref(storage, listData.items[0].fullPath));

    return url;
  }

  return null;
}
