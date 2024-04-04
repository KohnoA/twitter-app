import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserDataType } from '@/types';

interface UserStateType {
  isAuth: boolean;
  data: UserDataType | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserStateType = {
  isAuth: false,
  data: null,
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
      state.data = null;
    },
    setIsAuth(state, action: PayloadAction<UserDataType>) {
      state.isAuth = true;
      state.data = action.payload;
    },
    updateUserData(state, action: PayloadAction<UserDataType>) {
      state.data = action.payload;
    },
  },
});

export const { clearUserStatus, setIsNotAuth, setIsAuth, updateUserData } = userSlice.actions;

export default userSlice.reducer;
