import { collection, getDocs, limit, query, where } from 'firebase/firestore';

import { FirestoreDocKeys } from '@/constants';
import { db } from '@/firebase';
import { UserDataType } from '@/types';

const USERS_LIMIT = 8;

export async function findUsersByName(value: string, _limit = USERS_LIMIT) {
  const name = `${value[0].toUpperCase()}${value.slice(1)}`;
  const usersRef = collection(db, FirestoreDocKeys.USERS);
  const q = query(
    usersRef,
    where('name', '>=', name),
    where('name', '<=', `${name}\uf8ff`),
    limit(_limit),
  );
  const querySnapshot = await getDocs(q);
  const users = querySnapshot.docs.map((doc) => doc.data()) as UserDataType[];

  return users;
}
