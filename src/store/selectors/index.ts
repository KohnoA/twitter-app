import { RootState } from '..';

export const userSelector = (state: RootState) => state.user;
export const signUpSelector = (state: RootState) => state.signUp;
export const themeSelector = (state: RootState) => state.theme;
