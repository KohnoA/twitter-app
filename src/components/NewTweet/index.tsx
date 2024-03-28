import { memo, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { useAppSelector } from '@/hooks';
import { useAddTweetMutation } from '@/store/api';
import { userSelector } from '@/store/selectors';

import { Textaria } from '../UI';

import * as S from './styled';
import { NewTweetFormFileds, NewTweetProps } from './types';

export const NewTweet = memo(({ className, onSuccess }: NewTweetProps) => {
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
    <S.NewTweetContainer
      data-testid="new-tweet-form"
      className={className}
      onSubmit={handleSubmit(onSubmit)}
    >
      <S.UserAvatarStyled $avatarUrl={userData?.avatar} />
      <S.ControlsWrapper>
        <Textaria
          data-testid="new-tweet-textarea"
          register={register('tweet', { required: true })}
          placeholder="What’s happening"
        />
        <S.ButtonsWrapper>
          <S.FileContainer>
            <S.FileInputStyled register={register('image')} />
            {uploadedImage && <S.UploadedImage $imageUrl={uploadedImage} />}
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
