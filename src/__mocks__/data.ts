import { TweetDataType } from '@/types';

export const testUser = {
  id: '1',
  name: 'TestUser',
  birthday: new Date(Date.now()).toISOString(),
  phone: '+375 (29) 123-12-12',
  email: 'test123@gmail.com',
};

export const testTweet: TweetDataType = {
  id: '1',
  author: {
    id: '1',
    name: 'TestName',
    email: 'test123@gmail.com',
  },
  date: new Date(Date.now()).toISOString(),
  message: 'Test tweet message',
  likes: {
    count: 0,
    users: [],
  },
};
