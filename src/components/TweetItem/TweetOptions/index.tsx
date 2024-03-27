import { memo, useState } from 'react';

import { useDeleteTweetMutation } from '@/store/api';

import { DotsIcon, INITIAL_OPTIONS_VIISIBILITY, SpinnerIcon } from './constants';
import {
  BgForClosing,
  Loader,
  MoreButton,
  MoreWrapper,
  TweetOption,
  TweetOptionsStyled,
} from './styled';
import { TweetOptionsProps } from './types';

export const TweetOptions = memo(({ tweetId }: TweetOptionsProps) => {
  const [deleteTweet, { isLoading }] = useDeleteTweetMutation();
  const [showOptions, setShowOptions] = useState<boolean>(INITIAL_OPTIONS_VIISIBILITY);

  const handleOptionVisibility = () => setShowOptions((prev) => !prev);

  const hanldeRemove = () => deleteTweet(tweetId);

  return (
    <MoreWrapper $isActive={showOptions}>
      <MoreButton onClick={handleOptionVisibility}>
        <DotsIcon />
      </MoreButton>

      <TweetOptionsStyled>
        <TweetOption $isLoading={isLoading} onClick={hanldeRemove}>
          <Loader>
            <SpinnerIcon width={24} height={24} />
          </Loader>
          <span>Remove Tweet</span>
        </TweetOption>
      </TweetOptionsStyled>
      <BgForClosing onClick={handleOptionVisibility} />
    </MoreWrapper>
  );
});
