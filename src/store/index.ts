import { combineReducers, configureStore } from '@reduxjs/toolkit';

import signUpReducer from './slices/signUoSlice';
import userReducer from './slices/userSlice';

const rootReducer = combineReducers({
  user: userReducer,
  signUp: signUpReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
