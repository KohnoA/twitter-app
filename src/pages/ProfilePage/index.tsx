import { useParams } from 'react-router-dom';

import { NewTweet, Profile, TweetList } from '@/components';
import { ButtonWithSpinner } from '@/components/UI';
import { useAppSelector, usePagination } from '@/hooks';
import { MainLayout } from '@/layout';
import { useGetUserTweetsQuery } from '@/store/api';
import { userSelector } from '@/store/selectors';

import { MoreTweetButtonWrapper } from './styled';

export const ProfilePage = () => {
  const { userId } = useParams();
  const { page, incPage } = usePagination();
  const { data: owner } = useAppSelector(userSelector);
  const {
    data: userTweets,
    isLoading,
    isFetching,
  } = useGetUserTweetsQuery({
    userId: userId ?? owner?.id,
    page,
  });
  const showMoreButton = !isLoading && userTweets && userTweets?.tweets.length < userTweets?.total;
  const isProfileOwner = !userId;

  return (
    <MainLayout>
      <Profile
        userId={userId ?? owner!.id}
        isOwner={isProfileOwner}
        tweetsCount={userTweets?.total}
      />

      {isProfileOwner && <NewTweet />}

      <TweetList tweets={userTweets?.tweets} isLoading={isLoading} />

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
