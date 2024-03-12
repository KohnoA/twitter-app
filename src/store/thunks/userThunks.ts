import { createAsyncThunk } from '@reduxjs/toolkit';
import { FirebaseError } from 'firebase/app';

import { Errors, FirebaseErrorCodes } from '@/constants';
import { signUp } from '@/services';
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
