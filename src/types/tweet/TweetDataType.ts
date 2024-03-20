export interface TweetDataType {
  id: string;
  author: {
    id: string;
    avatar?: string | null;
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
