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
