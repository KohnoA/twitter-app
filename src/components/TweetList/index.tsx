import { TweetDataType } from '@/types';

import { Spinner } from '../UI';

import { EmptyMessage, SpinnerItem, TweetListStyled, TweetListTitle } from './styled';
import { TweetItem } from './TweetItem';

interface TweetListProps {
  tweets?: TweetDataType[];
  isLoading?: boolean;
}

export const TweetList = ({ tweets, isLoading }: TweetListProps) => {
  if (!tweets) {
    return null;
  }

  return (
    <section>
      <TweetListTitle>Tweets</TweetListTitle>

      {!tweets.length && <EmptyMessage $size="xl2">No tweets yet</EmptyMessage>}

      <TweetListStyled>
        {isLoading && (
          <SpinnerItem>
            <Spinner width={40} height={40} />
          </SpinnerItem>
        )}

        {tweets.map((tweet) => (
          <TweetItem key={tweet.id} tweet={tweet} />
        ))}
      </TweetListStyled>
    </section>
  );
};
