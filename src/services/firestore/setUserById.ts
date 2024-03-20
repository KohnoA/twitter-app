import { doc, setDoc } from 'firebase/firestore';

import { FirestoreDocKeys } from '@/constants';
import { db } from '@/firebase';
import { UserDataType } from '@/types';

export async function setUserById(userId: string, userData: Partial<UserDataType>) {
  await setDoc(doc(db, FirestoreDocKeys.USERS, userId), userData);
}
