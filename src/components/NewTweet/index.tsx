import { useForm } from 'react-hook-form';

import { useAppSelector } from '@/hooks';
import { useGetUserAvatarQuery } from '@/store/api';
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
  const { handleSubmit, register } = useForm<NewTweetFormFileds>();
  const { data: userData } = useAppSelector(userSelector);
  const { data: userAvatar } = useGetUserAvatarQuery(userData!.id);

  const onSubmit = (data: NewTweetFormFileds) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <NewTweetContainer className={className} onSubmit={handleSubmit(onSubmit)}>
      <UserAvatar $avatarUrl={userAvatar} />
      <ControlsWrapper>
        <Textaria register={register('tweet')} placeholder="What’s happening" />
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
