import * as services from '@/services';

export * from './data';

jest.mock('@/services');

export const getUserByIdMock = jest.spyOn(services, 'getUserById');
export const getUserAvatarMock = jest.spyOn(services, 'getUserAvatar');
export const getAllUserByIdMock = jest.spyOn(services, 'getAllUsers');
