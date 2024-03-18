import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { ICONS, MONTH } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks';
import {
  useGetUserAvatarQuery,
  useSetUserAvatarMutation,
  useSetUserByIdMutation,
} from '@/store/api';
import { userSelector } from '@/store/selectors';
import { updateUserData } from '@/store/slices';
import { getDaysOptions, getYearsOptions } from '@/utils';

import { Button, ButtonWithSpinner, Input, Select } from '../UI';

import { nameValidation, phoneValidation, selectValidation } from './config';
import {
  AvatarWrapper,
  BirthdayLabel,
  BirthdaySelectsWrapper,
  ButtonsWrapper,
  EditPhotoButton,
  EditProfileFormContainer,
  FileInput,
  FormTitle,
  TextariaStyled,
  UserAvatar,
} from './styled';
import { EditProfileFormFields, EditProfileFormProps } from './types';

const { ImageIcon } = ICONS;

export const EditProfileForm = ({ onClose }: EditProfileFormProps) => {
  const [updateUserInFirestore, { isLoading, isSuccess }] = useSetUserByIdMutation();
  const [saveUserAvatar] = useSetUserAvatarMutation();
  const { data: userData } = useAppSelector(userSelector);
  const { data: userAvatar } = useGetUserAvatarQuery(userData!.id);
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<EditProfileFormFields>({
    defaultValues: {
      name: userData?.name,
      phone: userData?.phone,
      description: userData?.description,
      day: userData ? String(new Date(userData.birthday).getDate()) : '',
      month: userData ? MONTH[new Date(userData.birthday).getMonth()] : '',
      year: userData ? String(new Date(userData.birthday).getFullYear()) : '',
    },
  });

  const onSubmit = async (data: EditProfileFormFields) => {
    if (!userData) return;

    const { year, month, day, avatar, ...otherData } = data;
    const updatedUser = {
      ...userData,
      birthday: new Date(Number(year), MONTH.indexOf(month), Number(day)).toISOString(),
      ...otherData,
    };

    updateUserInFirestore({ userId: updatedUser.id, data: updatedUser });
    if (data.avatar.length) saveUserAvatar({ userId: userData.id, file: data.avatar });
    dispatch(updateUserData(updatedUser));
  };

  const currentAvatar = watch('avatar')?.length
    ? URL.createObjectURL(watch('avatar')[0])
    : userAvatar;

  useEffect(() => {
    if (isSuccess) onClose();
  }, [isSuccess, onClose]);

  return (
    <EditProfileFormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormTitle $size="xl2">Edit Profile</FormTitle>

      <AvatarWrapper>
        <UserAvatar $avatarUrl={currentAvatar}>
          <EditPhotoButton>
            <ImageIcon />
            <FileInput type="file" {...register('avatar')} />
          </EditPhotoButton>
        </UserAvatar>
      </AvatarWrapper>

      <Input
        register={register('name', nameValidation)}
        error={errors.name?.message}
        placeholder="New name"
      />
      <Input
        register={register('phone', phoneValidation)}
        error={errors.phone?.message}
        placeholder="Phone number"
      />

      <TextariaStyled
        label="Description:"
        placeholder="A short description about you"
        register={register('description')}
      />

      <BirthdayLabel>Birthday:</BirthdayLabel>
      <BirthdaySelectsWrapper>
        <Select
          placeholder="Month"
          options={MONTH}
          error={errors.month?.message}
          register={register('month', selectValidation)}
        />
        <Select
          placeholder="Day"
          error={errors.day?.message}
          options={getDaysOptions(...watch(['month', 'year']))}
          register={register('day', selectValidation)}
        />
        <Select
          placeholder="Year"
          error={errors.year?.message}
          options={getYearsOptions()}
          register={register('year', selectValidation)}
        />
      </BirthdaySelectsWrapper>

      <ButtonsWrapper>
        <Button type="button" onClick={onClose}>
          Cancel
        </Button>
        <ButtonWithSpinner type="submit" isLoading={isLoading}>
          Accept
        </ButtonWithSpinner>
      </ButtonsWrapper>
    </EditProfileFormContainer>
  );
};
