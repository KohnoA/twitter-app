import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { useAppSelector } from '@/hooks';
import { useAddTweetMutation } from '@/store/api';
import { userSelector } from '@/store/selectors';

import { Textaria } from '../UI';

import {
  ButtonsWrapper,
  ControlsWrapper,
  FileContainer,
  FileInputStyled,
  NewTweetContainer,
  TweetButton,
  UploadedImage,
  UserAvatar,
} from './styled';
import { NewTweetProps } from './types';

interface NewTweetFormFileds {
  tweet: string;
  image: FileList;
}

export const NewTweet = ({ className, onSuccess }: NewTweetProps) => {
  const { handleSubmit, register, watch, reset } = useForm<NewTweetFormFileds>();
  const [addTweet, { isLoading, isSuccess }] = useAddTweetMutation();
  const { data: userData } = useAppSelector(userSelector);
  const watchImage = watch('image');

  const onSubmit = async (data: NewTweetFormFileds) => {
    const { tweet, image } = data;

    await addTweet({ tweet, image: image.length ? image : undefined });
  };

  const uploadedImage = useMemo(
    () => !!watchImage?.length && URL.createObjectURL(watchImage[0]),
    [watchImage],
  );

  useEffect(() => {
    if (isSuccess) {
      if (onSuccess) onSuccess();
      reset();
    }
  }, [isSuccess, reset, onSuccess]);

  return (
    <NewTweetContainer
      data-testid="new-tweet-form"
      className={className}
      onSubmit={handleSubmit(onSubmit)}
    >
      <UserAvatar $avatarUrl={userData?.avatar} />
      <ControlsWrapper>
        <Textaria
          data-testid="new-tweet-textarea"
          register={register('tweet', { required: true })}
          placeholder="What’s happening"
        />
        <ButtonsWrapper>
          <FileContainer>
            <FileInputStyled register={register('image')} />
            {uploadedImage && <UploadedImage $imageUrl={uploadedImage} />}
          </FileContainer>

          <TweetButton
            data-testid="new-tweet-submit"
            type="submit"
            disabled={!watch('tweet')}
            isLoading={isLoading}
          >
            Tweet
          </TweetButton>
        </ButtonsWrapper>
      </ControlsWrapper>
    </NewTweetContainer>
  );
};
