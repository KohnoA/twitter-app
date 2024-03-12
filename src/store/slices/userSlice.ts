import { createSlice } from '@reduxjs/toolkit';

import { signInThunk, signUpThunk } from '../thunks';

interface UserStateType {
  isAuth: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: UserStateType = {
  isAuth: false,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(signUpThunk.fulfilled, (state) => {
      state.loading = false;
      state.isAuth = true;
      state.error = null;
    });
    builder.addCase(signUpThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signUpThunk.rejected, (state, action) => {
      state.loading = false;

      if (typeof action.payload === 'string') {
        state.error = action.payload;
      }
    });

    builder.addCase(signInThunk.fulfilled, (state) => {
      state.isAuth = true;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(signInThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signInThunk.rejected, (state, action) => {
      state.loading = false;

      if (typeof action.payload === 'string') {
        state.error = action.payload;
      }
    });
  },
});

export default userSlice.reducer;
