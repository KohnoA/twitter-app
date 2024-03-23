import styled from 'styled-components';

import { abbrText, flex, interactive, media, UserAvatar } from '@/styles';

import { UserCardWrapperProps } from './types';

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

export const UserAvatarStyled = styled(UserAvatar)`
  flex-shrink: 0;

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
  ${abbrText()}

  color: ${({ theme }) => theme.colors.stroke};
`;
