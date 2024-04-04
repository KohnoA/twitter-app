import {
  collection,
  getCountFromServer,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from 'firebase/firestore';

import { FirestoreDocKeys } from '@/constants';
import { db } from '@/firebase';
import { TweetDataType } from '@/types';

const USER_TWEETS_LIMIT = 12;
const INIT_PAGE = 1;

export async function getUserTweets(userId: string, page = INIT_PAGE, _limit = USER_TWEETS_LIMIT) {
  const tweetsRef = collection(db, FirestoreDocKeys.TWEETS);
  const totalUserTweetsQuery = query(tweetsRef, where('author.id', '==', userId));
  const countSnapshot = await getCountFromServer(totalUserTweetsQuery);
  const total = countSnapshot.data().count;

  const q = query(
    tweetsRef,
    where('author.id', '==', userId),
    orderBy('date', 'desc'),
    limit(_limit * page),
  );
  const querySnapshot = await getDocs(q);
  const tweets = querySnapshot.docs.map((doc) => doc.data()) as TweetDataType[];

  return { total, tweets };
}
