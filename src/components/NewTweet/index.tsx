import { useForm } from 'react-hook-form';

import { useAppSelector } from '@/hooks';
import { userSelector } from '@/store/selectors';

import { Textaria } from '../UI';

import { ImageIcon } from './constants';
import {
  AddImageButton,
  ButtonsWrapper,
  ControlsWrapper,
  NewTweetContainer,
  TweetButton,
  UserAvatar,
} from './styled';
import { NewTweetProps } from './types';

interface NewTweetFormFileds {
  tweet: string;
}

export const NewTweet = ({ className }: NewTweetProps) => {
  const { handleSubmit, register, watch } = useForm<NewTweetFormFileds>();
  const { data: userData } = useAppSelector(userSelector);

  const onSubmit = (data: NewTweetFormFileds) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <NewTweetContainer className={className} onSubmit={handleSubmit(onSubmit)}>
      <UserAvatar $avatarUrl={userData?.avatar} />
      <ControlsWrapper>
        <Textaria register={register('tweet', { required: true })} placeholder="What’s happening" />
        <ButtonsWrapper>
          <AddImageButton>
            <ImageIcon />
          </AddImageButton>
          <TweetButton disabled={!watch('tweet')}>Tweet</TweetButton>
        </ButtonsWrapper>
      </ControlsWrapper>
    </NewTweetContainer>
  );
};
