import { combineReducers, configureStore } from '@reduxjs/toolkit';

import signUpReducer from './slices/signUoSlice';
import themeReducer from './slices/themeSlice';
import userReducer from './slices/userSlice';

const rootReducer = combineReducers({
  user: userReducer,
  signUp: signUpReducer,
  theme: themeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
