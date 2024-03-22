import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { FirebaseError } from 'firebase/app';

import { Errors, FirebaseErrorCodes } from '@/constants';
import { signIn as signInFirebase, signUp as signUpFirebase } from '@/services';
import { UserDataType } from '@/types';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fakeBaseQuery<{ message: Errors }>(),
  endpoints: (builder) => ({
    signUp: builder.query<null, { userData: Omit<UserDataType, 'id'>; password: string }>({
      queryFn: async ({ userData, password }) => {
        try {
          await signUpFirebase(userData, password);

          return { data: null };
        } catch (error) {
          if (
            error instanceof FirebaseError &&
            error.code === FirebaseErrorCodes.EMAIL_ALREADY_USE
          ) {
            return { error: { message: Errors.USER_EXIST } };
          }

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
          if (
            error instanceof FirebaseError &&
            error.code === FirebaseErrorCodes.INVALID_CREDENTIAL
          ) {
            return { error: { message: Errors.INVALID_USER_CREDENTIAL } };
          }

          console.error(error);
          return { error: { message: Errors.GENERAL_ERROR } };
        }
      },
    }),
  }),
});

export const { useLazySignUpQuery, useLazySignInQuery } = authApi;
