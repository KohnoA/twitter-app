import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import { Errors } from '@/constants';
import { addUserAvatar, findUsersByName, getUserById, setUserById } from '@/services';
import { UserDataType } from '@/types';

import { updateUserData } from '../slices';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fakeBaseQuery<{ message: Errors }>(),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUser: builder.query<UserDataType, string>({
      queryFn: async (userId) => {
        try {
          const userData = await getUserById(userId);

          return { data: userData };
        } catch (error) {
          console.error(error);

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
        } catch (error) {
          console.error(error);

          return { error: { message: Errors.GENERAL_ERROR } };
        }
      },
      invalidatesTags: ['User'],
    }),
    findUsers: builder.query<UserDataType[], string>({
      queryFn: async (value, { getState }) => {
        try {
          if (!value.length) return { data: [] };

          const state = getState() as { user: { data: UserDataType | null } };
          const { data } = state.user;
          const users = await findUsersByName(value);
          const usersWithoutOwner = users.filter((user) => user.id !== data?.id);

          return { data: usersWithoutOwner };
        } catch (error) {
          console.error(error);

          return { error: { message: Errors.GENERAL_ERROR } };
        }
      },
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation, useLazyFindUsersQuery } = userApi;
