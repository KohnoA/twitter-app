import { useMemo, useState } from 'react';

import { useAppSelector } from '@/hooks';
import { userSelector } from '@/store/selectors';
import { getDateString } from '@/utils';

import { EditProfileForm } from '../EditProfileForm';
import { Modal } from '../UI';

import { DEFAULT_PROFILE_RESCRIPTION, INITIAL_MODAL_STATE } from './constants';
import {
  EditButton,
  EditWrapper,
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

export const Profile = ({ user }: ProfileProps) => {
  const { id, name, email, avatar, phone, birthday, description } = user;

  const [showEditModal, setShowEditModal] = useState<boolean>(INITIAL_MODAL_STATE);
  const { data } = useAppSelector(userSelector);
  const isProfileOwner = id === data?.id;

  const handleModal = () => setShowEditModal(!showEditModal);

  const birthdayString = useMemo(() => getDateString(birthday), [birthday]);

  return (
    <ProfileWrapper>
      <ProfileBg />

      <EditWrapper>
        <UserAvatar $avatarUrl={avatar} />

        {isProfileOwner && (
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

        <UserDescription $size="xl">
          {description ?? <span>{DEFAULT_PROFILE_RESCRIPTION}</span>}
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

      <Modal isActive={showEditModal} onClose={handleModal}>
        <EditProfileForm />
      </Modal>
    </ProfileWrapper>
  );
};
