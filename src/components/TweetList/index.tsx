import { TweetItem } from '../TweetItem';

import * as S from './styled';
import { TweetListProps } from './types';

export const TweetList = (props: TweetListProps) => {
  const { tweets, isLoading } = props;
  const showEmptyMessage = !isLoading && tweets && !tweets.length;

  return (
    <section data-testid="tweet-list-section">
      <S.TweetListTitle>Tweets</S.TweetListTitle>

      {isLoading && <S.SpinnerStyled data-testid="tweet-list-loader" />}

      {showEmptyMessage && <S.EmptyMessage $size="xl2">No tweets yet</S.EmptyMessage>}

      <S.TweetListStyled data-testid="tweet-list">
        {tweets && tweets.map((tweet) => <TweetItem key={tweet.id} tweet={tweet} />)}
      </S.TweetListStyled>
    </section>
  );
};
