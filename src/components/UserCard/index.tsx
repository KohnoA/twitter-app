import { UserDataType } from '@/types';

import { NameEmailWrapper, UserAvatar, UserCardWrapper, UserEmail, UserName } from './styled';

interface UserCardProps {
  user: UserDataType | null;
}

export const UserCard = ({ user }: UserCardProps) => {
  const { name, email, avatar } = user!;

  return (
    <UserCardWrapper>
      <UserAvatar $avatarUrl={avatar} />

      <NameEmailWrapper>
        <UserName>{name}</UserName>
        <UserEmail>{email}</UserEmail>
      </NameEmailWrapper>
    </UserCardWrapper>
  );
};
