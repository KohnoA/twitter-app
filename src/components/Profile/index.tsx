import { useMemo, useState } from 'react';

import { useGetUserQuery } from '@/store/api';
import { getDateString } from '@/utils';

import { EditProfileForm } from '../EditProfileForm';
import { Spinner } from '../UI';

import { DEFAULT_USER_DATA, INITIAL_MODAL_STATE } from './constants';
import {
  EditButton,
  EditWrapper,
  ModalStyled,
  ProfileBg,
  ProfileWrapper,
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
    return <Spinner width={50} height={50} />;
  }

  return (
    <ProfileWrapper>
      <ProfileBg />

      <EditWrapper>
        <UserAvatar $avatarUrl={avatar} />

        {isOwner && (
          <EditButton $view="primary" onClick={handleModal}>
            Edit profile
          </EditButton>
        )}
      </EditWrapper>

      <UserInfoWrapper>
        <UserName $size="xl2">{name}</UserName>

        <UserInfoItem>Email: {email}</UserInfoItem>
        <UserInfoItem>Phone: {phone}</UserInfoItem>
        <UserInfoItem>Date of Birth: {birthdayString}</UserInfoItem>

        <UserDescription $size="xl">{description}</UserDescription>
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
