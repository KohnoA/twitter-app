import { createAsyncThunk } from '@reduxjs/toolkit';
import { FirebaseError } from 'firebase/app';

import { Errors, FirebaseErrorCodes } from '@/constants';
import { signIn, signUp } from '@/services';
import { UserDataType } from '@/types';

export const signUpThunk = createAsyncThunk(
  'user/signUpThunk',
  async (userData: UserDataType, { rejectWithValue }) => {
    try {
      const user = await signUp(userData);

      return user.firestoreId;
    } catch (error) {
      if (error instanceof FirebaseError && error.code === FirebaseErrorCodes.EMAIL_ALREADY_USE) {
        return rejectWithValue(Errors.USER_EXIST);
      }

      return rejectWithValue(Errors.GENERAL_ERROR);
    }
  },
);

export const signInThunk = createAsyncThunk(
  'user/signInThunk',
  async (userData: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const { email, password } = userData;
      const user = await signIn(email, password);

      return user;
    } catch (error) {
      if (error instanceof FirebaseError && error.code === FirebaseErrorCodes.INVALID_CREDENTIAL) {
        return rejectWithValue(Errors.INVALID_USER_CREDENTIAL);
      }

      return rejectWithValue(Errors.GENERAL_ERROR);
    }
  },
);
