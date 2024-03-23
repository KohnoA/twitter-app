import { NewTweet, TweetList } from '@/components';
import { MainLayout } from '@/layout';
import { useGetAllTweetsQuery } from '@/store/api';

export const HomePage = () => {
  const { data, isLoading } = useGetAllTweetsQuery();

  return (
    <MainLayout>
      <NewTweet />
      <TweetList tweets={data} isLoading={isLoading} />
    </MainLayout>
  );
};
