import { UserDataType } from '@/types';

export const INITIAL_MODAL_STATE = false;
export const INITIAL_CHANGE_PASSWORD_FORM_VISIBILITY = false;
export const DEFAULT_STAT_VALUE = 0;

export const DEFAULT_USER_DATA: Omit<UserDataType, 'id'> = {
  name: 'User name',
  email: 'user@gmail.com',
  birthday: new Date(Date.now()).toISOString(),
  phone: '+375 (29) 123-12-34',
  description: 'Front-end developer',
};
