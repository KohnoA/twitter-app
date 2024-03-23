import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppRoutes } from '@/constants';
import { useAppSelector } from '@/hooks';
import { userSelector } from '@/store/selectors';

import { NameEmailWrapper, UserAvatarStyled, UserCardWrapper, UserEmail, UserName } from './styled';
import { UserCardProps } from './types';

export const UserCard = memo(({ className, user }: UserCardProps) => {
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
      <UserAvatarStyled $avatarUrl={avatar} />

      <NameEmailWrapper>
        <UserName>{name}</UserName>
        <UserEmail>{email}</UserEmail>
      </NameEmailWrapper>
    </UserCardWrapper>
  );
});
