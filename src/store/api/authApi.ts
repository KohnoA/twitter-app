import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { FirebaseError } from 'firebase/app';

import { Errors } from '@/constants';
import {
  signIn as signInFirebase,
  signUp as signUpFirebase,
  updatePassword as updatePasswordFirebase,
} from '@/services';
import { UserDataType } from '@/types';
import { firebaseErrorHandler } from '@/utils';

import { setEmailStep } from '../slices';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fakeBaseQuery<{ message: Errors }>(),
  endpoints: (builder) => ({
    signUp: builder.query<null, { userData: Omit<UserDataType, 'id'>; password: string }>({
      queryFn: async ({ userData, password }, { dispatch }) => {
        try {
          await signUpFirebase(userData, password);
          dispatch(setEmailStep());

          return { data: null };
        } catch (error) {
          if (error instanceof FirebaseError) return firebaseErrorHandler(error);

          console.error(error);
          return { error: { message: Errors.GENERAL_ERROR } };
        }
      },
    }),
    signIn: builder.query<null, { email: string; password: string }>({
      queryFn: async ({ email, password }) => {
        try {
          await signInFirebase(email, password);

          return { data: null };
        } catch (error) {
          if (error instanceof FirebaseError) return firebaseErrorHandler(error);

          console.error(error);
          return { error: { message: Errors.GENERAL_ERROR } };
        }
      },
    }),
    updatePassword: builder.query<null, string>({
      queryFn: async (newPassword) => {
        try {
          await updatePasswordFirebase(newPassword);

          return { data: null };
        } catch (error) {
          console.error(error);

          return { error: { message: Errors.GENERAL_ERROR } };
        }
      },
    }),
  }),
});

export const { useLazySignUpQuery, useLazySignInQuery, useLazyUpdatePasswordQuery } = authApi;
