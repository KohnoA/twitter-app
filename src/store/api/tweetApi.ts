import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import { Errors } from '@/constants';
import { addTweetImage, getUserTweets as getUserTweetsFirestore } from '@/services';
import { addTweet as addTweetFireStore } from '@/services/firestore/addTweet';
import { TweetDataType } from '@/types';

import { type RootState } from '..';

export const tweetApi = createApi({
  reducerPath: 'tweetApi',
  baseQuery: fakeBaseQuery<{ message: Errors }>(),
  tagTypes: ['Tweet'],
  endpoints: (builder) => ({
    addTweet: builder.mutation<null, { tweet: string; image?: FileList }>({
      queryFn: async ({ tweet, image }, { getState }) => {
        try {
          const {
            user: { data: userData },
          } = getState() as RootState;
          const { email, name, id } = userData!;
          const tweetData: Omit<TweetDataType, 'id'> = {
            author: {
              avatar: userData?.avatar,
              email,
              name,
              id,
            },
            date: new Date(Date.now()).toISOString(),
            message: tweet,
            likes: {
              count: 0,
              users: [],
            },
          };

          if (image) {
            const url = await addTweetImage(image);

            tweetData.photo = url;
          }

          await addTweetFireStore(tweetData);

          return { data: null };
        } catch {
          return { error: { message: Errors.GENERAL_ERROR } };
        }
      },
      invalidatesTags: ['Tweet'],
    }),
    getUserTweets: builder.query<TweetDataType[], string>({
      queryFn: async (userId) => {
        try {
          const tweets = await getUserTweetsFirestore(userId);

          return { data: tweets };
        } catch {
          return { error: { message: Errors.GENERAL_ERROR } };
        }
      },
      providesTags: ['Tweet'],
    }),
  }),
});

export const { useAddTweetMutation, useGetUserTweetsQuery } = tweetApi;
