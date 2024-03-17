import { UserDataType } from '@/types';

import { NameEmailWrapper, UserAvatar, UserCardWrapper, UserEmail, UserName } from './styled';

const DEFAULT_USER_DATA = {
  name: 'User',
  email: 'example@gmail.com',
  avatar: null,
};

interface UserCardProps {
  user: UserDataType | null;
}

export const UserCard = ({ user }: UserCardProps) => {
  const { name, email, avatar } = user ?? DEFAULT_USER_DATA;

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
