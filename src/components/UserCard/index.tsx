import { NameEmailWrapper, UserAvatar, UserCardWrapper, UserEmail, UserName } from './styled';

export const UserCard = () => (
  <UserCardWrapper>
    <UserAvatar />

    <NameEmailWrapper>
      <UserName>Bobur</UserName>
      <UserEmail>@bobur_mavlonov</UserEmail>
    </NameEmailWrapper>
  </UserCardWrapper>
);
