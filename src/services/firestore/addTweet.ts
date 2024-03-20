import { doc, setDoc } from 'firebase/firestore';

import { FirestoreDocKeys } from '@/constants';
import { db } from '@/firebase';
import { TweetDataType } from '@/types';

export async function addTweet(tweetData: TweetDataType) {
  const docRef = doc(db, FirestoreDocKeys.TWEETS, tweetData.id);
  await setDoc(docRef, tweetData);
}
