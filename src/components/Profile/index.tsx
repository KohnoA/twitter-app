import { useState } from 'react';

import { UNASSIGNED_LINK_VALUE } from '@/constants';

import { Modal, MyLink } from '../UI';

import {
  EditButton,
  EditWrapper,
  ProfileBg,
  ProfileWrapper,
  UserAvatar,
  UserEmail,
  UserInfoWrapper,
  UserName,
  UserStatsItem,
  UserStatsList,
} from './styled';

const INITIAL_MODAL_STATE = false;

export const Profile = () => {
  const [showEditModal, setShowEditModal] = useState<boolean>(INITIAL_MODAL_STATE);

  const handleModal = () => setShowEditModal(!showEditModal);

  return (
    <ProfileWrapper>
      <ProfileBg />

      <EditWrapper>
        <UserAvatar />
        <EditButton $view="primary" onClick={handleModal}>
          Edit profile
        </EditButton>
      </EditWrapper>

      <UserInfoWrapper>
        <UserName $size="xl2">User name</UserName>
        <UserEmail>@bobur_mavlonov</UserEmail>
        <p>
          UX&UI designer at <MyLink to={UNASSIGNED_LINK_VALUE}>@abutechuz</MyLink>
        </p>
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
        Edit Form
      </Modal>
    </ProfileWrapper>
  );
};
