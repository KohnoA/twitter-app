import { updatePassword as updatePasswordFirebase } from 'firebase/auth';

import { auth } from '@/firebase';

export async function updatePassword(newPassword: string) {
  const user = auth.currentUser;

  if (!user) return;

  await updatePasswordFirebase(user, newPassword);
}
