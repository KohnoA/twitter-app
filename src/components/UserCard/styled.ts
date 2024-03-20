import styled from 'styled-components';

import defaultAvatar from '@/assets/images/default-avatar.png';
import { flex, interactive, media } from '@/styles';

interface UserAvatarProps {
  $avatarUrl?: string | null;
}

interface UserCardWrapperProps {
  $isOwner?: boolean;
}

export const UserCardWrapper = styled.div<UserCardWrapperProps>`
  ${flex('flex-start')}

  gap: ${({ theme }) => theme.margins.md}px;

  width: 100%;
  margin-bottom: ${({ theme }) => theme.margins.lg}px;
  padding: 5px;

  ${({ $isOwner }) => !$isOwner && interactive()}

  ${({ theme }) =>
    media('desktopM')(`
    padding: 2px;

    gap: ${theme.margins.sm}px;
  `)}
`;

export const UserAvatar = styled.div<UserAvatarProps>`
  flex-shrink: 0;

  width: 50px;
  height: 50px;

  background-image: url(${({ $avatarUrl }) => $avatarUrl ?? defaultAvatar});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 50%;
  transition: background-image ${({ theme }) => theme.duration}ms;

  ${media(`desktopM`)`
    width: 40px;
    height: 40px;
  `}
`;

export const NameEmailWrapper = styled.div`
  min-width: 0;
`;

export const UserName = styled.p`
  margin-bottom: 5px;

  font-weight: ${({ theme }) => theme.fontWeight.bd};
`;

export const UserEmail = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: ${({ theme }) => theme.colors.stroke};
`;
