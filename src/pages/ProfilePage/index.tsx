import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { NewTweet, Profile, TweetList } from '@/components';
import { ButtonWithSpinner } from '@/components/UI';
import { useAppSelector } from '@/hooks';
import { MainLayout } from '@/layout';
import { useGetUserTweetsQuery } from '@/store/api';
import { userSelector } from '@/store/selectors';

import { MoreTweetButtonWrapper } from './styled';

const INIT_PAGE = 1;

export const ProfilePage = () => {
  const { userId } = useParams();
  const [page, setPage] = useState(INIT_PAGE);
  const { data: owner } = useAppSelector(userSelector);
  const {
    data: userTweets,
    isLoading,
    isFetching,
  } = useGetUserTweetsQuery({
    userId: userId ?? owner!.id,
    page,
  });
  const showMoreButton = userTweets && userTweets?.tweets.length < userTweets?.total;
  const isProfileOwner = !userId;

  const incrementTweetsPage = () => setPage((prev) => prev + 1);

  return (
    <MainLayout>
      <Profile userId={userId ?? owner!.id} isOwner={isProfileOwner} />

      {isProfileOwner && <NewTweet />}

      <TweetList tweets={userTweets?.tweets} isLoading={isLoading} />

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
