import { NewTweet, TweetList } from '@/components';
import { ButtonWithSpinner } from '@/components/UI';
import { usePagination } from '@/hooks';
import { MainLayout } from '@/layout';
import { useGetAllTweetsQuery } from '@/store/api';

import { MoreTweetButtonWrapper } from './styled';

export const HomePage = () => {
  const { page, incPage } = usePagination();
  const { data, isLoading, isFetching } = useGetAllTweetsQuery(page);
  const showMoreButton = data && data?.tweets.length < data?.total;

  return (
    <MainLayout>
      <NewTweet />
      <TweetList tweets={data?.tweets} isLoading={isLoading} />

      {showMoreButton && (
        <MoreTweetButtonWrapper>
          <ButtonWithSpinner $view="primary" isLoading={isFetching} onClick={incPage}>
            More Tweets
          </ButtonWithSpinner>
        </MoreTweetButtonWrapper>
      )}
    </MainLayout>
  );
};
