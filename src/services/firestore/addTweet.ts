import { addDoc, collection } from 'firebase/firestore';

import { FirestoreDocKeys } from '@/constants';
import { db } from '@/firebase';
import { TweetDataType } from '@/types';

export async function addTweet(tweetData: Omit<TweetDataType, 'id'>) {
  const docRef = collection(db, FirestoreDocKeys.TWEETS);
  await addDoc(docRef, tweetData);
}
