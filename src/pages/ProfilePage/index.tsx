import { useParams } from 'react-router-dom';

import { NewTweet, Profile, TweetList } from '@/components';
import { useAppSelector } from '@/hooks';
import { MainLayout } from '@/layout';
import { useGetUserTweetsQuery } from '@/store/api';
import { userSelector } from '@/store/selectors';

export const ProfilePage = () => {
  const { userId } = useParams();
  const { data: owner } = useAppSelector(userSelector);
  const { data: tweets, isLoading: tweetsLoading } = useGetUserTweetsQuery(userId!);
  const isProfileOwner = userId === owner?.id;

  return (
    <MainLayout>
      <Profile userId={userId!} isOwner={isProfileOwner} />

      {isProfileOwner && <NewTweet />}

      <TweetList tweets={tweets} isLoading={tweetsLoading} />
    </MainLayout>
  );
};
