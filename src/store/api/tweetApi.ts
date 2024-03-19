import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { v4 } from 'uuid';

import { Errors } from '@/constants';
import { addTweetImage } from '@/services';
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
          const tweetData: TweetDataType = {
            id: v4(),
            author: {
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
  }),
});

export const { useAddTweetMutation } = tweetApi;
