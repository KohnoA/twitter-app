import { TweetDataType } from '@/types';

import { EmptyMessage, SpinnerStyled, TweetListStyled, TweetListTitle } from './styled';
import { TweetItem } from './TweetItem';

interface TweetListProps {
  tweets?: TweetDataType[];
  isLoading?: boolean;
}

export const TweetList = ({ tweets, isLoading }: TweetListProps) => (
  <section>
    <TweetListTitle>Tweets</TweetListTitle>

    {isLoading && <SpinnerStyled width={50} height={50} />}

    {tweets && !tweets.length && <EmptyMessage $size="xl2">No tweets yet</EmptyMessage>}

    <TweetListStyled data-testid="tweet-list">
      {tweets && tweets.map((tweet) => <TweetItem key={tweet.id} tweet={tweet} />)}
    </TweetListStyled>
  </section>
);
