import { useParams } from 'react-router-dom';

import { NewTweet, Profile, TweetList } from '@/components';
import { Spinner } from '@/components/UI';
import { MainLayout } from '@/layout';
import { useGetUserByIdQuery } from '@/store/api';

export const ProfilePage = () => {
  const { userId } = useParams();
  const { data, isLoading } = useGetUserByIdQuery(userId!);

  return (
    <MainLayout>
      {isLoading && <Spinner width={60} height={60} />}

      {data && (
        <>
          <Profile user={data!} />
          <NewTweet />
          <TweetList />
        </>
      )}
    </MainLayout>
  );
};
