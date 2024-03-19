import { memo, useMemo, useState } from 'react';

import { Paragraph } from '@/components/UI';
import { ICONS } from '@/constants';
import { TweetDataType } from '@/types';

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

interface TweetItemProps {
  tweet: TweetDataType;
}

export const TweetItem = memo(({ tweet }: TweetItemProps) => {
  const { message, author, date, photo } = tweet;
  const [like, setLike] = useState<boolean>(false);

  const tweetDate = useMemo(
    () => new Date(date).toLocaleDateString('en-EN', { month: 'short', day: 'numeric' }),
    [date],
  );

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

        <LikeButton $isActive={like} onClick={() => setLike(!like)}>
          {like ? <LikeFillIcon /> : <LikeOutlineIcon />}
          12
        </LikeButton>
      </TweetItemContent>

      <MoreButton>
        <DotsIcon />
      </MoreButton>
    </TweetItemContainer>
  );
});
