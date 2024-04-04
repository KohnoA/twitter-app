export interface NewTweetProps {
  className?: string;
  onSuccess?: () => void;
}

export interface NewTweetFormFileds {
  tweet: string;
  image: FileList;
}
