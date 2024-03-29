import { doc, getDoc, updateDoc } from 'firebase/firestore';

import { FirestoreDocKeys } from '@/constants';
import { db } from '@/firebase';
import { TweetDataType } from '@/types';

export async function removeLikeToTweet(tweetId: string, userId: string) {
  const tweetRef = doc(db, FirestoreDocKeys.TWEETS, tweetId);
  const tweetSnap = await getDoc(tweetRef);
  const tweetData = tweetSnap.data() as TweetDataType;

  const users = [...tweetData.likes.users].filter((id) => id !== userId);

  await updateDoc(tweetRef, { 'likes.count': users.length, 'likes.users': users });
}
