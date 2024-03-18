import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import { Errors } from '@/constants';
import { getUserById as getUserByIdFirestore } from '@/services';
import { UserDataType } from '@/types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fakeBaseQuery<{ message: Errors }>(),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUserById: builder.query<UserDataType, string>({
      queryFn: async (userId) => {
        try {
          const userData = await getUserByIdFirestore(userId);

          return { data: userData };
        } catch (error) {
          return { error: { message: Errors.GENERAL_ERROR } };
        }
      },
      providesTags: ['User'],
    }),
  }),
});

export const { useGetUserByIdQuery } = userApi;
