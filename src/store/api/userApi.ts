import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import { Errors } from '@/constants';
import {
  addUserAvatar,
  findUsersByName,
  getAllUsers as getAllUsersFirestore,
  getUserAvatar,
  getUserById,
  setUserById,
} from '@/services';
import { UserDataType } from '@/types';

import { updateUserData } from '../slices';

const GENERAL_ERROR = { error: { message: Errors.GENERAL_ERROR } };

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

          return GENERAL_ERROR;
        }
      },
      providesTags: ['User'],
    }),
    getAllUsers: builder.query<UserDataType[], void>({
      queryFn: async (_, { getState }) => {
        try {
          const state = getState() as { user: { data: UserDataType | null } };
          const { data } = state.user;
          const users = await getAllUsersFirestore();
          const usersWithoutOwner = users.filter((user) => user.id !== data?.id);

          return { data: usersWithoutOwner };
        } catch (error) {
          console.error(error);

          return GENERAL_ERROR;
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
            await addUserAvatar(userId, avatar);
          }

          await setUserById(userId, updatedUserData);

          dispatch(updateUserData(updatedUserData));

          return { data: updatedUserData };
        } catch (error) {
          console.error(error);

          return GENERAL_ERROR;
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

          return GENERAL_ERROR;
        }
      },
    }),
    userAvatar: builder.query<string | null, string | undefined | null>({
      queryFn: async (userId) => {
        try {
          if (!userId) return { data: null };

          const url = await getUserAvatar(userId);

          return { data: url };
        } catch (error) {
          console.error(error);

          return GENERAL_ERROR;
        }
      },
      providesTags: ['User'],
    }),
  }),
});

export const {
  useGetUserQuery,
  useUpdateUserMutation,
  useLazyFindUsersQuery,
  useGetAllUsersQuery,
  useUserAvatarQuery,
} = userApi;
