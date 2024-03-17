import { memo, useState } from 'react';

import { Paragraph } from '@/components/UI';
import { ICONS } from '@/constants';

import {
  EmailAndDate,
  LikeButton,
  MoreButton,
  TweetInfo,
  TweetItemContainer,
  TweetItemContent,
  UserAvatar,
  UserName,
} from './styled';

const { DotsIcon, LikeOutlineIcon, LikeFillIcon } = ICONS;

export const TweetItem = memo(() => {
  const [like, setLike] = useState<boolean>(false);

  return (
    <TweetItemContainer>
      <UserAvatar />
      <TweetItemContent>
        <TweetInfo>
          <UserName $size="xl2">Name</UserName>
          <EmailAndDate>@bobur_mavlonov · Apr 1</EmailAndDate>
        </TweetInfo>

        <Paragraph $size="xl">
          4-kursni tugatgunimcha kamida bitta biznesim bo&apos;lishini, uylanish uchun moddiy
          jihatdan to&apos;la-to&apos;kis tayyor bo&apos;lishni, sog&apos;lik va jismoniy holatni
          normallashtirishni reja qildim
        </Paragraph>

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
