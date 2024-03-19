import { collection, getDocs, query, where } from 'firebase/firestore';

import { FirestoreDocKeys } from '@/constants';
import { db } from '@/firebase';
import { TweetDataType } from '@/types';

export async function getUserTweets(userId: string) {
  const tweetsRef = collection(db, FirestoreDocKeys.TWEETS);
  const q = query(tweetsRef, where('author.id', '==', userId));
  const querySnapshot = await getDocs(q);
  const tweets = querySnapshot.docs.map((doc) => doc.data()) as TweetDataType[];

  return tweets;
}
