import { useState } from 'react';

import { NewTweet, TweetList } from '@/components';
import { ButtonWithSpinner } from '@/components/UI';
import { MainLayout } from '@/layout';
import { useGetAllTweetsQuery } from '@/store/api';

import { MoreTweetButtonWrapper } from './styled';

const INIT_PAGE = 1;

export const HomePage = () => {
  const [page, setPage] = useState<number>(INIT_PAGE);
  const { data, isLoading, isFetching } = useGetAllTweetsQuery(page);
  const showMoreButton = data && data?.tweets.length < data?.total;

  const incrementTweetsPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <MainLayout>
      <NewTweet />
      <TweetList tweets={data?.tweets} isLoading={isLoading} />

      {showMoreButton && (
        <MoreTweetButtonWrapper>
          <ButtonWithSpinner $view="primary" isLoading={isFetching} onClick={incrementTweetsPage}>
            More Tweets
          </ButtonWithSpinner>
        </MoreTweetButtonWrapper>
      )}
    </MainLayout>
  );
};
