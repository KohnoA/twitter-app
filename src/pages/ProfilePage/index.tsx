import { NewTweet, Profile, TweetList } from '@/components';
import { MainLayout } from '@/layout';

export const ProfilePage = () => (
  <MainLayout>
    <Profile />
    <NewTweet />
    <TweetList />
  </MainLayout>
);
