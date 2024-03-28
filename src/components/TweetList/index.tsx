import { TweetItem } from '../TweetItem';

import { EmptyMessage, SpinnerStyled, TweetListStyled, TweetListTitle } from './styled';
import { TweetListProps } from './types';

export const TweetList = (props: TweetListProps) => {
  const { tweets, isLoading } = props;

  return (
    <section>
      <TweetListTitle>Tweets</TweetListTitle>

      {isLoading && <SpinnerStyled width={50} height={50} />}

      {tweets && !tweets.length && <EmptyMessage $size="xl2">No tweets yet</EmptyMessage>}

      <TweetListStyled data-testid="tweet-list">
        {tweets && tweets.map((tweet) => <TweetItem key={tweet.id} tweet={tweet} />)}
      </TweetListStyled>
    </section>
  );
};
