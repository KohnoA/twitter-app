import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThemes } from '@/constants';

interface ThemeStateType {
  theme: AppThemes;
}

const initialState: ThemeStateType = {
  theme: AppThemes.LIGHT,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state, action: PayloadAction<AppThemes>) {
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
