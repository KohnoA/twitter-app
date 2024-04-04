import { deleteDoc, doc } from 'firebase/firestore';

import { FirestoreDocKeys } from '@/constants';
import { db } from '@/firebase';

export async function deleteTweet(tweetId: string) {
  await deleteDoc(doc(db, FirestoreDocKeys.TWEETS, tweetId));
}
