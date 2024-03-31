import { memo, useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { useAppSelector } from '@/hooks';
import { useAddTweetMutation, useUserAvatarQuery } from '@/store/api';
import { userSelector } from '@/store/selectors';

import { ErrorMessage, Textaria } from '../UI';

import { imageValidation, messageValidation } from './config';
import * as S from './styled';
import { NewTweetFormFileds, NewTweetProps } from './types';

export const NewTweet = memo(({ className, onSuccess }: NewTweetProps) => {
  const [addTweet, { isLoading }] = useAddTweetMutation();
  const { data: userData } = useAppSelector(userSelector);
  const { data: avatar } = useUserAvatarQuery(userData?.id);
  const {
    handleSubmit,
    register,
    watch,
    reset,
    formState: { errors },
  } = useForm<NewTweetFormFileds>({ mode: 'onChange' });
  const imageError = errors.image?.message;
  const watchImage = watch('image');

  const onSubmit = async (data: NewTweetFormFileds) => {
    const { tweet, image } = data;

    await addTweet({ tweet, image: image.length ? image : undefined });
    reset();
    if (onSuccess) onSuccess();
  };

  const uploadedImage = useMemo(
    () => !imageError && !!watchImage?.length && URL.createObjectURL(watchImage[0]),
    [imageError, watchImage],
  );

  return (
    <S.NewTweetContainer
      data-testid="new-tweet-form"
      className={className}
      onSubmit={handleSubmit(onSubmit)}
    >
      <S.UserAvatarStyled $avatarUrl={avatar} />
      <S.ControlsWrapper>
        <Textaria
          data-testid="new-tweet-textarea"
          register={register('tweet', messageValidation)}
          error={errors.tweet?.message}
          placeholder="What’s happening"
        />
        <S.ButtonsWrapper>
          <S.FileContainer>
            <S.FileInputStyled
              data-testid="file-input"
              accept="image/jpeg"
              register={register('image', imageValidation)}
            />
            {uploadedImage && (
              <S.UploadedImage data-testid="image-container" $imageUrl={uploadedImage} />
            )}
            {imageError && <ErrorMessage>{imageError}</ErrorMessage>}
          </S.FileContainer>

          <S.TweetButton
            data-testid="new-tweet-submit"
            type="submit"
            disabled={!watch('tweet')}
            isLoading={isLoading}
          >
            Tweet
          </S.TweetButton>
        </S.ButtonsWrapper>
      </S.ControlsWrapper>
    </S.NewTweetContainer>
  );
});
