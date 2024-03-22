import { doc, getDoc, updateDoc } from 'firebase/firestore';

import { FirestoreDocKeys } from '@/constants';
import { db } from '@/firebase';
import { TweetDataType } from '@/types';

export async function addLikeToTweet(tweetId: string, userId: string) {
  const tweetRef = doc(db, FirestoreDocKeys.TWEETS, tweetId);
  const tweetSnap = await getDoc(tweetRef);
  const tweetData = tweetSnap.data() as TweetDataType;

  const likesCount = tweetData.likes.count + 1;
  const users = [...tweetData.likes.users, userId];

  await updateDoc(tweetRef, { 'likes.count': likesCount, 'likes.users': users });
}
