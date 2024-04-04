export interface TweetDataType {
  id: string;
  author: {
    id: string;
    name: string;
    email: string;
  };
  date: string;
  photo?: string;
  message: string;
  likes: {
    count: number;
    users: string[];
  };
}

export interface UserDataType {
  birthday: string;
  email: string;
  name: string;
  phone: string;
  id: string;
  description?: string;
}
