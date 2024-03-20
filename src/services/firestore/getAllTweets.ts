import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';

import { FirestoreDocKeys } from '@/constants';
import { db } from '@/firebase';
import { TweetDataType } from '@/types';

const TWEETS_LIMIT = 12;

export async function getAllTweets(_limit = TWEETS_LIMIT) {
  const tweetsRef = collection(db, FirestoreDocKeys.TWEETS);
  const q = query(tweetsRef, orderBy('date', 'desc'), limit(_limit));
  const querySnapshot = await getDocs(q);
  const tweets = querySnapshot.docs.map((doc) => doc.data()) as TweetDataType[];

  return tweets;
}
