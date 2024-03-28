import { memo, useMemo, useState } from 'react';

import { useGetUserQuery } from '@/store/api';
import { getDateString } from '@/utils';

import { ChangePasswordForm } from '../ChangePasswordForm';
import { EditProfileForm } from '../EditProfileForm';

import {
  DEFAULT_USER_DATA,
  INITIAL_CHANGE_PASSWORD_FORM_VISIBILITY,
  INITIAL_MODAL_STATE,
} from './constants';
import {
  EditButton,
  EditWrapper,
  ModalStyled,
  ProfileBg,
  ProfileWrapper,
  SpinnerStyled,
  UserAvatarStyled,
  UserDescription,
  UserInfoItem,
  UserInfoWrapper,
  UserName,
  UserStatsItem,
  UserStatsList,
} from './styled';
import { ProfileProps } from './types';

export const Profile = memo(({ userId, isOwner }: ProfileProps) => {
  const { data: user, isLoading } = useGetUserQuery(userId);
  const [showEditModal, setShowEditModal] = useState<boolean>(INITIAL_MODAL_STATE);
  const [showChangePasswordForm, setShowChangePasswordForm] = useState(
    INITIAL_CHANGE_PASSWORD_FORM_VISIBILITY,
  );
  const { name, email, phone, birthday, description, avatar } = user ?? DEFAULT_USER_DATA;

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
      <ProfileWrapper>
        <SpinnerStyled width={50} height={50} />
      </ProfileWrapper>
    );
  }

  return (
    <ProfileWrapper>
      <ProfileBg>
        <EditWrapper>
          <UserAvatarStyled $avatarUrl={avatar} />
          {isOwner && (
            <EditButton data-testid="edit-profile-button" $view="primary" onClick={handleModal}>
              Edit profile
            </EditButton>
          )}
        </EditWrapper>
      </ProfileBg>

      <UserInfoWrapper>
        <UserName $size="xl2" data-testid="user-name">
          {name}
        </UserName>

        <UserInfoItem data-testid="user-email">Email: {email}</UserInfoItem>
        <UserInfoItem data-testid="user-phone">Phone: {phone}</UserInfoItem>
        <UserInfoItem>Date of Birth: {birthdayString}</UserInfoItem>

        <UserDescription $size="xl" data-testid="user-description">
          {description}
        </UserDescription>
      </UserInfoWrapper>

      <UserStatsList>
        <UserStatsItem>
          <span>67</span> Following
        </UserStatsItem>
        <UserStatsItem>
          <span>47</span> Followers
        </UserStatsItem>
        <UserStatsItem>
          <span>47</span> Tweets
        </UserStatsItem>
      </UserStatsList>

      <ModalStyled isActive={showEditModal} onClose={handleModal}>
        {showChangePasswordForm ? (
          <ChangePasswordForm onCancel={handleModal} />
        ) : (
          <EditProfileForm onCancel={handleModal} onChangePassword={handleChangeForm} />
        )}
      </ModalStyled>
    </ProfileWrapper>
  );
});
