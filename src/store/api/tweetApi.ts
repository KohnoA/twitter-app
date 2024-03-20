import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { v4 } from 'uuid';

import { Errors } from '@/constants';
import {
  addTweet as addTweetFireStore,
  addTweetImage,
  getAllTweets as getAllTweetsFirestore,
  getUserTweets as getUserTweetsFirestore,
} from '@/services';
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
          const tweetData: TweetDataType = {
            id: v4(),
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
        } catch (error) {
          console.error(error);

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
        } catch (error) {
          console.error(error);

          return { error: { message: Errors.GENERAL_ERROR } };
        }
      },
      providesTags: ['Tweet'],
    }),
    getAllTweets: builder.query<TweetDataType[], void>({
      queryFn: async () => {
        try {
          const tweets = await getAllTweetsFirestore();

          return { data: tweets };
        } catch (error) {
          console.error(error);

          return { error: { message: Errors.GENERAL_ERROR } };
        }
      },
      providesTags: ['Tweet'],
    }),
  }),
});

export const { useAddTweetMutation, useGetUserTweetsQuery, useGetAllTweetsQuery } = tweetApi;
