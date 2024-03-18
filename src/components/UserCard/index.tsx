import { useGetUserAvatarQuery } from '@/store/api';
import { UserDataType } from '@/types';

import { NameEmailWrapper, UserAvatar, UserCardWrapper, UserEmail, UserName } from './styled';

interface UserCardProps {
  user: UserDataType | null;
}

export const UserCard = ({ user }: UserCardProps) => {
  const { name, email, id } = user!;
  const { data: userAvatar } = useGetUserAvatarQuery(id);

  return (
    <UserCardWrapper>
      <UserAvatar $avatarUrl={userAvatar} />

      <NameEmailWrapper>
        <UserName>{name}</UserName>
        <UserEmail>{email}</UserEmail>
      </NameEmailWrapper>
    </UserCardWrapper>
  );
};
