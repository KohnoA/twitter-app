import { UserAvatar, UserCardWrapper, UserEmail, UserName } from './styled';

export const UserCard = () => (
  <UserCardWrapper>
    <UserAvatar />

    <div>
      <UserName>Bobur</UserName>
      <UserEmail>@bobur_mavlonov</UserEmail>
    </div>
  </UserCardWrapper>
);
