import { memo, useMemo, useRef, useState } from 'react';

import { Paragraph } from '@/components/UI';
import { useAppSelector } from '@/hooks';
import { useAddLikeToTweetMutation, useRemoveLikeToTweetMutation } from '@/store/api';
import { userSelector } from '@/store/selectors';
import { getShortDate } from '@/utils';

import { DEFAULT_COUNT_LIKES, LikeFillIcon, LikeOutlineIcon } from './constants';
import {
  EmailAndDate,
  LikeButton,
  TweetInfo,
  TweetItemContainer,
  TweetItemContent,
  TweetPhoto,
  UserAvatarStyled,
  UserName,
} from './styled';
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
    <TweetItemContainer>
      <UserAvatarStyled $avatarUrl={author.avatar} />
      <TweetItemContent>
        <TweetInfo>
          <UserName $size="xl2">{author.name}</UserName>
          <EmailAndDate>
            {author.email} · {tweetDate}
          </EmailAndDate>
        </TweetInfo>

        {message && <Paragraph $size="xl">{message}</Paragraph>}

        {photo && <TweetPhoto src={photo} alt="Tweet image" />}

        <LikeButton $isActive={isOwnerLiked} onClick={handleLikeClick}>
          {isOwnerLiked ? <LikeFillIcon /> : <LikeOutlineIcon />}
          {countLikes}
        </LikeButton>
      </TweetItemContent>

      {isOwnerTweet && <TweetOptions tweetId={tweetId} />}
    </TweetItemContainer>
  );
});
