import { collection, getDocs, limit, query, where } from 'firebase/firestore';

import { FirestoreDocKeys } from '@/constants';
import { db } from '@/firebase';
import { TweetDataType } from '@/types';

const TWEETS_LIMIT = 8;

export async function findTweetsByMessage(value: string, _limit = TWEETS_LIMIT) {
  const tweetsRef = collection(db, FirestoreDocKeys.TWEETS);
  const q = query(
    tweetsRef,
    where('message', '>=', value),
    where('message', '<=', `${value}\uf8ff`),
    limit(_limit),
  );
  const querySnapshot = await getDocs(q);
  const tweets = querySnapshot.docs.map((doc) => doc.data()) as TweetDataType[];

  return tweets;
}
