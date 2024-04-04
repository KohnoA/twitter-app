import { doc, getDoc } from 'firebase/firestore';

import { FirestoreDocKeys } from '@/constants';
import { db } from '@/firebase';
import { TweetDataType } from '@/types';

export async function getTweetById(tweetId: string) {
  const docRef = doc(db, FirestoreDocKeys.TWEETS, tweetId);
  const docSnap = await getDoc(docRef);
  const tweet = docSnap.data() as TweetDataType;

  return tweet;
}
