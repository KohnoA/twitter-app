import { NewTweet, Profile } from '@/components';
import { MainLayout } from '@/layout';

export const ProfilePage = () => (
  <MainLayout>
    <Profile />
    <NewTweet />
  </MainLayout>
);
