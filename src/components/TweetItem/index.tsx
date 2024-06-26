import { memo, useMemo, useState } from 'react';

import { Paragraph } from '@/components/UI';
import { useAppSelector, useDebounce } from '@/hooks';
import {
  useAddLikeToTweetMutation,
  useRemoveLikeToTweetMutation,
  useUserAvatarQuery,
} from '@/store/api';
import { userSelector } from '@/store/selectors';
import { getShortDate } from '@/utils';

import { DEFAULT_COUNT_LIKES, LikeFillIcon, LikeOutlineIcon } from './constants';
import * as S from './styled';
import { TweetOptions } from './TweetOptions';
import { TweetItemProps } from './types';

export const TweetItem = memo(({ tweet }: TweetItemProps) => {
  const { id: tweetId, message, author, date, photo, likes } = tweet;
  const { id: authorId, name, email } = author;

  const debounce = useDebounce();
  const { data: avatar } = useUserAvatarQuery(authorId);
  const [addLike] = useAddLikeToTweetMutation();
  const [removeLike] = useRemoveLikeToTweetMutation();
  const { data: owner } = useAppSelector(userSelector);
  const [countLikes, setCountLikes] = useState<number>(likes.count ?? DEFAULT_COUNT_LIKES);
  const [isOwnerLiked, setIsOwnerLiked] = useState<boolean>(
    !!owner && likes.users.includes(owner.id),
  );
  const tweetDate = useMemo(() => getShortDate(date), [date]);
  const isOwnerTweet = owner?.id === authorId;

  const handleLikeClick = () => {
    if (!owner) return;

    const currentOwnerLiked = !isOwnerLiked;

    setIsOwnerLiked(currentOwnerLiked);
    setCountLikes(currentOwnerLiked ? countLikes + 1 : countLikes - 1);

    debounce(() => {
      if (currentOwnerLiked) addLike({ tweetId, userId: owner.id });
      else removeLike({ tweetId, userId: owner.id });
    });
  };

  return (
    <S.TweetItemContainer data-testid="tweet-item">
      <S.UserAvatarStyled $avatarUrl={avatar} />
      <S.TweetItemContent>
        <S.TweetInfo>
          <S.UserName $size="xl2">{name}</S.UserName>
          <S.EmailAndDate>
            {email} · {tweetDate}
          </S.EmailAndDate>
        </S.TweetInfo>

        {message && <Paragraph $size="xl">{message}</Paragraph>}

        {photo && <S.TweetPhoto src={photo} alt="Tweet image" />}

        <S.LikeButton $isActive={isOwnerLiked} onClick={handleLikeClick}>
          {isOwnerLiked ? <LikeFillIcon /> : <LikeOutlineIcon />}
          {countLikes}
        </S.LikeButton>
      </S.TweetItemContent>

      <TweetOptions isOwner={isOwnerTweet} tweetId={tweetId} />
    </S.TweetItemContainer>
  );
});
