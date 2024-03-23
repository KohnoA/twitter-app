import { doc, getDoc } from 'firebase/firestore';

import { FirestoreDocKeys } from '@/constants';
import { db } from '@/firebase';
import { UserDataType } from '@/types';

export async function getUserById(userId: string) {
  const docRef = doc(db, FirestoreDocKeys.USERS, userId);
  const docSnap = await getDoc(docRef);
  const userData = docSnap.data() as UserDataType;

  return userData;
}
