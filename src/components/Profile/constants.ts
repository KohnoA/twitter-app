import { UserDataType } from '@/types';

export const INITIAL_MODAL_STATE = false;

export const DEFAULT_USER_DATA: Omit<UserDataType, 'id' | 'password'> = {
  name: 'User name',
  email: 'user@gmail.com',
  birthday: new Date(Date.now()).toISOString(),
  phone: '+375 (29) 123-12-34',
  description: 'Front-end developer',
};
