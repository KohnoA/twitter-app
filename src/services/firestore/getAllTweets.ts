import { collection, getCountFromServer, getDocs, limit, orderBy, query } from 'firebase/firestore';

import { FirestoreDocKeys } from '@/constants';
import { db } from '@/firebase';
import { TweetDataType } from '@/types';

const TWEETS_LIMIT = 12;
const INIT_PAGE = 1;

export async function getAllTweets(page = INIT_PAGE, _limit = TWEETS_LIMIT) {
  const tweetsRef = collection(db, FirestoreDocKeys.TWEETS);
  const countSnapshot = await getCountFromServer(tweetsRef);
  const total = countSnapshot.data().count;
  const q = query(tweetsRef, orderBy('date', 'desc'), limit(_limit * page));
  const querySnapshot = await getDocs(q);
  const tweets = querySnapshot.docs.map((doc) => doc.data()) as TweetDataType[];

  return { total, tweets };
}
