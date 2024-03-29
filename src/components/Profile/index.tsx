import { memo, useMemo, useState } from 'react';

import { useGetUserQuery, useUserAvatarQuery } from '@/store/api';
import { getDateString } from '@/utils';

import { ChangePasswordForm } from '../ChangePasswordForm';
import { EditProfileForm } from '../EditProfileForm';

import {
  DEFAULT_STAT_VALUE,
  DEFAULT_USER_DATA,
  INITIAL_CHANGE_PASSWORD_FORM_VISIBILITY,
  INITIAL_MODAL_STATE,
} from './constants';
import * as S from './styled';
import { ProfileProps } from './types';

export const Profile = memo(({ userId, isOwner, tweetsCount }: ProfileProps) => {
  const { data: user, isLoading } = useGetUserQuery(userId);
  const { data: avatar } = useUserAvatarQuery(userId);
  const [showEditModal, setShowEditModal] = useState<boolean>(INITIAL_MODAL_STATE);
  const [showChangePasswordForm, setShowChangePasswordForm] = useState(
    INITIAL_CHANGE_PASSWORD_FORM_VISIBILITY,
  );
  const { name, email, phone, birthday, description } = user ?? DEFAULT_USER_DATA;

  const birthdayString = useMemo(() => getDateString(birthday), [birthday]);

  const handleChangeForm = () => setShowChangePasswordForm((prev) => !prev);

  const handleModal = () => {
    setShowEditModal((prev) => {
      if (prev) setShowChangePasswordForm(INITIAL_CHANGE_PASSWORD_FORM_VISIBILITY);
      return !prev;
    });
  };

  if (isLoading) {
    return (
      <S.ProfileWrapper>
        <S.SpinnerStyled />
      </S.ProfileWrapper>
    );
  }

  return (
    <S.ProfileWrapper>
      <S.ProfileBg>
        <S.EditWrapper>
          <S.UserAvatarStyled $avatarUrl={avatar} />
          {isOwner && (
            <S.EditButton data-testid="edit-profile-button" $view="primary" onClick={handleModal}>
              Edit profile
            </S.EditButton>
          )}
        </S.EditWrapper>
      </S.ProfileBg>

      <S.UserInfoWrapper>
        <S.UserName $size="xl2" data-testid="user-name">
          {name}
        </S.UserName>

        <S.UserInfoItem data-testid="user-email">Email: {email}</S.UserInfoItem>
        <S.UserInfoItem data-testid="user-phone">Phone: {phone}</S.UserInfoItem>
        <S.UserInfoItem>Date of Birth: {birthdayString}</S.UserInfoItem>

        <S.UserDescription $size="xl" data-testid="user-description">
          {description}
        </S.UserDescription>
      </S.UserInfoWrapper>

      <S.UserStatsList>
        <S.UserStatsItem>
          <span>67</span> Following
        </S.UserStatsItem>
        <S.UserStatsItem>
          <span>47</span> Followers
        </S.UserStatsItem>
        <S.UserStatsItem>
          <span>{tweetsCount ?? DEFAULT_STAT_VALUE}</span> Tweets
        </S.UserStatsItem>
      </S.UserStatsList>

      <S.ModalStyled isActive={showEditModal} onClose={handleModal}>
        {showChangePasswordForm ? (
          <ChangePasswordForm onCancel={handleModal} />
        ) : (
          <EditProfileForm onCancel={handleModal} onChangePassword={handleChangeForm} />
        )}
      </S.ModalStyled>
    </S.ProfileWrapper>
  );
});
