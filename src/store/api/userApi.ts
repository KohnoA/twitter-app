import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import { Errors } from '@/constants';
import { addUserAvatar, getUserById, setUserById } from '@/services';
import { UserDataType } from '@/types';

import { updateUserData } from '../slices';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fakeBaseQuery<{ message: Errors }>(),
  tagTypes: ['User', 'Avatar'],
  endpoints: (builder) => ({
    getUser: builder.query<UserDataType, string>({
      queryFn: async (userId) => {
        try {
          const userData = await getUserById(userId);

          return { data: userData };
        } catch {
          return { error: { message: Errors.GENERAL_ERROR } };
        }
      },
      providesTags: ['User'],
    }),
    updateUser: builder.mutation<
      UserDataType,
      { userId: string; data: UserDataType; avatar?: FileList }
    >({
      queryFn: async ({ userId, data, avatar }, { dispatch }) => {
        try {
          const updatedUserData = { ...data };

          if (avatar) {
            const url = await addUserAvatar(userId, avatar);

            updatedUserData.avatar = url;
          }

          await setUserById(userId, updatedUserData);

          dispatch(updateUserData(updatedUserData));

          return { data: updatedUserData };
        } catch {
          return { error: { message: Errors.GENERAL_ERROR } };
        }
      },
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = userApi;
