export interface TweetOptionsProps {
  tweetId: string;
  isOwner?: boolean;
}

export interface TweetOptionProps {
  $isLoading?: boolean;
}

export interface MoreWrapperProps {
  $isOwner?: boolean;
  $isActive?: boolean;
}
