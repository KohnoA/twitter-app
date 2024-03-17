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
  reducers: {
    clearUserStatus(state) {
      if (state.error) state.error = null;
      if (state.loading) state.loading = false;
    },
    setIsNotAuth(state) {
      state.isAuth = false;
    },
    setIsAuth(state) {
      state.isAuth = true;
    },
  },
  extraReducers(builder) {
    builder.addCase(signUpThunk.fulfilled, (state) => {
      state.loading = false;
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

export const { clearUserStatus, setIsNotAuth, setIsAuth } = userSlice.actions;

export default userSlice.reducer;
