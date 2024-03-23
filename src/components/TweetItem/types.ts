import { TweetDataType } from '@/types';

export interface TweetItemProps {
  tweet: TweetDataType;
}

export interface LikeButtonProps {
  $isActive?: boolean;
}
