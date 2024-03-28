import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppRoutes } from '@/constants';
import { useAppSelector } from '@/hooks';
import { useUserAvatarQuery } from '@/store/api';
import { userSelector } from '@/store/selectors';

import * as S from './styled';
import { UserCardProps } from './types';

export const UserCard = memo(({ className, user }: UserCardProps) => {
  const { name, email, id } = user!;

  const { data: avatar } = useUserAvatarQuery(id);
  const { data: ownerData } = useAppSelector(userSelector);
  const navigate = useNavigate();
  const isOwnerCard = ownerData?.id === id;

  const handleClick = () => {
    if (!isOwnerCard) {
      navigate(`${AppRoutes.PROFILE}/${id}`);
    }
  };

  return (
    <S.UserCardWrapper $isOwner={isOwnerCard} className={className} onClick={handleClick}>
      <S.UserAvatarStyled $avatarUrl={avatar} />

      <S.NameEmailWrapper>
        <S.UserName>{name}</S.UserName>
        <S.UserEmail>{email}</S.UserEmail>
      </S.NameEmailWrapper>
    </S.UserCardWrapper>
  );
});
