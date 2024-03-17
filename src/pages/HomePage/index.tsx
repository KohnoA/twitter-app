import { NewTweet, TweetList } from '@/components';
import { MainLayout } from '@/layout';

export const HomePage = () => (
  <MainLayout>
    <NewTweet />
    <TweetList />
  </MainLayout>
);
