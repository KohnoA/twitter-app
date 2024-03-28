import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { v4 } from 'uuid';

import { Errors } from '@/constants';
import {
  addLikeToTweet as setLikeToTweetFirestore,
  addTweet as addTweetFireStore,
  addTweetImage,
  deleteTweet as deleteTweetFirestore,
  findTweetsByMessage,
  getAllTweets as getAllTweetsFirestore,
  getTweetById as getTweetByIdFirestore,
  getUserTweets as getUserTweetsFirestore,
  removeLikeToTweet,
} from '@/services';
import { TweetDataType } from '@/types';

import { type RootState } from '..';

const GENERAL_ERROR = { error: { message: Errors.GENERAL_ERROR } };

export const tweetApi = createApi({
  reducerPath: 'tweetApi',
  baseQuery: fakeBaseQuery<{ message: Errors }>(),
  tagTypes: ['Tweet'],
  endpoints: (builder) => ({
    getTweetById: builder.query<TweetDataType, string>({
      queryFn: async (tweetId) => {
        try {
          const tweet = await getTweetByIdFirestore(tweetId);

          return { data: tweet };
        } catch (error) {
          console.error(error);

          return GENERAL_ERROR;
        }
      },
      providesTags: ['Tweet'],
    }),
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

          return GENERAL_ERROR;
        }
      },
      invalidatesTags: ['Tweet'],
    }),
    getUserTweets: builder.query<
      { total: number; tweets: TweetDataType[] },
      { userId: string; page?: number }
    >({
      queryFn: async ({ userId, page }) => {
        try {
          const data = await getUserTweetsFirestore(userId, page);

          return { data };
        } catch (error) {
          console.error(error);

          return GENERAL_ERROR;
        }
      },
      providesTags: ['Tweet'],
    }),
    getAllTweets: builder.query<{ total: number; tweets: TweetDataType[] }, number | void>({
      queryFn: async (page) => {
        try {
          const data = await getAllTweetsFirestore(page ?? undefined);

          return { data };
        } catch (error) {
          console.error(error);

          return GENERAL_ERROR;
        }
      },
      providesTags: ['Tweet'],
    }),
    findTweets: builder.query<TweetDataType[], string>({
      queryFn: async (value) => {
        try {
          if (!value.length) return { data: [] };

          const tweets = await findTweetsByMessage(value);

          return { data: tweets };
        } catch (error) {
          console.error(error);

          return GENERAL_ERROR;
        }
      },
    }),
    addLikeToTweet: builder.mutation<null, { tweetId: string; userId: string }>({
      queryFn: async ({ tweetId, userId }) => {
        try {
          await setLikeToTweetFirestore(tweetId, userId);

          return { data: null };
        } catch (error) {
          console.error(error);

          return GENERAL_ERROR;
        }
      },
    }),
    removeLikeToTweet: builder.mutation<null, { tweetId: string; userId: string }>({
      queryFn: async ({ tweetId, userId }) => {
        try {
          await removeLikeToTweet(tweetId, userId);

          return { data: null };
        } catch (error) {
          console.error(error);

          return GENERAL_ERROR;
        }
      },
    }),
    deleteTweet: builder.mutation<null, string>({
      queryFn: async (tweetId) => {
        try {
          await deleteTweetFirestore(tweetId);

          return { data: null };
        } catch (error) {
          console.error(error);

          return GENERAL_ERROR;
        }
      },
      invalidatesTags: ['Tweet'],
    }),
  }),
});

export const {
  useAddTweetMutation,
  useGetUserTweetsQuery,
  useGetAllTweetsQuery,
  useLazyFindTweetsQuery,
  useGetTweetByIdQuery,
  useAddLikeToTweetMutation,
  useRemoveLikeToTweetMutation,
  useDeleteTweetMutation,
} = tweetApi;
