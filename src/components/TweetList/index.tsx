import { TweetListTitle } from './styled';
import { TweetItem } from './TweetItem';

export const TweetList = () => (
  <section>
    <TweetListTitle>Tweets</TweetListTitle>

    <ul>
      <TweetItem />
      <TweetItem />
      <TweetItem />
    </ul>
  </section>
);
