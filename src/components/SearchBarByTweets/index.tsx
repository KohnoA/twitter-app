import { useNavigate } from 'react-router-dom';

import { AppRoutes } from '@/constants';
import { useDebounce } from '@/hooks';
import { useLazyFindTweetsQuery } from '@/store/api';
import { getShortDate } from '@/utils';

import { ElasticSearch } from '../UI';

import * as S from './styled';

interface SearchBarByTweetsProps {
  onOpen?: (isOpen: boolean) => void;
}

export const SearchBarByTweets = ({ onOpen }: SearchBarByTweetsProps) => {
  const [trigger, { data, isFetching }] = useLazyFindTweetsQuery();
  const debounce = useDebounce();
  const navigate = useNavigate();
  const showEmptyMessage = !!data && !data.length;

  const handleSearchValue = (value: string) => {
    debounce(() => {
      trigger(value);
      if (onOpen) onOpen(!!value.length);
    });
  };

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
          <S.TweetWrapper key={id} onClick={() => handleClick(id)}>
            <S.TweetAuthor>
              <S.TweetAuthorName>{author.name}</S.TweetAuthorName> {author.email} ·{' '}
              {getShortDate(date)}
            </S.TweetAuthor>
            <S.TweetMessage>{message}</S.TweetMessage>
          </S.TweetWrapper>
        ))}
    </ElasticSearch>
  );
};
