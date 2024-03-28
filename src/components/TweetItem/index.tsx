import { memo, useMemo, useRef, useState } from 'react';

import { Paragraph } from '@/components/UI';
import { useAppSelector } from '@/hooks';
import { useAddLikeToTweetMutation, useRemoveLikeToTweetMutation } from '@/store/api';
import { userSelector } from '@/store/selectors';
import { getShortDate } from '@/utils';

import { DEFAULT_COUNT_LIKES, LikeFillIcon, LikeOutlineIcon } from './constants';
import * as S from './styled';
import { TweetOptions } from './TweetOptions';
import { TweetItemProps } from './types';

export const TweetItem = memo(({ tweet }: TweetItemProps) => {
  const { message, author, date, photo, id: tweetId, likes } = tweet;

  const [addLike] = useAddLikeToTweetMutation();
  const [removeLike] = useRemoveLikeToTweetMutation();
  const { data: userData } = useAppSelector(userSelector);
  const [countLikes, setCountLikes] = useState<number>(likes.count ?? DEFAULT_COUNT_LIKES);
  const [isOwnerLiked, setIsOwnerLiked] = useState<boolean>(
    !!userData && likes.users.includes(userData.id),
  );
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isOwnerTweet = userData?.id === author.id;

  const tweetDate = useMemo(() => getShortDate(date), [date]);

  const handleLikeClick = () => {
    const currentOwnerLiked = !isOwnerLiked;

    setIsOwnerLiked(currentOwnerLiked);
    setCountLikes(currentOwnerLiked ? countLikes + 1 : countLikes - 1);

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(async () => {
      if (!userData) return;
      if (currentOwnerLiked) await addLike({ tweetId, userId: userData.id });
      else await removeLike({ tweetId, userId: userData.id });
    }, 500);
  };

  return (
    <S.TweetItemContainer>
      <S.UserAvatarStyled $avatarUrl={author.avatar} />
      <S.TweetItemContent>
        <S.TweetInfo>
          <S.UserName $size="xl2">{author.name}</S.UserName>
          <S.EmailAndDate>
            {author.email} · {tweetDate}
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
