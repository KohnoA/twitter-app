import * as services from '@/services';

export * from './data';

jest.mock('@/services');

export const getUserByIdMock = jest.spyOn(services, 'getUserById');
export const getUserAvatarMock = jest.spyOn(services, 'getUserAvatar');
export const addUserAvatarMock = jest.spyOn(services, 'addUserAvatar');
export const getAllUserMock = jest.spyOn(services, 'getAllUsers');
export const updatePasswordMock = jest.spyOn(services, 'updatePassword');
export const setUserByIdMock = jest.spyOn(services, 'setUserById');
export const signInMock = jest.spyOn(services, 'signIn');
export const signUpMock = jest.spyOn(services, 'signUp');
export const addTweetMock = jest.spyOn(services, 'addTweet');
