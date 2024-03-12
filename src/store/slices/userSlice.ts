import { createSlice } from '@reduxjs/toolkit';

import { signUpThunk } from '../thunks';

interface UserStateType {
  isAuth: boolean;
  loading: boolean;
  error?: string;
}

const initialState: UserStateType = {
  isAuth: false,
  loading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(signUpThunk.fulfilled, (state) => {
      state.loading = false;
      state.isAuth = true;
    });
    builder.addCase(signUpThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signUpThunk.rejected, (state, action) => {
      state.loading = false;

      if (typeof action.payload === 'string') {
        state.error = action.payload;
      }
    });
  },
});

export default userSlice.reducer;
