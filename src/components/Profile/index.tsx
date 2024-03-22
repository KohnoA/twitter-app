import { useMemo, useState } from 'react';

import { useGetUserQuery } from '@/store/api';
import { getDateString } from '@/utils';

import { EditProfileForm } from '../EditProfileForm';

import { DEFAULT_USER_DATA, INITIAL_MODAL_STATE } from './constants';
import {
  EditButton,
  EditWrapper,
  ModalStyled,
  ProfileBg,
  ProfileWrapper,
  SpinnerStyled,
  UserAvatar,
  UserDescription,
  UserInfoItem,
  UserInfoWrapper,
  UserName,
  UserStatsItem,
  UserStatsList,
} from './styled';
import { ProfileProps } from './types';

export const Profile = ({ userId, isOwner }: ProfileProps) => {
  const { data: user, isLoading } = useGetUserQuery(userId);
  const [showEditModal, setShowEditModal] = useState<boolean>(INITIAL_MODAL_STATE);
  const { name, email, phone, birthday, description, avatar } = user ?? DEFAULT_USER_DATA;

  const handleModal = () => setShowEditModal(!showEditModal);

  const birthdayString = useMemo(() => getDateString(birthday), [birthday]);

  if (isLoading) {
    return (
      <ProfileWrapper>
        <SpinnerStyled width={50} height={50} />
      </ProfileWrapper>
    );
  }

  return (
    <ProfileWrapper>
      <ProfileBg />

      <EditWrapper>
        <UserAvatar $avatarUrl={avatar} />

        {isOwner && (
          <EditButton data-testid="edit-profile-button" $view="primary" onClick={handleModal}>
            Edit profile
          </EditButton>
        )}
      </EditWrapper>

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
        <EditProfileForm onClose={handleModal} />
      </ModalStyled>
    </ProfileWrapper>
  );
};
