import { useParams } from 'react-router-dom';

import { TweetList } from '@/components';
import { MainLayout } from '@/layout';
import { useGetTweetByIdQuery } from '@/store/api';

export const TweetPage = () => {
  const { tweetId } = useParams();
  const { data, isLoading } = useGetTweetByIdQuery(tweetId!);

  return (
    <MainLayout>
      <TweetList tweets={data ? [data] : []} isLoading={isLoading} />
    </MainLayout>
  );
};
