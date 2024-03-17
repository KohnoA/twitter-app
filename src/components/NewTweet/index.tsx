import { ChangeEvent, useState } from 'react';

import { ImageIcon, INITIAL_VALUE } from './constants';
import {
  AddImageButton,
  ButtonsWrapper,
  ControlsWrapper,
  NewTweetContainer,
  TextariaStyled,
  TweetButton,
  UserAvatar,
} from './styled';
import { NewTweetProps } from './types';

export const NewTweet = ({ className }: NewTweetProps) => {
  const [tweetValue, setTweetValue] = useState<string>(INITIAL_VALUE);

  const handleTextaria = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTweetValue(event.target.value);
  };

  return (
    <NewTweetContainer className={className}>
      <UserAvatar />
      <ControlsWrapper>
        <TextariaStyled
          rows={3}
          placeholder="What’s happening"
          value={tweetValue}
          onChange={handleTextaria}
        />
        <ButtonsWrapper>
          <AddImageButton>
            <ImageIcon />
          </AddImageButton>
          <TweetButton disabled>Tweet</TweetButton>
        </ButtonsWrapper>
      </ControlsWrapper>
    </NewTweetContainer>
  );
};
