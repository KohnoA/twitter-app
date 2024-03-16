import { combineReducers } from '@reduxjs/toolkit';

import signUpReducer from './slices/signUpSlice';
import themeReducer from './slices/themeSlice';
import userReducer from './slices/userSlice';

export const rootReducer = combineReducers({
  user: userReducer,
  signUp: signUpReducer,
  theme: themeReducer,
});
