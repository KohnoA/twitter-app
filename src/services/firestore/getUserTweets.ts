import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore';

import { FirestoreDocKeys } from '@/constants';
import { db } from '@/firebase';
import { TweetDataType } from '@/types';

const USER_TWEETS_LIMIT = 12;

export async function getUserTweets(userId: string, _limit = USER_TWEETS_LIMIT) {
  const tweetsRef = collection(db, FirestoreDocKeys.TWEETS);
  const q = query(
    tweetsRef,
    where('author.id', '==', userId),
    orderBy('date', 'desc'),
    limit(_limit),
  );
  const querySnapshot = await getDocs(q);
  const tweets = querySnapshot.docs.map((doc) => doc.data()) as TweetDataType[];

  return tweets;
}
