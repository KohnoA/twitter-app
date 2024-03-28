import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { MONTH } from '@/constants';
import { useAppSelector } from '@/hooks';
import { useUpdateUserMutation, useUserAvatarQuery } from '@/store/api';
import { userSelector } from '@/store/selectors';
import { getDaysOptions, getYearsOptions } from '@/utils';

import { Button, ButtonWithSpinner, ErrorMessage, Input, Select } from '../UI';

import * as config from './config';
import * as S from './styled';
import { EditProfileFormFields, EditProfileFormProps } from './types';

export const EditProfileForm = ({ onCancel, onChangePassword }: EditProfileFormProps) => {
  const [updateUser, { isLoading, isSuccess }] = useUpdateUserMutation();
  const { data: userData } = useAppSelector(userSelector);
  const { data: currentAvatar } = useUserAvatarQuery(userData?.id);
  const {
    handleSubmit,
    register,
    watch,
    trigger,
    formState: { errors },
  } = useForm<EditProfileFormFields>({ defaultValues: config.getDefaultFormFields(userData) });
  const watchAvatar = watch('avatar');
  const avatarError = errors.avatar?.message;

  const avatar = useMemo(
    () =>
      !avatarError && watchAvatar?.length ? URL.createObjectURL(watchAvatar[0]) : currentAvatar,
    [avatarError, watchAvatar, currentAvatar],
  );

  useEffect(() => {
    if (isSuccess) onCancel();
  }, [isSuccess, onCancel]);

  const onSubmit = async (data: EditProfileFormFields) => {
    if (!userData) return;

    const { year, month, day, avatar: avatarFile, ...newUserData } = data;
    const updatedUser = {
      ...userData,
      ...newUserData,
      birthday: new Date(Number(year), MONTH.indexOf(month), Number(day)).toISOString(),
    };

    await updateUser({
      userId: updatedUser.id,
      data: updatedUser,
      avatar: avatarFile.length ? avatarFile : undefined,
    });
  };

  return (
    <form data-testid="edit-profile-form" onSubmit={handleSubmit(onSubmit)}>
      <S.FormTitle $size="xl2">Edit Profile</S.FormTitle>
      <S.AvatarWrapper>
        <S.UserAvatarStyled $avatarUrl={avatar}>
          <S.FileInputStyled
            accept="image/jpeg"
            register={register('avatar', {
              ...config.avatarValidation,
              onChange: () => trigger('avatar'),
            })}
          />
        </S.UserAvatarStyled>
        {avatarError && <ErrorMessage>{avatarError}</ErrorMessage>}
      </S.AvatarWrapper>

      <Input
        data-testid="edit-user-name"
        register={register('name', config.nameValidation)}
        error={errors.name?.message}
        placeholder="New name"
      />
      <Input
        data-testid="edit-user-phone"
        register={register('phone', config.phoneValidation)}
        error={errors.phone?.message}
        placeholder="Phone number"
      />
      <S.TextariaStyled
        data-testid="edit-user-description"
        label="Description:"
        placeholder="A short description about you"
        register={register('description')}
      />

      <S.BirthdayLabel>Birthday:</S.BirthdayLabel>
      <S.BirthdaySelectsWrapper>
        <Select
          placeholder="Month"
          options={MONTH}
          error={errors.month?.message}
          register={register('month', config.selectValidation)}
        />
        <Select
          placeholder="Day"
          error={errors.day?.message}
          options={getDaysOptions(...watch(['month', 'year']))}
          register={register('day', config.selectValidation)}
        />
        <Select
          placeholder="Year"
          error={errors.year?.message}
          options={getYearsOptions()}
          register={register('year', config.selectValidation)}
        />
      </S.BirthdaySelectsWrapper>

      <S.ChangePasswordButton type="button" onClick={onChangePassword}>
        Change Password
      </S.ChangePasswordButton>

      <S.ButtonsWrapper>
        <Button type="button" onClick={onCancel}>
          Cancel
        </Button>
        <ButtonWithSpinner data-testid="edit-submit-button" type="submit" isLoading={isLoading}>
          Accept
        </ButtonWithSpinner>
      </S.ButtonsWrapper>
    </form>
  );
};
