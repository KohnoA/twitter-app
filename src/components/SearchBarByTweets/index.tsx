import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppRoutes } from '@/constants';
import { useLazyFindTweetsQuery } from '@/store/api';
import { getShortDate } from '@/utils';

import { ElasticSearch } from '../UI';

import { TweetAuthor, TweetAuthorName, TweetMessage, TweetWrapper } from './styled';

export const SearchBarByTweets = () => {
  const [trigger, { data, isFetching }] = useLazyFindTweetsQuery();
  const navigate = useNavigate();
  const showEmptyMessage = !data?.length;

  const handleSearchValue = useCallback(
    (value: string) => {
      trigger(value);
    },
    [trigger],
  );

  const handleClick = (tweetId: string) => {
    navigate(`${AppRoutes.HOME}/${tweetId}`);
  };

  return (
    <ElasticSearch
      placeholder="Search Tweets"
      isLoading={isFetching}
      isEmpty={showEmptyMessage}
      emptyMessage="No Tweets Found"
      onChange={handleSearchValue}
    >
      {data &&
        data.map(({ message, author, date, id }) => (
          <TweetWrapper key={id} onClick={() => handleClick(id)}>
            <TweetAuthor>
              <TweetAuthorName>{author.name}</TweetAuthorName> {author.email} · {getShortDate(date)}
            </TweetAuthor>
            <TweetMessage>{message}</TweetMessage>
          </TweetWrapper>
        ))}
    </ElasticSearch>
  );
};
