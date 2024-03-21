import { memo, useMemo, useRef, useState } from 'react';

import { Paragraph } from '@/components/UI';
import { ICONS } from '@/constants';
import { useAppSelector } from '@/hooks';
import { removeLikeToTweet, setLikeToTweet } from '@/services';
import { userSelector } from '@/store/selectors';
import { TweetDataType } from '@/types';
import { getShortDate } from '@/utils';

import {
  EmailAndDate,
  LikeButton,
  MoreButton,
  TweetInfo,
  TweetItemContainer,
  TweetItemContent,
  TweetPhoto,
  UserAvatar,
  UserName,
} from './styled';

const { DotsIcon, LikeOutlineIcon, LikeFillIcon } = ICONS;
const DEFAULT_COUNT_LIKES = 0;

interface TweetItemProps {
  tweet: TweetDataType;
}

export const TweetItem = memo(({ tweet }: TweetItemProps) => {
  const { message, author, date, photo, id: tweetId, likes } = tweet;

  const { data: userData } = useAppSelector(userSelector);
  const [countLikes, setCountLikes] = useState<number>(likes.count ?? DEFAULT_COUNT_LIKES);
  const [isOwnerLiked, setIsOwnerLiked] = useState<boolean>(
    !!userData && likes.users.includes(userData.id),
  );
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleLikeClick = () => {
    const currentOwnerLiked = !isOwnerLiked;

    setIsOwnerLiked(currentOwnerLiked);
    setCountLikes(currentOwnerLiked ? countLikes + 1 : countLikes - 1);

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(async () => {
      if (!userData) return;
      if (currentOwnerLiked) await setLikeToTweet(tweetId, userData.id);
      else await removeLikeToTweet(tweetId, userData.id);
    }, 500);
  };

  const tweetDate = useMemo(() => getShortDate(date), [date]);

  return (
    <TweetItemContainer>
      <UserAvatar $avatarUrl={author.avatar} />

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

      <MoreButton>
        <DotsIcon />
      </MoreButton>
    </TweetItemContainer>
  );
});
