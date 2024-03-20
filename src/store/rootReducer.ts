import { combineReducers } from '@reduxjs/toolkit';

import signUpReducer from './slices/signUpSlice';
import themeReducer from './slices/themeSlice';
import userReducer from './slices/userSlice';
import { tweetApi, userApi } from './api';

export const rootReducer = combineReducers({
  user: userReducer,
  signUp: signUpReducer,
  theme: themeReducer,
  [userApi.reducerPath]: userApi.reducer,
  [tweetApi.reducerPath]: tweetApi.reducer,
});
