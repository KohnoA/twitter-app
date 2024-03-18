import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import { Errors } from '@/constants';
import {
  getUserAvatar as getUserAvatarStorage,
  getUserById as getUserByIdFirestore,
  setUserAvatar as setUserAvatarStorage,
  setUserById as setUserByIdFirestore,
} from '@/services';
import { UserDataType } from '@/types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fakeBaseQuery<{ message: Errors }>(),
  tagTypes: ['User', 'Avatar'],
  endpoints: (builder) => ({
    getUserById: builder.query<UserDataType, string>({
      queryFn: async (userId) => {
        try {
          const userData = await getUserByIdFirestore(userId);

          return { data: userData };
        } catch {
          return { error: { message: Errors.GENERAL_ERROR } };
        }
      },
      providesTags: ['User'],
    }),
    setUserById: builder.mutation<null, { userId: string; data: UserDataType }>({
      queryFn: async ({ userId, data }) => {
        try {
          await setUserByIdFirestore(userId, data);

          return { data: null };
        } catch {
          return { error: { message: Errors.GENERAL_ERROR } };
        }
      },
      invalidatesTags: ['User'],
    }),
    getUserAvatar: builder.query<string | null, string>({
      queryFn: async (userId) => {
        try {
          const url = await getUserAvatarStorage(userId);

          return { data: url };
        } catch {
          return { data: null };
        }
      },
      providesTags: ['Avatar'],
    }),
    setUserAvatar: builder.mutation<null, { userId: string; file: FileList }>({
      queryFn: async ({ userId, file }) => {
        try {
          await setUserAvatarStorage(userId, file);

          return { data: null };
        } catch {
          return { error: { message: Errors.GENERAL_ERROR } };
        }
      },
      invalidatesTags: ['Avatar'],
    }),
  }),
});

export const {
  useGetUserByIdQuery,
  useSetUserByIdMutation,
  useGetUserAvatarQuery,
  useSetUserAvatarMutation,
} = userApi;
