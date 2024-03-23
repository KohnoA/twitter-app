import { collection, getDocs, limit, query } from 'firebase/firestore';

import { FirestoreDocKeys } from '@/constants';
import { db } from '@/firebase';
import { UserDataType } from '@/types';

const USERS_LIMIT = 9;

export async function getAllUsers(_limit = USERS_LIMIT) {
  const usersRef = collection(db, FirestoreDocKeys.USERS);
  const q = query(usersRef, limit(_limit));
  const querySnapshot = await getDocs(q);
  const users = querySnapshot.docs.map((doc) => doc.data()) as UserDataType[];

  return users;
}
