import * as services from '@/services';

export * from './data';

jest.mock('@/services');

export const getUserByIdMock = jest.spyOn(services, 'getUserById');
export const getUserAvatarMock = jest.spyOn(services, 'getUserAvatar');
export const addUserAvatarMock = jest.spyOn(services, 'addUserAvatar');
export const getAllUserByIdMock = jest.spyOn(services, 'getAllUsers');
export const updatePasswordMock = jest.spyOn(services, 'updatePassword');
export const setUserByIdMock = jest.spyOn(services, 'setUserById');
export const signInMock = jest.spyOn(services, 'signIn');
