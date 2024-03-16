import { UNASSIGNED_LINK_VALUE } from '@/constants';

import { MyLink } from '../UI';

import {
  EditButton,
  EditWrapper,
  ProfileBg,
  ProfileWrapper,
  UserAvatar,
  UserEmail,
  UserFollowesInfoItem,
  UserFollowsInfoList,
  UserInfoWrapper,
  UserName,
} from './styled';

export const Profile = () => (
  <ProfileWrapper>
    <ProfileBg />

    <EditWrapper>
      <UserAvatar />
      <EditButton $view="primary">Edit profile</EditButton>
    </EditWrapper>

    <UserInfoWrapper>
      <UserName $size="xl2">User name</UserName>
      <UserEmail>@bobur_mavlonov</UserEmail>
      <p>
        UX&UI designer at <MyLink to={UNASSIGNED_LINK_VALUE}>@abutechuz</MyLink>
      </p>
    </UserInfoWrapper>

    <UserFollowsInfoList>
      <UserFollowesInfoItem>
        <span>67</span> Following
      </UserFollowesInfoItem>
      <UserFollowesInfoItem>
        <span>47</span> Followers
      </UserFollowesInfoItem>
    </UserFollowsInfoList>
  </ProfileWrapper>
);
