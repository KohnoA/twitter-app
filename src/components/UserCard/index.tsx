import { useNavigate } from 'react-router-dom';

import { AppRoutes } from '@/constants';
import { useAppSelector } from '@/hooks';
import { userSelector } from '@/store/selectors';
import { UserDataType } from '@/types';

import { NameEmailWrapper, UserAvatar, UserCardWrapper, UserEmail, UserName } from './styled';

interface UserCardProps {
  className?: string;
  user: UserDataType | null;
}

export const UserCard = ({ className, user }: UserCardProps) => {
  const { name, email, avatar, id } = user!;

  const { data: ownerData } = useAppSelector(userSelector);
  const navigate = useNavigate();
  const isOwnerCard = ownerData?.id === id;

  const handleClick = () => {
    if (!isOwnerCard) {
      navigate(`${AppRoutes.PROFILE}/${id}`);
    }
  };

  return (
    <UserCardWrapper $isOwner={isOwnerCard} className={className} onClick={handleClick}>
      <UserAvatar $avatarUrl={avatar} />

      <NameEmailWrapper>
        <UserName>{name}</UserName>
        <UserEmail>{email}</UserEmail>
      </NameEmailWrapper>
    </UserCardWrapper>
  );
};
