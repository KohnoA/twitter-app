import { memo, useState } from 'react';

import { useDeleteTweetMutation } from '@/store/api';

import { DotsIcon, INITIAL_OPTIONS_VIISIBILITY, SpinnerIcon } from './constants';
import * as S from './styled';
import { TweetOptionsProps } from './types';

export const TweetOptions = memo(({ tweetId, isOwner }: TweetOptionsProps) => {
  const [deleteTweet, { isLoading }] = useDeleteTweetMutation();
  const [showOptions, setShowOptions] = useState<boolean>(INITIAL_OPTIONS_VIISIBILITY);

  const handleOptionVisibility = () => setShowOptions((prev) => !prev);

  const hanldeRemove = () => deleteTweet(tweetId);

  return (
    <S.MoreWrapper $isActive={showOptions} $isOwner={isOwner}>
      <S.MoreButton onClick={handleOptionVisibility}>
        <DotsIcon />
      </S.MoreButton>

      <S.TweetOptionsStyled>
        <S.TweetOption $isLoading={isLoading} onClick={hanldeRemove}>
          <S.Loader>
            <SpinnerIcon />
          </S.Loader>
          <span>Remove Tweet</span>
        </S.TweetOption>
      </S.TweetOptionsStyled>

      <S.BgForClosing onClick={handleOptionVisibility} />
    </S.MoreWrapper>
  );
});
